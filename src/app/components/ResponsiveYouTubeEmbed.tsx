import React, { useState, useEffect, useRef } from 'react';

interface Props {
  videoId: string;
  title?: string;
  className?: string;
  /** false = load immediately (above-the-fold heroes); true = lazy via IntersectionObserver */
  lazy?: boolean;
}

const BASE_PARAMS = 'autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1';

export const ResponsiveYouTubeEmbed = React.memo(function ResponsiveYouTubeEmbed({
  videoId,
  title,
  className,
  lazy = true,
}: Props) {
  const [active, setActive] = useState(!lazy);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy]);

  return (
    <div ref={ref} className={`w-full h-full${className ? ` ${className}` : ''}`}>
      {active && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?${BASE_PARAMS}&playlist=${videoId}`}
          title={title ?? 'Video'}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          style={{ border: 0 }}
        />
      )}
    </div>
  );
});
