import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Link from 'next/link';

export function CookieBanner() {
  // Server-rendered so it paints with the page (not after hydration). The inline
  // script in the site layout sets html[data-consent] before first paint for
  // returning visitors, which hides it with CSS.
  const [isVisible, setIsVisible] = useState(true);

  const choose = (value: 'accepted' | 'declined') => {
    try { localStorage.setItem('cookieConsent', value); } catch {}
    document.documentElement.dataset.consent = value;
    setIsVisible(false);
  };
  const acceptCookies = () => choose('accepted');
  const declineCookies = () => choose('declined');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={false}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in fade-in slide-in-from-bottom-[100px] duration-500 delay-1000 fill-mode-both motion-reduce:animate-none [html[data-consent]_&]:hidden"
        >
          <div className="max-w-4xl mx-auto bg-[#1c1c1e] border border-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 pr-8 relative">
              <h3 className="text-white font-medium mb-2 uppercase tracking-wider text-sm">Cookie Consent</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                This website doesn&apos;t set cookies of its own and uses cookieless analytics. Embedded YouTube videos may set third-party cookies. Read our <Link href="/cookie-policy" scroll={false} className="text-[#50C1BA] underline underline-offset-2 hover:text-white">Cookie Policy</Link> for more information.
              </p>
              <button 
                onClick={declineCookies}
                aria-label="Dismiss cookie notice"
                className="absolute top-0 right-0 text-gray-500 hover:text-white md:hidden"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={declineCookies}
                className="px-6 py-2.5 text-sm font-medium text-gray-300 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white rounded-full transition-colors w-full sm:w-auto text-center"
              >
                Decline Essential Only
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-2.5 text-sm font-medium text-black bg-[#50C1BA] hover:bg-[#3ea09a] rounded-full transition-colors w-full sm:w-auto text-center"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
