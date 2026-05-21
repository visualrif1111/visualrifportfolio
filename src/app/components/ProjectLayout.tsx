"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { usePerformanceContext } from '../context/PerformanceContext';
import { useScrollToTop, useSmoothScroll } from './SmoothScrollProvider';
import { LazySection, useInViewOnce } from './LazyLoad';
import { OptimizedImage, preloadImage } from './OptimizedImage';
import { Footer } from './Footer';

interface ProjectLayoutProps {
  children: React.ReactNode;
  heroImage: string;
  heroAlt: string;
  title: string;
  heroHeight?: string;
  heroOverlayOpacity?: number;
  preloadImages?: string[];
}

/**
 * ProjectLayout - Performance-optimized layout for project pages
 * 
 * Features:
 * - Preloads critical hero image
 * - Lazy loads below-the-fold content
 * - Scroll-to-top on mount
 * - Performance-tier aware animations
 * - Optimized image loading strategy
 */
export function ProjectLayout({
  children,
  heroImage,
  heroAlt,
  title,
  heroHeight = '50vh',
  heroOverlayOpacity = 50,
  preloadImages = [],
}: ProjectLayoutProps) {
  const navigate = useNavigate();
  const { isLowEnd, config } = usePerformanceContext();

  // Scroll to top on mount
  useScrollToTop([]);

  // Preload hero and critical images
  useEffect(() => {
    preloadImage(heroImage);
    preloadImages.slice(0, 3).forEach(preloadImage);
  }, [heroImage, preloadImages]);

  return (
    <div className="relative bg-transparent text-white min-h-screen font-['Barlow_Semi_Condensed',sans-serif] selection:bg-[#50C1BA] selection:text-black">
      {/* Back Button */}
      <ProjectBackButton onClick={() => navigate('/')} isLowEnd={isLowEnd} />

      {/* Hero Section */}
      <ProjectHero
        image={heroImage}
        alt={heroAlt}
        title={title}
        height={heroHeight}
        overlayOpacity={heroOverlayOpacity}
        isLowEnd={isLowEnd}
        config={config}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer className="md:pl-[280px]" />
    </div>
  );
}

/**
 * Back button component
 */
function ProjectBackButton({
  onClick,
  isLowEnd,
}: {
  onClick: () => void;
  isLowEnd: boolean;
}) {
  if (isLowEnd) {
    return (
      <button
        onClick={onClick}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white"
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
      </button>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={onClick}
      className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 hover:text-[#50C1BA] transition-colors"
      aria-label="Go back"
    >
      <ArrowLeft size={20} />
    </motion.button>
  );
}

/**
 * Hero section component
 */
function ProjectHero({
  image,
  alt,
  title,
  height,
  overlayOpacity,
  isLowEnd,
  config,
}: {
  image: string;
  alt: string;
  title: string;
  height: string;
  overlayOpacity: number;
  isLowEnd: boolean;
  config: ReturnType<typeof import('../hooks/usePerformance').getAnimationConfig>;
}) {
  if (isLowEnd) {
    return (
      <section className="relative w-full overflow-hidden" style={{ height }}>
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src={image}
            alt={alt}
            priority={true}
            className="w-full h-full object-cover object-center"
            containerClassName="w-full h-full"
            placeholderColor="rgba(0, 0, 0, 0.8)"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[36px] md:text-[64px] tracking-[0.15em] uppercase text-white">
            {title}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ height }}>
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src={image}
          alt={alt}
          priority={true}
          className="w-full h-full object-cover object-center"
          containerClassName="w-full h-full"
          placeholderColor="rgba(0, 0, 0, 0.8)"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: config.animationDuration, delay: 0.2 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[36px] md:text-[64px] tracking-[0.15em] uppercase text-white">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}

/**
 * Section wrapper with lazy loading and animations
 */
interface ProjectSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'transparent' | 'dark' | 'gradient';
  animate?: boolean;
  lazyLoad?: boolean;
  minHeight?: number;
}

export function ProjectSection({
  children,
  className = '',
  background = 'transparent',
  animate = true,
  lazyLoad = true,
  minHeight = 400,
}: ProjectSectionProps) {
  const { isLowEnd, config } = usePerformanceContext();
  const [ref, isInView] = useInViewOnce({ rootMargin: '100px' });

  const bgClass = {
    transparent: '',
    dark: 'bg-black/30',
    gradient: 'bg-gradient-to-b from-transparent via-black/20 to-transparent',
  }[background];

  const content = (
    <section className={`relative ${bgClass} ${className}`}>
      {children}
    </section>
  );

  // No animation for low-end devices
  if (isLowEnd || !animate) {
    if (lazyLoad) {
      return (
        <LazySection minHeight={minHeight} rootMargin="200px">
          {content}
        </LazySection>
      );
    }
    return content;
  }

  // Animated section
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: config.animationDuration, ease: 'easeOut' }}
      >
        {content}
      </motion.div>
    </div>
  );
}

/**
 * Image grid optimized for project galleries
 */
interface ImageGridProps {
  images: Array<{ src: string; alt: string; span?: 'full' | 'half' | 'third' }>;
  gap?: number;
  className?: string;
}

export function ImageGrid({ images, gap = 16, className = '' }: ImageGridProps) {
  const { isLowEnd, config } = usePerformanceContext();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className}`}
      style={{ gap }}
    >
      {images.map((image, index) => {
        const spanClass = {
          full: 'md:col-span-2 lg:col-span-3',
          half: 'md:col-span-1 lg:col-span-1',
          third: 'md:col-span-1 lg:col-span-1',
        }[image.span || 'half'];

        return (
          <ImageGridItem
            key={index}
            src={image.src}
            alt={image.alt}
            className={spanClass}
            index={index}
            isLowEnd={isLowEnd}
            enableHoverEffects={config.enableHoverEffects}
          />
        );
      })}
    </div>
  );
}

function ImageGridItem({
  src,
  alt,
  className,
  index,
  isLowEnd,
  enableHoverEffects,
}: {
  src: string;
  alt: string;
  className: string;
  index: number;
  isLowEnd: boolean;
  enableHoverEffects: boolean;
}) {
  const [ref, isInView] = useInViewOnce({ rootMargin: '100px' });

  if (isLowEnd) {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        {isInView && (
          <OptimizedImage
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            containerClassName="w-full aspect-video"
          />
        )}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className={`relative overflow-hidden ${enableHoverEffects ? 'group' : ''} ${className}`}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          enableHoverEffects ? 'transition-transform duration-500 group-hover:scale-105' : ''
        }`}
        containerClassName="w-full aspect-video"
      />
    </motion.div>
  );
}

/**
 * Content block with responsive text
 */
interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
  className?: string;
}

export function ContentBlock({
  title,
  children,
  titleColor = '#50C1BA',
  className = '',
}: ContentBlockProps) {
  return (
    <div className={className}>
      <h2
        className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase mb-6"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
        {children}
      </div>
    </div>
  );
}

/**
 * Diamond separator component
 */
export function DiamondSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-8 h-8 rotate-45 border border-[#50C1BA] flex items-center justify-center">
        <div className="w-3 h-3 bg-[#50C1BA]" />
      </div>
    </div>
  );
}

export default ProjectLayout;
