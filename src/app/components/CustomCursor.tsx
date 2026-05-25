import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import svgPaths from "../../imports/Asset61-1/svg-b0s0st4ztg";

// Default ring radius in SVG user units (1 unit = 1 CSS px, no viewBox).
// Maximum radius = BASE_R × 2.5 (view scale) = 45 px, which fits the 90×90 SVG.
const BASE_R = 18;

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const viewRef   = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) { setIsTouchDevice(true); return; }

    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);

    // dot:       24 px CSS div  → half = 12
    // ring SVG:  90 × 90 px    → half = 45  (keeps cx=45,cy=45 on the cursor)
    // view text: 36 × 36 px div → half = 18  (36 px flex div centred on cursor)
    const DOT_HALF  = 12;
    const SVG_HALF  = 45;
    const VIEW_HALF = 18;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;
    let isVisible = false, hasShown = false;
    let variant: 'default' | 'hover' | 'view' = 'default';
    let dotScale = 1, dotOpacity = 0, ringScale = 1, ringOpacity = 0;
    let rafId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Ring centre lerps toward mouse for a subtle premium trail
      ringX = lerp(ringX, mouseX, 0.22);
      ringY = lerp(ringY, mouseY, 0.22);

      const targetDotScale   = variant !== 'default' ? 0 : 1;
      const targetRingScale  = variant === 'view' ? 2.5 : variant === 'hover' ? 1.8 : 1;
      const targetDotOpacity  = isVisible && variant === 'default' ? 1 : 0;
      const targetRingOpacity = isVisible ? (variant === 'default' ? 0.25 : 0.9) : 0;

      dotScale    = lerp(dotScale,    targetDotScale,    0.22);
      ringScale   = lerp(ringScale,   targetRingScale,   0.22);
      dotOpacity  = lerp(dotOpacity,  targetDotOpacity,  0.22);
      ringOpacity = lerp(ringOpacity, targetRingOpacity, 0.22);

      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${mouseX - DOT_HALF}px,${mouseY - DOT_HALF}px,0) scale(${dotScale})`;
        dot.style.opacity   = dotOpacity.toFixed(3);
      }

      // Ring: translate the SVG wrapper via GPU, then update the SVG circle's
      // r attribute each frame. Because r is a vector attribute the browser
      // re-rasterises the circle at the display's native DPR — no compositor-
      // layer upscaling and therefore no blur on Retina / high-DPI screens.
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate3d(${ringX - SVG_HALF}px,${ringY - SVG_HALF}px,0)`;
        ring.style.opacity   = ringOpacity.toFixed(3);
      }
      const circle = circleRef.current;
      if (circle) {
        circle.setAttribute('r', (BASE_R * ringScale).toFixed(1));
      }

      // VIEW label follows ring centre
      const view = viewRef.current;
      if (view) {
        view.style.transform = `translate3d(${ringX - VIEW_HALF}px,${ringY - VIEW_HALF}px,0)`;
        view.style.opacity   = (isVisible && variant === 'view') ? '1' : '0';
      }

      rafId = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Push dot position synchronously in the event handler for zero-lag dot
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${mouseX - DOT_HALF}px,${mouseY - DOT_HALF}px,0) scale(${dotScale})`;
      }

      if (!hasShown) { hasShown = true; isVisible = true; }
    };

    const handleMouseLeave = () => { isVisible = false; };
    const handleMouseEnter = () => { if (hasShown) isVisible = true; };

    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('[data-cursor="view"]'))                                                         { variant = 'view';    return; }
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
        /*
         * SVG ring — 90×90 CSS px, circle at cx=45 cy=45.
         * r is animated via setAttribute (not CSS scale) so the browser
         * rasterises the stroke at native device DPR each frame.
         * overflow="visible" prevents the 1 px stroke from being clipped when
         * r is exactly 45 (the stroke centre sits on the SVG boundary).
         * vector-effect="non-scaling-stroke" keeps stroke-width at a true 1 px
         * regardless of any ancestor CSS transforms.
         */
        <svg
          ref={ringRef}
          className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform"
          style={{ opacity: 0, width: '90px', height: '90px' }}
          overflow="visible"
          aria-hidden="true"
        >
          <circle
            ref={circleRef}
            cx={45}
            cy={45}
            r={BASE_R}
            stroke="#50C1BA"
            strokeWidth={1}
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {!prefersReduced && (
        <div
          ref={viewRef}
          className="fixed top-0 left-0 pointer-events-none z-[99999] w-9 h-9 flex items-center justify-center will-change-transform"
          style={{ opacity: 0 }}
        >
          <span
            className="font-['Rajdhani',sans-serif] text-[10px] tracking-[0.3em] text-[#50C1BA] font-semibold uppercase select-none"
            style={{ WebkitFontSmoothing: 'antialiased' } as React.CSSProperties}
          >
            VIEW
          </span>
        </div>
      )}

      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ opacity: 0 }}
      >
        <svg
          className="w-6 h-6 drop-shadow-[0_0_8px_rgba(80,193,186,0.5)]"
          viewBox="0 0 178.44 178.564"
          fill="none"
        >
          <g>
            <path d={svgPaths.p20c17b00} fill="#50C1BA" />
            <path d={svgPaths.p20d45700} fill="#50C1BA" />
          </g>
        </svg>
      </div>
    </>
  );
}
