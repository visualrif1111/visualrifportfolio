'use client';

import React from 'react';
import { VisualRifLogo, InstagramIcon, LinkedInIcon, PhoneIcon } from '../icons/Logo';

interface NavigationProps {
  activeSection?: string;
  onNavigate: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT ME' },
  { id: 'projects', label: 'ALL PROJECTS' },
  { id: 'contact', label: 'CONTACT US' },
] as const;

const SOCIAL_LINKS = [
  { 
    href: 'https://www.instagram.com/visualrif/', 
    label: 'Instagram',
    Icon: InstagramIcon,
    iconClass: 'w-[15px] h-[15px]'
  },
  { 
    href: 'https://www.linkedin.com/in/ariftariq/', 
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    iconClass: 'w-[15px] h-[15px]'
  },
  { 
    href: 'tel:07598078923', 
    label: 'Phone',
    Icon: PhoneIcon,
    iconClass: 'w-[14px] h-[14px]'
  },
] as const;

export const DesktopNavigation = React.memo(({ 
  activeSection = 'home', 
  onNavigate 
}: NavigationProps) => {
  return (
    <nav 
      className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between"
      aria-label="Main navigation"
    >
      {/* Logo and Navigation Links */}
      <div>
        <button 
          className="mb-12 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#50C1BA] rounded" 
          onClick={() => onNavigate('home')}
          aria-label="Go to home"
        >
          <VisualRifLogo className="w-[180px] h-[24px]" />
        </button>
        
        <div className="relative pl-6">
          {/* Decorative Line */}
          <div 
            className="absolute left-[3px] top-2 bottom-[-400px] w-px bg-white/20" 
            aria-hidden="true"
          />
          <div 
            className="absolute left-[0.5px] top-2 w-1.5 h-1.5 rounded-full bg-white" 
            aria-hidden="true"
          />
          
          {/* Navigation Links */}
          <ul className="flex flex-col gap-8 font-rajdhani font-medium text-lg tracking-[0.25em] text-gray-300 uppercase relative z-10 whitespace-nowrap">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-[#50C1BA] ${
                    activeSection === id ? 'text-white' : ''
                  }`}
                  onClick={() => onNavigate(id)}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-5 pl-4 relative">
        <div 
          className="absolute left-[0.5px] bottom-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" 
          aria-hidden="true"
        />
        {SOCIAL_LINKS.map(({ href, label, Icon, iconClass }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('tel:') ? undefined : '_blank'}
            rel={href.startsWith('tel:') ? undefined : 'noreferrer'}
            className="text-white hover:text-[#50C1BA] transition-colors duration-200 focus:outline-none focus-visible:text-[#50C1BA]"
            aria-label={label}
          >
            <Icon className={iconClass} />
          </a>
        ))}
      </div>
    </nav>
  );
});

DesktopNavigation.displayName = 'DesktopNavigation';

export const MobileNavigation = React.memo(({ onNavigate }: Pick<NavigationProps, 'onNavigate'>) => {
  return (
    <nav 
      className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/90"
      aria-label="Mobile navigation"
    >
      <button 
        className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#50C1BA] rounded" 
        onClick={() => onNavigate('home')}
        aria-label="Go to home"
      >
        <VisualRifLogo className="w-[140px] h-[18px]" />
      </button>
      <button 
        className="text-[#50C1BA] font-rajdhani font-medium text-sm tracking-widest uppercase hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
        onClick={() => onNavigate('contact')}
      >
        CONTACT US
      </button>
    </nav>
  );
});

MobileNavigation.displayName = 'MobileNavigation';
