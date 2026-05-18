import { Phone, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer id="contact" className={`bg-[#1c1c1e] py-16 px-6 md:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h3 className="text-xl font-medium tracking-widest text-[#50C1BA] mb-2 uppercase">VISUALRIF</h3>
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-6 font-medium">Multidisciplinary Designer</p>
          
          <div className="flex flex-col gap-3 text-sm tracking-wider text-gray-300 font-['Barlow',sans-serif]">
            <a href="tel:07598078923" className="flex items-center gap-3 hover:text-[#50C1BA] transition-colors">
              <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center"><Phone size={14} className="text-[#50C1BA]" /></div>
              +44 7598 078923
            </a>
            <a href="mailto:hello@visualrif.com" className="flex items-center gap-3 hover:text-[#50C1BA] transition-colors">
              <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50C1BA]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              hello@visualrif.com
            </a>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50C1BA]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              Brighton & Hove
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <a href="https://www.instagram.com/visualrif" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-['Inter',sans-serif]">
        <p>© 2026 VISUALRIF. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/gdpr" className="hover:text-white transition-colors">GDPR & Data Usage</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
