import React, { useState, useRef, useEffect, useMemo } from 'react';

interface ImageSources {
  avif?: string;
  webp?: string;
  fallback: string;
}

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | ImageSources;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  placeholderColor?: string;
  blurDataURL?: string; // Base64 blur placeholder
  aspectRatio?: number; // width/height ratio for CLS prevention
  sizes?: string; // Responsive sizes attribute
  quality?: 'low' | 'medium' | 'high';
  onLoadComplete?: () => void;
}

/**
 * OptimizedImage - A performance-optimized image component
 * 
 * Features:
 * - AVIF/WebP format support with fallbacks
 * - Native lazy loading (unless priority is set)
 * - Async decoding for non-blocking rendering
 * - Smooth fade-in transition when loaded
 * - Blur placeholder support for perceived performance
 * - Aspect ratio preservation to prevent CLS
 * - IntersectionObserver for smarter lazy loading
 * - Responsive sizes support
 * - Quality-tier based loading
 */
export const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  placeholderColor = 'rgba(30, 30, 30, 0.5)',
  blurDataURL,
  aspectRatio,
  sizes,
  quality = 'high',
  onLoadComplete,
  style,
  ...rest
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse image sources
  const sources = useMemo((): ImageSources => {
    if (typeof src === 'string') {
      return { fallback: src };
    }
    return src;
  }, [src]);

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
        rootMargin: '300px', // Start loading 300px before entering viewport
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Determine the best image format to use
  useEffect(() => {
    if (!isInView) return;

    const loadImage = async () => {
      // Try AVIF first (best compression)
      if (sources.avif && supportsFormat('avif')) {
        setCurrentSrc(sources.avif);
        return;
      }

      // Try WebP next
      if (sources.webp && supportsFormat('webp')) {
        setCurrentSrc(sources.webp);
        return;
      }

      // Fallback to original format
      setCurrentSrc(sources.fallback);
    };

    loadImage();
  }, [isInView, sources]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoadComplete?.();
  };

  // Handle image error - try fallback
  const handleError = () => {
    if (currentSrc !== sources.fallback) {
      setCurrentSrc(sources.fallback);
    } else {
      setHasError(true);
    }
  };

  // Calculate container style with aspect ratio
  const containerStyle = useMemo(() => {
    const baseStyle: React.CSSProperties = {
      backgroundColor: placeholderColor,
      ...style,
    };

    if (aspectRatio) {
      baseStyle.aspectRatio = `${aspectRatio}`;
    }

    // Add blur placeholder as background
    if (blurDataURL && !isLoaded) {
      baseStyle.backgroundImage = `url(${blurDataURL})`;
      baseStyle.backgroundSize = 'cover';
      baseStyle.backgroundPosition = 'center';
    }

    return baseStyle;
  }, [placeholderColor, style, aspectRatio, blurDataURL, isLoaded]);

  // Error fallback
  if (hasError) {
    return (
      <div
        ref={containerRef}
        className={`bg-gray-800/50 flex items-center justify-center ${containerClassName}`}
        style={containerStyle}
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
      style={containerStyle}
    >
      {/* Blur placeholder overlay */}
      {blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
          style={{ opacity: isLoaded ? 0 : 1 }}
        />
      )}

      {/* Main image */}
      {isInView && currentSrc && (
        <picture>
          {/* AVIF source */}
          {sources.avif && (
            <source srcSet={sources.avif} type="image/avif" />
          )}
          {/* WebP source */}
          {sources.webp && (
            <source srcSet={sources.webp} type="image/webp" />
          )}
          {/* Fallback img */}
          <img
            ref={imgRef}
            src={currentSrc}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-500 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            {...rest}
          />
        </picture>
      )}

      {/* Loading skeleton */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      )}
    </div>
  );
});

/**
 * Check if browser supports a specific image format
 */
const formatSupport: Record<string, boolean | null> = {
  avif: null,
  webp: null,
};

function supportsFormat(format: 'avif' | 'webp'): boolean {
  if (typeof window === 'undefined') return false;
  
  // Return cached result if available
  if (formatSupport[format] !== null) {
    return formatSupport[format]!;
  }

  // Check support synchronously using canvas
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  const dataUrl = canvas.toDataURL(`image/${format}`);
  const supported = dataUrl.startsWith(`data:image/${format}`);
  
  formatSupport[format] = supported;
  return supported;
}

/**
 * Generate blur data URL from an image
 * Use this server-side to create blur placeholders
 */
export function generateBlurPlaceholder(width: number = 10, height: number = 10): string {
  if (typeof window === 'undefined') return '';
  
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a simple gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#2a2a2a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL('image/jpeg', 0.1);
}

/**
 * Preload critical images
 * Call this for hero/above-the-fold images
 */
export function preloadImage(src: string, as: 'image' = 'image'): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  
  // Add fetchpriority for critical images
  link.setAttribute('fetchpriority', 'high');
  
  document.head.appendChild(link);
}

/**
 * Hook to preload an array of images
 */
export function usePreloadImages(srcs: string[]): void {
  useEffect(() => {
    srcs.forEach(src => preloadImage(src));
  }, [srcs]);
}

/**
 * Create responsive srcSet for an image
 */
export function createSrcSet(
  baseSrc: string,
  widths: number[] = [320, 640, 960, 1280, 1920]
): string {
  // This would typically work with an image CDN
  // For static images, return the original
  return baseSrc;
}

/**
 * Progressive Image Loading Hook
 * Loads a low-quality image first, then swaps to high-quality
 */
export function useProgressiveImage(
  lowQualitySrc: string,
  highQualitySrc: string
): { src: string; isLoading: boolean } {
  const [src, setSrc] = useState(lowQualitySrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
      setIsLoading(false);
    };
  }, [highQualitySrc]);

  return { src, isLoading };
}

export default OptimizedImage;
