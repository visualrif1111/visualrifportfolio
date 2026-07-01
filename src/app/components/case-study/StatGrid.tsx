import React from 'react';
import { motion } from 'motion/react';

export interface Stat {
  value: React.ReactNode;
  label: React.ReactNode;
}

const COLUMNS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
};

interface StatGridProps {
  items: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Numbers module — bold Barlow Semi Condensed figures over Rajdhani labels,
 * bordered cards with a staggered reveal.
 */
export function StatGrid({ items, columns = 4, className = '' }: StatGridProps) {
  return (
    <div className={`grid ${COLUMNS[columns]} gap-5 md:gap-6 ${className}`}>
      {items.map((stat, i) => (
        <motion.div
          key={i}
          className="text-center py-10 px-4 border border-gray-800 rounded-lg hover:border-[#50C1BA]/30 transition-colors hover:bg-[#50C1BA]/[0.02]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <p className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[44px] md:text-[60px] tracking-[-0.02em] text-[#50C1BA] leading-none mb-3">{stat.value}</p>
          <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-gray-500">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
