import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean; // For above-the-fold images
  placeholderColor?: string; // Background color while loading
}

/**
 * OptimizedImage - A performance-optimized image component
 * 
 * Features:
 * - Native lazy loading (unless priority is set)
 * - Async decoding for non-blocking rendering
 * - Smooth fade-in transition when loaded
 * - Placeholder background to prevent layout shift
 * - IntersectionObserver for better lazy loading control
 */
export const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  placeholderColor = 'rgba(30, 30, 30, 0.5)',
  style,
  ...rest
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use IntersectionObserver for smarter lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
  };

  // Error fallback
  if (hasError) {
    return (
      <div
        ref={containerRef}
        className={`bg-gray-800/50 flex items-center justify-center ${containerClassName}`}
        style={style}
      >
        <svg
          className="w-12 h-12 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        backgroundColor: placeholderColor,
        ...style,
      }}
    >
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  );
});

/**
 * Preload critical images
 * Call this for hero/above-the-fold images
 */
export function preloadImage(src: string): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Hook to preload an array of images
 */
export function usePreloadImages(srcs: string[]): void {
  useEffect(() => {
    srcs.forEach(preloadImage);
  }, [srcs]);
}

export default OptimizedImage;
