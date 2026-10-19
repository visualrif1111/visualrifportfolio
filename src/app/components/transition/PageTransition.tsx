'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { animate, stagger } from 'motion/react';
import { useNavigate, type NavState } from '../../navigation';
import { useReducedMotion } from '../motion/useReducedMotion';
import { EASE, STAGGER } from '../../design/tokens';

export type TransitionVariant =
  /** Navigation → page: teal panel carrying the destination's name. */
  | { kind: 'title'; label: string }
  /** Homepage → project: the card image grows from its rect into the viewport. */
  | { kind: 'expand'; img: string; from: DOMRect }
  /** Project → homepage: the image settles back into its card once scroll is restored. */
  | { kind: 'collapse'; img: string; card: string }
  /** Project → next project: colour field, then the next project's image masked in under its title. */
  | { kind: 'next'; img: string; title: string; accent: string };

interface GoOptions {
  state?: NavState;
  /** Runs once the overlay fully covers the screen (e.g. to close the menu underneath). */
  onCovered?: () => void;
}

type Go = (to: string, variant: TransitionVariant, opts?: GoOptions) => void;

const TransitionContext = createContext<Go | null>(null);

let active = false;
/** Root skips its default teal wipe while one of these transitions owns the route change. */
export const isTransitionActive = () => active;

export function usePageTransition(): Go {
  const go = useContext(TransitionContext);
  if (!go) throw new Error('usePageTransition must be used inside <PageTransitionProvider>');
  return go;
}

const frame = () => new Promise<void>(r => requestAnimationFrame(() => r()));
const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

const COVER = { duration: 0.55, ease: EASE.inOut };
const REVEAL = { duration: 0.6, ease: EASE.inOut };

