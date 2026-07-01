import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Footer } from '../Footer';
import { VisualRifLogo, SocialLinks } from './icons';

function defaultRestoreState() {
  return window.matchMedia('(max-width: 768px)').matches
    ? { restoreMobileHomeScroll: true }
    : { restoreHomeScroll: true };
}

interface CaseStudyShellProps {
  children: React.ReactNode;
  /** Custom middle sidebar block (e.g. section nav). Defaults to a Back to Home link. */
  sidebarNav?: React.ReactNode;
  /** Mobile back button + default sidebar back handler. Defaults to Home with scroll restore. */
  onBack?: () => void;
  /** Where the logo click navigates. Defaults to Home. */
  logoTo?: string;
  /** Footer node. Pass null to omit. Defaults to the shared Footer. */
  footer?: React.ReactNode;
}

/**
 * Shared chrome for every case-study page: fixed desktop sidebar (logo, nav,
 * socials), mobile top bar, animated-background-safe content offset. Replaces
 * the ~120 lines of nav markup previously duplicated in every project file.
 */
export function CaseStudyShell({ children, sidebarNav, onBack, logoTo = '/', footer }: CaseStudyShellProps) {
  const navigate = useNavigate();
  const handleBack = onBack ?? (() => navigate('/', { state: defaultRestoreState() }));

  const defaultNav = (
    <div className="relative pl-6">
      <div className="absolute left-[3px] top-2 bottom-[-400px] w-[1px] bg-white opacity-20" />
      <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white" />
      <ul className="flex flex-col gap-8 text-[18px] tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap">
        <li className="hover:text-white transition-colors cursor-pointer" onClick={handleBack}>
          <span className="flex items-center gap-2"><ArrowLeft size={16} /> BACK TO HOME</span>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="relative bg-transparent text-white min-h-screen selection:bg-[#50C1BA] selection:text-black">
      {/* Desktop sidebar nav */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between sidebar">
        <div>
          <div className="mb-12 cursor-pointer" onClick={() => navigate(logoTo)}>
            <VisualRifLogo className="w-[180px] h-[24px]" />
          </div>
          {sidebarNav ?? defaultNav}
        </div>
        <SocialLinks />
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/90">
        <button aria-label="Back" className="text-white hover:text-[#50C1BA] transition-colors" onClick={handleBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="cursor-pointer" onClick={() => navigate(logoTo)}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
      </nav>

      {/* Main content (offset for the fixed sidebar on desktop) */}
      <div className="relative z-10 w-full md:pl-[280px]">
        {children}
        {footer === undefined ? <Footer /> : footer}
      </div>
    </div>
  );
}
