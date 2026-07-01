import React from 'react';
import { motion } from 'motion/react';

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: React.ReactNode;
  variant?: 'default' | 'panel';
  className?: string;
}

/**
 * Editorial pull quote. `default` is a left-accented statement; `panel` is the
 * cinematic bordered/glow block used for a project's closing thought.
 */
export function PullQuote({ children, attribution, variant = 'default', className = '' }: PullQuoteProps) {
  if (variant === 'panel') {
    return (
      <div className={`relative border border-[#50C1BA]/18 rounded-lg overflow-hidden ${className}`}>
        <div className="bg-[#030d0d] px-8 md:px-16 py-16 md:py-24 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#50C1BA]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(80,193,186,0.08) 0%, transparent 60%)' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-14 bg-gradient-to-b from-[#50C1BA]/40 to-transparent" />
          <motion.blockquote
            className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[20px] md:text-[34px] lg:text-[42px] leading-[1.28] tracking-[0.04em] text-white/90 max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            {children}
          </motion.blockquote>
          {attribution && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-[1px] w-10 bg-[#50C1BA]/35" />
              <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.45em] uppercase text-[#50C1BA]/65">{attribution}</p>
              <div className="h-[1px] w-10 bg-[#50C1BA]/35" />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.blockquote
      className={`border-l-2 border-[#50C1BA] pl-6 md:pl-10 ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[24px] md:text-[38px] leading-[1.3] tracking-[0.02em] text-white/90">{children}</p>
      {attribution && (
        <footer className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-[#50C1BA]/70 mt-5">{attribution}</footer>
      )}
    </motion.blockquote>
  );
}
