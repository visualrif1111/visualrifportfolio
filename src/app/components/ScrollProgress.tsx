import React from 'react';
import { useScroll, useSpring, motion, useReducedMotion } from 'motion/react';

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  if (reduce) return null;
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#50C1BA] z-[200] pointer-events-none"
    />
  );
}
