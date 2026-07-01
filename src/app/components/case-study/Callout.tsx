import React from 'react';
import { FadeIn } from '../motion/FadeIn';

interface CalloutProps {
  /** Small teal kicker, e.g. "Key Insight" / "Process Note". */
  label?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * A labelled highlight box for a key insight, process note or project fact —
 * breaks up long copy and gives a scannable focal point.
 */
export function Callout({ label, children, className = '' }: CalloutProps) {
  return (
    <FadeIn className={`border-l-2 border-[#50C1BA]/40 bg-white/[0.02] rounded-r-lg pl-5 md:pl-6 pr-5 py-5 ${className}`}>
      {label && (
        <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#50C1BA] mb-2.5">{label}</p>
      )}
      <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.6] tracking-[0.03em] text-gray-300">{children}</div>
    </FadeIn>
  );
}
