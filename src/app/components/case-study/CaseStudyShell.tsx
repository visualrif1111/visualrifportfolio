import React from 'react';
import { Footer } from '../Footer';

interface CaseStudyShellProps {
  children: React.ReactNode;
  /** Footer node. Pass null to omit. Defaults to the shared Footer. */
  footer?: React.ReactNode;
}

/**
 * Shared wrapper for every case-study page. Navigation (logo, Back, Menu) is
 * the global SiteHeader rendered by Root.
 */
export function CaseStudyShell({ children, footer }: CaseStudyShellProps) {
  return (
    <div className="relative bg-transparent text-white min-h-screen selection:bg-[#50C1BA] selection:text-black">
      <div className="relative z-10 w-full">
        {children}
        {footer === undefined ? <Footer /> : footer}
      </div>
    </div>
  );
}
