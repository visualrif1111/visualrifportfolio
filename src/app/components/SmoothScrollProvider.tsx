"use client";

import React, { createContext, useContext, useCallback, useEffect } from 'react';

interface SmoothScrollContextValue {
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
  stop: () => void;
  start: () => void;
}

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * SmoothScrollProvider - Simplified scroll utilities
 * 
 * Uses native smooth scrolling for better compatibility
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  // Scroll to function using native smooth scroll
  const scrollTo = useCallback((
    target: string | number | HTMLElement,
    scrollOptions?: ScrollToOptions
  ) => {
    const behavior = scrollOptions?.immediate ? 'auto' : 'smooth';
    
    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        const offset = scrollOptions?.offset || 0;
        const top = element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior });
      }
    } else if (typeof target === 'number') {
      window.scrollTo({ 
        top: target + (scrollOptions?.offset || 0), 
        behavior 
      });
    } else if (target instanceof HTMLElement) {
      const offset = scrollOptions?.offset || 0;
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior });
    }
  }, []);

  // Stop scrolling (no-op for native scroll)
  const stop = useCallback(() => {
    // Native scroll doesn't have a stop method
  }, []);

  // Start scrolling (no-op for native scroll)
  const start = useCallback(() => {
    // Native scroll doesn't have a start method
  }, []);

  const value: SmoothScrollContextValue = {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
