import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CookieBanner } from "./components/CookieBanner";
import React, { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
}

export function Root() {
  return (
    <>
      <ScrollToTop />
      <AnimatedBackground />
      <Outlet />
      <CookieBanner />
    </>
  );
}