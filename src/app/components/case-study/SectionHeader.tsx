import React from 'react';
import { RevealText } from '../motion/RevealText';
import { FadeIn } from '../motion/FadeIn';

interface SectionHeaderProps {
  /** Small teal Rajdhani kicker, e.g. "01 — Overview". */
  eyebrow?: React.ReactNode;
  /** Main heading (Barlow). */
  title?: React.ReactNode;
  /** Standfirst / lead line (Lato). */
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  /** Heading colour — teal to match legacy section headings, white for editorial hierarchy. */
  tone?: 'white' | 'teal';
  className?: string;
  size?: 'md' | 'lg';
}

/**
 * Editorial section header: eyebrow → heading → lead. Establishes a consistent
 * progressive-disclosure hierarchy in place of the ad-hoc heading blocks.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'white',
  className = '',
  size = 'md',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const titleColor = tone === 'teal' ? 'text-[#50C1BA]' : 'text-white';
  const titleSize = size === 'lg' ? 'text-[28px] md:text-[42px]' : 'text-[22px] md:text-[30px]';
  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <RevealText>
          <p className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#50C1BA]">{eyebrow}</p>
        </RevealText>
      )}
      {title && (
        <RevealText>
          <h2 className={`font-['Barlow',sans-serif] font-medium ${titleSize} tracking-[0.22em] uppercase ${titleColor} leading-[1.1]`}>{title}</h2>
        </RevealText>
      )}
      {lead && (
        <FadeIn>
          <p className={`font-['Lato',sans-serif] font-light text-[16px] md:text-[18px] leading-[1.6] tracking-[0.05em] text-gray-400 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{lead}</p>
        </FadeIn>
      )}
    </div>
  );
}
