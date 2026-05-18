import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Phone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import '../styles/fonts.css';
import { Footer } from './components/Footer';

import svgPaths from "../imports/Frame24/svg-acruz23zjw";

import imgRectangle27 from "../imports/DiversionAudio-1/82019337c3dff09841830a3fa0ba6c5e55de196b.png";
import imgRectangle57 from "../imports/DiversionAudio-1/3fe3922f60833b9ba1cf7cd8812a91efdf3d0bab.png";
import imgRectangle60 from "../imports/DiversionAudio-1/ac603d58efb239aae098a5476e35281703f15329.png";
import imgRectangle52 from "../imports/DiversionAudio-1/546fb9410db4c7084440748ba320462c76e6a1cb.png";
import imgRectangle53 from "../imports/DiversionAudio-1/25baab767008e412ec6080c8489a5ead9a84c86a.png";
import imgRectangle54 from "../imports/DiversionAudio-1/333e331023b62674cf332c805e83fca54fef8c45.png";
import imgRectangle55 from "../imports/DiversionAudio-1/f369d6138af05cf72401ad4fd9befc17fb9ea79a.png";
import imgRectangle28 from "../imports/DiversionAudio-1/4d3fe7c2d7009b5057a44c289f035da551702aae.png";
import imgRectangle58 from "../imports/DiversionAudio-1/46e040575cfd8d0ce4379b32f2e256e4514bc1e2.png";
import imgRectangle61 from "../imports/DiversionAudio-1/55a6d92750fa4e9c539aef866a61b49795c3764d.png";
import imgRectangle29 from "../imports/DiversionAudio-1/a2760cfb08269773ee991b494375d77bcbdf5e1a.png";
import imgRectangle59 from "../imports/DiversionAudio-1/43ab9786cf9454826b7e3c085d132a1b42c50b82.png";
import imgRectangle62 from "../imports/DiversionAudio-1/603813e41eb2b7ed705e78ff58a74464b9e4bd06.png";
import imgRectangle34 from "../imports/DiversionAudio-4/19c5a640c9e29697cb9cbc71687502f5fbe08a50.png";
import imgRectangle51 from "../imports/DiversionAudio-4/5076c920b44bfc19718193c5c9d3d5986930647f.png";

import imgQ9WBmv from "../imports/DiversionAudio-4/f3a0fe9c1de391e3ad7feedb5490440e6061d97a.png";
import imgWmSe6X from "../imports/DiversionAudio-1/944359c8aa292f97b1f2221d7adf40b87651b912.png";
import imgGLl5Y0 from "../imports/DiversionAudio-1/3eadc0117061ac75abc063f96315d604054da183.png";
import imgPAw4Ua from "../imports/DiversionAudio-1/5adc206c49ab3d22a521ddb04cd50adb07be14b3.png";
import imgShxZJi from "../imports/DiversionAudio-1/a271e425cf9e7320d30a02a8e36fa07eef6321f2.png";
import img86AdbQ from "../imports/DiversionAudio-1/b5150cb0282902de5b7a1fc4aec2fe782fb79d3c.png";
import imgKSp8PB from "../imports/DiversionAudio-1/7ef12cd21a16f0c40e2a2056bdb6871bf038c43a.png";
import imgUnts7W from "../imports/DiversionAudio-1/9506925ba2efc3804af7c726056905217d4d5c61.png";
import imgQqBlvg from "../imports/DiversionAudio-1/378e6613d623e693572e5b77cad98f47eb26781c.png";
import imgI8U1V0 from "../imports/DiversionAudio-1/5841a775a819cbcfbb6664b06b1cad11845ac537.png";
import imgJrYl5T from "../imports/DiversionAudio-1/417429f5351feaf4a0ac388b5ecbea96dae9d58f.png";
import imgMRbMkF from "../imports/DiversionAudio-1/106036fff02ed33e2d9936b31ae2d7e091525cf9.png";
import imgM0WPKe from "../imports/DiversionAudio-1/cd6e622b039d502789cc9cd9535ef680f63272ca.png";
import imgU83Uhq from "../imports/DiversionAudio-1/de2ccb758e39836c42d6124927303e2cf3a2fe1f.png";
import imgVf1Flk from "../imports/DiversionAudio-1/69c62396492e293f37672818c9f18907302ffe9b.png";
import imgMp0GAu from "../imports/DiversionAudio-1/1914a30628f0e8b72870573608b2733f4d23ec63.png";

