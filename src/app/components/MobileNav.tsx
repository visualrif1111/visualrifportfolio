import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { VisualRifLogo, SocialInstagram, SocialLinkedin, SocialPhone } from './case-study/icons';

interface NavProject {
  title: string;
  to?: string;
}

const CATEGORIES: { label: string; items: NavProject[] }[] = [
  {
    label: 'UX / UI, Web Design',
    items: [
      { title: 'INVESTINUK', to: '/projects/investinuk' },
      { title: 'Moncks of Dover Street', to: '/projects/moncks-of-dover-street' },
      { title: 'Swiftrooms', to: '/projects/swiftrooms' },
      { title: 'The Sunil Gavaskar Project', to: '/projects/sunil-gavaskar' },
    ],
  },
  {
    label: 'Immersive Brand & Digital Experience',
    items: [{ title: 'JMA Customs', to: '/projects/jma-customs' }],
  },
  {
    label: 'Branding & Marketing',
    items: [
      { title: 'Diversion Audio', to: '/projects/diversion-audio' },
      { title: 'The Hairy Bastard', to: '/projects/the-hairy-bastard' },
      { title: 'Trend' },
      { title: 'Dilchad' },
    ],
  },
  {
    label: '3D Design',
    items: [{ title: 'The Epiphanies' }],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Mobile-only project navigation. A trigger button sits inside the existing
 * top bar; the panel is portalled to <body> so it escapes the bar's
 * `mix-blend-difference`, which would otherwise invert the whole overlay.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Escape to close + body scroll lock
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const go = (to?: string) => {
    if (!to) return;
    setOpen(false);
    if (to !== pathname) navigate(to);
  };

  const goHome = () => {
    setOpen(false);
    // No state = Home clears any saved scroll and loads at the top.
    if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    else navigate('/');
  };

  let index = 0;

  return (
    <>
      <button
        aria-label="Open project menu"
        aria-expanded={open}
        className="md:hidden text-white hover:text-[#50C1BA] transition-colors"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden fixed inset-0 z-[120] bg-[#020404] text-white overflow-y-auto overscroll-contain"
              role="dialog"
              aria-modal="true"
              aria-label="Projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(80,193,186,0.07) 0%, transparent 60%)' }}
              />

              <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-800">
                <button onClick={goHome} aria-label="Home" className="cursor-pointer">
                  <VisualRifLogo className="w-[140px] h-[18px]" />
                </button>
                <button
                  aria-label="Close menu"
                  className="text-white hover:text-[#50C1BA] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <X size={26} />
                </button>
              </div>

              <div className="relative z-10 px-6 pt-9 pb-14">
                <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.45em] uppercase text-gray-500 mb-8">
                  All Projects
                </p>

                {CATEGORIES.map((cat, ci) => (
                  <div key={cat.label} className={ci ? 'mt-11' : ''}>
                    <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-[#50C1BA] mb-4">
                      {cat.label}
                    </p>
                    <ul className="flex flex-col">
                      {cat.items.map(item => {
                        const i = index++;
                        const active = !!item.to && item.to === pathname;
                        const live = !!item.to;
                        return (
                          <motion.li
                            key={item.title}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.06 + i * 0.035, ease: EASE }}
                            className="border-b border-gray-800/70"
                          >
                            <button
                              onClick={() => go(item.to)}
                              disabled={!live}
                              aria-current={active ? 'page' : undefined}
                              className={`w-full flex items-center gap-4 py-4 text-left ${live ? 'active:opacity-60' : 'cursor-default'}`}
                            >
                              <span className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.3em] text-[#50C1BA]/50 w-6 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span
                                className={`flex-1 font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[21px] leading-[1.15] tracking-[0.06em] uppercase ${
                                  active ? 'text-[#50C1BA]' : live ? 'text-white' : 'text-gray-600'
                                }`}
                              >
                                {item.title}
                              </span>
                              {live ? (
                                <svg
                                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                  className={`shrink-0 ${active ? 'text-[#50C1BA]' : 'text-gray-600'}`}
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              ) : (
                                <span className="shrink-0 font-['Rajdhani',sans-serif] font-semibold text-[9px] tracking-[0.25em] uppercase text-gray-600 border border-gray-800 rounded-full px-2.5 py-1">
                                  Soon
                                </span>
                              )}
                            </button>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                <div className="mt-12 flex flex-col gap-4">
                  <button
                    onClick={goHome}
                    className="w-full border border-white/25 active:border-[#50C1BA] transition-colors py-4 font-['Rajdhani',sans-serif] font-semibold text-[11px] tracking-[0.4em] uppercase text-white"
                  >
                    Back to Home
                  </button>
                  <a
                    href="mailto:hello@visualrif.com"
                    className="w-full text-center border border-[#50C1BA]/40 active:border-[#50C1BA] transition-colors py-4 font-['Rajdhani',sans-serif] font-semibold text-[11px] tracking-[0.4em] uppercase text-[#50C1BA]"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-12 flex justify-center gap-8">
                  <a href="https://www.instagram.com/visualrif/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 active:text-[#50C1BA] transition-colors">
                    <SocialInstagram className="w-[17px] h-[17px]" />
                  </a>
                  <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 active:text-[#50C1BA] transition-colors">
                    <SocialLinkedin className="w-[17px] h-[17px]" />
                  </a>
                  <a href="tel:07598078923" aria-label="Phone" className="text-gray-400 active:text-[#50C1BA] transition-colors">
                    <SocialPhone className="w-[16px] h-[16px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
