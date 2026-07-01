import React from 'react';

type Width = 'default' | 'narrow' | 'wide' | 'bleed';
type Pad = 'default' | 'tight' | 'loose' | 'none';

const WIDTHS: Record<Width, string> = {
  default: 'max-w-7xl',
  narrow: 'max-w-5xl',
  wide: 'max-w-[1920px]',
  bleed: '',
};

const PADS: Record<Pad, string> = {
  default: 'py-20 md:py-28',
  tight: 'py-12 md:py-16',
  loose: 'py-28 md:py-40',
  none: '',
};

interface SectionProps {
  children: React.ReactNode;
  /** Content max-width. `bleed` = full width, no gutter. */
  width?: Width;
  /** Vertical rhythm. */
  pad?: Pad;
  /** Horizontal gutter (ignored for `bleed`). */
  gutter?: boolean;
  id?: string;
  className?: string;
  border?: 'top' | 'bottom' | 'none';
}

/**
 * The single source of spacing truth: consistent max-width, gutters and
 * vertical rhythm across every case-study page.
 */
export function Section({
  children,
  width = 'default',
  pad = 'default',
  gutter = true,
  id,
  className = '',
  border = 'none',
}: SectionProps) {
  const borderClass = border === 'top' ? 'border-t border-gray-800' : border === 'bottom' ? 'border-b border-gray-800' : '';
  const isBleed = width === 'bleed';
  const gut = gutter && !isBleed ? 'px-6 md:px-12' : '';
  const mx = isBleed ? '' : 'mx-auto';
  return (
    <section id={id} className={`w-full ${mx} ${WIDTHS[width]} ${gut} ${PADS[pad]} ${borderClass} ${className}`}>
      {children}
    </section>
  );
}
