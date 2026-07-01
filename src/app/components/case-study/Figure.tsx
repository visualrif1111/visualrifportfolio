import React from 'react';
import { motion } from 'motion/react';

type Rounded = 'none' | 'lg' | '2xl' | '3xl' | 'pill';

const ROUNDED: Record<Rounded, string> = {
  none: '',
  lg: 'rounded-lg',
  '2xl': 'rounded-[16px] md:rounded-[24px]',
  '3xl': 'rounded-[16px] md:rounded-[30px]',
  pill: 'rounded-[30px] md:rounded-[76px]',
};

const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500 mt-3";

interface FigureProps {
  src?: string;
  alt?: string;
  caption?: React.ReactNode;
  onClick?: () => void;
  rounded?: Rounded;
  /** Extra classes on the media wrapper (e.g. aspect ratio, min-height, bg). */
  frameClassName?: string;
  /** Extra classes on the <img>. */
  imgClassName?: string;
  /** Skip lazy loading (heroes / above the fold). */
  priority?: boolean;
  /** Disable hover zoom. */
  hover?: boolean;
  /** Custom media (video/iframe) instead of an image. */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Semantic <figure> wrapping an image (or custom media) with an optional
 * editorial caption, lightbox click, hover-zoom and the "VIEW" custom-cursor
 * hint. Keyboard accessible when clickable.
 */
export function Figure({
  src,
  alt = '',
  caption,
  onClick,
  rounded = 'lg',
  frameClassName = '',
  imgClassName = '',
  priority = false,
  hover = true,
  children,
  className = '',
}: FigureProps) {
  const clickable = !!onClick;
  const interactiveProps = clickable
    ? {
        onClick,
        role: 'button' as const,
        tabIndex: 0,
        'data-cursor': 'view',
        'aria-label': alt ? `View ${alt}` : 'View image',
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick!();
          }
        },
      }
    : {};

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden ${ROUNDED[rounded]} ${clickable ? 'cursor-pointer' : ''} ${frameClassName}`} {...interactiveProps}>
        {children ?? (
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? undefined : 'lazy'}
            className={`w-full h-auto object-cover ${imgClassName}`}
            whileHover={hover ? { scale: 1.04 } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        )}
      </div>
      {caption && <figcaption className={CAPTION}>{caption}</figcaption>}
    </figure>
  );
}
