import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import svgPaths from "../../imports/Asset61-1/svg-b0s0st4ztg";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) { setIsTouchDevice(true); return; }

    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);

    // w-6 = 24px → half = 12, w-9 = 36px → half = 18
    const DOT_HALF  = 12;
    const RING_HALF = 18;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;
    let isVisible = false, hasShown = false;
    let variant: 'default' | 'hover' | 'view' = 'default';
    let dotScale = 1, dotOpacity = 0, ringScale = 1, ringOpacity = 0;
    let rafId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Ring lerps toward mouse for a subtle premium trail
      ringX = lerp(ringX, mouseX, 0.22);
      ringY = lerp(ringY, mouseY, 0.22);

      // Scale/opacity — lerped so state transitions feel smooth, not jarring
      const targetDotScale   = variant !== 'default' ? 0 : 1;
      const targetRingScale  = variant === 'view' ? 2.5 : variant === 'hover' ? 1.8 : 1;
      const targetDotOpacity  = isVisible && variant === 'default' ? 1 : 0;
      const targetRingOpacity = isVisible ? (variant === 'default' ? 0.25 : 0.9) : 0;

      dotScale   = lerp(dotScale,   targetDotScale,   0.22);
      ringScale  = lerp(ringScale,  targetRingScale,  0.22);
      dotOpacity = lerp(dotOpacity, targetDotOpacity, 0.22);
      ringOpacity= lerp(ringOpacity,targetRingOpacity,0.22);

      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${mouseX - DOT_HALF}px,${mouseY - DOT_HALF}px) scale(${dotScale})`;
        dot.style.opacity = dotOpacity.toFixed(3);
      }

      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate(${ringX - RING_HALF}px,${ringY - RING_HALF}px) scale(${ringScale})`;
        ring.style.opacity = ringOpacity.toFixed(3);
      }

      const view = viewRef.current;
      if (view) {
        view.style.transform = `translate(${ringX - RING_HALF}px,${ringY - RING_HALF}px)`;
        view.style.opacity = (isVisible && variant === 'view') ? '1' : '0';
      }

      rafId = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Set dot position directly in the event handler — no RAF delay.
      // Browsers batch DOM mutations and paint at frame end, so this is as
      // early in the pipeline as it is possible to be.
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${mouseX - DOT_HALF}px,${mouseY - DOT_HALF}px) scale(${dotScale})`;
      }

      if (!hasShown) { hasShown = true; isVisible = true; }
    };

    const handleMouseLeave = () => { isVisible = false; };
    const handleMouseEnter = () => { if (hasShown) isVisible = true; };

    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('[data-cursor="view"]'))                                                        { variant = 'view';    return; }
      if (t.closest('a') || t.closest('button') || t.closest('[role="button"]') || t.classList.contains('cursor-pointer')) { variant = 'hover';   return; }
      variant = 'default';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {!prefersReduced && (
        <div
          ref={ringRef}
          className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform"
          style={{ opacity: 0 }}
        >
          <div className="w-9 h-9 rounded-full border border-[#50C1BA]" />
        </div>
      )}

      {!prefersReduced && (
        <div
          ref={viewRef}
          className="fixed top-0 left-0 pointer-events-none z-[99999] w-9 h-9 flex items-center justify-center will-change-transform"
          style={{ opacity: 0 }}
        >
          <span className="font-['Rajdhani',sans-serif] text-[9px] tracking-[0.35em] text-[#50C1BA] font-semibold uppercase select-none">VIEW</span>
        </div>
      )}

      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ opacity: 0 }}
      >
        <svg className="w-6 h-6 drop-shadow-[0_0_8px_rgba(80,193,186,0.5)]" viewBox="0 0 178.44 178.564" fill="none">
          <g>
            <path d={svgPaths.p20c17b00} fill="#50C1BA" />
            <path d={svgPaths.p20d45700} fill="#50C1BA" />
          </g>
        </svg>
      </div>
    </>
  );
}
