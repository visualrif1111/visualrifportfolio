"use client";

import React from "react";
import { motion } from "motion/react";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

// Import SVG paths from the Figma exports
import svgPaths from "../../imports/Frame24/svg-acruz23zjw";

// Reusable SVG Icon Components
const VisualRifLogo = React.memo(function VisualRifLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`block ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 235.669 30.159"
      aria-label="VisualRif logo"
    >
      <path d={svgPaths.p13c84500} fill="#50C1BA" />
      <path d={svgPaths.p37476b00} fill="white" />
      <path d={svgPaths.pa013800} fill="white" />
      <path d={svgPaths.p630c200} fill="white" />
      <path d={svgPaths.p349de6f0} fill="white" />
      <path d={svgPaths.p39faef00} fill="white" />
      <path d={svgPaths.p141d9280} fill="white" />
      <path d={svgPaths.p4738e00} fill="white" />
      <path d={svgPaths.pffcfbf0} fill="white" />
      <path d={svgPaths.p2b767700} fill="white" />
    </svg>
  );
});

const ScrollTriangle = React.memo(function ScrollTriangle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 22.8536 19.7918"
      aria-hidden="true"
    >
      <path d={svgPaths.p1ef2d800} fill="currentColor" />
    </svg>
  );
});

const SocialIcon = React.memo(function SocialIcon({
  type,
  className = "",
}: {
  type: "instagram" | "linkedin" | "phone";
  className?: string;
}) {
  const paths = {
    instagram: svgPaths.p386b1640,
    linkedin: svgPaths.p1a85db80,
    phone: svgPaths.p35dc3720,
  };

  const viewBoxes = {
    instagram: "0 0 15.0795 15.0795",
    linkedin: "0 0 15.0795 15.0795",
    phone: "0 0 14.1371 14.1373",
  };

  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox={viewBoxes[type]}
      aria-hidden="true"
    >
      {type === "linkedin" ? (
        <path
          clipRule="evenodd"
          d={paths[type]}
          fill="currentColor"
          fillRule="evenodd"
        />
      ) : (
        <path d={paths[type]} fill="currentColor" />
      )}
    </svg>
  );
});

// Navigation Items
const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "ALL PROJECTS" },
  { id: "contact", label: "CONTACT US" },
] as const;

// Social Links
const SOCIAL_LINKS = [
  {
    type: "instagram" as const,
    href: "https://www.instagram.com/visualrif/",
    label: "Instagram",
  },
  {
    type: "linkedin" as const,
    href: "https://www.linkedin.com/in/ariftariq/",
    label: "LinkedIn",
  },
  { type: "phone" as const, href: "tel:07598078923", label: "Phone" },
] as const;

// Desktop Navigation Component
const DesktopNav = React.memo(function DesktopNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between"
      aria-label="Main navigation"
    >
      <div>
        <button
          className="mb-12 cursor-pointer bg-transparent border-0 p-0"
          onClick={() => onNavigate("home")}
          aria-label="Go to home"
        >
          <VisualRifLogo className="w-[180px] h-[24px]" />
        </button>

        <div className="relative pl-6">
          <div
            className="absolute left-[3px] top-2 bottom-[-400px] w-px bg-white/20"
            aria-hidden="true"
          />
          <div
            className="absolute left-[0.5px] top-2 w-1.5 h-1.5 rounded-full bg-white"
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-8 text-lg tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap list-none p-0 m-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`bg-transparent border-0 p-0 cursor-pointer transition-colors duration-200 hover:text-white ${
                    activeSection === item.id ? "text-white" : "text-gray-300"
                  }`}
                  onClick={() => onNavigate(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 pl-4 relative">
        <div
          className="absolute left-[0.5px] bottom-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
          aria-hidden="true"
        />
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.type}
            href={link.href}
            target={link.type !== "phone" ? "_blank" : undefined}
            rel={link.type !== "phone" ? "noreferrer" : undefined}
            className="text-white hover:text-[#50C1BA] transition-colors duration-200"
            aria-label={link.label}
          >
            <SocialIcon
              type={link.type}
              className={link.type === "phone" ? "w-3.5 h-3.5" : "w-[15px] h-[15px]"}
            />
          </a>
        ))}
      </div>
    </nav>
  );
});

// Mobile Navigation Component
const MobileNav = React.memo(function MobileNav({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/90"
      aria-label="Mobile navigation"
    >
      <button
        className="cursor-pointer bg-transparent border-0 p-0"
        onClick={() => onNavigate("home")}
        aria-label="Go to home"
      >
        <VisualRifLogo className="w-[140px] h-[18px]" />
      </button>
      <button
        className="text-[#50C1BA] font-['Rajdhani',sans-serif] font-medium text-sm tracking-widest uppercase bg-transparent border-0 cursor-pointer"
        onClick={() => onNavigate("contact")}
      >
        CONTACT US
      </button>
    </nav>
  );
});

// Hero Content Component
const HeroContent = React.memo(function HeroContent({
  onScrollDown,
}: {
  onScrollDown: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full px-4 mt-8 md:mt-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[10vw] sm:text-5xl md:text-[65px] leading-[1.1] font-medium tracking-[0.4vw] sm:tracking-[2.5px] md:tracking-[5px] font-['Barlow_Semi_Condensed',sans-serif] uppercase text-white mb-6 md:mb-12 w-full flex flex-col items-center justify-center text-balance"
      >
        <span>Multidisciplinary</span>
        <span>Designer</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-['Rajdhani',sans-serif] font-semibold text-[3.5vw] sm:text-sm md:text-xl tracking-[0.5vw] sm:tracking-[2px] md:tracking-[5px] text-white uppercase leading-relaxed text-center w-full px-2"
      >
        <p className="mb-1 md:mb-0">
          Experience specialising in end-to-end design solutions
        </p>
        <p>across UX/UI and 3D design</p>
      </motion.div>
    </div>
  );
});

// Scroll Indicator Component
const ScrollIndicator = React.memo(function ScrollIndicator({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex justify-center w-full"
    >
      <button
        onClick={onClick}
        className="group flex flex-col items-center gap-6 cursor-pointer bg-transparent border-0 p-0"
        aria-label="Scroll down to about section"
      >
        <span className="font-['Rajdhani',sans-serif] font-semibold text-base md:text-xl tracking-[5px] uppercase text-white transition-opacity duration-200 group-hover:opacity-80">
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[26px] h-[26px] flex items-center justify-center rotate-180"
        >
          <ScrollTriangle className="w-[23px] h-5" />
        </motion.div>
      </button>
    </motion.div>
  );
});

// Main Hero Section Component
interface HeroSectionProps {
  videoId?: string;
  onNavigate?: (id: string) => void;
  activeSection?: string;
}

export function HeroSection({
  videoId = "_4cuwDSUX4Y",
  onNavigate,
  activeSection = "home",
}: HeroSectionProps) {
  const handleNavigate = React.useCallback(
    (id: string) => {
      if (onNavigate) {
        onNavigate(id);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onNavigate]
  );

  const handleScrollDown = React.useCallback(() => {
    handleNavigate("about");
  }, [handleNavigate]);

  return (
    <>
      {/* Navigation */}
      <DesktopNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav onNavigate={handleNavigate} />

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <HeroBackgroundVideo videoId={videoId} overlayOpacity={70} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full px-6 pt-24 md:pt-0 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-x-hidden">
        <section
          id="home"
          className="min-h-[calc(100vh-6rem)] md:min-h-screen flex flex-col items-center justify-between relative w-full pt-16 md:pt-32 pb-8 md:pb-12"
          aria-labelledby="hero-heading"
        >
          <h2 id="hero-heading" className="sr-only">
            Hero Section
          </h2>

          <HeroContent onScrollDown={handleScrollDown} />
          <ScrollIndicator onClick={handleScrollDown} />
        </section>
      </div>
    </>
  );
}

export default HeroSection;
