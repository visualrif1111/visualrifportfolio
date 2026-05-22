import { Outlet, useLocation } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CookieBanner } from "./components/CookieBanner";
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
}

export function Root() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let rafId: number;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnimatedBackground />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <CookieBanner />
    </>
  );
}
