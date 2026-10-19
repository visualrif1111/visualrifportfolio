'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { useReducedMotion } from '../motion/useReducedMotion';
import { useNavigate } from '../../navigation';
import { usePageTransition } from '../transition/PageTransition';
import { AudioWave } from './AudioWave';
import { VisualRifLogo, SocialInstagram, SocialLinkedin, SocialPhone } from '../case-study/icons';
import { PROJECTS, UPCOMING } from '../../data/projects';
import { EASE, STAGGER } from '../../design/tokens';

interface MenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  origin: string;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used inside <MenuProvider>');
  return ctx;
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpenState] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const returnFocus = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const setOpen = useCallback((next: boolean) => {
    if (next) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      // The stage is document-tall, so scale around the middle of what is on screen.
      setOrigin(`50% ${window.scrollY + window.innerHeight / 2}px`);
    }
    setOpenState(next);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenState(false);
  }

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => { html.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (open) return;
    const el = returnFocus.current;
    returnFocus.current = null;
    if (el && document.contains(el)) el.focus({ preventScroll: true });
  }, [open]);

  return <MenuContext.Provider value={{ open, setOpen, origin }}>{children}</MenuContext.Provider>;
}

/**
 * Wraps the routed page so it can recede while the menu is open. `data-menu`
 * stays "open" until the page has scaled back to 1: the page's fixed bars are
 * hidden for that whole time, because a transformed ancestor would move them.
 */
export function MenuStage({ children }: { children: React.ReactNode }) {
  const { open, origin } = useMenu();
  const reduce = useReducedMotion();
  const [settled, setSettled] = useState(true);
  if (open && settled) setSettled(false);

  return (
    <motion.div
      data-menu={open || (!settled && !reduce) ? 'open' : 'closed'}
      initial={false}
      animate={open && !reduce ? { scale: 0.94, opacity: 0.35 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.75, ease: EASE.inOut }}
      onAnimationComplete={() => { if (!open) setSettled(true); }}
      style={{ transformOrigin: origin }}
    >
      {children}
    </motion.div>
  );
}

/**
 * The site's only navigation bar, on every page and at every size: logo,
 * Back on project pages, and the trigger for the full-screen menu.
 */
export function SiteHeader() {
  const { open, setOpen } = useMenu();
  const pathname = usePathname();
  const go = usePageTransition();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const project = PROJECTS.find(p => pathname.startsWith(p.to));
  const inJmaCategory = pathname.startsWith('/projects/jma-customs/');

  const back = () => {
    if (inJmaCategory) return navigate('/projects/jma-customs');
    if (!project) return;
    const state = window.matchMedia('(max-width: 768px)').matches ? { restoreMobileHomeScroll: true } : { restoreHomeScroll: true };
    go('/', { kind: 'collapse', img: project.img, card: project.to }, { state });
  };

  const home = (e: React.MouseEvent) => {
    if (pathname !== '/') return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-white pointer-events-none">
      <div className="flex items-center justify-between gap-6 px-6 py-5 md:px-12 md:py-7">
        <Link href="/" scroll={false} onClick={home} aria-label="VISUALRIF — Home" className="pointer-events-auto">
          <VisualRifLogo className="w-[130px] h-[17px] md:w-[180px] md:h-[24px]" />
        </Link>
        <div className="flex items-center gap-6 md:gap-10 pointer-events-auto">
          {(project || inJmaCategory) && (
            <button type="button" onClick={back} className={`flex items-center gap-2 min-h-11 hover:text-[#50C1BA] transition-colors ${META}`}>
              <ArrowLeft size={16} aria-hidden />
              <span className="hidden sm:inline">{inJmaCategory ? 'JMA Customs' : 'Back'}</span>
              <span className="sr-only sm:hidden">{inJmaCategory ? 'Back to JMA Customs' : 'Back to home'}</span>
            </button>
          )}
          <button
            type="button"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`group flex items-center gap-3 min-h-11 hover:text-[#50C1BA] transition-colors ${META}`}
          >
            <span>Menu</span>
            <span className="flex flex-col items-end gap-[6px]" aria-hidden>
              <span className="block h-px w-6 bg-current transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="block h-px w-4 bg-current transition-[width] duration-300 group-hover:w-6" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteMenu() {
  const { open } = useMenu();
  return <AnimatePresence>{open && <MenuPanel key="menu" />}</AnimatePresence>;
}

const PAGES = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'CV', to: '/cv' },
  { label: 'Contact', to: '/#contact' },
];

const BASE = [2, 4, 4];

/** Near-black with a little of the project's colour mixed in — a flat field, not a gradient. */
function tint(hex: string, amount = 0.16) {
  const n = parseInt(hex.slice(1), 16);
  const rgb = [n >> 16, (n >> 8) & 255, n & 255];
  return `rgb(${rgb.map((c, i) => Math.round(BASE[i] + (c - BASE[i]) * amount)).join(', ')})`;
}

const pad = (n: number) => String(n).padStart(2, '0');

