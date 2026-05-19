'use client';

import React, { useCallback } from 'react';
import { HeroBackground } from './HeroBackground';
import { DesktopNavigation, MobileNavigation } from './Navigation';
import { HeroContent } from './HeroContent';

interface HeroProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export const Hero = React.memo(({ activeSection = 'home', onSectionChange }: HeroProps) => {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange?.(id);
    }
  }, [onSectionChange]);

  const handleScrollDown = useCallback(() => {
    scrollTo('about');
  }, [scrollTo]);

  return (
    <>
      {/* Navigation */}
      <DesktopNavigation activeSection={activeSection} onNavigate={scrollTo} />
      <MobileNavigation onNavigate={scrollTo} />
      
      {/* Background Video */}
      <HeroBackground videoId="_4cuwDSUX4Y" overlayOpacity={70} />
      
      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 pt-24 md:pt-0 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-x-hidden">
        <HeroContent onScrollDown={handleScrollDown} />
      </div>
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
