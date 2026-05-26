import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import '../styles/fonts.css';
import { Footer } from './components/Footer';
import { RevealText } from './components/motion/RevealText';
import { FadeIn } from './components/motion/FadeIn';
import svgPaths from "../imports/Frame24/svg-acruz23zjw";

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

const CLOTHING_IMAGES = [
  '/jma-clothing/clothing-01.png',
  '/jma-clothing/clothing-02.png',
  '/jma-clothing/clothing-03.png',
  '/jma-clothing/clothing-04.png',
  '/jma-clothing/clothing-05.png',
  '/jma-clothing/clothing-07.png',
  '/jma-clothing/clothing-08.png',
  '/jma-clothing/clothing-09.png',
  '/jma-clothing/clothing-10.png',
  '/jma-clothing/clothing-11.png',
  '/jma-clothing/clothing-12.png',
  '/jma-clothing/clothing-13.png',
  '/jma-clothing/clothing-14.png',
  '/jma-clothing/clothing-15.png',
  '/jma-clothing/clothing-16.png',
  '/jma-clothing/clothing-17.png',
  '/jma-clothing/clothing-18.png',
  '/jma-clothing/clothing-19.png',
  '/jma-clothing/clothing-20.png',
];

const CATEGORIES: Record<string, { num: string; title: string; desc: string; detail: string; images?: string[] }> = {
  'custom-clothing': {
    num: '01',
    title: 'Custom Clothing',
    desc: 'Bespoke streetwear, luxury fits, and character-defining garments designed from concept to in-game implementation.',
    detail: 'Every clothing piece produced under JMA Customs was crafted with the same attention to detail as real-world fashion — from initial concept sketches through texture work, colour grading, and final in-game implementation across FiveM servers.',
    images: CLOTHING_IMAGES,
  },
  'chains-jewellery': {
    num: '02',
    title: 'Chains & Jewellery',
    desc: 'High-detail custom chain designs and jewellery assets worn across FiveM communities — crafted for maximum presence.',
    detail: 'Custom chain and jewellery commissions became one of the most sought-after offerings at JMA Customs. Each piece was designed to read clearly in-game while carrying the visual weight of luxury — bold geometry, precise detail, and a distinct identity for every client.',
    images: [
      '/jma-chains/chain-01.png',
      '/jma-chains/chain-02.png',
      '/jma-chains/chain-03.png',
      '/jma-chains/chain-04.png',
      '/jma-chains/chain-05.png',
      '/jma-chains/chain-06.png',
      '/jma-chains/chain-07.png',
      '/jma-chains/chain-08.png',
      '/jma-chains/chain-09.png',
      '/jma-chains/chain-10.png',
      '/jma-chains/chain-11.png',
      '/jma-chains/chain-12.png',
      '/jma-chains/chain-13.png',
      '/jma-chains/chain-14.png',
      '/jma-chains/chain-15.png',
      '/jma-chains/chain-16.png',
      '/jma-chains/chain-17.png',
      '/jma-chains/chain-18.png',
    ],
  },
  'luxury-branding': {
    num: '03',
    title: 'Luxury Branding',
    desc: 'Cinematic visual identity design for in-game businesses and e-sports communities — combining logos, typography, colour systems, and immersive digital styling.',
    detail: 'Branding work for JMA Customs extended beyond the game itself — covering full identity systems for in-game businesses and e-sports groups. Each brand was developed with the same rigour as real-world creative work: strategic positioning, distinctive visual language, and cohesive design systems built to last.',
  },
  '3d-adverts': {
    num: '04',
    title: '3D Adverts',
    desc: 'Immersive environmental graphics placed within the virtual city — from roadside billboards to storefront signage.',
    detail: '3D advertisements brought brand presence into the virtual city itself — placed across environments to build awareness, communicate identity, and create a sense of world-building within the FiveM ecosystem. Each advert was designed to feel native to the environment while standing out as premium creative work.',
  },
};

