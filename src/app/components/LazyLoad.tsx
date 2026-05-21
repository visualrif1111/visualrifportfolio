"use client";

import React, { Suspense, lazy, ComponentType, useEffect, useState, useRef } from 'react';
import { usePerformanceContext } from '../context/PerformanceContext';

/**
 * LazyComponent - Wrapper for dynamically imported components
 * 
 * Features:
 * - Intersection Observer-based loading (loads when near viewport)
 * - Customizable loading skeleton
 * - Error boundaries with retry
 * - Performance-tier aware loading behavior
 */

interface LazyComponentProps<T extends ComponentType<any>> {
  importFn: () => Promise<{ default: T }>;
  props?: React.ComponentProps<T>;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  minHeight?: number | string;
  onLoad?: () => void;
}

export function LazyComponent<T extends ComponentType<any>>({
  importFn,
  props = {} as React.ComponentProps<T>,
  fallback,
  rootMargin = '200px',
  threshold = 0,
  minHeight = 200,
  onLoad,
}: LazyComponentProps<T>) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [Component, setComponent] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { isLowEnd } = usePerformanceContext();

  // Intersection observer to trigger load
  useEffect(() => {
    if (shouldLoad || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin, threshold]);

  // Load component when triggered
  useEffect(() => {
    if (!shouldLoad || Component) return;

    let mounted = true;

    importFn()
      .then((module) => {
        if (mounted) {
          setComponent(() => module.default);
          onLoad?.();
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      });

    return () => {
      mounted = false;
    };
  }, [shouldLoad, importFn, Component, onLoad]);

  // Error state with retry
  if (error) {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center justify-center p-8 bg-gray-900/50 rounded-lg"
        style={{ minHeight }}
      >
        <p className="text-gray-400 mb-4">Failed to load component</p>
        <button
          onClick={() => {
            setError(null);
            setComponent(null);
            setShouldLoad(false);
            setTimeout(() => setShouldLoad(true), 100);
          }}
          className="px-4 py-2 bg-[#50C1BA] text-black text-sm uppercase tracking-wider hover:bg-[#40a9a3] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  // Loading state
  if (!Component) {
    return (
      <div ref={ref} style={{ minHeight }}>
        {fallback || <DefaultSkeleton minHeight={minHeight} isLowEnd={isLowEnd} />}
      </div>
    );
  }

  // Render loaded component
  return <Component {...props} />;
}

/**
 * Default loading skeleton
 */
function DefaultSkeleton({ 
  minHeight, 
  isLowEnd 
}: { 
  minHeight: number | string; 
  isLowEnd: boolean;
}) {
  return (
    <div
      className={`bg-gray-900/50 rounded-lg ${
        isLowEnd ? '' : 'animate-pulse'
      }`}
      style={{ minHeight }}
    >
      <div className="flex items-center justify-center h-full">
        {!isLowEnd && (
          <div className="w-8 h-8 border-2 border-[#50C1BA] border-t-transparent rounded-full animate-spin" />
        )}
      </div>
    </div>
  );
}

/**
 * LazySection - For lazy loading entire page sections
 */
interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
  className?: string;
  onVisible?: () => void;
}

export function LazySection({
  children,
  fallback,
  rootMargin = '100px',
  minHeight = 300,
  className = '',
  onVisible,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, onVisible]);

  return (
    <div ref={ref} className={className} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : fallback || <DefaultSkeleton minHeight={minHeight} isLowEnd={false} />}
    </div>
  );
}

/**
 * useInView - Hook to track element visibility
 */
export function useInView(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

/**
 * useInViewOnce - Same as useInView but only triggers once
 */
export function useInViewOnce(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (hasBeenInView || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasBeenInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasBeenInView, options]);

  return [ref, hasBeenInView];
}

/**
 * DeferredContent - Defers rendering until after initial paint
 */
interface DeferredContentProps {
  children: React.ReactNode;
  delay?: number;
  fallback?: React.ReactNode;
}

export function DeferredContent({
  children,
  delay = 0,
  fallback = null,
}: DeferredContentProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => {
        if (delay > 0) {
          setTimeout(() => setShouldRender(true), delay);
        } else {
          setShouldRender(true);
        }
      });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShouldRender(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  return shouldRender ? <>{children}</> : <>{fallback}</>;
}

/**
 * createLazyComponent - Factory function for creating lazy-loaded components
 */
export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options?: {
    fallback?: React.ReactNode;
    rootMargin?: string;
    minHeight?: number;
  }
) {
  return function LazyWrapper(props: React.ComponentProps<T>) {
    return (
      <LazyComponent
        importFn={importFn}
        props={props}
        fallback={options?.fallback}
        rootMargin={options?.rootMargin}
        minHeight={options?.minHeight}
      />
    );
  };
}

/**
 * withLazyLoad - HOC to add lazy loading to any component
 */
export function withLazyLoad<T extends ComponentType<any>>(
  Component: T,
  options?: {
    rootMargin?: string;
    minHeight?: number;
    fallback?: React.ReactNode;
  }
) {
  return function LazyLoadedComponent(props: React.ComponentProps<T>) {
    const [shouldRender, setShouldRender] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (shouldRender || !ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        },
        { rootMargin: options?.rootMargin || '100px', threshold: 0 }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [shouldRender]);

    if (!shouldRender) {
      return (
        <div ref={ref} style={{ minHeight: options?.minHeight || 200 }}>
          {options?.fallback || <DefaultSkeleton minHeight={options?.minHeight || 200} isLowEnd={false} />}
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default LazyComponent;
