import React, { useState } from 'react';
import YouTube from 'react-youtube';

export function HeroBackgroundVideo({ videoId, className = "" }: { videoId: string, className?: string }) {
  const [isReady, setIsReady] = useState(false);

  const handleReady = (event: any) => {
    // Explicitly mute and play on ready to circumvent some mobile browser restrictions
    event.target.mute();
    event.target.playVideo();
    // Add a slight delay to fade in, avoiding the black flash of the player loading
    setTimeout(() => setIsReady(true), 500);
  };

  const handleStateChange = (event: any) => {
    // YouTube state 1 is PLAYING. If it pauses (2) or stays unstarted (-1), try to force play again
    if (event.data !== 1) {
      event.target.mute();
      event.target.playVideo();
    }
  };

  return (
    <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId, // Required for looping
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3
          },
        }}
        onReady={handleReady}
        onStateChange={handleStateChange}
        className={`absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        iframeClassName="w-full h-full pointer-events-none"
      />
    </div>
  );
}
