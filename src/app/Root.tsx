import { Outlet, useLocation } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollProgress } from "./components/ScrollProgress";
import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimate } from 'motion/react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (!hash) return;

    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    }, 1150);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

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
