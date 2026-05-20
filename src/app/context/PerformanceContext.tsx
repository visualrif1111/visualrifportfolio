"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { usePerformance, getAnimationConfig, PerformanceProfile, PerformanceTier } from '../hooks/usePerformance';

interface PerformanceContextValue {
  profile: PerformanceProfile;
  config: ReturnType<typeof getAnimationConfig>;
  isLowEnd: boolean;
  isHighEnd: boolean;
}

const PerformanceContext = createContext<PerformanceContextValue | null>(null);

interface PerformanceProviderProps {
  children: React.ReactNode;
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  const profile = usePerformance();
  
  const value = useMemo(() => {
    const config = getAnimationConfig(profile.tier);
    return {
      profile,
      config,
      isLowEnd: profile.tier === 'low',
      isHighEnd: profile.tier === 'high',
    };
  }, [profile]);

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformanceContext(): PerformanceContextValue {
  const context = useContext(PerformanceContext);
  if (!context) {
    // Return default values if used outside provider (SSR safe)
    return {
      profile: {
        tier: 'medium' as PerformanceTier,
        prefersReducedMotion: false,
        deviceMemory: null,
        hardwareConcurrency: null,
        connectionType: null,
        isSlowConnection: false,
        isMobile: false,
        supportsWebGL: true
      },
      config: getAnimationConfig('medium'),
      isLowEnd: false,
      isHighEnd: false,
    };
  }
  return context;
}

/**
 * Hook to get motion props based on performance tier
 * Returns reduced or disabled motion for low-end devices
 */
export function useAdaptiveMotion() {
  const { config, isLowEnd } = usePerformanceContext();
  
  return useMemo(() => ({
    // Animation wrapper that respects performance settings
    animate: (animation: object) => isLowEnd ? {} : animation,
    
    // Transition with adaptive duration
    transition: (overrides?: object) => ({
      duration: config.transitionDuration,
      ease: 'easeOut',
      ...overrides,
    }),
    
    // Hover animation (disabled on low-end)
    whileHover: (animation: object) => config.enableHoverEffects ? animation : undefined,
    
    // Infinite animation (disabled on low-end)
    infiniteAnimation: (animation: object) => config.enableInfiniteAnimations ? animation : {},
    
    // View-triggered animation
    whileInView: (animation: object) => isLowEnd ? {} : animation,
    
    // Check if specific features are enabled
    features: {
      parallax: config.enableParallax,
      background: config.enableBackgroundAnimation,
      cursor: config.enableCustomCursor,
      hover: config.enableHoverEffects,
      video: config.enableVideoAutoplay,
      blur: config.enableBlur,
      shadows: config.enableShadows,
      mouseTracking: config.enableMouseTracking,
      infiniteAnimations: config.enableInfiniteAnimations,
    },
    
    // Get shadow class based on performance
    shadowClass: (normalClass: string) => config.enableShadows ? normalClass : '',
    
    // Get blur class based on performance  
    blurClass: (normalClass: string) => config.enableBlur ? normalClass : '',
  }), [config, isLowEnd]);
}
