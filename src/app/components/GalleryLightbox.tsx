import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
  startIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryLightbox({ images, startIndex, isOpen, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const total = images.length;

  // Sync index when opening
  useEffect(() => {
    if (isOpen) {
      setIndex(startIndex);
      setDirection(0);
    }
  }, [isOpen, startIndex]);

  const go = useCallback((delta: number) => {
    setDirection(delta);
    setIndex(prev => (prev + delta + total) % total);
  }, [total]);

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', handler);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = prev;
    };
  }, [isOpen, go, onClose]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => closeRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, scale: 0.96, x: d > 0 ? 32 : d < 0 ? -32 : 0 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 0.96, x: d > 0 ? -32 : d < 0 ? 32 : 0 }),
  };

  const current = images[index];
  if (!current) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* UI layer */}
          <div
            className="relative z-10 w-full h-full flex flex-col items-center justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top bar: counter + close */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-5 py-4 md:px-8 md:py-6 z-20">
              <span
                className="font-['Rajdhani',sans-serif] font-semibold text-[12px] md:text-[13px] tracking-[0.35em] text-[#50C1BA] uppercase"
                aria-live="polite"
              >
                {index + 1} / {total}
              </span>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close gallery"
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center w-full px-14 md:px-20 max-h-[85vh] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.img
                  key={index}
                  src={current.src}
                  alt={current.alt}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="max-h-[80vh] max-w-full object-contain"
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {/* Prev / Next */}
            {total > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); go(-1); }}
                  aria-label="Previous image"
                  className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-gray-500 hover:text-[#50C1BA] transition-colors focus:outline-none z-20"
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(1); }}
                  aria-label="Next image"
                  className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-gray-500 hover:text-[#50C1BA] transition-colors focus:outline-none z-20"
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center px-5 py-4 md:px-8 md:py-6 z-20">
              <p className="font-['Rajdhani',sans-serif] text-[11px] tracking-[0.3em] text-gray-700 uppercase text-center">
                {current.alt}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
