import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const isLegalPage = ['/privacy-policy', '/terms-and-conditions', '/gdpr', '/cookie-policy'].includes(location.pathname);
  const paddingClass = !isLegalPage ? 'md:pl-[280px]' : '';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 ${paddingClass}`}
        >
          <div className="max-w-4xl mx-auto bg-[#1c1c1e] border border-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 pr-8 relative">
              <h3 className="text-white font-medium mb-2 uppercase tracking-wider text-sm">Cookie Consent</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use cookies to improve your experience, analyze site traffic, and support our marketing efforts. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/cookie-policy" className="text-[#50C1BA] hover:underline">Cookie Policy</Link> for more information.
              </p>
              <button 
                onClick={declineCookies}
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
