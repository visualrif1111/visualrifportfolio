import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import '../styles/fonts.css';
import { Footer } from './components/Footer';
import { NextProject } from './components/NextProject';
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

const ecosystemSteps = [
  { num: '01', title: 'Character Identity', desc: 'Establishing a distinctive in-game persona — a recognizable visual presence, name, and aesthetic across FiveM communities.' },
  { num: '02', title: 'Community Presence', desc: 'Building trust and recognition through consistent interaction and visible creative output across roleplay servers.' },
  { num: '03', title: 'Offering Services', desc: 'Introducing custom clothing, chains, and branded assets to the community as a legitimate in-game creative business.' },
  { num: '04', title: 'Building Reputation', desc: 'Client referrals, community recognition, and consistent quality elevated JMA Customs into a trusted creative name.' },
  { num: '05', title: 'Growing Client Base', desc: 'Word-of-mouth and Discord presence scaled commissions across multiple FiveM servers and wider communities.' },
  { num: '06', title: 'Scaling JMA Customs', desc: 'A structured commission system, branded identity, and digital ecosystem transformed roleplay culture into a real creative business.' },
];

const assetCategories = [
  { num: '01', title: 'Custom Clothing', desc: 'Bespoke streetwear, luxury fits, and character-defining garments designed from concept to in-game implementation.', slug: 'custom-clothing', cover: '/jma-clothing/clothing-01.png' },
  { num: '02', title: 'Chains & Jewellery', desc: 'High-detail custom chain designs and jewellery assets worn across FiveM communities — crafted for maximum presence.', slug: 'chains-jewellery', cover: '/jma-chains/chain-01.png' },
  { num: '03', title: 'Luxury Branding', desc: 'Cinematic visual identity design for in-game businesses and e-sports communities — combining logos, typography, colour systems, and immersive digital styling.', slug: 'luxury-branding' },
  { num: '04', title: '3D Adverts', desc: 'Immersive environmental graphics placed within the virtual city — from roadside billboards to storefront signage.', slug: '3d-adverts' },
];

const discordChannels = ['# commissions', '# announcements', '# showcase', '# orders', '# support', '# community'];

const identityPillars = [
  { label: 'Visual Language', value: 'Cyber-luxury aesthetic — dark environments, typography, and immersive visual depth.' },
  { label: 'Brand Tone', value: 'Premium. Exclusive. Community-rooted. The voice of a digital creative agency with real craft behind every delivery.' },
  { label: 'Digital Persona', value: 'A recognised creative identity within FiveM — associated with quality, precision, and cultural relevance across servers.' },
  { label: 'Creative Direction', value: 'Visual Rif — the same editorial approach that drives real-world brand identity applied to virtual creative production.' },
];

const communityHighlights = [
  { title: 'Repeat Clients', desc: 'The quality of work drove consistent repeat business — clients returning for new collections, updated branding, and evolving identities.' },
  { title: 'Creative Collaborations', desc: 'JMA Customs partnered with other in-game businesses and creators, building projects that grew reach and creative credibility.' },
  { title: 'Cultural Recognition', desc: 'Recognised across FiveM communities for immersive branding, quality, and digital identity. The project also led to conversations with Rockstar Games employees around future opportunities in character and environment design.' },
];

const stats = [
  { value: '100+', label: 'Custom Assets' },
  { value: '50+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Active' },
  { value: '∞', label: 'Creative Reach' },
];

const NAV_ITEMS = [
  { id: 'jma-origin',    label: 'Overview' },
  { id: 'jma-ecosystem', label: 'Ecosystem' },
  { id: 'jma-assets',    label: 'Custom Assets' },
  { id: 'jma-discord',   label: 'Discord CRM' },
  { id: 'jma-identity',  label: 'Digital Identity' },
  { id: 'jma-impact',    label: 'Community Impact' },
];

