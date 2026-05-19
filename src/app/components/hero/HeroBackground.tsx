'use client';

import React from 'react';

interface HeroBackgroundProps {
  videoId?: string;
  overlayOpacity?: number;
}

export const HeroBackground = React.memo(({ 
  videoId = "_4cuwDSUX4Y",
  overlayOpacity = 70 
}: HeroBackgroundProps) => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* YouTube Background Video */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1`}
        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        allow="autoplay; encrypted-media"
        style={{ border: 0 }}
        loading="lazy"
        title="Background video"
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity / 100 }}
      />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';
