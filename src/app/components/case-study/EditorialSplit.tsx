import React from 'react';

type Ratio = '4/8' | '5/7' | '6/6' | '7/5';

// Static class strings so Tailwind's source scanner can see them.
const RATIOS: Record<Ratio, { text: string; media: string }> = {
  '4/8': { text: 'lg:col-span-4', media: 'lg:col-span-8' },
  '5/7': { text: 'lg:col-span-5', media: 'lg:col-span-7' },
  '6/6': { text: 'lg:col-span-6', media: 'lg:col-span-6' },
  '7/5': { text: 'lg:col-span-7', media: 'lg:col-span-5' },
};

const ALIGN: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  stretch: 'items-stretch',
};

interface EditorialSplitProps {
  /** Media column content (Figure, ImageGrid, video, etc.). */
  media: React.ReactNode;
  /** Text column content. */
  children: React.ReactNode;
  ratio?: Ratio;
  /** Place media on the left (text on the right) — used to alternate rhythm. */
  reverse?: boolean;
  align?: 'start' | 'center' | 'stretch';
  /** On mobile, show media before text. */
  mobileMediaFirst?: boolean;
  gap?: string;
  className?: string;
}

/**
 * The core 12-column editorial primitive. Pairs a text column with a media
 * column at a chosen ratio; `reverse` alternates the composition to create
 * asymmetric rhythm down the page.
 */
export function EditorialSplit({
  media,
  children,
  ratio = '5/7',
  reverse = false,
  align = 'start',
  mobileMediaFirst = false,
  gap = 'gap-10 md:gap-16',
  className = '',
}: EditorialSplitProps) {
  const { text, media: mediaSpan } = RATIOS[ratio];
  // `reverse` (media left at lg) takes precedence over `mobileMediaFirst`
  // (media first on mobile only) so the two never emit conflicting order utilities.
  const textOrder = reverse ? 'lg:order-2' : mobileMediaFirst ? 'order-2 lg:order-1' : '';
  const mediaOrder = reverse ? 'lg:order-1' : mobileMediaFirst ? 'order-1 lg:order-2' : '';
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 ${gap} ${ALIGN[align]} ${className}`}>
      <div className={`${text} ${textOrder}`}>
        {children}
      </div>
      <div className={`${mediaSpan} ${mediaOrder}`}>
        {media}
      </div>
    </div>
  );
}
