import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Phone, ArrowLeft } from 'lucide-react';
import Lenis from 'lenis';
import { useNavigate } from 'react-router';
import '../styles/fonts.css';

import svgPaths from "../imports/Frame24/svg-acruz23zjw";

import imgRectangle43 from "../imports/SunilGavaskarProject/42100d4cb5e89bf24572cb5cf967dfb41d47179e.png";
import imgRectangle46 from "../imports/SunilGavaskarProject/86b645be6df4a096d1fe8214d4297a3cac9ffae7.png";
import imgNftieSunilGavaskarMindmapV11 from "../imports/SunilGavaskarProject/c82f1dd454250318816f6accc5b010028783c282.png";
import imgRectangle27 from "../imports/SunilGavaskarProject/b80d3d48655e8a31f8dbbf5ceb809238e00735b9.png";
import imgRectangle30 from "../imports/SunilGavaskarProject/e89c19cd30f2494e425d0a60af9e595a295b92ae.png";
import imgRectangle52 from "../imports/SunilGavaskarProject/f5e6fee41b84ea7aaf4adce4f403d10941fe67c7.png";
import imgRectangle31 from "../imports/SunilGavaskarProject/5bfe834acae00c4ef91c4b70f76e719bad028f87.png";
import imgRectangle53 from "../imports/SunilGavaskarProject/dd47c94b8d7d73141f1f2137f5dd0156ca86a9d3.png";
import imgRectangle32 from "../imports/SunilGavaskarProject/e23d827b709b967baa93fedbdb0f27d379eaf8aa.png";
import imgRectangle54 from "../imports/SunilGavaskarProject/cd695552f7c737c5bed3f8e66fce757b272d09f8.png";
import imgRectangle33 from "../imports/SunilGavaskarProject/a62fc97326e047703ed86cfa20f0d4c9b5d95b3d.png";
import imgRectangle55 from "../imports/SunilGavaskarProject/72abd18e4e3edba31b10c2160f8b8c601d4503e8.png";
import imgRectangle28 from "../imports/SunilGavaskarProject/1034bd354437a880afec3d0c1da77c04706b8d13.png";
import imgRectangle29 from "../imports/SunilGavaskarProject/20d0406d44179ab36af7966d2b9bdec282ee9437.png";
import imgRectangle34 from "../imports/SunilGavaskarProject/86dbe258e95ec0068d975db9bb72abb48a59d3e8.png";
import imgRectangle37 from "../imports/SunilGavaskarProject/89e893b7f970f98aac87684633f015dfd0e7628d.png";
import imgRectangle51 from "../imports/SunilGavaskarProject/d4f7e5a4528724ff4db2037ab375356efa732c07.png";
import imgSg22HeroImageV01202204141 from "../imports/SunilGavaskarProject/3df58ada09138168e0c51724af7ec05bea736716.png";
import imgImg01632 from "../imports/SunilGavaskarProject/64562e22fd549861351b28aadd9a6454b2cc55e9.png";
import imgImg01642 from "../imports/SunilGavaskarProject/b4e9d1362190c004d0a5eadf9236c61881b2bb95.png";
import imgNftieSunilGavaskarMindmap2 from "../imports/SunilGavaskarProject/9f847f2c74c776c680bb990082dd98688f494e30.png";
import imgSg22HomepageV07202204134 from "../imports/SunilGavaskarProject/9048072e8ecc4333edc3d61bb42786c58c07b4a0.png";
import img2SunilGavaskarTheEmblems3 from "../imports/SunilGavaskarProject/d7c9bf7260782b0fa96292eb81ea654f840b990f.png";
import imgSunilGavaskarTheMoments3 from "../imports/SunilGavaskarProject/adde1db957982f5160da06f59e6f2565423909da.png";
import imgSunilGavaskarHallOfFame3 from "../imports/SunilGavaskarProject/24aca0cf507397aef5fa516ca8741c97da3eaf46.png";
import imgSunilGavaskarTheHallOfFameV23 from "../imports/SunilGavaskarProject/130fafa6183f9cf9541eeb73e44ef4db8e3e037b.png";
import imgEllipse5 from "../imports/SunilGavaskarProject/57e05b02450362c31cdcf56162a165d964882973.png";

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

