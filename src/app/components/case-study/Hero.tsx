import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  /** Background media rendered absolute inset-0 (image element, iframe, or video). */
  media: React.ReactNode;
  /** Extra overlay layers (gradients, scanlines, glows) rendered above media, below content. */
  children?: React.ReactNode;
  eyebrow?: React.ReactNode;
  /** Title lines, animated with a staggered y-reveal. */
  titleLines: React.ReactNode[];
  subtitle?: React.ReactNode;
  overlayClassName?: string;
  heightClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: 'center' | 'bottom-left';
  scrollCue?: boolean;
  /** Allow media to bleed past the section box (e.g. full-viewport video behind the sidebar). */
  overflowVisible?: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Full-bleed case-study hero. Supports image or video media, an animated
 * multi-line title, optional eyebrow / subtitle / scroll cue, and two focal
 * compositions (centered or cinematic bottom-left).
 */
export function Hero({
  media,
  children,
  eyebrow,
  titleLines,
  subtitle,
  overlayClassName = 'bg-black/50',
  heightClassName = 'h-[50vh] md:h-[70vh]',
  titleClassName = 'text-[44px] md:text-[88px] leading-none tracking-[0.08em]',
  subtitleClassName,
  align = 'center',
  scrollCue = false,
  overflowVisible = false,
}: HeroProps) {
  const contentPosition =
    align === 'center'
      ? 'items-center text-center justify-center px-6 mt-16 md:mt-0'
      : 'items-start text-left justify-end pb-20 md:pb-28 px-8 md:px-16';

  return (
    <section className={`relative w-full ${heightClassName} ${overflowVisible ? '' : 'overflow-hidden'} bg-black`}>
      <div className="absolute inset-0">{media}</div>
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      {children}

      <div className={`absolute inset-0 flex flex-col ${contentPosition} z-20 pointer-events-none`}>
        {eyebrow && (
          <motion.p
            className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.5em] uppercase text-[#50C1BA] mb-5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {eyebrow}
          </motion.p>
        )}
        <h1 className={`font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-white drop-shadow-lg ${titleClassName}`}>
          {titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        {subtitle && (
          <motion.div
            className={subtitleClassName ?? "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.75] text-gray-300 max-w-[600px] tracking-[0.04em] mt-8"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            {subtitle}
          </motion.div>
        )}
      </div>

      {scrollCue && (
        <motion.div
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <p className="font-['Rajdhani',sans-serif] text-[10px] tracking-[0.4em] uppercase text-gray-500">Scroll</p>
          <motion.div
            className="w-[1px] h-10 bg-gray-700"
            animate={{ scaleY: [1, 0.35, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
        </motion.div>
      )}
    </section>
  );
}