import imgRectangle67 from "../imports/DiversionAudio-4/b644000f2c0e2f62512d6ab1e5da6317c1d8989b.png";
import imgRectangle66 from "../imports/DiversionAudio-4/0fce0998bd24d76aed2a1c9c28ec19328d3fec71.png";
import imgRectangle93 from "../imports/DiversionAudio-4/67f857fea22822175792c89c05139fca2fc958d0.png";
import imgRectangle76 from "../imports/DiversionAudio-4/af601e4409469c0bbed2c6dedc02618c64526c06.png";
import imgRectangle77 from "../imports/DiversionAudio-4/86f2cf48fb33633411a17f7dcc39d77b1b3dbe21.png";
import imgRectangle78 from "../imports/DiversionAudio-4/0b18d56a64a0c0bbce5021e1d603399db10c5aaa.png";
import imgRectangle80 from "../imports/DiversionAudio-4/2279679ffd7397c799a28fac535f100bec52299d.png";

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

export default function DiversionAudio() {
  const navigate = useNavigate();

  const inspirationLogos = [
    imgQ9WBmv, imgWmSe6X, imgGLl5Y0, imgPAw4Ua,
    imgShxZJi, img86AdbQ, imgKSp8PB, imgUnts7W,
    imgQqBlvg, imgI8U1V0, imgJrYl5T, imgMRbMkF,
    imgM0WPKe, imgU83Uhq, imgVf1Flk, imgMp0GAu
  ];

  return (
    <div className="relative bg-transparent text-white min-h-screen font-['Barlow_Semi_Condensed',sans-serif] selection:bg-[#50C1BA] selection:text-black">
      {/* Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between sidebar">
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
      <nav className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/90">
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
        <section className="relative w-full h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0 md:-left-[280px] md:w-[calc(100%+280px)] w-full h-[50vh] md:h-[60vh] overflow-hidden pointer-events-none z-0">
            <iframe
              src="https://www.youtube.com/embed/qOugLMycEe0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=qOugLMycEe0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[50vh] md:min-h-[60vh] min-w-[88.88vh] md:min-w-[106.66vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            ></iframe>
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 mt-16 md:mt-0 z-20 pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[40px] md:text-[80px] lg:text-[110px] leading-none font-['Barlow_Semi_Condensed',sans-serif] font-medium tracking-[0.1em] uppercase text-white drop-shadow-lg"
            >
              Diversion Audio
            </motion.h1>
          </div>
        </section>

        {/* Project Meta Info */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-24 uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] text-sm md:text-[26px]">
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">YEAR</p>
              <p>2024</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">LOCATION</p>
              <p>SHREWSBURY</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">ROLE</p>
              <p className="leading-snug">EARLY BRAND<br/>IDENTITY</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">INDUSTRY</p>
              <p className="leading-snug">MUSIC &amp;<br/>ENTERTAINMENT</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16 flex flex-col gap-24">
          
          {/* Overview Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Overview</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>Diversion Audio is a London-based Drum &amp; Bass collective focused on underground electronic music and live events. I was tasked with creating the initial visual identity for the brand, developing the early logo direction and foundational branding across digital and promotional platforms.</p>
                <p>This project marked my first introduction to working within the electronic music industry — a space I’m personally passionate about as an avid Drum &amp; Bass listener. Seeing the identity later featured at events and venues including Boomtown Fair and Volks Nightclub made the project especially rewarding, while the collective has continued to grow successfully within the UK music scene.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] drop-shadow-xl">
                  <img src={imgRectangle51} alt="Event Context 1" loading="lazy" className="w-full h-full object-cover rounded-[16px] min-h-[300px]" />
                </div>
                <div className="aspect-[4/5] drop-shadow-xl">
                  <img src={imgRectangle76} alt="Event Context 2" loading="lazy" className="w-full h-full object-cover rounded-[16px] min-h-[300px]" />
                </div>
                <div className="rounded-[16px] overflow-hidden drop-shadow-xl aspect-[16/9]">
                  <img src={imgRectangle77} alt="Logo Black Background" loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
                </div>
                <div className="rounded-[16px] overflow-hidden drop-shadow-xl aspect-[16/9]">
                  <img src={imgRectangle78} alt="Logo Yellow Background" loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Challenge & Solution Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-16">
              <div>
                <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Challenge</h2>
                <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                  <p>One of the main challenges with this project was defining the level of brand development required during the early stages of the collective. A strong focus was placed on creating a comprehensive visual identity system that extended beyond just logo design, ensuring the brand had a scalable foundation for long-term growth.</p>
                  <p>As a grassroots movement, the initial requirements were relatively minimal. However, a more strategic approach was introduced to help establish a stronger and more consistent identity that could evolve across future events, campaigns, and audience growth within the electronic music scene.</p>
                </div>
              </div>
              <div>
                <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Solution</h2>
                <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                  <p>The final solution came through an iterative design process that began with exploring more complex visual concepts before gradually refining the identity into a simpler and more effective outcome. Exploring complexity early on allowed stronger creative ideas and visual directions to emerge, which could then be stripped back to their most recognisable form.</p>
                  <p>Simplicity became a key part of the final logo design, resulting in a bold and adaptable identity that worked effectively across digital platforms, event branding, merchandise, and promotional material while remaining instantly recognisable within the electronic music scene.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col">
              <img src={imgRectangle80} alt="Man in Orange Shirt" loading="lazy" className="w-full h-full min-h-[500px] object-cover rounded-[16px] drop-shadow-xl" />
            </div>
          </div>
        </section>

        {/* Project Approach Text */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-16 text-center">
          <div className="font-['Lato',sans-serif] font-light text-[18px] md:text-[22.9px] leading-[1.6] tracking-[0.05em] text-gray-200 space-y-8">
            <p>The project was approached with a strong focus on creating a scalable and recognisable visual identity that reflected the energy and culture of London’s underground Drum &amp; Bass scene. Drawing from research into electronic music branding, live event culture, and audience behaviour, the creative direction centred around bold minimalism, strong typography, and a clean visual system designed to work across digital, social, and live event environments.</p>
            <p>The visual language was developed through an iterative design process that initially explored more complex concepts before refining the identity into a simpler and more impactful solution. Simplicity became a key part of the final outcome, resulting in a logo that felt adaptable, memorable, and effective across event promotion, merchandise, and online platforms.</p>
            <p>Throughout the project, scalability and long-term brand growth were important considerations despite the collective’s grassroots beginnings. By establishing a stronger branding foundation beyond just the logo itself, the final outcome helped position Diversion Audio with a more cohesive and professional visual presence within the UK electronic music scene, supporting its continued growth across events and festival appearances including Boomtown Fair.</p>
          </div>
        </section>

        {/* Research */}
        <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 items-center">
          <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] tracking-[0.25em] uppercase text-[#50C1BA] w-full text-center">Research</h2>
          <div className="w-full max-w-7xl mx-auto overflow-hidden">
            <img src={imgRectangle93} alt="Research Mindmap" loading="lazy" className="w-full h-auto object-contain invert mix-blend-screen opacity-90 min-h-[300px]" />
          </div>
        </section>

        {/* Inspiration */}
        <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16 items-center">
          <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] tracking-[0.25em] uppercase text-[#50C1BA] w-full text-center">Inspiration</h2>
          
          {/* Logos container */}
          <div className="w-full bg-white rounded-[24px] p-8 md:p-16 shadow-2xl flex flex-col justify-center items-center gap-10 md:gap-16 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 w-full px-2">
              {inspirationLogos.slice(0, 5).map((logo, i) => (
                <img key={i} src={logo} alt={`Inspiration logo ${i+1}`} loading="lazy" className="h-16 md:h-24 w-auto object-contain mix-blend-multiply" />
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 w-full px-2">
              {inspirationLogos.slice(5).map((logo, i) => (
                <img key={i+5} src={logo} alt={`Inspiration logo ${i+6}`} loading="lazy" className="h-8 md:h-12 w-auto object-contain mix-blend-multiply" />
              ))}
            </div>
          </div>

          {/* 3 big shapes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {[imgRectangle27, imgRectangle28, imgRectangle29].map((img, i) => (
              <div key={i} className="rounded-[24px] overflow-hidden aspect-square shadow-xl">
                <img src={img} alt={`Inspiration Shape ${i+1}`} loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
              </div>
            ))}
          </div>
        </section>

        {/* Experimentation & Iteration */}
        <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16 items-center">
          <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] tracking-[0.25em] uppercase text-[#50C1BA] w-full text-center">Experimentation &amp; Iteration</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {/* Row 1 */}
            <div className="rounded-[24px] overflow-hidden aspect-square flex items-center justify-center p-4 md:p-8">
              <img src={imgRectangle57} alt="Experimentation Path" loading="lazy" className="w-[90%] h-auto object-contain opacity-80 min-h-[200px]" />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square shadow-xl">
              <img src={imgRectangle58} alt="Experimentation Cross" loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square shadow-xl">
              <img src={imgRectangle59} alt="Experimentation Complex" loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
            </div>

            {/* Row 2 */}
            <div className="rounded-[24px] overflow-hidden aspect-square shadow-xl">
              <img src={imgRectangle60} alt="Experimentation Final White" loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square shadow-xl">
              <img src={imgRectangle61} alt="Experimentation Final Yellow" loading="lazy" className="w-full h-full object-cover min-h-[200px]" />
            </div>
            <div className="flex items-start justify-center md:justify-start aspect-square pt-4">
              <div className="w-[65%] h-[65%] rounded-[24px] overflow-hidden shadow-xl">
                <img src={imgRectangle62} alt="Experimentation Small Black" loading="lazy" className="w-full h-full object-cover min-h-[150px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Final Outcome */}
        <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-16 items-center">
          <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] tracking-[0.25em] uppercase text-[#50C1BA] w-full text-center">Final Outcome</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-4xl mx-auto">
            <div className="rounded-[16px] overflow-hidden shadow-2xl">
              <img src={imgRectangle67} alt="Final Yellow Logo" loading="lazy" className="w-full h-auto object-cover min-h-[300px]" />
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-2xl">
              <img src={imgRectangle66} alt="Final Black Logo" loading="lazy" className="w-full h-auto object-cover min-h-[300px]" />
            </div>
          </div>
        </section>

        {/* Breakdown Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-gray-800">
          <div className="lg:col-span-4 lg:text-right pt-2 lg:pr-8 lg:border-r border-[#d2b063]">
            <h2 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[24px] tracking-[0.25em] uppercase text-white mb-6 lg:mb-0">
              Breakdown
            </h2>
            <div className="h-[2px] w-12 bg-[#d2b063] lg:hidden mb-6"></div>
          </div>
          <div className="lg:col-span-8 font-['Lato',sans-serif] font-light text-[16px] md:text-[18px] leading-[1.8] tracking-[0.05em] text-gray-300 space-y-6">
            <p>The concept behind the Diversion Audio logo was built around the idea of redirecting people back towards music, culture, and connection. This is reflected through the manipulated typography, where the chevron-inspired forms visually guide the eye back towards the word “Diversion”, symbolising movement, energy, and redirection within the music scene.</p>
            <p>The identity was designed to feel bold, immersive, and rooted within underground Drum &amp; Bass culture, while remaining simple and adaptable across event branding, merchandise, and digital platforms.</p>
            <p>The logo later took on a deeper personal meaning during Boomtown Fair 2025. After being separated from a friend across different campsites for several days, a moment while walking through the festival unexpectedly brought the project back into focus. Seeing the Diversion placard in the distance became a reminder of the original purpose behind the logo — the idea of diverting back towards the music, the people, and the experiences that connect communities together.</p>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-16">
          <div className="video-wrapper aspect-video drop-shadow-2xl bg-black/50 border border-gray-800">
            <iframe
              src="https://www.youtube.com/embed/qOugLMycEe0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=qOugLMycEe0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Gallery Grids */}
        <section className="w-full px-6 md:px-12 py-16 max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-16">
          {/* Main Hero Shot */}
          <div className="w-full rounded-[16px] md:rounded-[30px] overflow-hidden drop-shadow-2xl">
            <img src={imgRectangle34} alt="Event Hero 1" loading="lazy" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 min-h-[400px] md:min-h-[600px]" />
          </div>

          {/* Grid of smaller photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[imgRectangle52, imgRectangle53, imgRectangle54, imgRectangle55].map((img, i) => (
              <div key={i} className="w-full rounded-[12px] md:rounded-[24px] overflow-hidden drop-shadow-lg">
                <img src={img} loading="lazy" className="w-full aspect-square object-cover hover:scale-[1.03] transition-transform duration-500 min-h-[150px] md:min-h-[250px]" alt={`Grid item ${i+1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer className="md:pl-[280px]" />
      </div>
    </div>
  );
}
