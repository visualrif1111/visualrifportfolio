import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import svgPaths from "../../imports/Asset61-1/svg-b0s0st4ztg";

export function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view'>('default');
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const dotX = useSpring(cursorX, { stiffness: 600, damping: 35, restDelta: 0.01 });
  const dotY = useSpring(cursorY, { stiffness: 600, damping: 35, restDelta: 0.01 });

  const ringX = useSpring(cursorX, { stiffness: 100, damping: 20, restDelta: 0.01 });
  const ringY = useSpring(cursorY, { stiffness: 100, damping: 20, restDelta: 0.01 });

  const hasShown = useRef(false);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('cursor-none');
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!hasShown.current) {
          hasShown.current = true;
          setIsVisible(true);
        }
        rafId = 0;
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isView = !!target.closest('[data-cursor="view"]');
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setCursorVariant(isView ? 'view' : isClickable ? 'hover' : 'default');
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-grab') || target.closest('.cursor-grabbing')) {
        setIsGrabbing(true);
      }
    };

    const handleMouseUp = () => setIsGrabbing(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('cursor-none');
      if (document.head.contains(style)) document.head.removeChild(style);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Trailing ring — lazy spring follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: cursorVariant === 'view' ? 2.5 : cursorVariant === 'hover' ? 1.8 : 1,
          opacity: isVisible ? (cursorVariant === 'default' ? 0.25 : 0.9) : 0,
          backgroundColor: cursorVariant === 'view' ? 'rgba(80,193,186,0.08)' : 'rgba(0,0,0,0)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        <div className="w-9 h-9 rounded-full border border-[#50C1BA]" />
      </motion.div>

      {/* VIEW label — appears on data-cursor="view" elements */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] flex items-center justify-center will-change-transform"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible && cursorVariant === 'view' ? 1 : 0, scale: cursorVariant === 'view' ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-['Rajdhani',sans-serif] text-[9px] tracking-[0.35em] text-[#50C1BA] font-semibold uppercase select-none">VIEW</span>
      </motion.div>

      {/* Dot cursor — tight spring tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: cursorVariant !== 'default' ? 0 : isGrabbing ? 0.7 : 1,
          rotate: isGrabbing ? -15 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
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