function rectStyle(r: { left: number; top: number; width: number; height: number }) {
  return { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` };
}

const VIEWPORT = () => ({ left: 0, top: 0, width: window.innerWidth, height: window.innerHeight });

function homeScrollTarget(state?: NavState) {
  const mobile = state?.restoreMobileHomeScroll && window.matchMedia('(max-width: 768px)').matches;
  const saved = sessionStorage.getItem(mobile ? 'visualrif:lastMobileHomeScrollY' : 'homeScrollY');
  return saved ? parseInt(saved, 10) : 0;
}

async function waitFor<T>(get: () => T | null, timeout: number): Promise<T | null> {
  const end = performance.now() + timeout;
  while (performance.now() < end) {
    const v = get();
    if (v) return v;
    await frame();
  }
  return null;
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [variant, setVariant] = useState<TransitionVariant | null>(null);
  const layer = useRef<HTMLDivElement>(null);
  const surface = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const label = useRef<HTMLDivElement>(null);
  const arrival = useRef<{ to: string; resolve: () => void } | null>(null);
  const pathRef = useRef(pathname);

  useEffect(() => {
    pathRef.current = pathname;
    if (arrival.current && pathname === arrival.current.to.split('#')[0]) {
      arrival.current.resolve();
      arrival.current = null;
    }
  }, [pathname]);

  const arrive = useCallback((to: string) => new Promise<void>(resolve => {
    if (pathRef.current === to.split('#')[0]) return resolve();
    arrival.current = { to, resolve };
  }), []);

  const go = useCallback<Go>((to, v, opts) => {
    if (active) return;
    if (reduce) {
      opts?.onCovered?.();
      navigate(to, { state: opts?.state });
      return;
    }
    active = true;
    let navigated = false;
    const push = () => {
      if (navigated) return;
      navigated = true;
      navigate(to, { state: opts?.state });
    };

    (async () => {
      setVariant(v);
      await frame();
      const el = layer.current, s = surface.current;
      if (!el || !s) throw new Error('transition layer missing');

      // Cover
      if (v.kind === 'title') {
        const letters = label.current ? Array.from(label.current.querySelectorAll('[data-letter]')) : [];
        await Promise.all([
          animate(s, { y: ['101%', '0%'] }, COVER),
          letters.length && animate(letters, { y: ['110%', '0%'], opacity: [0, 1] }, { duration: 0.5, ease: EASE.out, delay: stagger(STAGGER.tight, { startDelay: 0.18 }) }),
        ]);
      } else if (v.kind === 'expand') {
        Object.assign(s.style, rectStyle(v.from));
        await Promise.all([
          animate(s, rectStyle(VIEWPORT()), { duration: 0.75, ease: EASE.inOut }),
          image.current && animate(image.current, { scale: [1.06, 1] }, { duration: 0.75, ease: EASE.inOut }),
        ]);
      } else if (v.kind === 'collapse') {
        Object.assign(s.style, rectStyle(VIEWPORT()));
        await animate(s, { opacity: [0, 1] }, { duration: 0.35, ease: EASE.soft });
      } else {
        const mask = el.querySelector<HTMLElement>('[data-mask]');
        const title = label.current;
        await Promise.all([
          animate(s, { clipPath: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'] }, { duration: 0.5, ease: EASE.inOut }),
          mask && animate(mask, { clipPath: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'] }, { duration: 0.6, ease: EASE.inOut, delay: 0.12 }),
          image.current && animate(image.current, { scale: [1.25, 1.05] }, { duration: 0.75, ease: EASE.out, delay: 0.12 }),
          title && animate(title, { y: ['120%', '0%'] }, { duration: 0.6, ease: EASE.out, delay: 0.3 }),
        ]);
      }

      opts?.onCovered?.();
      push();
      await Promise.race([arrive(to), wait(3000)]);

      // Reveal
      if (v.kind === 'collapse') {
        const card = await waitFor(() => document.querySelector<HTMLElement>(`[data-project-card="${v.card}"]`), 1500);
        window.scrollTo({ top: homeScrollTarget(opts?.state), behavior: 'instant' });
        await frame();
        const r = card?.getBoundingClientRect();
        if (card && r && r.bottom > 0 && r.top < window.innerHeight) {
          await Promise.all([
            animate(s, rectStyle(r), { duration: 0.75, ease: EASE.inOut }),
            // Settled when no inset value is non-zero.
            waitFor(() => !/[1-9]/.test(getComputedStyle(card).clipPath) || null, 1400),
          ]);
          await animate(s, { opacity: 0 }, { duration: 0.3, ease: EASE.soft });
        } else {
          await animate(s, { opacity: 0 }, { duration: 0.45, ease: EASE.soft });
        }
      } else {
        // AnimatePresence finishes the old page's exit before mounting the new one.
        await wait(220);
        if (v.kind === 'title') {
          await animate(s, { y: ['0%', '-101%'] }, REVEAL);
        } else if (v.kind === 'expand') {
          const hero = document.querySelector<HTMLElement>('[data-transition-hero]')?.getBoundingClientRect();
          await Promise.all([
            hero && animate(s, rectStyle(hero), { duration: 0.7, ease: EASE.inOut }),
            animate(s, { opacity: [1, 0] }, { duration: 0.6, ease: EASE.soft, delay: hero ? 0.45 : 0 }),
          ]);
        } else {
          await Promise.all([
            animate(s, { clipPath: ['inset(0 0 0% 0)', 'inset(0 0 100% 0)'] }, { duration: 0.7, ease: EASE.inOut }),
            label.current && animate(label.current, { y: ['0%', '-60%'], opacity: [1, 0] }, { duration: 0.5, ease: EASE.inOut }),
          ]);
        }
      }
    })()
      .catch(() => push())
      .finally(() => {
        arrival.current = null;
        active = false;
        setVariant(null);
      });
  }, [reduce, navigate, arrive]);

  return (
    <TransitionContext.Provider value={go}>
      {children}
      {variant && (
        <div ref={layer} className="fixed inset-0 z-[450] pointer-events-auto" aria-hidden>
          {variant.kind === 'title' && (
            <div ref={surface} className="absolute inset-0 bg-[#50C1BA] flex items-center justify-center will-change-transform" style={{ transform: 'translateY(101%)' }}>
              <div ref={label} className="flex flex-wrap justify-center gap-x-[0.25em] px-6 text-center font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[#020404] text-[12vw] md:text-[7vw] leading-[1.05] tracking-[0.02em]">
                {variant.label.split(' ').map((word, w) => (
                  <span key={w} className="inline-flex overflow-hidden">
                    {Array.from(word).map((c, i) => (
                      <span key={i} data-letter className="inline-block" style={{ transform: 'translateY(110%)' }}>{c}</span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          )}
          {(variant.kind === 'expand' || variant.kind === 'collapse') && (
            <div ref={surface} className="absolute overflow-hidden bg-[#020404]" style={variant.kind === 'collapse' ? { opacity: 0 } : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element -- image imports are URL strings */}
              <img ref={image} src={variant.img} alt="" className="w-full h-full object-cover will-change-transform" />
            </div>
          )}
          {variant.kind === 'next' && (
            <div ref={surface} className="absolute inset-0" style={{ backgroundColor: variant.accent, clipPath: 'inset(100% 0 0 0)' }}>
              <div data-mask className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(100% 0 0 0)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- image imports are URL strings */}
                <img ref={image} src={variant.img} alt="" className="w-full h-full object-cover will-change-transform" />
                <div className="absolute inset-0 bg-black/45" />
              </div>
              <div className="absolute inset-x-0 bottom-[12vh] px-6 md:px-12 overflow-hidden">
                <p className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-white/70 mb-4">Next Project</p>
                <div className="overflow-hidden">
                  <div ref={label} className="font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-white text-[11vw] md:text-[7vw] leading-[0.95] tracking-[0.02em]" style={{ transform: 'translateY(120%)' }}>
                    {variant.title}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </TransitionContext.Provider>
  );
}
