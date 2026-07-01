import React from 'react';
import { motion } from 'motion/react';

const COLUMNS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
};

interface DeliverablesListProps {
  items: string[];
  columns?: 1 | 2 | 3;
  className?: string;
}

/**
 * Scannable deliverables / responsibilities module — replaces long bulleted
 * paragraphs with an aligned, rhythmic grid.
 */
export function DeliverablesList({ items, columns = 2, className = '' }: DeliverablesListProps) {
  return (
    <ul className={`grid ${COLUMNS[columns]} gap-x-8 ${className}`}>
      {items.map((item, i) => (
        <motion.li
          key={item}
          className="flex items-center gap-3 py-3 border-b border-gray-800/60 font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] tracking-[0.03em] text-gray-300"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (i % columns) * 0.05 }}
        >
          <span className="w-[5px] h-[5px] rounded-full bg-[#50C1BA]/70 shrink-0" />
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