export default function SunilGavaskar() {
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
    <div className="relative bg-transparent text-white min-h-screen font-['Barlow_Semi_Condensed',sans-serif] selection:bg-[#50C1BA] selection:text-black overflow-hidden">
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
        <section className="relative w-full h-[25vh] md:h-[40vh] overflow-hidden">
          <img src={imgRectangle51} alt="Always First Sunil Gavaskar Hero" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 mt-16 md:mt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[36px] md:text-[80px] lg:text-[98px] leading-none font-['Barlow_Semi_Condensed',sans-serif] font-medium tracking-[0.08em] uppercase text-white drop-shadow-lg"
            >
              Always First<br />
              <span className="text-[18px] md:text-[32px] font-['Barlow',sans-serif] tracking-[0.25em]">Sunil Gavaskar</span>
            </motion.h1>
          </div>
        </section>

        {/* Project Meta Info */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-24 uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] text-sm md:text-[26px]">
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">YEAR</p>
              <p>2022</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">LOCATION</p>
              <p>LONDON</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">ROLE</p>
              <p className="leading-snug">UX / UI DESIGN<br/>DIGITAL DESIGN</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">INDUSTRY</p>
              <p className="leading-snug">WEB3 / NFT /<br/>DIGITAL COLLECTIBLES</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12 md:gap-16">
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Overview</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>As a Freelance Digital Designer at Velvet Badger, I worked on Always First – Sunil Gavaskar, a Web3 and NFT project created for legendary cricketer Sunil Gavaskar. This project marked a key moment in my career, shaping my interest in digital assets and immersive experiences.</p>
                <p>The objective was to design a website that brought together the wider Always First campaign, alongside a supporting social media campaign to promote the NFT launch and virtual gallery experience. The platform allowed fans to explore Sunil Gavaskar’s achievements and engage with the NFT collection through a modern and accessible digital experience.</p>
              </div>
            </div>
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Challenge</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>One of the main challenges was translating a complex Web3 and NFT concept into a clear and engaging user experience within a short production timeframe.</p>
                <p>The project included multiple moving parts — including website design, NFT storytelling, and social media assets — all of which needed to feel cohesive under one visual direction.</p>
                <p>To approach this, I began with research and mind mapping to better understand the Web3 space, audience, and visual identity before moving into a rapid design sprint process.</p>
              </div>
            </div>
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Solution</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>The final solution was a cohesive digital campaign that combined the website, NFT experience, and social media content into a unified platform. The website acted as a central hub for the project, while the social media campaign helped build awareness and engagement around the launch.</p>
                <p>Using a clean visual hierarchy and contemporary Web3-inspired design, the final experience balanced innovation with accessibility, creating an engaging platform for both existing fans and audiences new to NFTs.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="w-full relative">
              <img src={imgRectangle43} alt="Laptop Preview" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="relative">
                <img src={imgRectangle46} alt="Desktop Preview" className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="relative flex items-center justify-center bg-[#011615] rounded-lg p-6 overflow-hidden min-h-[300px]">
                <div className="flex items-start justify-center gap-1.5 md:gap-2 h-[200px] md:h-[240px] relative z-10 w-full overflow-hidden">
                  <img src={imgSg22HomepageV07202204134} className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300" alt="Slice 1" />
                  <img src={img2SunilGavaskarTheEmblems3} className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300" alt="Slice 2" />
                  <img src={imgSunilGavaskarTheMoments3} className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300" alt="Slice 3" />
                  <img src={imgSunilGavaskarHallOfFame3} className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300" alt="Slice 4" />
                  <div className="h-full flex flex-col justify-start">
                    <img src={imgSunilGavaskarTheHallOfFameV23} className="h-[25%] w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300" alt="Slice 5" />
                  </div>
                </div>
                <img src={imgEllipse5} className="absolute bottom-4 right-4 w-20 md:w-24 h-auto drop-shadow-[0_10px_30px_rgba(210,176,99,0.3)] z-20" alt="Gold Seal" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Approach Text */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-4 md:py-8 text-center">
          <div className="font-['Lato',sans-serif] font-light text-[18px] md:text-[22.9px] leading-[1.6] tracking-[0.05em] text-gray-200 space-y-6">
            <p>The project was approached with a strong focus on creating an accessible and engaging Web3 experience that reflected both the legacy of Sunil Gavaskar and the innovative direction of the Always First NFT campaign. Drawing from research into digital collectibles, audience behaviour, and the wider visual identity of the project, I developed a modern creative direction centred around immersive layouts, bold typography, and contemporary Web3-inspired visuals.</p>
            <p>The visual language was designed to balance innovation with accessibility, allowing users unfamiliar with NFTs to navigate the platform with clarity while still creating an engaging and premium digital experience. Alongside the website, supporting social media assets were designed to maintain a cohesive brand presence across all touchpoints and help drive awareness around the launch of the collection.</p>
            <p>Throughout the project, consistency, scalability, and responsive design were key considerations, ensuring the experience translated effectively across desktop, mobile, and social platforms. By combining strategic UX/UI thinking with immersive digital storytelling, the final outcome strengthened the campaign’s online presence and created a cohesive platform for fans to engage with the NFT collection and virtual gallery experience.</p>
          </div>
        </section>

        {/* Elaborate Mindmap & Sketches Section */}
        <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 pt-12 pb-24 flex flex-col gap-10 border-t border-gray-800 mt-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Left tall panel: wireframe */}
            <div className="w-full lg:w-1/4 hidden md:flex justify-center lg:justify-start items-start">
              <img src={imgNftieSunilGavaskarMindmap2} alt="Wireframe" className="w-full max-w-[300px] h-auto object-contain rounded-2xl bg-[#0a0a0a] p-4 drop-shadow-2xl" />
            </div>
            
            {/* Right block */}
            <div className="w-full lg:w-3/4 flex flex-col gap-8">
              {/* Top block */}
              <div className="w-full bg-[#011615] rounded-[24px] py-16 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
                <div className="w-full md:w-[40%] flex justify-center gap-4 relative z-10 opacity-80 mix-blend-screen">
                  <img src={imgImg01632} className="w-[45%] h-auto rounded" alt="Sketch Process 1" />
                  <img src={imgImg01642} className="w-[45%] h-auto rounded mt-8" alt="Sketch Process 2" />
                </div>
                <div className="w-full md:w-[60%] flex justify-center z-10">
                  <img src={imgNftieSunilGavaskarMindmapV11} alt="Mindmap" className="w-full h-auto object-cover rounded-xl" />
                </div>
              </div>

              {/* Bottom block: Sketch Squares */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-4">
                <img src={imgRectangle27} className="w-full aspect-square object-cover rounded-[24px] shadow-xl hover:scale-[1.02] transition-transform duration-500" alt="Wireframe 1" />
                <img src={imgRectangle28} className="w-full aspect-square object-cover rounded-[24px] shadow-xl hover:scale-[1.02] transition-transform duration-500" alt="Wireframe 2" />
                <img src={imgRectangle29} className="w-full aspect-square object-cover rounded-[24px] shadow-xl hover:scale-[1.02] transition-transform duration-500" alt="Wireframe 3" />
              </div>
            </div>
          </div>
        </section>

        {/* Breakdown Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:text-right pt-2 lg:pr-8 lg:border-r border-[#d2b063]">
            <h2 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[24px] tracking-[0.25em] uppercase text-white mb-6 lg:mb-0">
              Breakdown
            </h2>
            <div className="h-[2px] w-12 bg-[#d2b063] lg:hidden mb-6"></div>
          </div>
          <div className="lg:col-span-8 font-['Lato',sans-serif] font-light text-[16px] md:text-[18px] leading-[1.8] tracking-[0.05em] text-gray-300 space-y-6">
            <p>Coming into the project with a fresh perspective on the Web3 and NFT space, I began by researching the industry and creating a structured mind map to break down the visual identity, audience, and wider campaign direction. This was followed by early wireframes and layout exploration to define the user journey and overall structure of the website experience.</p>
            <p>Working within a tight two-week timeframe, I moved into a rapid design sprint focused on delivering a cohesive digital experience across the website and supporting social media campaign, successfully unifying multiple parts of the project under one creative direction.</p>
          </div>
        </section>

        {/* Gallery Banners & Grids */}
        <section className="w-full px-6 md:px-12 py-16 max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-16">
          {/* Banner 1 */}
          <div className="w-full rounded-[16px] md:rounded-[30px] overflow-hidden drop-shadow-2xl">
            <img src={imgRectangle34} alt="Banner 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Grid 1 (Monochrome Photos) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[imgRectangle52, imgRectangle53, imgRectangle54, imgRectangle55].map((img, i) => (
              <div key={i} className="w-full rounded-[12px] md:rounded-[24px] overflow-hidden drop-shadow-lg">
                <img src={img} className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" alt={`Grid item ${i+1}`} />
              </div>
            ))}
          </div>

          {/* Banner 2 */}
          <div className="w-full rounded-[16px] md:rounded-[30px] overflow-hidden drop-shadow-2xl">
            <img src={imgRectangle37} alt="Banner 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Grid 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[imgRectangle30, imgRectangle31, imgRectangle32, imgRectangle33].map((img, i) => (
              <div key={i} className="w-full rounded-[12px] md:rounded-[24px] overflow-hidden drop-shadow-lg bg-[#111]">
                <img src={img} className="w-full aspect-square object-contain hover:scale-105 transition-transform duration-500" alt={`Grid 2 item ${i+1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Extra Bottom Hero */}
        <section className="w-full py-16 md:py-24">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
            <div className="w-full relative rounded-lg overflow-hidden h-[300px] md:h-[500px]">
               <img src={imgSg22HeroImageV01202204141} alt="Final Hero Image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1c1c1e] py-16 px-6 md:px-12">
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
    </div>
  );
}
