import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import svgPaths from "../../imports/Asset61-1/svg-b0s0st4ztg";

export function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 40, restDelta: 0.01 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 40, restDelta: 0.01 });

  const ringX = useSpring(cursorX, { stiffness: 250, damping: 28, restDelta: 0.01 });
  const ringY = useSpring(cursorY, { stiffness: 250, damping: 28, restDelta: 0.01 });

  const hasShown = useRef(false);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) {
      setIsTouchDevice(true);
      return;
    }

    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);

    let mouseX = -200;
    let mouseY = -200;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          cursorX.set(mouseX);
          cursorY.set(mouseY);
          rafId = 0;
          if (!hasShown.current) {
            hasShown.current = true;
            setIsVisible(true);
          }
        });
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => { if (hasShown.current) setIsVisible(true); };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) {
        setCursorVariant('view');
        return;
      }
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setCursorVariant('hover');
        return;
      }
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {!prefersReduced && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform"
          style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
          animate={{
            scale: cursorVariant === 'view' ? 2.5 : cursorVariant === 'hover' ? 1.8 : 1,
            opacity: isVisible ? (cursorVariant === 'default' ? 0.25 : 0.9) : 0,
            backgroundColor: cursorVariant === 'view' ? 'rgba(80,193,186,0.08)' : 'rgba(0,0,0,0)',
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 28 }}
        >
          <div className="w-9 h-9 rounded-full border border-[#50C1BA]" />
        </motion.div>
      )}

      {!prefersReduced && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[99999] flex items-center justify-center will-change-transform"
          style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
          animate={{ opacity: isVisible && cursorVariant === 'view' ? 1 : 0, scale: cursorVariant === 'view' ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-['Rajdhani',sans-serif] text-[9px] tracking-[0.35em] text-[#50C1BA] font-semibold uppercase select-none">VIEW</span>
        </motion.div>
      )}

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: cursorVariant !== 'default' ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <svg className="w-6 h-6 drop-shadow-[0_0_8px_rgba(80,193,186,0.5)]" viewBox="0 0 178.44 178.564" fill="none">
          <g>
            <path d={svgPaths.p20c17b00} fill="#50C1BA" />
            <path d={svgPaths.p20d45700} fill="#50C1BA" />
          </g>
        </svg>
      </motion.div>
    </>
  );
}
