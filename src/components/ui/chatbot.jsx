import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, User, Sparkles, AlertCircle, X, Bot, History, Trash2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate } from 'react-router-dom';
import { SYSTEM_PROMPT } from '@/lib/botPrompt';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const STORAGE_KEY = 'tenisi_chat_sessions';
const MAX_SESSIONS = 2;
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

// ─── LocalStorage helpers ────────────────────────────────────────────────────
function loadSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const sessions = JSON.parse(raw);
    const now = Date.now();
    // Prune expired sessions
    return sessions.filter(s => now - s.createdAt < SESSION_TTL_MS);
  } catch {
    return [];
  }
}

function saveSessions(sessions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions.slice(-MAX_SESSIONS)));
  } catch { /* quota exceeded — ignore */ }
}

function generateSessionId() {
  return `session_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

const INITIAL_MESSAGE = {
  id: 1,
  sender: 'bot',
  text: "Hello! I'm Tenisi, your AI Trade Assistant for Tanisi Impex. 🌾\n\nI can help with product details, shipping timelines, payment terms, and sourcing requirements from India.\n\nFeel free to write in **any language** — I'll respond in yours!",
  time: 'Just now'
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Chatbot() {
  const navigate = useNavigate();
  const isLive = Boolean(GROQ_API_KEY);

  // Sessions state
  const [sessions, setSessions] = useState(() => loadSessions());
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  // Active session messages
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  // ── On open: load most recent session or start fresh ──────────────────────
  useEffect(() => {
    if (isOpen) {
      const saved = loadSessions();
      setSessions(saved);
      if (saved.length > 0 && !activeSessionId) {
        // Resume latest session
        const latest = saved[saved.length - 1];
        setActiveSessionId(latest.id);
        setMessages(latest.messages);
      } else if (!activeSessionId) {
        startNewSession();
      }
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // ── Persist messages to localStorage whenever they change ─────────────────
  useEffect(() => {
    if (!activeSessionId || messages.length <= 1) return;
    setSessions(prev => {
      const updated = prev.filter(s => s.id !== activeSessionId);
      const session = {
        id: activeSessionId,
        createdAt: prev.find(s => s.id === activeSessionId)?.createdAt ?? Date.now(),
        preview: messages.find(m => m.sender === 'user')?.text?.slice(0, 50) ?? 'New chat',
        messages
      };
      const next = [...updated, session];
      saveSessions(next);
      return next;
    });
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  // When chat reopens, jump to last message (wait for spring animation to finish)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  function startNewSession() {
    const id = generateSessionId();
    setActiveSessionId(id);
    setMessages([INITIAL_MESSAGE]);
    setShowHistory(false);
  }

  function loadSession(session) {
    setActiveSessionId(session.id);
    setMessages(session.messages);
    setShowHistory(false);
  }

  function deleteSession(sessionId, e) {
    e.stopPropagation();
    const updated = sessions.filter(s => s.id !== sessionId);
    setSessions(updated);
    saveSessions(updated);
    if (activeSessionId === sessionId) {
      if (updated.length > 0) loadSession(updated[updated.length - 1]);
      else startNewSession();
    }
  }

  function formatSessionAge(ts) {
    const diff = Date.now() - ts;
    const hrs = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    if (hrs > 0) return `${hrs}h ago`;
    if (mins > 0) return `${mins}m ago`;
    return 'Just now';
  }

  // ── Send message ───────────────────────────────────────────────────────────
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue.trim();
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      if (!GROQ_API_KEY) throw new Error('API Key missing');

      // Language detection: respond casually in same language
      const languageHint = `[LANGUAGE RULE: Detect the language of the user's message below. Respond in that SAME language using CASUAL, EVERYDAY spoken style — not formal or literary. For Hindi use Hinglish/simple Hindi people actually talk in, not Shuddh Hindi.]\n\n${userText}`;

      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
          .filter(m => m.id !== 1) // skip initial greeting from context
          .map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          })),
        { role: 'user', content: languageHint }
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: apiMessages,
          temperature: 0.55,
          max_tokens: 600,
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || 'API Request Failed');

      const botReply = data.choices[0].message.content;
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      console.error(error);
      const errorMessage = error.message === 'API Key missing'
        ? "I'm in **Sandbox Mode**. Please add `VITE_GROQ_API_KEY` to your `.env` file.\n\n[Contact Our Team](/contact)"
        : `⚠️ ${error.message}`;
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: errorMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // ── Markdown components ────────────────────────────────────────────────────
  const CTALink = ({ href, children }) => (
    <button
      onClick={() => {
        if (href?.startsWith('/')) { navigate(href); setIsOpen(false); }
        else window.open(href, '_blank');
      }}
      className="inline-block mt-3 bg-gold-400 text-navy-950 px-4 py-2 rounded-xl font-bold text-[13px] hover:bg-gold-500 active:scale-95 transition-all shadow-sm text-center cursor-pointer"
    >
      {children}
    </button>
  );

  const markdownComponents = {
    a: ({ href, children }) => <CTALink href={href}>{children}</CTALink>,
    img: ({ ...props }) => <img {...props} className="rounded-xl w-full object-cover my-3 border border-white/10 shadow-md max-h-[150px]" loading="lazy" />,
    p: ({ ...props }) => <p {...props} className="mb-2 last:mb-0 leading-relaxed" />,
    ul: ({ ...props }) => <ul {...props} className="list-disc pl-4 mb-2 space-y-1" />,
    ol: ({ ...props }) => <ol {...props} className="list-decimal pl-4 mb-2 space-y-1" />,
    li: ({ ...props }) => <li {...props} className="text-[13px] leading-snug" />,
    strong: ({ ...props }) => <strong {...props} className="font-bold text-white" />,
    code: ({ inline, children, ...props }) => inline
      ? <code className="bg-white/10 text-gold-300 px-1.5 py-0.5 rounded text-[12px] font-mono">{children}</code>
      : <pre className="bg-white/5 text-gold-300 p-3 rounded-xl text-[12px] font-mono overflow-x-auto my-2">{children}</pre>
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="w-[370px] bg-navy-900 border border-white/5 rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(6,15,28,0.5)] flex flex-col h-[590px] max-h-[calc(100vh-120px)] ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-navy-800/90 backdrop-blur border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                  <img src="/images/logo.png" alt="Tanisi Impex" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base flex items-center gap-1.5 leading-none">
                    Tenisi AI <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                  </h3>
                  <span className={`text-[11px] font-body flex items-center gap-1.5 mt-1 ${isLive ? 'text-emerald-400' : 'text-amber-400'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                    {isLive ? 'AI Active' : 'Sandbox Mode'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* History toggle */}
                <button
                  onClick={() => setShowHistory(h => !h)}
                  title="Chat history"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors relative ${showHistory ? 'bg-gold-400/20 text-gold-400' : 'text-white/40 hover:text-white hover:bg-white/10'}`}
                >
                  <History className="w-4 h-4" />
                  {sessions.length > 0 && !showHistory && (
                    <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-gold-400 border border-navy-800" />
                  )}
                </button>
                {/* New chat */}
                <button
                  onClick={startNewSession}
                  title="New chat"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sandbox Warning */}
            {!isLive && (
              <div className="px-5 py-2 bg-amber-400/10 border-b border-amber-400/10 flex items-center gap-2 text-amber-200 text-[11.5px] font-body shrink-0">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Sandbox mode — add your Groq API key to activate AI.</span>
              </div>
            )}

            {/* History Panel */}
            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden shrink-0 border-b border-white/5"
                >
                  <div className="bg-navy-950 px-4 py-3">
                    <p className="text-[11px] text-white/40 uppercase tracking-widest font-body mb-2">Saved Chats (24hr)</p>
                    {sessions.length === 0 ? (
                      <p className="text-[12px] text-white/30 font-body py-2">No saved chats yet.</p>
                    ) : (
                      <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                        {[...sessions].reverse().map(session => (
                          <div
                            key={session.id}
                            onClick={() => loadSession(session)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors group ${
                              activeSessionId === session.id ? 'bg-gold-400/15 border border-gold-400/20' : 'hover:bg-white/5'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <p className="text-[12.5px] text-white/80 font-body truncate">{session.preview}</p>
                              <p className="text-[10px] text-white/30 font-body mt-0.5">{formatSessionAge(session.createdAt)}</p>
                            </div>
                            <button
                              onClick={(e) => deleteSession(session.id, e)}
                              className="ml-2 w-6 h-6 rounded-full flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100 shrink-0"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto px-5 py-5 space-y-5 bg-navy-950 min-h-0
                [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full
                hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center overflow-hidden shadow-sm mt-0.5 ${
                      msg.sender === 'user' ? 'bg-gold-400 text-navy-900' : 'bg-white'
                    }`}>
                      {msg.sender === 'user'
                        ? <User className="w-3.5 h-3.5" />
                        : <img src="/images/logo.png" alt="Bot" className="w-4.5 h-4.5 object-contain" />
                      }
                    </div>
                    <div className={`flex flex-col gap-1 max-w-[84%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`px-4 py-3 text-[13.5px] font-body leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-gold-400 text-navy-950 rounded-2xl rounded-tr-sm font-medium whitespace-pre-line'
                          : 'bg-navy-800 text-gray-100 rounded-2xl rounded-tl-sm border border-white/5'
                      }`}>
                        {msg.sender === 'user' ? msg.text : (
                          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                            {msg.text}
                          </ReactMarkdown>
                        )}
                      </div>
                      <span className="text-[10px] text-white/30 font-body px-1 uppercase tracking-wider">
                        {msg.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center overflow-hidden shadow-sm mt-0.5">
                      <img src="/images/logo.png" alt="Bot" className="w-4.5 h-4.5 object-contain" />
                    </div>
                    <div className="bg-navy-800 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSendMessage} className="p-4 bg-navy-900 border-t border-white/5 flex gap-3 items-center shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask in any language..."
                disabled={isTyping}
                className="flex-1 !bg-[#0f172a] border border-white/10 rounded-full px-4 py-3 text-[14px] text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 font-body transition-all placeholder:text-white/25 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-11 h-11 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 hover:bg-gold-300 transition-all shrink-0 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 shadow-[0_0_15px_rgba(212,160,23,0.25)]"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors duration-300 z-50 ${
          isOpen ? 'bg-navy-800 border border-white/10' : 'bg-navy-900 border border-gold-400/30 hover:border-gold-400/60 hover:shadow-[0_0_22px_rgba(212,160,23,0.3)]'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen
            ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="h-5 w-5 text-white/70" />
              </motion.div>
            : <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Bot className="h-6 w-6 text-gold-400" />
              </motion.div>
          }
        </AnimatePresence>
        {/* Live dot */}
        {isLive && !isOpen && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy-900 animate-pulse" />
        )}
        {/* History badge */}
        {sessions.length > 0 && !isOpen && (
          <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-gold-400 text-navy-950 text-[9px] font-bold flex items-center justify-center border border-navy-900">
            {sessions.length}
          </span>
        )}
      </motion.button>
    </div>
  );
}
