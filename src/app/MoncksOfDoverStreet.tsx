import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Phone, ArrowLeft, X } from 'lucide-react';
import Lenis from 'lenis';
import { useNavigate } from 'react-router';
import '../styles/fonts.css';

import svgPaths from "../imports/Frame24/svg-acruz23zjw";

import imgMoncksStylingSheetDesktop11 from "../imports/MoncksOfDoverStreet-1-1/b91a303b82e44b4121ec4b0626f4484f071c09c4.png";
import imgRectangle27 from "../imports/MoncksOfDoverStreet-1-1/eb89bf441ca942ecfeb5155de1dcf32bd2934c26.png";
import imgRectangle30 from "../imports/MoncksOfDoverStreet-1-1/5193e76aa2da40140748e76b0bab1534ac9ccf8a.png";
import imgRectangle31 from "../imports/MoncksOfDoverStreet-1-1/16c4df6c05c51ae80a80656941440025e24b26e5.png";
import imgRectangle32 from "../imports/MoncksOfDoverStreet-1-1/f7409a73309c21ed7d6e1e140728ae516786fcd5.png";
import imgRectangle33 from "../imports/MoncksOfDoverStreet-1-1/fbcaa43f2e019966b846322e007d00da2bafec69.png";
import imgRectangle4 from "../imports/MoncksOfDoverStreet-1-1/d6dc0169d02bf250d8190d1fed447e89d8d5a544.png";
import imgRectangle23 from "../imports/MoncksOfDoverStreet-1-1/4142daa82b830c04d4aac911aa1294fd073be33a.png";
import imgRectangle24 from "../imports/MoncksOfDoverStreet-1-1/fdb4f42d3744f127c2eee11d6961cba7701c40f9.png";
import imgRectangle25 from "../imports/MoncksOfDoverStreet-1-1/cddeb323f6d225e2939bd463f0afdb425951c23d.png";
import imgRectangle40 from "../imports/MoncksOfDoverStreet-1-1/98ce850bbdf3b4c501620bc7925ccfcc977f9ae2.png";
import img59 from "../imports/MoncksOfDoverStreet-1-1/f80f56de89553ff9092250f835fb72a16d7651ec.png";
import img49 from "../imports/MoncksOfDoverStreet-1-1/95f40c29a9e1ec3c4eea12fd128014d21b7ed557.png";

function VisualRifLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={`block ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 235.669 30.159">
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
}

function SocialInstagram({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 15.0795 15.0795">
      <path d={svgPaths.p386b1640} fill="currentColor" />
    </svg>
  );
}

function SocialLinkedin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 15.0795 15.0795">
      <path clipRule="evenodd" d={svgPaths.p1a85db80} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

function SocialPhone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 14.1371 14.1373">
      <path d={svgPaths.p35dc3720} fill="currentColor" />
    </svg>
  );
}

export default function MoncksOfDoverStreet() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-transparent text-white min-h-screen font-['Barlow_Semi_Condensed',sans-serif] selection:bg-[#50C1BA] selection:text-black">
      {/* Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between">
        <div>
          <div className="mb-12 cursor-pointer" onClick={() => navigate('/')}>
            <VisualRifLogo className="w-[180px] h-[24px]" />
          </div>
          <div className="relative pl-6">
            <div className="absolute left-[3px] top-2 bottom-[-400px] w-[1px] bg-white opacity-20"></div>
            <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white"></div>
            <ul className="flex flex-col gap-8 text-[18px] tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => navigate('/')}>
                <span className="flex items-center gap-2">
                  <ArrowLeft size={16} /> BACK TO HOME
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 pl-4 relative">
          <div className="absolute left-[0.5px] bottom-1/2 translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white"></div>
          <a href="https://www.instagram.com/visualrif/" target="_blank" rel="noreferrer" className="text-white hover:text-[#50C1BA] transition-colors"><SocialInstagram className="w-[15px] h-[15px]" /></a>
          <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" className="text-white hover:text-[#50C1BA] transition-colors"><SocialLinkedin className="w-[15px] h-[15px]" /></a>
          <a href="tel:07598078923" className="text-white hover:text-[#50C1BA] transition-colors"><SocialPhone className="w-[14px] h-[14px]" /></a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/80 backdrop-blur-sm">
        <button className="text-white hover:text-[#50C1BA] transition-colors" onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 w-full md:pl-[280px]">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] overflow-hidden">
          <img src={imgRectangle4} alt="Moncks of Dover Street Hero" className="absolute inset-0 w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 mt-16 md:mt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[50px] md:text-[98px] leading-none font-['Barlow_Semi_Condensed',sans-serif] font-medium tracking-[0.08em] uppercase text-white mb-8 drop-shadow-lg"
            >
              Moncks Of<br />Dover Street
            </motion.h1>
          </div>
        </section>

        {/* Project Meta Info */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-24 uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] text-sm md:text-[26px]">
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">YEAR</p>
              <p>2019</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">LOCATION</p>
              <p>LONDON</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">ROLE</p>
              <p>UX / UI</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">INDUSTRY</p>
              <p>LUXURY HOSPITALITY</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12 md:gap-16">
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Overview</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>As a Digital Designer at Verb Brands, I was tasked with designing a luxury hospitality website for Moncks Of Dover Street, a premium brasserie located in Mayfair, London. This project marked a pivotal moment in my career, allowing me to establish myself within the luxury digital design space.</p>
                <p>The objective was to create a refined 15-page brochure website that reflected the restaurant’s premium identity, heritage, and interior experience, while also functioning seamlessly for a B2C audience through features such as reservation integrations. The project was delivered within a one-month timeframe with a £12,000 production budget.</p>
              </div>
            </div>
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Challenge</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>Before beginning the design phase, I conducted extensive research using the sitemap, functional specifications, brand guidelines, and interior design references provided. This allowed me to build a strategic understanding of the brand’s visual language, cultural influences, and audience expectations.</p>
                <p>One of the main challenges was creating a digital identity for a relatively new brand with a strong and recognisable name. I explored influences tied to both Christopher Monck and Dover Street’s association with luxury fashion, art, and culture in London, using these references to shape the overall creative direction.</p>
              </div>
            </div>
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Solution</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>My approach combined strategic research with refined UX/UI thinking to create a digital experience that felt both immersive and functional. By merging the sitemap and functional requirements with the brand research, I designed a website that balanced elegant visuals with intuitive usability.</p>
                <p>Through considered layouts, typography, and imagery, the final experience translated the atmosphere of the restaurant into a premium online journey that encouraged users to engage with the brand and visit the establishment.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="w-full relative">
              <img src={imgRectangle23} alt="Laptop Mockup" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="relative">
                <img src={imgRectangle24} alt="Mobile Mockup" className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="relative">
                <img src={imgRectangle25} alt="Desktop Mockup" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Approach Text */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-16 text-center">
          <div className="font-['Lato',sans-serif] font-light text-[18px] md:text-[22.9px] leading-[1.6] tracking-[0.05em] text-gray-200">
            <p>The project was approached with a strong emphasis on strategic thinking, ensuring the digital experience reflected both the luxury positioning and cultural identity behind Moncks Of Dover Street. Drawing from extensive research into the brand’s heritage, interior design, and audience expectations, I developed a refined creative direction centred around elegant typography, a restrained colour palette, and editorial-inspired layouts that mirrored the atmosphere of the restaurant itself. The visual language was intentionally minimal yet immersive, allowing the imagery, spacing, and typography to communicate sophistication while maintaining clarity and usability. Throughout the project, cross-platform consistency and scalability were key considerations, ensuring the website performed seamlessly across desktop and mobile experiences while supporting future growth. By combining strategic UX/UI principles with a premium visual approach, the final outcome elevated the brand’s digital presence, strengthened its positioning within London’s luxury hospitality market, and created a more engaging experience for users interacting with the brand online.</p>
          </div>
        </section>

        {/* Styling Sheet */}
        <section className="w-full px-6 md:px-12 py-16 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full">
            <img src={imgMoncksStylingSheetDesktop11} alt="Styling Sheet" className="w-full h-auto object-cover rounded-lg bg-white" />
          </div>
          <div className="relative w-full flex justify-center">
            <div className="relative w-full max-w-xl">
              <img src={imgRectangle40} alt="Typography & Colors" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Big Rounded Image */}
        <section className="w-full px-6 md:px-12 py-8 max-w-[1920px] mx-auto">
          <div className="relative w-full">
            <img src={imgRectangle27} alt="Design Element" className="w-full h-auto object-cover rounded-[30px] md:rounded-[76px]" />
          </div>
        </section>

        {/* 4 Image Grid */}
        <section className="w-full px-6 md:px-12 py-8 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[imgRectangle30, imgRectangle31, imgRectangle32, imgRectangle33].map((img, i) => (
              <div key={i} className="relative w-full">
                <img src={img} alt={`Gallery Image ${i + 1}`} className="w-full h-auto object-cover rounded-[30px] md:rounded-[55px]" />
              </div>
            ))}
          </div>
        </section>

        {/* Full Width Images */}
        <section className="w-full py-16 flex flex-col gap-16 overflow-hidden">
          <div className="relative w-full px-6 md:px-12 max-w-[1920px] mx-auto">
            <img src={img49} alt="Sitemap" className="w-full h-auto object-cover rounded-lg bg-white" />
          </div>
          <div className="relative w-full max-w-[1920px] mx-auto">
             <img src={img59} alt="Mobile Screens" className="w-full h-auto object-cover" />
          </div>
        </section>



        {/* Responsibilities */}
        <section className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-['Lato',sans-serif] font-light text-[24px] md:text-[31px] tracking-[0.05em] text-white mb-6">Responsibilities</h2>
            </div>
            <div className="lg:col-span-8 font-['Lato',sans-serif] font-light text-[16px] md:text-[22px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-8">
              <p>Throughout the project, I was responsible for contributing to both the strategic and creative execution of the digital experience. My role included supporting the creative direction of the website, developing the UX/UI design system, and translating the brand’s luxury positioning into a refined and immersive online experience. I worked closely with senior creatives and developers to ensure the final outcome remained visually consistent, technically functional, and aligned with the overall brand vision.</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Creative Direction Support</li>
                <li>UX/UI Design</li>
                <li>Art Direction</li>
                <li>Brand Experience Design</li>
                <li>Visual Research & Strategy</li>
                <li>Layout & Interaction Design</li>
                <li>Responsive Design</li>
                <li>Development Collaboration</li>
                <li>Digital Asset Creation</li>
                <li>Cross-Platform Consistency</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-[#1c1c1e] py-16 px-6 md:px-12 md:pl-[280px]">
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
                <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50C1BA]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                hello@visualrif.com
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50C1BA]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
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
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}