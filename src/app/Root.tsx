import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CookieBanner } from "./components/CookieBanner";
import React from 'react';

export function Root() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedBackground />
      <Outlet />
      <CookieBanner />
    </>
  );
}