import React from 'react';
import { motion } from 'motion/react';

export interface MetaItem {
  label: string;
  value: React.ReactNode;
}

interface MetaBarProps {
  items: MetaItem[];
  size?: 'lg' | 'md';
  className?: string;
}

/**
 * Project metadata strip (year / location / role / industry). Bordered, evenly
 * spaced, with a staggered reveal.
 */
export function MetaBar({ items, size = 'lg', className = '' }: MetaBarProps) {
  const gap = size === 'lg' ? 'gap-8 md:gap-24' : 'gap-6 md:gap-16';
  const text = size === 'lg' ? 'text-sm md:text-[26px]' : 'text-sm md:text-[20px]';
  return (
    <section className={`border-b border-gray-800 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap ${gap} uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] ${text}`}>
        {items.map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">{label}</p>
            <p>{value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
