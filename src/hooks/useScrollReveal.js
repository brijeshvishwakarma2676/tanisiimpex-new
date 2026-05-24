import { useInView } from 'react-intersection-observer';

// A simple wrapper around IntersectionObserver for scroll animations
export function useScrollReveal(options = {}) {
  const [ref, inView] = useInView({
    threshold: options.threshold || 0.15,
    triggerOnce: options.triggerOnce !== false, // default true
    rootMargin: options.rootMargin || '0px 0px -50px 0px',
  });

  return { ref, inView };
}
