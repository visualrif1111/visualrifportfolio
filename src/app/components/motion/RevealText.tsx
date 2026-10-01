import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE } from '../../design/tokens';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function RevealText({ children, className = "", delay = 0, once = true }: RevealTextProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once, margin: '-5%' }}
        transition={{ duration: 0.85, delay, ease: EASE.out }}
      >
        {children}
      </motion.div>
    </div>
  );
}