export default function JMACustomsCategoryPage() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const data = category ? CATEGORIES[category] : null;

  if (!data) {
    return (
      <div className="relative bg-transparent text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Rajdhani',sans-serif] text-gray-500 tracking-[0.3em] uppercase mb-4">Page not found</p>
          <button onClick={() => navigate('/projects/jma-customs')} className="text-[#50C1BA] hover:text-white transition-colors font-['Rajdhani',sans-serif] tracking-[0.25em] uppercase text-sm">
            Back to JMA Customs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-transparent text-white min-h-screen selection:bg-[#50C1BA] selection:text-black">

      {/* Desktop sidebar nav */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between sidebar">
        <div>
          <div className="mb-12 cursor-pointer" onClick={() => navigate('/')}>
            <VisualRifLogo className="w-[180px] h-[24px]" />
          </div>
          <div className="relative pl-6">
            <div className="absolute left-[3px] top-2 bottom-0 w-[1px] bg-white opacity-20" />
            <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white" />
            <ul className="flex flex-col gap-5 relative z-10 whitespace-nowrap">
              <li
                className="text-[13px] tracking-[0.25em] text-gray-400 font-['Rajdhani',sans-serif] font-medium uppercase hover:text-white transition-colors cursor-pointer"
                onClick={() => navigate('/projects/jma-customs')}
              >
                <span className="flex items-center gap-2"><ArrowLeft size={13} /> JMA Customs</span>
              </li>
              <li className="pt-2">
                <span className="text-[9px] tracking-[0.45em] font-['Rajdhani',sans-serif] font-semibold uppercase opacity-30">Custom Assets</span>
              </li>
              {Object.entries(CATEGORIES).map(([slug, cat]) => (
                <li key={slug}>
                  <button
                    className={`flex items-center gap-2.5 text-[13px] tracking-[0.22em] font-['Rajdhani',sans-serif] font-medium uppercase transition-all duration-200 cursor-pointer text-left ${
                      slug === category ? 'text-white opacity-100' : 'text-gray-400 opacity-60 hover:opacity-90 hover:text-white'
                    }`}
                    onClick={() => navigate(`/projects/jma-customs/${slug}`)}
                  >
                    <span className={`w-[4px] h-[4px] rounded-full shrink-0 transition-all duration-200 ${slug === category ? 'bg-white scale-125' : 'bg-white opacity-30'}`} />
                    {cat.title}
                  </button>
                </li>
              ))}
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
          onClick={() => navigate('/projects/jma-customs')}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
      </nav>

      <div className="relative z-10 w-full md:pl-[280px]">

        {/* Hero */}
        <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-black flex flex-col justify-end pb-16 md:pb-20 px-8 md:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#50C1BA]/6 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(80,193,186,0.01) 3px, rgba(80,193,186,0.01) 4px)' }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[200px] bg-[#50C1BA]/6 blur-[120px] pointer-events-none" />

          <motion.p
            className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.5em] uppercase text-[#50C1BA] mb-5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            JMA Customs — {data.num}
          </motion.p>
          <h1 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium leading-none uppercase">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[12vw] md:text-[7.5vw] tracking-[0.05em] text-white"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {data.title}
              </motion.span>
            </span>
          </h1>
        </section>

        {/* Description */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <FadeIn>
                <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[17px] leading-[1.7] text-gray-300 tracking-[0.04em]">{data.desc}</p>
              </FadeIn>
              <FadeIn>
                <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[15.5px] leading-[1.7] text-gray-400 tracking-[0.04em]">{data.detail}</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <RevealText className="mb-16 text-center">
            <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Gallery</h2>
          </RevealText>
          {data.images && data.images.length > 0 ? (
            <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
              {data.images.map((src, i) => (
                <motion.div
                  key={src}
                  className="break-inside-avoid overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                >
                  <img
                    src={src}
                    alt={`Custom clothing ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="aspect-[4/3] bg-[#060f0f] border border-gray-800/60 rounded-lg flex items-center justify-center">
                  <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-gray-800">Coming Soon</p>
                </div>
                <div className="aspect-[4/3] bg-[#060f0f] border border-gray-800/60 rounded-lg flex items-center justify-center">
                  <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-gray-800">Coming Soon</p>
                </div>
              </div>
              <div className="aspect-[21/9] bg-[#060f0f] border border-gray-800/60 rounded-lg flex items-center justify-center">
                <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-gray-800">Coming Soon</p>
              </div>
            </FadeIn>
          )}
        </section>

        {/* Back to JMA Customs banner */}
        <section
          className="border-t border-gray-800 px-6 md:px-12 py-20 md:py-28 cursor-pointer group"
          onClick={() => navigate('/projects/jma-customs')}
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <p className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-gray-500 group-hover:text-[#50C1BA] transition-colors">
              Full Case Study
            </p>
            <div className="flex items-center justify-between gap-6">
              <motion.h2
                className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[8vw] sm:text-[6vw] md:text-[5vw] leading-none tracking-[0.03em] uppercase text-white"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                Inside The World<br />
                <span className="text-[#50C1BA]">Of JMA Customs</span>
              </motion.h2>
              <motion.div
                className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-700 flex items-center justify-center text-white group-hover:border-[#50C1BA] transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
