import { Outlet, useLocation } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollProgress } from "./components/ScrollProgress";
import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimate } from 'motion/react';

function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // pageshow fires for both normal loads (persisted=false) and BFCache
    // restores (persisted=true). We use it as a last-resort catch for browser
    // scroll restoration that can fire AFTER React effects settle (Chrome
    // defers it until layout is stable, which on image-heavy pages is after
    // the load event — too late for our normal scrollTo(0,0) effect).
    const handlePageShow = (e: PageTransitionEvent) => {
      // If the URL has a hash the hash-scroll timer owns the final position.
      if (window.location.hash) return;
      const usr = (window.history.state as any)?.usr;
      if (usr?.restoreHomeScroll || usr?.restoreMobileHomeScroll) return;
      window.scrollTo(0, 0);
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  useEffect(() => {
    if ((state as any)?.restoreHomeScroll || (state as any)?.restoreMobileHomeScroll) return;

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (!hash) return;

    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    }, 1150);
    return () => clearTimeout(timer);
  }, [pathname, hash, state]);

  return null;
}

export function Root() {
  const location = useLocation();
  const [wipeScope, animateWipe] = useAnimate();
  const isFirstNav = useRef(true);

  useEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
      return;
    }
    animateWipe(wipeScope.current, { y: ['101%', '0%', '0%', '-101%'] }, {
      duration: 1.1,
      times: [0, 0.4, 0.6, 1],
      ease: [[0.76, 0, 0.24, 1], 'linear', [0.76, 0, 0.24, 1]],
    });
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <AnimatedBackground />

      {/* Cinematic teal wipe panel — slides up on route change */}
      <div
        ref={wipeScope}
        className="fixed inset-0 z-[500] bg-[#50C1BA] pointer-events-none"
        style={{ transform: 'translateY(101%)' }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.4, delay: 0 } },
            exit: { opacity: 0, transition: { duration: 0.18 } },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <CookieBanner />
    </>
  );
}
