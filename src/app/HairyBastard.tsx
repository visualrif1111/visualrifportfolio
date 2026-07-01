import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import '../styles/fonts.css';
import { Footer } from './components/Footer';
import { NextProject } from './components/NextProject';
import { RevealText } from './components/motion/RevealText';
import { FadeIn } from './components/motion/FadeIn';
import { GalleryLightbox, type GalleryImage } from './components/GalleryLightbox';

import svgPaths from "../imports/Frame24/svg-acruz23zjw";

import imgHero                from "../imports/HairyBastard/hero.jpg";
import imgHeroBarbershop      from "../imports/HairyBastard/hero-barbershop.png";
import imgBarbershopComposite from "../imports/HairyBastard/barbershop-composite.png";
import imgCardsStacked        from "../imports/HairyBastard/cards-stacked.png";
import imgCardsStanding       from "../imports/HairyBastard/cards-standing.png";
import imgProcessStrip        from "../imports/HairyBastard/process-strip.jpeg";
import imgSpotUV6             from "../imports/HairyBastard/spot-uv-6.png";
import imgBarbershopShoot     from "../imports/HairyBastard/barbershop-shoot.png";
import imgLogoPortraitB       from "../imports/HairyBastard/logo-portrait-b.png";
import imgLogoMarkDark        from "../imports/HairyBastard/logo-mark-dark.png";
import imgCardFrontOrangeA    from "../imports/HairyBastard/card-front-orange-a.png";
import imgDev1Maps            from "../imports/HairyBastard/dev-1-maps.png";
import imgDev1CardB           from "../imports/HairyBastard/dev-1-card-b.png";
import imgCardFinalOrange     from "../imports/HairyBastard/card-final-orange.png";
import imgDev2Patterns        from "../imports/HairyBastard/dev-2-patterns.png";
import imgSpotUVFront         from "../imports/HairyBastard/spot-uv-front.jpg";
import imgCollage             from "../imports/HairyBastard/collage.png";
import imgCardFlat            from "../imports/HairyBastard/card-flat.png";
import imgSpotUVClose         from "../imports/HairyBastard/spot-uv-close.jpg";

const THB_GALLERY: GalleryImage[] = [
  { src: imgHero,                alt: 'Final Business Card — Spot UV Gold' },          // 0
  { src: imgBarbershopComposite, alt: 'The Hairy Bastard — Card Front and Back' },    // 1
  { src: imgCardsStacked,        alt: 'The Hairy Bastard — Stacked Cards Mockup' },  // 2
  { src: imgCardsStanding,       alt: 'Final Printed Business Cards' },               // 3
  { src: imgProcessStrip,        alt: 'Project Process Overview' },                   // 4
  { src: imgSpotUV6,             alt: 'Spot UV Card — Standing Mockup' },            // 5
  { src: imgBarbershopShoot,     alt: 'Barbershop — Photo Shoot' },                   // 6
  { src: imgLogoPortraitB,       alt: 'Logo Concept — Portrait B' },                  // 7
  { src: imgLogoMarkDark,        alt: 'Logo Mark — Dark' },                           // 8
  { src: imgCardFrontOrangeA,    alt: 'Card Design — Brick Lane Map' },               // 9
  { src: imgDev1Maps,            alt: 'Development Stage 1 — Map Studies' },          // 10
  { src: imgDev1CardB,           alt: 'Development Stage 1 — Card Iteration' },       // 11
  { src: imgCardFinalOrange,     alt: 'Card Design — Final Orange' },                 // 12
  { src: imgDev2Patterns,        alt: 'Development Stage 2 — Map Patterns' },         // 13
  { src: imgSpotUVFront,         alt: 'Spot UV Card — Front' },                       // 14
  { src: imgCollage,             alt: 'Project Collage — Process Overview' },         // 15
  { src: imgCardFlat,            alt: 'Final Card — Front and Back' },                // 16
  { src: imgSpotUVClose,         alt: 'Spot UV Card — Close-up' },                   // 17
];

function VisualRifLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={`block ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 235.669 30.159">
      <path d={svgPaths.p13c84500} fill="#50C1BA" />
      <path d={svgPaths.p37476b00} fill="white" />
      <path d={svgPaths.pa013800}  fill="white" />
      <path d={svgPaths.p630c200}  fill="white" />
      <path d={svgPaths.p349de6f0} fill="white" />
      <path d={svgPaths.p39faef00} fill="white" />
      <path d={svgPaths.p141d9280} fill="white" />
      <path d={svgPaths.p4738e00}  fill="white" />
      <path d={svgPaths.pffcfbf0}  fill="white" />
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

export default function HairyBastard() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <div className="relative bg-transparent text-white min-h-screen selection:bg-[#50C1BA] selection:text-black">

      {/* Desktop sidebar nav */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between sidebar">
        <div>
          <div className="mb-12 cursor-pointer" onClick={() => navigate('/')}>
            <VisualRifLogo className="w-[180px] h-[24px]" />
          </div>
          <div className="relative pl-6">
            <div className="absolute left-[3px] top-2 bottom-[-400px] w-[1px] bg-white opacity-20" />
            <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white" />
            <ul className="flex flex-col gap-8 text-[18px] tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap">
              <li
                className="hover:text-white transition-colors cursor-pointer"
                onClick={() => navigate('/', { state: window.matchMedia('(max-width: 768px)').matches ? { restoreMobileHomeScroll: true } : { restoreHomeScroll: true } })}
              >
                <span className="flex items-center gap-2"><ArrowLeft size={16} /> BACK TO HOME</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-4 relative">
          <div className="absolute left-[0.5px] bottom-1/2 translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white" />
          <a href="https://www.instagram.com/visualrif/" target="_blank" rel="noreferrer" className="text-white hover:text-[#50C1BA] transition-colors"><SocialInstagram className="w-[15px] h-[15px]" /></a>
          <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" className="text-white hover:text-[#50C1BA] transition-colors"><SocialLinkedin className="w-[15px] h-[15px]" /></a>
          <a href="tel:07598078923" className="text-white hover:text-[#50C1BA] transition-colors"><SocialPhone className="w-[14px] h-[14px]" /></a>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/90">
        <button
          className="text-white hover:text-[#50C1BA] transition-colors"
          onClick={() => navigate('/', { state: window.matchMedia('(max-width: 768px)').matches ? { restoreMobileHomeScroll: true } : { restoreHomeScroll: true } })}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 w-full md:pl-[280px]">

        {/* Hero */}
        <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black">
          <img
            src={imgHeroBarbershop}
            alt="The Hairy Bastard Barbershop — Brick Lane London"
            className="absolute inset-0 w-full h-full object-cover object-[55%_center]"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 mt-16 md:mt-0">
            <h1 className="text-[40px] md:text-[80px] lg:text-[110px] leading-none font-['Barlow_Semi_Condensed',sans-serif] font-medium tracking-[0.1em] uppercase text-white drop-shadow-lg">
              <span className="block overflow-hidden">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                  The Hairy
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                  Bastard
                </motion.span>
              </span>
            </h1>
          </div>
        </section>

        {/* Meta */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-16 uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] text-sm md:text-[20px]">
            {[
              { label: 'YEAR',     value: '2018' },
              { label: 'LOCATION', value: 'LONDON' },
              { label: 'ROLE',     value: <span className="leading-snug">BRAND IDENTITY<br />PRINT DESIGN</span> },
              { label: 'INDUSTRY', value: <span className="leading-snug">BARBERSHOP<br />GROOMING</span> },
            ].map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">{label}</p>
                <p>{value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Introduction — Overview / Challenge / Solution */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: text */}
            <div className="lg:col-span-5 flex flex-col gap-16">
              <div>
                <RevealText className="mb-6">
                  <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">Overview</h2>
                </RevealText>
                <FadeIn>
                  <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                    <p>The Hairy Bastard is an independent barbershop located at 80 Brick Lane, London — one of East London's most culturally distinctive streets. This project involved developing a complete brand identity from the ground up, covering logo design, typography, colour systems, and print production for the business launch.</p>
                    <p className="hidden md:block">The brief called for an identity that felt genuinely rooted in its environment — bold enough to stand out in a competitive area, while being immediately legible at small sizes across business cards, signage, and digital platforms.</p>
                  </div>
                </FadeIn>
              </div>
              <div>
                <RevealText className="mb-6">
                  <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">Challenge</h2>
                </RevealText>
                <FadeIn>
                  <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                    <p>The key challenge was creating a visual identity that felt genuinely tied to its location. Brick Lane carries a strong sense of place and character — any brand identity representing a business here needed to reflect that authenticity rather than produce something generic or interchangeable.</p>
                    <p className="hidden md:block">The identity also needed to work across a range of applications simultaneously, from the fine detail of a business card to the larger-scale presence of shop signage, while remaining consistent and recognisable throughout.</p>
                  </div>
                </FadeIn>
              </div>
              <div>
                <RevealText className="mb-6">
                  <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">Solution</h2>
                </RevealText>
                <FadeIn>
                  <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                    <p>The solution centred on combining two defining elements: a man's head silhouette profile, and the street layout of Brick Lane itself. By mapping the local streets directly into the head shape, the logo became a literal representation of both the craft and the location — a barber and his Brick Lane home, unified in a single mark.</p>
                    <p className="hidden md:block">This concept carried naturally into the business card design, where the street map and silhouette formed a full-bleed graphic composition on the front face, finished with a spot UV lacquer to give the map pattern a premium, tactile quality.</p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right: images — two crops of barbershop composite, then cards + process strip */}
            <div className="lg:col-span-7 flex flex-col gap-4" data-cursor="view">
              <div className="grid grid-cols-[2fr_5fr] gap-4">
                <div className="overflow-hidden rounded-[16px] h-[220px] md:h-[270px] cursor-pointer" onClick={() => openAt(1)}>
                  <motion.img
                    src={imgBarbershopComposite}
                    alt="The Hairy Bastard — Card Front and Back"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                </div>
                <div className="overflow-hidden rounded-[16px] h-[220px] md:h-[270px] cursor-pointer" onClick={() => openAt(2)}>
                  <motion.img
                    src={imgCardsStacked}
                    alt="The Hairy Bastard — Stacked Cards Mockup"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-[16px]">
                <motion.img
                  src={imgCardsStanding}
                  alt="Final Printed Business Cards"
                  loading="lazy"
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => openAt(3)}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[16px] h-[220px] md:h-[300px] cursor-pointer" onClick={() => openAt(2)}>
                  <motion.img
                    src={imgCardsStacked}
                    alt="The Hairy Bastard — Stacked Cards Mockup"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                </div>
                <div className="overflow-hidden rounded-[16px] h-[220px] md:h-[300px] cursor-pointer" onClick={() => openAt(5)}>
                  <motion.img
                    src={imgSpotUV6}
                    alt="Spot UV Card — Standing Mockup"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>
              <p className="font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500 mt-1">The finished cards — spot UV lacquer on a matte charcoal base</p>
            </div>
          </div>
        </section>

        {/* Full-width feature image */}
        <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-8 md:py-16">
          <FadeIn className="w-full" data-cursor="view">
            <motion.img
              src={imgBarbershopShoot}
              alt="The Hairy Bastard — Barbershop"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openAt(6)}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
            <p className="font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500 mt-3">The Hairy Bastard — 80 Brick Lane, London</p>
          </FadeIn>
        </section>

        {/* Approach text */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-16 text-center">
          <FadeIn>
            <div className="font-['Lato',sans-serif] font-light text-[18px] md:text-[22.9px] leading-[1.6] tracking-[0.05em] text-gray-200 space-y-8">
              <p className="md:hidden">A barbershop identity rooted in place — combining a man's silhouette with the Brick Lane street map to create a logo that is both a portrait and a postcode, finished with spot UV print for a premium tactile result.</p>
              <p className="hidden md:block">The project was approached with a strong emphasis on place-making — the idea that a brand identity should tell you exactly where it belongs the moment you see it. The Brick Lane street map, rendered in precise cartographic detail, became the visual texture of the brand, while the head silhouette grounded it in the craft of barbering. Together they created a mark that is instantly readable as a logo, but rewards closer inspection with the richness of the map detail inside it.</p>
              <p className="hidden md:block">Print production was a key consideration from the earliest stages, with the spot UV specification planned as an integral part of the business card design rather than an afterthought. The matte laminated charcoal base and the glossy UV-lifted map pattern work together to create a card that communicates quality before a word has been read.</p>
            </div>
          </FadeIn>
        </section>

        {/* Breakdown */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3">
            <RevealText>
              <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Breakdown</h2>
            </RevealText>
          </div>
          <div className="lg:col-span-9">
            <FadeIn>
              <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p>The concept behind The Hairy Bastard business card was built around the idea of reinforcing the location and identity of the business through design. This was reflected through a custom illustrated map of Brick Lane, with the surrounding streets integrated directly into the layout to create a stronger connection between the brand and its environment.</p>
                  <p>The card itself was designed to align with the interior aesthetic of the business, elevating the overall presence and atmosphere associated with the Brick Lane location. Working with the existing logo, the challenge was to adapt and extend the visual identity into a more refined and premium printed outcome.</p>
                </div>
                <div className="space-y-4">
                  <p>A strong emphasis was also placed on structure and composition, with the golden ratio influencing the layout system to create a balanced and visually distinctive design that stood apart from traditional business cards.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Initial Concept */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 items-center">
          <RevealText className="w-full text-center">
            <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Initial Concept</h2>
          </RevealText>
          <FadeIn className="w-full text-center -mt-4">
            <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400 max-w-xl mx-auto">The head silhouette and the Brick Lane street map, unified into a single mark.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 w-full" data-cursor="view">
            {/* Left: logo portrait */}
            <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(7)}>
              <motion.img src={imgLogoPortraitB} alt="Logo Concept — Portrait B" loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
            </div>
            {/* Right: card design + logo mark stacked */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(9)}>
                <motion.img src={imgCardFrontOrangeA} alt="Card Design — Brick Lane Map" loading="lazy" className="w-full h-auto object-cover" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
              </div>
              <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(8)}>
                <motion.img src={imgLogoMarkDark} alt="Logo Mark — Dark" loading="lazy" className="w-full h-auto object-cover" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
              </div>
            </div>
          </div>
        </section>

        {/* Development — Stage 1 */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-8 items-center">
          <RevealText className="w-full text-center">
            <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Development — Stage 1</h2>
          </RevealText>
          <FadeIn className="w-full text-center -mt-4">
            <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400 max-w-xl mx-auto">Studying the map detail and testing it across early card iterations.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" data-cursor="view">
            <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(10)}>
              <motion.img src={imgDev1Maps} alt="Development Stage 1 — Map Studies" loading="lazy" className="w-full h-auto object-cover" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
            </div>
            <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(11)}>
              <motion.img src={imgDev1CardB} alt="Development Stage 1 — Card Iteration" loading="lazy" className="w-full h-auto object-cover" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
            </div>
          </div>
          <FadeIn className="w-full" data-cursor="view">
            <motion.img
              src={imgCardFinalOrange}
              alt="Card Design — Final Orange"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openAt(12)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
          </FadeIn>
        </section>

        {/* Development — Stage 2 */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 items-center">
          <RevealText className="w-full text-center">
            <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Development — Stage 2</h2>
          </RevealText>
          <FadeIn className="w-full text-center -mt-4">
            <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400 max-w-xl mx-auto">Refining the map into a repeatable pattern for the spot UV treatment.</p>
          </FadeIn>
          <FadeIn className="w-full max-w-2xl mx-auto" data-cursor="view">
            <motion.img
              src={imgDev2Patterns}
              alt="Development Stage 2 — Map Patterns"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openAt(13)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
          </FadeIn>
        </section>

        {/* Spot UV */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 items-center">
          <RevealText className="w-full text-center">
            <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Spot UV</h2>
          </RevealText>
          <FadeIn className="w-full text-center -mt-4">
            <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400 max-w-xl mx-auto">A glossy UV lacquer lifts the map pattern off the matte base — quality you can feel.</p>
          </FadeIn>
          <FadeIn className="w-full max-w-3xl mx-auto" data-cursor="view">
            <motion.img
              src={imgSpotUVFront}
              alt="Spot UV Card — Front"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openAt(14)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
          </FadeIn>
        </section>

        {/* Full-width collage */}
        <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-8">
          <FadeIn className="w-full" data-cursor="view">
            <motion.img
              src={imgCollage}
              alt="Project Collage — Process Overview"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openAt(15)}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
          </FadeIn>
        </section>

        {/* Final */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 items-center">
          <RevealText className="w-full text-center">
            <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Final</h2>
          </RevealText>
          <FadeIn className="w-full text-center -mt-4">
            <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400 max-w-xl mx-auto">The finished business card — front and back, in the hand.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 w-full" data-cursor="view">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(3)}>
                <motion.img src={imgCardsStanding} alt="Final Printed Business Cards" loading="lazy" className="w-full h-auto object-cover" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
              </div>
              <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(4)}>
                <motion.img src={imgProcessStrip} alt="Project Process Overview" loading="lazy" className="w-full h-[180px] md:h-[220px] object-cover object-top" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
              </div>
              <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(17)}>
                <motion.img src={imgSpotUVClose} alt="Spot UV Card — Close-up" loading="lazy" className="w-full h-auto object-cover" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openAt(16)}>
              <motion.img src={imgCardFlat} alt="Final Card — Front and Back" loading="lazy" className="w-full h-full min-h-[400px] object-cover" whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
            </div>
          </div>
        </section>

        <NextProject title="Diversion Audio" to="/projects/diversion-audio" />
        <Footer />
      </div>

      <GalleryLightbox
        images={THB_GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
