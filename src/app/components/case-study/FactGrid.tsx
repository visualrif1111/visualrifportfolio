import React from 'react';
import { motion } from 'motion/react';

export interface Fact {
  label: React.ReactNode;
  value: React.ReactNode;
}

interface FactGridProps {
  items: Fact[];
  className?: string;
}

/**
 * Label → value facts as left-accented rows. Used for project facts / brand
 * pillars — a compact alternative to running prose.
 */
export function FactGrid({ items, className = '' }: FactGridProps) {
  return (
    <div className={`flex flex-col gap-7 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="border-l-2 border-[#50C1BA]/25 pl-5 hover:border-[#50C1BA] transition-colors"
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <p className="font-['Barlow',sans-serif] font-medium text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-[#50C1BA]/75 mb-2">{item.label}</p>
          <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.6] text-gray-400 tracking-[0.03em]">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
