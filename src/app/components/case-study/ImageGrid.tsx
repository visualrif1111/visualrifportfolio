import React from 'react';
import { motion } from 'motion/react';
import { Figure } from './Figure';

export interface GridItem {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
  onClick?: () => void;
  frameClassName?: string;
  imgClassName?: string;
}

const COLS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
};

interface ImageGridProps {
  items: GridItem[];
  cols?: 2 | 3 | 4;
  gap?: string;
  rounded?: React.ComponentProps<typeof Figure>['rounded'];
  /** Default aspect / frame classes applied to each item. */
  frameClassName?: string;
  className?: string;
}

/**
 * Staggered grid of figures. Each item drives its own lightbox index via
 * `onClick`, so gallery ordering is defined entirely by the caller.
 */
export function ImageGrid({ items, cols = 4, gap = 'gap-4 md:gap-6', rounded = '2xl', frameClassName = '', className = '' }: ImageGridProps) {
  return (
    <div className={`grid ${COLS[cols]} ${gap} ${className}`} data-cursor="view">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % cols) * 0.1 }}
        >
          <Figure
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            onClick={item.onClick}
            rounded={rounded}
            frameClassName={`${frameClassName} ${item.frameClassName ?? ''}`}
            imgClassName={item.imgClassName ?? 'w-full h-full object-cover'}
          />
        </motion.div>
      ))}
    </div>
  );
}