export default function JMACustoms() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                onClick={() => navigate('/', { state: window.matchMedia('(max-width: 768px)').matches ? { restoreMobileHomeScroll: true } : { restoreHomeScroll: true } })}
              >
                <span className="flex items-center gap-2"><ArrowLeft size={13} /> Back to Home</span>
              </li>
              <li className="pt-2 pb-1">
                <span className="text-[9px] tracking-[0.45em] font-['Rajdhani',sans-serif] font-semibold uppercase opacity-30">JMA Customs</span>
              </li>
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={`flex items-center gap-2.5 text-[13px] tracking-[0.22em] font-['Rajdhani',sans-serif] font-medium uppercase transition-all duration-200 cursor-pointer text-left ${
                      activeSection === id ? 'text-white opacity-100' : 'text-gray-400 opacity-60 hover:opacity-90 hover:text-white'
                    }`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className={`w-[4px] h-[4px] rounded-full shrink-0 transition-all duration-200 ${activeSection === id ? 'bg-white scale-125' : 'bg-white opacity-30'}`} />
                    {label}
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
          onClick={() => navigate('/', { state: window.matchMedia('(max-width: 768px)').matches ? { restoreMobileHomeScroll: true } : { restoreHomeScroll: true } })}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
      </nav>

      <div className="relative z-10 w-full md:pl-[280px]">

        {/* ── 1. CINEMATIC HERO ── */}
        <section className="relative w-full h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
              src="https://www.youtube.com/embed/rhynMLdthSs?autoplay=1&mute=1&loop=1&playlist=rhynMLdthSs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
              allow="autoplay; encrypted-media; picture-in-picture"
              style={{ border: 0 }}
              title="JMA Customs Showreel"
            />
          </div>

          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(80,193,186,0.012) 3px, rgba(80,193,186,0.012) 4px)' }}
          />
          <div className="absolute bottom-0 left-1/4 w-[700px] h-[280px] bg-[#50C1BA]/8 blur-[140px] pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-16">
            <motion.p
              className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.5em] uppercase text-[#50C1BA] mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              GTA V / FiveM — Virtual Creative Ecosystem
            </motion.p>
            <h1 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium leading-none uppercase text-white mb-8">
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-[11vw] md:text-[7vw] tracking-[0.05em]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  Inside The World
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-[11vw] md:text-[7vw] tracking-[0.05em] text-[#50C1BA]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Of JMA Customs
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="font-['Lato',sans-serif] font-light text-[14px] md:text-[17px] leading-[1.75] text-gray-300 max-w-[600px] tracking-[0.04em]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              A luxury virtual customisation ecosystem built through immersive branding, digital identity, and creative entrepreneurship inside GTA V / FiveM.
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <p className="font-['Rajdhani',sans-serif] text-[10px] tracking-[0.4em] uppercase text-gray-600">Scroll</p>
            <motion.div
              className="w-[1px] h-10 bg-gray-700"
              animate={{ scaleY: [1, 0.35, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originY: 0 }}
            />
          </motion.div>
        </section>

        {/* ── 2. META ── */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-16 uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] text-sm md:text-[20px]">
            {[
              { label: 'YEAR',     value: '2025' },
              { label: 'LOCATION', value: <span className="leading-snug">VIRTUAL<br />(GTA V / FIVEM)</span> },
              { label: 'ROLE',     value: <span className="leading-snug">CREATIVE DIRECTOR<br />BRAND IDENTITY<br />DIGITAL ASSET DESIGN</span> },
              { label: 'INDUSTRY', value: <span className="leading-snug">VIRTUAL GAMING<br />METAVERSE<br />DIGITAL CREATIVE</span> },
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

        {/* ── 3. THE ORIGIN ── */}
        <section id="jma-origin" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-16">
              <div>
                <RevealText className="mb-6">
                  <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">The Origin</h2>
                </RevealText>
                <FadeIn>
                  <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                    <p>JMA Customs began not in a studio or agency — but inside a virtual world. Operating within the FiveM roleplay ecosystem of GTA V, the brand emerged from a simple ambition: to bring real creative craft and professional design standards into a space where few had pushed those boundaries before.</p>
                    <p>What started as in-character interactions evolved into a fully structured creative business. As reputation grew, so did demand — and JMA Customs expanded from custom 3D advertisments to clothing and jewellery into for other in-game businesses and e-sports groups.</p>
                  </div>
                </FadeIn>
              </div>
              <div>
                <RevealText className="mb-6">
                  <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">The Inspiration</h2>
                </RevealText>
                <FadeIn>
                  <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                    <p>Metaverse culture and the growing legitimacy of virtual identity drove the vision behind JMA Customs. The project drew from luxury fashion aesthetics, cyber-culture design, and the entrepreneurial energy of creators.</p>
                    <p>The ambition was to prove that creative value isn't bound by physical reality — that a brand built inside a game can carry the same weight, craft, and cultural meaning as one built in the real world.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeIn className="w-full">
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-[#50C1BA]/20">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GoFV2QiPTxU?autoplay=1&mute=0&start=97&controls=1&rel=0&modestbranding=1&playsinline=1"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0 }}
                    title="GTA V / FiveM — JMA Customs"
                  />
                </div>
              </FadeIn>
              <div className="grid grid-cols-3 gap-3">
                {['Roleplay Culture', 'Metaverse Vision', 'Digital Ownership'].map((tag) => (
                  <FadeIn key={tag}>
                    <div className="border border-gray-800 rounded-lg py-4 px-3 text-center hover:border-[#50C1BA]/30 transition-colors">
                      <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-gray-500">{tag}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. ROLEPLAY ECOSYSTEM FLOW ── */}
        <section id="jma-ecosystem" className="border-t border-gray-800 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealText className="mb-4 text-center">
              <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Roleplay Business Ecosystem</h2>
            </RevealText>
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.75] text-gray-400 text-center max-w-xl mx-auto mb-20 tracking-[0.04em]">
                How JMA Customs evolved from a roleplay character into a recognised virtual creative business.
              </p>
            </FadeIn>
            <div className="flex flex-col items-center">
              {ecosystemSteps.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center w-full max-w-2xl">
                  <motion.div
                    className="w-full flex gap-6 md:gap-10 items-start py-7 px-6 md:px-8 rounded-lg hover:bg-white/[0.02] transition-colors group border border-transparent hover:border-[#50C1BA]/15"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                  >
                    <span className="font-['Rajdhani',sans-serif] font-semibold text-[36px] md:text-[44px] text-[#50C1BA]/25 leading-none shrink-0 group-hover:text-[#50C1BA]/55 transition-colors w-14 text-right">{step.num}</span>
                    <div className="pt-1">
                      <h3 className="font-['Barlow',sans-serif] font-medium text-[13px] md:text-[15px] tracking-[0.28em] uppercase text-white mb-2.5">{step.title}</h3>
                      <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[15px] leading-[1.65] text-gray-400 tracking-[0.03em]">{step.desc}</p>
                    </div>
                  </motion.div>
                  {i < ecosystemSteps.length - 1 && (
                    <motion.div
                      className="w-[1px] h-8 bg-gradient-to-b from-[#50C1BA]/35 to-[#50C1BA]/8"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      style={{ originY: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.07 + 0.25 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CUSTOM ASSET DEVELOPMENT ── */}
        <section id="jma-assets" className="border-t border-gray-800 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealText className="mb-4 text-center">
              <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Custom Asset Development</h2>
            </RevealText>
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.75] text-gray-400 text-center max-w-xl mx-auto mb-16 tracking-[0.04em]">
                Every asset designed with precision — from concept to in-game implementation across clothing, jewellery, environments, and identity.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {assetCategories.map((cat, i) => (
                <motion.div
                  key={cat.num}
                  className="border border-gray-800 rounded-lg p-6 md:p-7 hover:border-[#50C1BA]/35 transition-all hover:bg-[#50C1BA]/[0.025] group cursor-pointer"
                  onClick={() => navigate(`/projects/jma-customs/${cat.slug}`)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className="mb-5 aspect-video rounded overflow-hidden border border-gray-800/40 group-hover:border-[#50C1BA]/20 transition-colors">
                    {cat.cover ? (
                      <img src={cat.cover} alt={cat.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-[#060f0f] flex items-center justify-center">
                        <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.3em] uppercase text-gray-700 group-hover:text-gray-600 transition-colors">Gallery Coming Soon</p>
                      </div>
                    )}
                  </div>
                  <span className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.4em] uppercase text-[#50C1BA]/60 mb-2.5 block">{cat.num}</span>
                  <h3 className="font-['Barlow',sans-serif] font-medium text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-white mb-2.5 group-hover:text-[#50C1BA] transition-colors">{cat.title}</h3>
                  <p className="font-['Lato',sans-serif] font-light text-[13px] md:text-[14px] leading-[1.65] text-gray-500 tracking-[0.03em] mb-4">{cat.desc}</p>
                  <span className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-[#50C1BA]/50 group-hover:text-[#50C1BA] transition-colors flex items-center gap-2">
                    View →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. DISCORD CRM ── */}
        <section id="jma-discord" className="border-t border-gray-800 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <RevealText className="mb-6">
                  <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Discord CRM</h2>
                </RevealText>
                <FadeIn>
                  <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4 mb-10">
                    <p>Discord served as the operational backbone of JMA Customs — the place where the brand came alive beyond the game. Every commission, every client relationship, and every community interaction was managed through a structured Discord ecosystem built for scale.</p>
                    <p>What began as a simple server evolved into a full CRM — with ticketing, order pipelines, and community channels that created a professional service experience unlike anything else in the FiveM space.</p>
                  </div>
                </FadeIn>
                <div className="flex flex-col">
                  {[
                    { title: 'Commission Tickets', desc: 'Structured ticket system guiding clients from initial brief through to final delivery.' },
                    { title: 'Order Management', desc: 'Clear pipeline tracking across open, in-progress, and completed commissions.' },
                    { title: 'Customer Communication', desc: 'Direct channels for updates, revision requests, and delivery confirmations.' },
                    { title: 'Community Engagement', desc: 'Public-facing channels for showcasing work, announcements, and community interaction.' },
                    { title: 'Service Pipelines', desc: 'Automated flows guiding clients through the commission journey end to end.' },
                    { title: 'Brand Announcements', desc: 'Structured release communications for new collections, drops, and collaborations.' },
                  ].map((feat, i) => (
                    <motion.div
                      key={feat.title}
                      className="border-b border-gray-800/50 py-4 last:border-0"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.055 }}
                    >
                      <h3 className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[13px] tracking-[0.28em] uppercase text-white mb-1">{feat.title}</h3>
                      <p className="font-['Lato',sans-serif] font-light text-[13px] md:text-[14px] leading-[1.6] text-gray-500 tracking-[0.03em]">{feat.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <FadeIn className="w-full">
                  <div className="w-full bg-[#0a0f1a] border border-[#50C1BA]/15 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#0d1424] border-b border-[#50C1BA]/10">
                      <div className="w-[9px] h-[9px] rounded-full bg-[#50C1BA]" />
                      <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-[#50C1BA]/75">JMA Customs — Community Server</p>
                    </div>
                    <div className="flex" style={{ minHeight: '340px' }}>
                      <div className="w-[150px] shrink-0 border-r border-[#50C1BA]/8 p-3 bg-[#080d18] flex flex-col gap-0.5">
                        <p className="font-['Rajdhani',sans-serif] text-[9px] tracking-[0.4em] uppercase text-gray-700 px-2 py-2 mb-1">Channels</p>
                        {discordChannels.map(ch => (
                          <div key={ch} className="px-2 py-1.5 rounded text-[10px] font-['Rajdhani',sans-serif] tracking-wider text-gray-600 hover:text-gray-400 hover:bg-white/4 transition-colors cursor-default">{ch}</div>
                        ))}
                      </div>
                      <div className="flex-1 p-5 flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#50C1BA]/20 shrink-0 flex items-center justify-center mt-0.5">
                            <span className="font-['Rajdhani',sans-serif] font-bold text-[8px] text-[#50C1BA]">JMA</span>
                          </div>
                          <div>
                            <span className="font-['Rajdhani',sans-serif] font-bold text-[10px] tracking-wider text-[#50C1BA]">JMA CUSTOMS</span>
                            <p className="font-['Lato',sans-serif] text-[11px] text-gray-500 mt-0.5 leading-relaxed">Commission system is now open. React below to open a ticket and start your order.</p>
                          </div>
                        </div>
                        <div className="border border-[#50C1BA]/20 rounded-lg p-4 bg-[#50C1BA]/4 ml-10">
                          <p className="font-['Rajdhani',sans-serif] font-bold text-[10px] tracking-[0.25em] uppercase text-white mb-1.5">Open a Commission Ticket</p>
                          <p className="font-['Lato',sans-serif] text-[11px] text-gray-500 leading-relaxed mb-3">Clothing · Chains · Branding · Billboards · Storefronts</p>
                          <div className="inline-block px-3 py-1.5 bg-[#50C1BA] rounded text-[9px] font-['Rajdhani',sans-serif] font-bold tracking-wider text-black uppercase">Create Ticket →</div>
                        </div>
                        <div className="flex flex-col gap-1.5 ml-10">
                          {['🟢  Clothing commission — delivered', '🟡  Chain design — in progress', '🔵  3D Advert - In Review'].map(item => (
                            <div key={item} className="py-1 border-b border-gray-800/30 last:border-0">
                              <p className="font-['Lato',sans-serif] text-[10px] text-gray-600">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. DIGITAL IDENTITY ── */}
        <section id="jma-identity" className="border-t border-gray-800 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealText className="mb-4 text-center">
              <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Digital Identity</h2>
            </RevealText>
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.75] text-gray-400 text-center max-w-xl mx-auto mb-16 tracking-[0.04em]">
                JMA Customs wasn't just a service — it was a fully realised brand. Every visual touchpoint crafted to communicate luxury, exclusivity, and creative authority.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <FadeIn>
                <div className="aspect-square bg-[#030d0d] border border-[#50C1BA]/18 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#50C1BA]/7 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#50C1BA]/3 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(80,193,186,0.06) 0%, transparent 70%)' }} />
                  <div className="text-center px-8 z-10">
                    <p className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[60px] md:text-[80px] tracking-[0.12em] uppercase text-white/8 leading-none">JMA</p>
                    <div className="w-16 h-[1px] bg-[#50C1BA]/30 mx-auto my-4" />
                    <p className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[22px] md:text-[30px] tracking-[0.4em] uppercase text-[#50C1BA] leading-none">CUSTOMS</p>
                    <div className="w-10 h-[1px] bg-[#50C1BA]/20 mx-auto mt-4" />
                    <p className="font-['Rajdhani',sans-serif] text-[9px] tracking-[0.55em] uppercase text-gray-700 mt-3">Virtual Creative Agency</p>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <p className="font-['Rajdhani',sans-serif] text-[9px] tracking-[0.35em] uppercase text-gray-800">Creative Direction — Visual Rif</p>
                  </div>
                </div>
              </FadeIn>
              <div className="flex flex-col gap-7">
                {identityPillars.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="border-l-2 border-[#50C1BA]/25 pl-5 hover:border-[#50C1BA] transition-colors"
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <p className="font-['Barlow',sans-serif] font-medium text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-[#50C1BA]/75 mb-2">{item.label}</p>
                    <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[15px] leading-[1.6] text-gray-400 tracking-[0.03em]">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. COMMUNITY & CULTURAL IMPACT ── */}
        <section id="jma-impact" className="border-t border-gray-800 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealText className="mb-4 text-center">
              <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">Community Impact</h2>
            </RevealText>
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.75] text-gray-400 text-center max-w-xl mx-auto mb-20 tracking-[0.04em]">
                More than a brand — a recognised virtual creative ecosystem with a community of clients, collaborators, and followers who valued genuine craft.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center py-10 px-4 border border-gray-800 rounded-lg hover:border-[#50C1BA]/30 transition-colors hover:bg-[#50C1BA]/[0.02]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[44px] md:text-[60px] tracking-[-0.02em] text-[#50C1BA] leading-none mb-3">{stat.value}</p>
                  <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {communityHighlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-6 md:p-8 border border-gray-800 rounded-lg hover:border-[#50C1BA]/30 transition-colors"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[13px] tracking-[0.3em] uppercase text-white mb-3">{item.title}</h3>
                  <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[15px] leading-[1.65] text-gray-500 tracking-[0.03em]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. FINAL SHOWCASE ── */}
        <section className="border-t border-gray-800 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealText className="mb-16 text-center">
              <h2 className="font-['Rajdhani',sans-serif] font-semibold text-4xl tracking-[0.15em] uppercase text-[#50C1BA]">The Full Vision</h2>
            </RevealText>
            <FadeIn>
              <div className="relative border border-[#50C1BA]/18 rounded-lg overflow-hidden">
                <div className="bg-[#030d0d] px-8 md:px-16 py-16 md:py-24 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#50C1BA]/5 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(80,193,186,0.08) 0%, transparent 60%)' }} />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-14 bg-gradient-to-b from-[#50C1BA]/40 to-transparent" />
                  <motion.blockquote
                    className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[20px] md:text-[34px] lg:text-[42px] leading-[1.28] tracking-[0.04em] text-white/90 max-w-4xl mx-auto relative z-10"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85 }}
                  >
                    "JMA Customs transformed roleplay culture into a real creative business ecosystem through branding, identity, and immersive digital design."
                  </motion.blockquote>
                  <div className="mt-10 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-10 bg-[#50C1BA]/35" />
                    <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.45em] uppercase text-[#50C1BA]/65">Creative Direction — Visual Rif</p>
                    <div className="h-[1px] w-10 bg-[#50C1BA]/35" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <NextProject title="The Hairy Bastard" to="/projects/the-hairy-bastard" />
        <Footer />
      </div>
    </div>
  );
}
