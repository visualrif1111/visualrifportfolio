"use client";

import { usePathname, useRouter } from "next/navigation";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollProgress } from "./components/ScrollProgress";
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { commitNavState, readNavState } from './navigation';
import { PROJECTS } from './data/projects';
import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { PageTransitionProvider, isTransitionActive } from './components/transition/PageTransition';
import { MenuProvider, MenuStage, SiteMenu } from './components/menu/SiteMenu';

function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    commitNavState();
  }, [pathname]);

  useEffect(() => {
    // pageshow fires for both normal loads (persisted=false) and BFCache
    // restores (persisted=true). We use it as a last-resort catch for browser
    // scroll restoration that can fire AFTER React effects settle (Chrome
    // defers it until layout is stable, which on image-heavy pages is after
    // the load event — too late for our normal scrollTo(0,0) effect).
    const handlePageShow = (e: PageTransitionEvent) => {
      // If the URL has a hash the hash-scroll timer owns the final position.
      if (window.location.hash) return;
      const usr = readNavState();
      if (usr?.restoreHomeScroll || usr?.restoreMobileHomeScroll) return;
      window.scrollTo(0, 0);
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  useEffect(() => {
    const state = readNavState();
    if (state?.restoreHomeScroll || state?.restoreMobileHomeScroll) return;

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    }, 1150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

/**
 * Project cards, Back and Next Project navigate programmatically, so Next.js
 * never prefetches them. Warm every route once idle so the new page is mounted
 * before the teal wipe reveals it.
 */
function PrefetchRoutes() {
  const router = useRouter();
  useEffect(() => {
    const prefetch = () => ['/', ...PROJECTS.map(p => p.to)].forEach(to => router.prefetch(to));
    // Safari has no requestIdleCallback.
    if (typeof window.requestIdleCallback !== 'function') {
      const id = setTimeout(prefetch, 1000);
      return () => clearTimeout(id);
    }
    const id = requestIdleCallback(prefetch);
    return () => cancelIdleCallback(id);
  }, [router]);
  return null;
}

export function Root({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [wipeScope, animateWipe] = useAnimate();
  const isFirstNav = useRef(true);

  useEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
      return;
    }
    if (isTransitionActive()) return;
    animateWipe(wipeScope.current, { y: ['101%', '0%', '0%', '-101%'] }, {
      duration: 1.1,
      times: [0, 0.4, 0.6, 1],
      ease: [[0.76, 0, 0.24, 1], 'linear', [0.76, 0, 0.24, 1]],
    });
  }, [pathname, animateWipe, wipeScope]);

  return (
    <PageTransitionProvider>
      <MenuProvider>
        <ScrollToTop />
        <PrefetchRoutes />
        <ScrollProgress />
        <AnimatedBackground />

        {/* Cinematic teal wipe panel — slides up on route change */}
        <div
          ref={wipeScope}
          className="fixed inset-0 z-[500] bg-[#50C1BA] pointer-events-none"
          style={{ transform: 'translateY(101%)' }}
        />

        <MenuStage>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 0.4, delay: 0 } },
                exit: { opacity: 0, transition: { duration: 0.18 } },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </MenuStage>
        <SiteMenu />
        <CookieBanner />
      </MenuProvider>
    </PageTransitionProvider>
  );
}
