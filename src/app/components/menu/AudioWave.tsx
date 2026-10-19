'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../motion/useReducedMotion';

const W = 1000;
const H = 60;
const POINTS = 140;
const REST = 0.12;

/**
 * A single hairline that idles almost flat and swells with pointer movement
 * and with each `pulse` change. Drawn by mutating one path's `d` in a RAF loop
 * that only runs while the component is mounted.
 */
export function AudioWave({ color, pulse, className = '' }: { color: string; pulse: unknown; className?: string }) {
  const path = useRef<SVGPathElement>(null);
  const energy = useRef(REST);
  const reduce = useReducedMotion();

  useEffect(() => {
    energy.current = Math.min(1, energy.current + 0.55);
  }, [pulse]);

  useEffect(() => {
    const draw = (t: number, amp: number) => {
      let d = '';
      for (let i = 0; i <= POINTS; i++) {
        const x = (i / POINTS) * W;
        const env = Math.pow(Math.sin((Math.PI * i) / POINTS), 1.5);
        const wave = Math.sin(x * 0.018 + t * 2.1) * 0.6 + Math.sin(x * 0.051 - t * 3.3) * 0.3 + Math.sin(x * 0.11 + t * 5) * 0.1;
        d += `${i ? 'L' : 'M'}${x.toFixed(1)} ${(H / 2 + amp * env * wave * H * 0.45).toFixed(2)}`;
      }
      path.current?.setAttribute('d', d);
    };

    if (reduce) {
      draw(0, 0);
      return;
    }

    const onMove = (e: PointerEvent) => {
      energy.current = Math.min(1, energy.current + Math.hypot(e.movementX, e.movementY) * 0.004);
    };
    let id = 0;
    const loop = (now: number) => {
      energy.current += (REST - energy.current) * 0.035;
      draw(now / 1000, energy.current);
      id = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    id = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(id);
    };
  }, [reduce]);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={className} aria-hidden>
      <path ref={path} fill="none" stroke={color} strokeWidth={1} vectorEffect="non-scaling-stroke" style={{ transition: 'stroke 0.6s ease' }} />
    </svg>
  );
}
