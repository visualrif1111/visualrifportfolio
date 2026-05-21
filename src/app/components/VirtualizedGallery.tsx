"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { OptimizedImage } from './OptimizedImage';
import { usePerformanceContext } from '../context/PerformanceContext';
import { motion } from 'motion/react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  category?: string;
}

interface VirtualizedGalleryProps {
  images: GalleryImage[];
  columns?: number | { mobile: number; tablet: number; desktop: number };
  gap?: number;
  itemHeight?: number;
  overscan?: number;
  enableFiltering?: boolean;
  categories?: string[];
  searchable?: boolean;
  className?: string;
  onImageClick?: (image: GalleryImage) => void;
}

/**
 * VirtualizedGallery - A high-performance gallery component
 * 
 * Features:
 * - Virtualized rendering (only renders visible items)
 * - Smooth scrolling with pagination support
 * - Category filtering
 * - Search functionality
 * - Responsive column layout
 * - Performance-tier aware animations
 * - Memory efficient for hundreds of images
 */
export function VirtualizedGallery({
  images,
  columns = { mobile: 2, tablet: 3, desktop: 4 },
  gap = 16,
  itemHeight = 300,
  overscan = 3,
  enableFiltering = false,
  categories = [],
  searchable = false,
  className = '',
  onImageClick,
}: VirtualizedGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [columnCount, setColumnCount] = useState(4);
  const { isLowEnd, config } = usePerformanceContext();

  // Determine column count based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (typeof columns === 'number') {
        setColumnCount(columns);
      } else {
        if (width < 640) {
          setColumnCount(columns.mobile);
        } else if (width < 1024) {
          setColumnCount(columns.tablet);
        } else {
          setColumnCount(columns.desktop);
        }
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns, { passive: true });
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Filter images based on category and search
  const filteredImages = useMemo(() => {
    let result = images;
    
    if (activeCategory) {
      result = result.filter(img => img.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(img => 
        img.alt.toLowerCase().includes(query) ||
        img.category?.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [images, activeCategory, searchQuery]);

  // Calculate row height including gap
  const rowHeight = itemHeight + gap;
  const totalRows = Math.ceil(filteredImages.length / columnCount);
  const totalHeight = totalRows * rowHeight;

  // Update visible range on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollTop = container.scrollTop;
        
        // Skip if scroll position hasn't changed significantly
        if (Math.abs(scrollTop - lastScrollTop) < 10) {
          rafId = 0;
          return;
        }
        
        lastScrollTop = scrollTop;
        const containerHeight = container.clientHeight;
        
        const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
        const endRow = Math.min(
          totalRows,
          Math.ceil((scrollTop + containerHeight) / rowHeight) + overscan
        );
        
        const start = startRow * columnCount;
        const end = Math.min(endRow * columnCount, filteredImages.length);
        
        setVisibleRange(prev => {
          if (prev.start !== start || prev.end !== end) {
            return { start, end };
          }
          return prev;
        });
        
        rafId = 0;
      });
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [rowHeight, totalRows, columnCount, filteredImages.length, overscan]);

  // Get visible items with their positions
  const visibleItems = useMemo(() => {
    return filteredImages.slice(visibleRange.start, visibleRange.end).map((image, index) => {
      const absoluteIndex = visibleRange.start + index;
      const row = Math.floor(absoluteIndex / columnCount);
      const col = absoluteIndex % columnCount;
      
      return {
        ...image,
        index: absoluteIndex,
        style: {
          position: 'absolute' as const,
          top: row * rowHeight,
          left: `calc(${(col / columnCount) * 100}% + ${gap / 2}px)`,
          width: `calc(${100 / columnCount}% - ${gap}px)`,
          height: itemHeight,
        },
      };
    });
  }, [filteredImages, visibleRange, columnCount, rowHeight, itemHeight, gap]);

  // Unique categories from images
  const uniqueCategories = useMemo(() => {
    if (categories.length > 0) return categories;
    const cats = new Set(images.map(img => img.category).filter(Boolean));
    return Array.from(cats) as string[];
  }, [images, categories]);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Filters and Search */}
      {(enableFiltering || searchable) && (
        <div className="flex flex-wrap gap-4 mb-6 sticky top-0 z-10 bg-black/80 backdrop-blur-sm py-4 -mx-4 px-4">
          {/* Category Filters */}
          {enableFiltering && uniqueCategories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-sm tracking-wider uppercase transition-colors ${
                  !activeCategory 
                    ? 'bg-[#50C1BA] text-black' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {uniqueCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm tracking-wider uppercase transition-colors ${
                    activeCategory === category
                      ? 'bg-[#50C1BA] text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Search */}
          {searchable && (
            <div className="flex-1 min-w-[200px] max-w-md">
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#50C1BA] transition-colors"
              />
            </div>
          )}
        </div>
      )}

      {/* Results count */}
      {(activeCategory || searchQuery) && (
        <p className="text-gray-400 text-sm mb-4">
          Showing {filteredImages.length} of {images.length} images
        </p>
      )}

      {/* Gallery Container */}
      <div
        ref={containerRef}
        className="relative overflow-y-auto overflow-x-hidden"
        style={{ height: '70vh', minHeight: '400px' }}
      >
        {/* Spacer for total height */}
        <div style={{ height: totalHeight, position: 'relative' }}>
          {/* Visible Items */}
          {visibleItems.map((item) => (
            <GalleryItem
              key={item.id}
              image={item}
              style={item.style}
              onClick={onImageClick}
              isLowEnd={isLowEnd}
              enableHoverEffects={config.enableHoverEffects}
            />
          ))}
        </div>
      </div>

      {/* Load more indicator */}
      {filteredImages.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-400">No images found</p>
        </div>
      )}
    </div>
  );
}

// Individual gallery item component
const GalleryItem = React.memo(function GalleryItem({
  image,
  style,
  onClick,
  isLowEnd,
  enableHoverEffects,
}: {
  image: GalleryImage & { index: number };
  style: React.CSSProperties;
  onClick?: (image: GalleryImage) => void;
  isLowEnd: boolean;
  enableHoverEffects: boolean;
}) {
  const handleClick = useCallback(() => {
    onClick?.(image);
  }, [onClick, image]);

  // Low-end: Simple static rendering
  if (isLowEnd) {
    return (
      <div
        style={style}
        className="cursor-pointer overflow-hidden bg-gray-900"
        onClick={handleClick}
      >
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
      </div>
    );
  }

  // High/Medium: Animated rendering
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: (image.index % 12) * 0.05 }}
      className={`cursor-pointer overflow-hidden bg-gray-900 ${
        enableHoverEffects ? 'group' : ''
      }`}
      onClick={handleClick}
    >
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        className={`w-full h-full object-cover ${
          enableHoverEffects 
            ? 'transition-transform duration-500 group-hover:scale-110' 
            : ''
        }`}
        containerClassName="w-full h-full"
      />
      {enableHoverEffects && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-4">
          <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            {image.alt}
          </span>
        </div>
      )}
    </motion.div>
  );
});

