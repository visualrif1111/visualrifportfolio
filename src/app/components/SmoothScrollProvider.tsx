"use client";

import React, { useEffect, useRef, createContext, useContext, useCallback } from 'react';
import Lenis from 'lenis';
import { usePerformanceContext } from '../context/PerformanceContext';

interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
  stop: () => void;
  start: () => void;
}

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
  lock?: boolean;
  force?: boolean;
  onComplete?: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  options?: Partial<LenisOptions>;
}

interface LenisOptions {
  duration: number;
  easing: (t: number) => number;
  smoothWheel: boolean;
  wheelMultiplier: number;
  touchMultiplier: number;
  infinite: boolean;
  orientation: 'vertical' | 'horizontal';
  gestureOrientation: 'vertical' | 'horizontal' | 'both';
  smoothTouch: boolean;
  syncTouch: boolean;
  syncTouchLerp: number;
}

/**
 * SmoothScrollProvider - Provides buttery smooth scrolling using Lenis
 * 
 * Features:
 * - GPU-accelerated smooth scrolling
 * - Performance-tier aware (disabled on low-end devices)
 * - Respects prefers-reduced-motion
 * - Touch-friendly on mobile
 * - Customizable easing and duration
 */
export function SmoothScrollProvider({ children, options = {} }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const { isLowEnd, profile } = usePerformanceContext();

  useEffect(() => {
    // Skip smooth scrolling for low-end devices or reduced motion preference
    if (isLowEnd || profile.prefersReducedMotion) {
      return;
    }

    // Default easing function - matches high-end portfolio feel
    const defaultEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

    // Merge options with performance-aware defaults
    const lenisOptions: Partial<LenisOptions> = {
      duration: 1.2,
      easing: defaultEasing,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothTouch: false, // Native touch scrolling is usually better
      syncTouch: false,
      syncTouchLerp: 0.075,
      ...options,
    };

    // Adjust for medium-tier devices
    if (profile.tier === 'medium') {
      lenisOptions.duration = 0.8;
      lenisOptions.wheelMultiplier = 1.2;
    }

    // Create Lenis instance
    const lenis = new Lenis(lenisOptions);
    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isLowEnd, profile.prefersReducedMotion, profile.tier, options]);

  // Scroll to function
  const scrollTo = useCallback((
    target: string | number | HTMLElement,
    scrollOptions?: ScrollToOptions
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, scrollOptions);
    } else {
      // Fallback for non-Lenis environments
      if (typeof target === 'string') {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ 
            behavior: profile.prefersReducedMotion ? 'auto' : 'smooth' 
          });
        }
      } else if (typeof target === 'number') {
        window.scrollTo({ 
          top: target, 
          behavior: profile.prefersReducedMotion ? 'auto' : 'smooth' 
        });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ 
          behavior: profile.prefersReducedMotion ? 'auto' : 'smooth' 
        });
      }
    }
  }, [profile.prefersReducedMotion]);

  // Stop scrolling
  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  // Start scrolling
  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const value: SmoothScrollContextValue = {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
  };

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

/**
 * Hook to access smooth scroll functionality
 */
export function useSmoothScroll(): SmoothScrollContextValue {
  const context = useContext(SmoothScrollContext);
  
  // Return fallback for SSR or when used outside provider
  if (!context) {
    return {
      lenis: null,
      scrollTo: (target) => {
        if (typeof window !== 'undefined') {
          if (typeof target === 'string') {
            document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
          } else if (typeof target === 'number') {
            window.scrollTo({ top: target, behavior: 'smooth' });
          }
        }
      },
      stop: () => {},
      start: () => {},
    };
  }
  
  return context;
}

/**
 * Hook to scroll to top on route change
 */
export function useScrollToTop(deps: unknown[] = []) {
  const { scrollTo } = useSmoothScroll();
  
  useEffect(() => {
    scrollTo(0, { immediate: true });
  }, deps);
}

/**
 * Hook to lock/unlock scroll
 */
export function useScrollLock() {
  const { stop, start } = useSmoothScroll();
  
  const lock = useCallback(() => {
    stop();
    document.body.style.overflow = 'hidden';
  }, [stop]);
  
  const unlock = useCallback(() => {
    document.body.style.overflow = '';
    start();
  }, [start]);
  
  return { lock, unlock };
}

/**
 * Scroll trigger hook - fires callback when element enters viewport
 */
export function useScrollTrigger(
  ref: React.RefObject<HTMLElement>,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(callback);
    }, {
      threshold: 0.1,
      rootMargin: '0px',
      ...options,
    });
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, callback, options]);
}

export default SmoothScrollProvider;
