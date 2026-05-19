'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ScrollIndicator } from '../icons/Logo';

interface HeroContentProps {
  onScrollDown: () => void;
  videoId?: string;
}

export const HeroContent = React.memo(({ onScrollDown, videoId = "_4cuwDSUX4Y" }: HeroContentProps) => {
  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-6rem)] md:min-h-screen flex flex-col items-center justify-between relative w-full pt-16 md:pt-32 pb-8 md:pb-12"
      aria-label="Hero section"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full px-4 mt-8 md:mt-0">
        {/* Main Heading */}
        <motion.h1 
          className="font-barlow-semi-condensed font-medium text-white uppercase mb-6 md:mb-12 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block text-[10vw] sm:text-5xl md:text-[65px] leading-[1.1] tracking-[0.4vw] sm:tracking-[2.5px] md:tracking-[5px]">
            Multidisciplinary
          </span>
          <span className="block text-[10vw] sm:text-5xl md:text-[65px] leading-[1.1] tracking-[0.4vw] sm:tracking-[2.5px] md:tracking-[5px]">
            Designer
          </span>
        </motion.h1>
        
        {/* Subtitle with Video Text Effect */}
        <motion.div 
          className="font-rajdhani font-semibold uppercase text-center w-full px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-white text-[3.5vw] sm:text-sm md:text-xl tracking-[0.5vw] sm:tracking-[2px] md:tracking-[5px] leading-relaxed mb-1 md:mb-0">
            experience specialising in end-to-end design solutions
          </p>
          <p className="text-[3.5vw] sm:text-sm md:text-xl tracking-[0.5vw] sm:tracking-[2px] md:tracking-[5px] leading-relaxed flex items-center justify-center flex-wrap gap-x-1">
            <span className="text-white">across </span>
            {/* Video-filled text for UX/UI, Web Design */}
            <span className="relative inline-block">
              {/* Video background clipped to text */}
              <span className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    clipPath: 'inset(0)',
                  }}
                >
                  <source src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1`} type="video/mp4" />
                </video>
                <span 
                  className="relative z-10 font-bold"
                  style={{
                    background: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg) center/cover`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  UX/UI, Web Design
                </span>
              </span>
            </span>
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Down Button */}
      <motion.div 
        className="flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <button 
          onClick={onScrollDown} 
          className="group flex flex-col items-center gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#50C1BA] rounded-lg p-4"
          aria-label="Scroll down to about section"
        >
          <span className="font-rajdhani font-semibold text-base md:text-xl tracking-[5px] uppercase text-white transition-opacity group-hover:opacity-80">
            SCROLL DOWN
          </span>
          <div className="w-6 h-6 flex items-center justify-center rotate-180 group-hover:-translate-y-2 transition-transform duration-300">
            <ScrollIndicator className="w-6 h-5" />
          </div>
        </button>
      </motion.div>
    </section>
  );
});

HeroContent.displayName = 'HeroContent';