/**
 * Paginated Gallery - Alternative for simpler use cases
 * Better for SEO and initial load performance
 */
export function PaginatedGallery({
  images,
  itemsPerPage = 12,
  columns = { mobile: 2, tablet: 3, desktop: 4 },
  gap = 16,
  className = '',
  onImageClick,
}: {
  images: GalleryImage[];
  itemsPerPage?: number;
  columns?: number | { mobile: number; tablet: number; desktop: number };
  gap?: number;
  className?: string;
  onImageClick?: (image: GalleryImage) => void;
}) {
  const [page, setPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>([]);
  const { isLowEnd, config } = usePerformanceContext();
  const loaderRef = useRef<HTMLDivElement>(null);

  // Load more images when reaching the end
  useEffect(() => {
    const endIndex = page * itemsPerPage;
    setLoadedImages(images.slice(0, endIndex));
  }, [page, itemsPerPage, images]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadedImages.length < images.length) {
          setPage(p => p + 1);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(loader);
    return () => observer.disconnect();
  }, [loadedImages.length, images.length]);

  // Responsive columns
  const [columnCount, setColumnCount] = useState(4);
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (typeof columns === 'number') {
        setColumnCount(columns);
      } else {
        if (width < 640) setColumnCount(columns.mobile);
        else if (width < 1024) setColumnCount(columns.tablet);
        else setColumnCount(columns.desktop);
      }
    };
    updateColumns();
    window.addEventListener('resize', updateColumns, { passive: true });
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  return (
    <div className={className}>
      {/* Grid Layout */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {loadedImages.map((image, index) => (
          <GalleryGridItem
            key={image.id}
            image={image}
            index={index}
            onClick={onImageClick}
            isLowEnd={isLowEnd}
            enableHoverEffects={config.enableHoverEffects}
          />
        ))}
      </div>

      {/* Load more trigger */}
      {loadedImages.length < images.length && (
        <div ref={loaderRef} className="flex justify-center py-8">
          <div className="w-8 h-8 border-2 border-[#50C1BA] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

// Grid item for paginated gallery
const GalleryGridItem = React.memo(function GalleryGridItem({
  image,
  index,
  onClick,
  isLowEnd,
  enableHoverEffects,
}: {
  image: GalleryImage;
  index: number;
  onClick?: (image: GalleryImage) => void;
  isLowEnd: boolean;
  enableHoverEffects: boolean;
}) {
  if (isLowEnd) {
    return (
      <div
        className="aspect-square cursor-pointer overflow-hidden bg-gray-900"
        onClick={() => onClick?.(image)}
      >
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: (index % 12) * 0.05 }}
      className={`aspect-square cursor-pointer overflow-hidden bg-gray-900 ${
        enableHoverEffects ? 'group' : ''
      }`}
      onClick={() => onClick?.(image)}
    >
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        className={`w-full h-full object-cover ${
          enableHoverEffects
            ? 'transition-transform duration-500 group-hover:scale-110'
            : ''
        }`}
        containerClassName="w-full h-full"
      />
    </motion.div>
  );
});

export default VirtualizedGallery;
