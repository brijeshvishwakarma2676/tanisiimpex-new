import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap({ 
  dots = [], 
  lineColor = "#D4A017", // Default to Tanisi Impex Gold
  showLabels = true,
  labelClassName = "text-sm",
  animationDuration = 2,
  loop = true
}) {
  const svgRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () => map.getSVG({
      radius: 0.22,
      color: "#D4A01799", // Highly prominent, rich gold-tinted dots (60% opacity)
      shape: "circle",
      backgroundColor: "transparent", // Transparent to seamlessly blend with page theme
    }),
    [map]
  );

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    // Taller curve for more elegant arcs
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate animation timing
  const staggerDelay = 0.35;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2.5; 
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div className="w-full max-w-6xl mx-auto aspect-[1.8/1] md:aspect-[2.2/1] lg:aspect-[2.4/1] bg-transparent rounded-3xl relative font-sans overflow-visible">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover opacity-100"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          
          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;
          
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={loop ? {
                  pathLength: [0, 0, 1, 1, 0],
                } : {
                  pathLength: 1
                }}
                transition={loop ? {
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0,
                } : {
                  duration: animationDuration,
                  delay: i * staggerDelay,
                  ease: "easeInOut",
                }}
              />
              
              {loop && (
                <motion.circle
                  r="4"
                  fill="#ffffff"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: [null, "0%", "100%", "100%", "100%"],
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  style={{
                    offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                  }}
                />
              )}
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          
          // Smart stagger logic to prevent dense label overlapping in Europe/Middle East
          const labelOffsetY = i % 2 === 0 ? -40 : 15;
          const startLabelOffsetY = 20; // Put Mumbai label below the dot
          
          return (
            <g key={`points-group-${i}`}>
              {/* Start Point (Mumbai) - ONLY render once to prevent overlapping start dots */}
              {i === 0 && (
                <g key={`start-mumbai`}>
                  <motion.g
                    onHoverStart={() => setHoveredLocation(dot.start.label)}
                    onHoverEnd={() => setHoveredLocation(null)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="4"
                      fill={lineColor}
                      filter="url(#glow)"
                      className="drop-shadow-lg"
                    />
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="4"
                      fill={lineColor}
                      opacity="0.5"
                    >
                      <animate attributeName="r" from="4" to="14" dur="2s" begin="0s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.7" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
                    </circle>
                  </motion.g>
                  
                  {showLabels && dot.start.label && (
                    <motion.g
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="pointer-events-none"
                    >
                      <foreignObject
                        x={startPoint.x - 60}
                        y={startPoint.y + startLabelOffsetY}
                        width="120"
                        height="30"
                        className="block overflow-visible"
                      >
                        <div className="flex items-center justify-center h-full">
                          <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md bg-gold-400 text-navy-950 border border-gold-300 shadow-md whitespace-nowrap">
                            {dot.start.label}
                          </span>
                        </div>
                      </foreignObject>
                    </motion.g>
                  )}
                </g>
              )}
              
              {/* End Point */}
              <g key={`end-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.end.label || `Destination ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="3.5"
                    fill={lineColor}
                    filter="url(#glow)"
                    className="drop-shadow-lg"
                  />
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="3.5"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate attributeName="r" from="3.5" to="12" dur="2.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="2.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                  </circle>
                </motion.g>
                
                {showLabels && dot.end.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={endPoint.x - 60}
                      y={endPoint.y + labelOffsetY}
                      width="120"
                      height="30"
                      className="block overflow-visible"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-md bg-navy-950/90 text-white border border-navy-700 shadow-sm whitespace-nowrap">
                          {dot.end.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>
            </g>
          );
        })}
      </svg>
      
      {/* Mobile Tooltip */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-navy-950/95 text-gold-400 px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-sm sm:hidden border border-navy-700 shadow-xl"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
