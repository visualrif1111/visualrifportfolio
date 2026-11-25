import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
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

const noopSubscribe = () => () => {};

const pad = (n: number) => String(n).padStart(2, '0');

const ROUND_BUTTON =
  'flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-[background-color,color,border-color,transform] duration-300 hover:bg-white hover:text-black hover:border-white active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#50C1BA] focus-visible:ring-offset-2 focus-visible:ring-offset-black';
const LABEL = "font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.35em] uppercase";

export function GalleryLightbox({ images, startIndex, isOpen, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const total = images.length;
  // Portalled to <body>: inside the page the header (and the page's own stacking contexts) sat on top of the controls.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  // Sync index when opening
  const openKey = isOpen ? startIndex : null;
  const [prevOpenKey, setPrevOpenKey] = useState(openKey);
  if (openKey !== prevOpenKey) {
    setPrevOpenKey(openKey);
    if (openKey !== null) {
      setIndex(openKey);
      setDirection(0);
    }
  }

  const go = useCallback((delta: number) => {
    setDirection(delta);
    setIndex(prev => (prev + delta + total) % total);
  }, [total]);

  // Keyboard navigation, focus trap, body scroll lock, focus restore
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'Tab' && dialogRef.current) {
        const items = [...dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])')].filter(el => el.offsetParent !== null);
        if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', handler);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const id = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 50);

    return () => {
      clearTimeout(id);
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = prev;
      opener?.focus?.({ preventScroll: true });
    };
  }, [isOpen, go, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) onClose();
  };

  // Tapping the empty space around the image closes; the image and controls don't.
  const closeOnBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, scale: 0.96, x: d > 0 ? 32 : d < 0 ? -32 : 0 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 0.96, x: d > 0 ? -32 : d < 0 ? 32 : 0 }),
  };

  const current = images[index];
  if (!current || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          className="fixed inset-0 z-[350] flex flex-col bg-black/95 backdrop-blur-sm select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar: counter + close */}
          <div className="relative z-20 flex items-center justify-between gap-6 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 md:px-10 md:pt-8" onClick={closeOnBackdrop}>
            <span className={`${LABEL} text-[#50C1BA] tabular-nums`} aria-live="polite">
              {pad(index + 1)} <span className="text-white/40">/ {pad(total)}</span>
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="group flex items-center gap-4 outline-none"
            >
              <span className={`${LABEL} hidden md:inline text-white/60 transition-colors group-hover:text-white`}>
                Close <span className="ml-2 text-white/30">Esc</span>
              </span>
              <span className={`${ROUND_BUTTON} group-hover:bg-white group-hover:text-black group-hover:border-white group-focus-visible:ring-2 group-focus-visible:ring-[#50C1BA] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black`}>
                <X size={22} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-90" aria-hidden />
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="relative flex-1 min-h-0 flex items-center justify-center px-3 md:px-28" onClick={closeOnBackdrop}>
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
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </AnimatePresence>

            {/* Desktop: side arrows */}
            {total > 1 && (
              <>
                <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${ROUND_BUTTON} hidden md:flex absolute left-8 top-1/2 -translate-y-1/2`}>
                  <ChevronLeft size={22} strokeWidth={1.5} aria-hidden />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${ROUND_BUTTON} hidden md:flex absolute right-8 top-1/2 -translate-y-1/2`}>
                  <ChevronRight size={22} strokeWidth={1.5} aria-hidden />
                </button>
              </>
            )}
          </div>

          {/* Bottom bar: caption, with prev / next in thumb reach on mobile */}
          <div className="relative z-20 flex items-center justify-between gap-4 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] md:justify-center md:px-10 md:pb-8" onClick={closeOnBackdrop}>
            {total > 1 && (
              <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${ROUND_BUTTON} md:hidden shrink-0`}>
                <ChevronLeft size={22} strokeWidth={1.5} aria-hidden />
              </button>
            )}
            <p className={`${LABEL} min-w-0 text-white/60 text-center leading-relaxed`}>{current.alt}</p>
            {total > 1 && (
              <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${ROUND_BUTTON} md:hidden shrink-0`}>
                <ChevronRight size={22} strokeWidth={1.5} aria-hidden />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
