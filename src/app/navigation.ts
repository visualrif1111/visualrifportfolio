'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export interface NavState {
  restoreHomeScroll?: boolean;
  restoreMobileHomeScroll?: boolean;
}

let pendingState: NavState | null = null;

/**
 * Router push that carries per-entry history state, matching React Router's
 * `navigate(to, { state })`. Scroll is owned by Root's ScrollToTop, not Next.
 */
export function useNavigate() {
  const router = useRouter();
  return useCallback((to: string, opts?: { state?: NavState }) => {
    pendingState = opts?.state ?? null;
    router.push(to, { scroll: false });
  }, [router]);
}

/** Attaches pending state to the history entry Next.js has just pushed. Call from a layout effect on pathname change. */
export function commitNavState() {
  if (!pendingState) return;
  window.history.replaceState({ ...window.history.state, usr: pendingState }, '');
  pendingState = null;
}

export function readNavState(): NavState | undefined {
  return window.history.state?.usr;
}
