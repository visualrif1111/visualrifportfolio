import { Outlet, ScrollRestoration } from "react-router";
import { AnimatedBackground } from "./components/AnimatedBackground";

export function Root() {
  return (
    <>
      <AnimatedBackground />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}