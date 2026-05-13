import React, { useEffect, useState } from 'react';
import svgPaths from "../../imports/Frame27-1/svg-nlnc8sy07v";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device uses a touch screen / lacks a fine pointer
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) {
      setIsTouchDevice(true);
      return;
    }

    // Hide default cursor globally on mount
    document.body.classList.add('cursor-none');
    
    // Also inject a style to hide cursor on all elements, but allow pointers to still trigger our JS events
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // check if it's a clickable element
      const isClickable = target.closest('a') || 
                          target.closest('button') || 
                          target.closest('[role="button"]') ||
                          target.classList.contains('cursor-pointer') ||
                          window.getComputedStyle(target).cursor === 'pointer';
      
      const isGrab = target.closest('.cursor-grab') || target.closest('.cursor-grabbing');

      setIsHovering(!!isClickable);
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-grab') || target.closest('.cursor-grabbing')) {
        setIsGrabbing(true);
      }
    };

    const handleMouseUp = () => {
      setIsGrabbing(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('cursor-none');
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (isTouchDevice || hidden) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isGrabbing ? 0.8 : isHovering ? 1.5 : 1}) rotate(${isGrabbing ? '-15deg' : '0deg'})`,
      }}
    >
      <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(80,193,186,0.5)]" viewBox="0 0 26.0181 26.018" fill="none">
        <path d={svgPaths.p16002240} fill="#50C1BA" />
      </svg>
    </div>
  );
}