const NUMBER = "font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.3em]";
const META = "font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.35em] uppercase";

function MenuPanel() {
  const { setOpen } = useMenu();
  const go = usePageTransition();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);
  const current = PROJECTS.findIndex(p => pathname.startsWith(p.to));
  const [active, setActive] = useState<number | null>(null);
  const [shown, setShown] = useState(current >= 0 ? current : 0);

  const px = useSpring(useMotionValue(0), { stiffness: 110, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 110, damping: 20 });

  const highlight = (i: number | null) => {
    setActive(i);
    if (i !== null) setShown(i);
  };

  const accent = active !== null ? PROJECTS[active].accent : '#50C1BA';
  const project = PROJECTS[shown];

  useEffect(() => {
    panel.current?.focus({ preventScroll: true });
  }, []);

  const follow = (e: React.MouseEvent, to: string, label: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const [path, hash] = to.split('#');
    if (path === pathname) {
      setOpen(false);
      if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth' }), 450);
      else if (path === '/') window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
      return;
    }
    go(to, { kind: 'title', label }, { onCovered: () => setOpen(false) });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      return;
    }
    const root = panel.current;
    if (!root) return;
    const visible = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel)).filter(el => el.offsetParent !== null);
    if (e.key === 'Tab') {
      const f = visible('a[href], button');
      if (!f.length) return;
      if (e.shiftKey && (document.activeElement === f[0] || document.activeElement === root)) {
        e.preventDefault();
        f[f.length - 1].focus();
      } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
        e.preventDefault();
        f[0].focus();
      }
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const items = visible('[data-menu-item]');
      const i = items.indexOf(document.activeElement as HTMLElement);
      e.preventDefault();
      const next = i < 0 ? (e.key === 'ArrowDown' ? 0 : items.length - 1) : (i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse') return;
    px.set((e.clientX / window.innerWidth - 0.5) * 28);
    py.set((e.clientY / window.innerHeight - 0.5) * 22);
  };

  const reveal = reduce ? {} : { initial: { y: '110%' } };
  const revealDelay = (i: number) => 0.32 + i * STAGGER.base;

  return (
    <motion.div
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onPointerMove={onPointerMove}
      className="fixed inset-0 z-[400] flex flex-col overflow-hidden text-white outline-none"
      style={{ backgroundColor: '#020404' }}
      initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
      animate={{ ...(reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }), backgroundColor: active !== null ? tint(accent) : '#020404' }}
      exit={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
      transition={{ clipPath: { duration: 0.75, ease: EASE.inOut }, opacity: { duration: 0.25 }, backgroundColor: { duration: 0.6, ease: EASE.soft } }}
    >
      {/* Inside the system: the page grid, drawn in as the menu opens. */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {[25, 50, 75].map((x, i) => (
          <motion.span
            key={x}
            className="absolute top-0 bottom-0 w-px bg-white/[0.06] origin-top"
            style={{ left: `${x}%` }}
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, ease: EASE.out, delay: 0.25 + i * 0.08 }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-between px-6 py-6 md:px-12 md:py-10">
        <Link href="/" scroll={false} aria-label="VISUALRIF — Home" onClick={e => follow(e, '/', 'Home')}>
          <VisualRifLogo className="w-[140px] h-[18px] md:w-[180px] md:h-[24px]" />
        </Link>
        <p className={`hidden md:block text-gray-500 ${META}`}>Index — {pad(PROJECTS.length)} Projects</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 min-h-11 text-white hover:text-[#50C1BA] transition-colors ${META}`}
        >
          <span className="hidden md:inline">Close</span>
          <X size={24} strokeWidth={1.5} aria-hidden />
          <span className="sr-only md:hidden">Close menu</span>
        </button>
      </div>

      {/* Desktop */}
      <div className="relative hidden md:grid flex-1 min-h-0 grid-cols-12 gap-8 px-12 items-center">
        <nav aria-label="Projects" className="col-span-7">
          <ul onMouseLeave={() => highlight(null)}>
            {PROJECTS.map((p, i) => (
              <li key={p.to}>
                <Link
                  href={p.to}
                  scroll={false}
                  data-menu-item
                  aria-current={i === current ? 'page' : undefined}
                  onClick={e => follow(e, p.to, p.title)}
                  onMouseEnter={() => highlight(i)}
                  onFocus={() => highlight(i)}
                  className="group flex items-baseline gap-6 outline-none"
                >
                  <span className={`w-8 shrink-0 transition-colors duration-500 ${NUMBER}`} style={{ color: active === i ? p.accent : 'rgba(255,255,255,0.35)' }}>
                    {pad(i + 1)}
                  </span>
                  <span className="block overflow-hidden py-[0.4vh] pr-8">
                    <motion.span
                      className="block font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase leading-[1] tracking-[0.02em] text-[clamp(2.25rem,7vh,5.5rem)] group-focus-visible:underline decoration-1 underline-offset-8"
                      {...reveal}
                      animate={{ y: '0%', x: active === i && !reduce ? 18 : 0, opacity: active === null || active === i ? 1 : 0.28 }}
                      transition={{ y: { duration: 0.8, ease: EASE.out, delay: revealDelay(i) }, x: { duration: 0.5, ease: EASE.out }, opacity: { duration: 0.35 } }}
                    >
                      {p.title}
                      {i === current && <span className="ml-4 align-middle text-[12px] tracking-[0.3em] text-[#50C1BA] font-['Rajdhani',sans-serif] font-semibold">● Viewing</span>}
                    </motion.span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-5 flex flex-col justify-center">
          <motion.div
            className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden bg-white/[0.03]"
            style={reduce ? undefined : { x: px, y: py }}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE.out, delay: 0.45 }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={shown}
                src={project.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)', scale: 1.15 }}
                animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)', scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.25 } }}
                transition={{ duration: 0.7, ease: EASE.out }}
              />
            </AnimatePresence>
          </motion.div>

          <div className="mt-6 w-full max-w-[420px]">
            <div className={`flex items-center justify-between text-gray-400 ${META}`}>
              <span className="flex overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={shown}
                    className="text-white"
                    initial={reduce ? false : { y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.4, ease: EASE.out }}
                  >
                    {pad(shown + 1)}
                  </motion.span>
                </AnimatePresence>
                <span>&nbsp;/ {pad(PROJECTS.length)}</span>
              </span>
              <span>{project.year}</span>
            </div>
            <div className="mt-3 h-px bg-white/15">
              <motion.div
                className="h-full origin-left"
                initial={false}
                animate={{ scaleX: (shown + 1) / PROJECTS.length, backgroundColor: PROJECTS[shown].accent }}
                transition={{ duration: 0.6, ease: EASE.out }}
              />
            </div>
            <p className={`mt-4 text-gray-400 ${META}`}>{project.discipline}</p>
            <p className="mt-3 font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-300">{project.statement}</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <nav aria-label="Projects" className="relative md:hidden flex-1 min-h-0 overflow-y-auto overscroll-contain px-6">
        <ul>
          {PROJECTS.map((p, i) => (
            <li key={p.to} className="border-b border-white/10">
              <Link
                href={p.to}
                scroll={false}
                data-menu-item
                aria-current={i === current ? 'page' : undefined}
                onClick={e => follow(e, p.to, p.title)}
                onTouchStart={() => highlight(i)}
                onFocus={() => highlight(i)}
                className="flex items-center gap-4 py-4 outline-none focus-visible:bg-white/5 active:opacity-70"
              >
                <span className={`w-6 shrink-0 ${NUMBER}`} style={{ color: active === i || i === current ? p.accent : 'rgba(255,255,255,0.35)' }}>{pad(i + 1)}</span>
                <span className="flex-1 overflow-hidden">
                  <motion.span
                    className={`block font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase leading-[1] tracking-[0.02em] text-[clamp(1.9rem,9vw,3rem)] ${i === current ? 'text-[#50C1BA]' : ''}`}
                    {...reveal}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, ease: EASE.out, delay: revealDelay(i) }}
                  >
                    {p.title}
                  </motion.span>
                </span>
                <motion.span
                  className="relative w-14 h-[70px] shrink-0 overflow-hidden bg-white/5"
                  initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 0.7, ease: EASE.out, delay: revealDelay(i) + 0.1 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- image imports are URL strings */}
                  <img src={p.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </motion.span>
              </Link>
            </li>
          ))}
          {UPCOMING.map(p => (
            <li key={p.title} className="flex items-center justify-between gap-4 py-4 border-b border-white/10">
              <span className="font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[clamp(1.4rem,6vw,2rem)] leading-[1] text-gray-600">{p.title}</span>
              <span className={`text-gray-600 border border-white/10 rounded-full px-2.5 py-1 ${META} text-[9px]`}>Soon</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative px-6 pb-6 md:px-12 md:pb-10">
        {/* Outside the system: one hairline that answers to movement. */}
        <AudioWave color={accent} pulse={active} className="w-full h-8 md:h-14" />
        <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <nav aria-label="Pages">
            <ul className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-2">
              {PAGES.map(pg => (
                <li key={pg.label}>
                  <Link
                    href={pg.to}
                    scroll={false}
                    data-menu-item
                    onClick={e => follow(e, pg.to, pg.label)}
                    className={`inline-flex min-h-11 items-center text-gray-400 hover:text-white focus-visible:text-white transition-colors outline-none ${META}`}
                  >
                    {pg.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={`hidden lg:block text-gray-600 ${META}`}>In development — {UPCOMING.map(p => p.title).join(' · ')}</p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/visualrif/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#50C1BA] transition-colors"><SocialInstagram className="w-[15px] h-[15px]" /></a>
            <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#50C1BA] transition-colors"><SocialLinkedin className="w-[15px] h-[15px]" /></a>
            <a href="tel:07598078923" aria-label="Phone" className="text-gray-400 hover:text-[#50C1BA] transition-colors"><SocialPhone className="w-[14px] h-[14px]" /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
