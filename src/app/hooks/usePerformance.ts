"use client";

import { useState, useEffect, useCallback } from 'react';

export type PerformanceTier = 'low' | 'medium' | 'high';

export interface PerformanceProfile {
  tier: PerformanceTier;
  prefersReducedMotion: boolean;
  deviceMemory: number | null;
  hardwareConcurrency: number | null;
  connectionType: string | null;
  isSlowConnection: boolean;
  isMobile: boolean;
  supportsWebGL: boolean;
}

interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
    downlink?: number;
  };
}

/**
 * Detects device performance capabilities and returns an appropriate tier.
 * Uses multiple signals: memory, CPU cores, connection, reduced motion preference, etc.
 */
export function usePerformance(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>(() => getInitialProfile());

  useEffect(() => {
    // Update profile on client side
    const newProfile = detectPerformance();
    setProfile(newProfile);

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setProfile(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
        tier: e.matches ? 'low' : calculateTier(prev)
      }));
    };

    mediaQuery.addEventListener('change', handleChange);

    // Listen for connection changes
    const nav = navigator as NavigatorWithMemory;
    if (nav.connection) {
      const handleConnectionChange = () => {
        setProfile(prev => ({
          ...prev,
          connectionType: nav.connection?.effectiveType || null,
          isSlowConnection: checkSlowConnection(),
          tier: calculateTierFromValues({
            ...prev,
            isSlowConnection: checkSlowConnection()
          })
        }));
      };
      
      // @ts-ignore - connection change event
      nav.connection.addEventListener?.('change', handleConnectionChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        // @ts-ignore
        nav.connection?.removeEventListener?.('change', handleConnectionChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return profile;
}

function getInitialProfile(): PerformanceProfile {
  // SSR-safe defaults (assume medium tier)
  return {
    tier: 'medium',
    prefersReducedMotion: false,
    deviceMemory: null,
    hardwareConcurrency: null,
    connectionType: null,
    isSlowConnection: false,
    isMobile: false,
    supportsWebGL: true
  };
}

function detectPerformance(): PerformanceProfile {
  if (typeof window === 'undefined') {
    return getInitialProfile();
  }

  const nav = navigator as NavigatorWithMemory;
  
  // Reduced motion preference (highest priority)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Device memory (in GB) - Chrome/Edge only
  const deviceMemory = nav.deviceMemory || null;
  
  // CPU cores
  const hardwareConcurrency = nav.hardwareConcurrency || null;
  
  // Network connection type
  const connectionType = nav.connection?.effectiveType || null;
  const isSlowConnection = checkSlowConnection();
  
  // Mobile detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(nav.userAgent) ||
    window.matchMedia('(max-width: 768px)').matches;
  
  // WebGL support check
  const supportsWebGL = checkWebGLSupport();
  
  const profile: PerformanceProfile = {
    tier: 'medium',
    prefersReducedMotion,
    deviceMemory,
    hardwareConcurrency,
    connectionType,
    isSlowConnection,
    isMobile,
    supportsWebGL
  };

  // Calculate performance tier
  profile.tier = calculateTierFromValues(profile);

  return profile;
}

function checkSlowConnection(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  const nav = navigator as NavigatorWithMemory;
  const connection = nav.connection;
  
  if (!connection) return false;
  
  // Check for save data mode
  if (connection.saveData) return true;
  
  // Check for slow effective connection types
  const slowTypes = ['slow-2g', '2g', '3g'];
  if (connection.effectiveType && slowTypes.includes(connection.effectiveType)) return true;
  
  // Check for low downlink speed (< 1.5 Mbps)
  if (connection.downlink !== undefined && connection.downlink < 1.5) return true;
  
  return false;
}

function checkWebGLSupport(): boolean {
  if (typeof document === 'undefined') return true;
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
}

function calculateTier(profile: PerformanceProfile): PerformanceTier {
  return calculateTierFromValues(profile);
}

function calculateTierFromValues(profile: Partial<PerformanceProfile>): PerformanceTier {
  // Reduced motion always gets low tier
  if (profile.prefersReducedMotion) return 'low';
  
  // Slow connection gets low tier
  if (profile.isSlowConnection) return 'low';
  
  // No WebGL support gets low tier
  if (profile.supportsWebGL === false) return 'low';
  
  let score = 0;
  
  // Memory scoring (0-3 points)
  if (profile.deviceMemory !== null) {
    if (profile.deviceMemory >= 8) score += 3;
    else if (profile.deviceMemory >= 4) score += 2;
    else if (profile.deviceMemory >= 2) score += 1;
    // < 2GB = 0 points
  } else {
    // Unknown memory, assume medium
    score += 1.5;
  }
  
  // CPU cores scoring (0-3 points)
  if (profile.hardwareConcurrency !== null) {
    if (profile.hardwareConcurrency >= 8) score += 3;
    else if (profile.hardwareConcurrency >= 4) score += 2;
    else if (profile.hardwareConcurrency >= 2) score += 1;
    // < 2 cores = 0 points
  } else {
    // Unknown cores, assume medium
    score += 1.5;
  }
  
  // Connection type scoring (0-2 points)
  if (profile.connectionType) {
    if (profile.connectionType === '4g') score += 2;
    else if (profile.connectionType === '3g') score += 1;
    // 2g/slow-2g = 0 points
  } else {
    // Unknown connection, assume decent
    score += 1;
  }
  
  // Mobile penalty (-1 point)
  if (profile.isMobile) score -= 1;
  
  // Calculate tier based on total score (max 8)
  if (score >= 6) return 'high';
  if (score >= 3) return 'medium';
  return 'low';
}

/**
 * Returns animation configuration based on performance tier
 */
export function getAnimationConfig(tier: PerformanceTier) {
  switch (tier) {
    case 'low':
      return {
        enableParallax: false,
        enableBackgroundAnimation: false,
        enableCustomCursor: false,
        enableHoverEffects: false,
        enableVideoAutoplay: false,
        transitionDuration: 0.15,
        animationDuration: 0.2,
        enableBlur: false,
        enableShadows: false,
        imageQuality: 'low' as const,
        enableMouseTracking: false,
        enableInfiniteAnimations: false,
      };
    case 'medium':
      return {
        enableParallax: true,
        enableBackgroundAnimation: true,
        enableCustomCursor: true,
        enableHoverEffects: true,
        enableVideoAutoplay: true,
        transitionDuration: 0.3,
        animationDuration: 0.5,
        enableBlur: false,
        enableShadows: true,
        imageQuality: 'medium' as const,
        enableMouseTracking: true,
        enableInfiniteAnimations: true,
      };
    case 'high':
      return {
        enableParallax: true,
        enableBackgroundAnimation: true,
        enableCustomCursor: true,
        enableHoverEffects: true,
        enableVideoAutoplay: true,
        transitionDuration: 0.5,
        animationDuration: 0.8,
        enableBlur: true,
        enableShadows: true,
        imageQuality: 'high' as const,
        enableMouseTracking: true,
        enableInfiniteAnimations: true,
      };
  }
}
