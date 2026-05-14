import React, { useState } from 'react';
import YouTube from 'react-youtube';

export function BackgroundVideo({ videoId, className = "" }: { videoId: string, className?: string }) {
  const [isReady, setIsReady] = useState(false);

  const handleReady = (event: any) => {
    event.target.mute();
    event.target.playVideo();
    setTimeout(() => setIsReady(true), 500);
  };

  const handleStateChange = (event: any) => {
    // If it pauses or goes to unstarted on mobile, force play again
    if (event.data !== 1) {
      event.target.mute();
      event.target.playVideo();
    }
  };

  return (
    <div className={`w-full h-full pointer-events-none ${className}`}>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
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
        className={`w-full h-full transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        iframeClassName="w-full h-full"
      />
    </div>
  );
}
