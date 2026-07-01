import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import '../styles/fonts.css';
import { NextProject } from './components/NextProject';
import { FadeIn } from './components/motion/FadeIn';
import {
  CaseStudyShell,
  Section,
  SectionHeader,
  Hero,
  MetaBar,
  EditorialSplit,
  StatGrid,
  FactGrid,
  PullQuote,
} from './components/case-study';

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
  { value: '70+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Active' },
  { value: '∞', label: 'Creative Reach' },
];

const NAV_ITEMS = [
  { id: 'jma-origin', label: 'Overview' },
  { id: 'jma-ecosystem', label: 'Ecosystem' },
  { id: 'jma-assets', label: 'Custom Assets' },
  { id: 'jma-discord', label: 'Discord CRM' },
  { id: 'jma-identity', label: 'Digital Identity' },
  { id: 'jma-impact', label: 'Community Impact' },
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

  const goHome = () => navigate('/', { state: window.matchMedia('(max-width: 768px)').matches ? { restoreMobileHomeScroll: true } : { restoreHomeScroll: true } });

  const sidebarNav = (
    <div className="relative pl-6">
      <div className="absolute left-[3px] top-2 bottom-0 w-[1px] bg-white opacity-20" />
      <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white" />
      <ul className="flex flex-col gap-5 relative z-10 whitespace-nowrap">
        <li className="text-[13px] tracking-[0.25em] text-gray-400 font-['Rajdhani',sans-serif] font-medium uppercase hover:text-white transition-colors cursor-pointer" onClick={goHome}>
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
  );

  return (
    <CaseStudyShell sidebarNav={sidebarNav} onBack={goHome}>
      {/* ── Cinematic hero ── */}
      <Hero
        heightClassName="h-[100svh]"
        align="bottom-left"
        overlayClassName="bg-black/65"
        eyebrow="GTA V / FiveM — Virtual Creative Ecosystem"
        titleClassName="text-[11vw] md:text-[7vw] tracking-[0.05em]"
        titleLines={[
          'Inside The World',
          <span key="jma" className="text-[#50C1BA]">Of JMA Customs</span>,
        ]}
        subtitle="A luxury virtual customisation ecosystem built through immersive branding, digital identity, and creative entrepreneurship inside GTA V / FiveM."
        scrollCue
        media={
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
              src="https://www.youtube.com/embed/rhynMLdthSs?autoplay=1&mute=1&loop=1&playlist=rhynMLdthSs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
              allow="autoplay; encrypted-media; picture-in-picture"
              style={{ border: 0 }}
              title="JMA Customs Showreel"
            />
          </div>
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(80,193,186,0.012) 3px, rgba(80,193,186,0.012) 4px)' }} />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[280px] bg-[#50C1BA]/8 blur-[140px] pointer-events-none" />
      </Hero>

      <MetaBar
        size="md"
        items={[
          { label: 'YEAR', value: '2025' },
          { label: 'LOCATION', value: <span className="leading-snug">VIRTUAL<br />(GTA V / FIVEM)</span> },
          { label: 'ROLE', value: <span className="leading-snug">CREATIVE DIRECTOR<br />BRAND IDENTITY<br />DIGITAL ASSET DESIGN</span> },
          { label: 'INDUSTRY', value: <span className="leading-snug">VIRTUAL GAMING<br />METAVERSE<br />DIGITAL CREATIVE</span> },
        ]}
      />

      {/* ── 01 · Introduction — origin ── */}
      <Section id="jma-origin" pad="default">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-6">
              <FadeIn className="w-full">
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-[#50C1BA]/20">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GoFV2QiPTxU?autoplay=0&mute=0&start=97&controls=1&rel=0&modestbranding=1&playsinline=1"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0 }}
                    title="GTA V / FiveM — JMA Customs"
                  />
                </div>
                <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-gray-600 mt-3">Inside the FiveM world — JMA Customs in action</p>
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
          }
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="01 — Introduction" title="The Origin" />
              <FadeIn>
                <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                  <p>JMA Customs began not in a studio or agency — but inside a virtual world. Operating within the FiveM roleplay ecosystem of GTA V, the brand emerged from a simple ambition: to bring real creative craft and professional design standards into a space where few had pushed those boundaries before.</p>
                  <p>What started as in-character interactions evolved into a fully structured creative business. As reputation grew, so did demand — and JMA Customs expanded from custom 3D advertisments to clothing and jewellery for other in-game businesses and e-sports groups.</p>
                </div>
              </FadeIn>
            </div>
            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="02 — The Vision" title="The Inspiration" />
              <FadeIn>
                <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                  <p>Metaverse culture and the growing legitimacy of virtual identity drove the vision behind JMA Customs. The project drew from luxury fashion aesthetics, cyber-culture design, and the entrepreneurial energy of creators.</p>
                  <p>The ambition was to prove that creative value isn't bound by physical reality — that a brand built inside a game can carry the same weight, craft, and cultural meaning as one built in the real world.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 03 · Creative process — ecosystem flow ── */}
      <Section id="jma-ecosystem" pad="loose" border="top">
        <SectionHeader
          eyebrow="03 — Creative Process"
          title="Roleplay Business Ecosystem"
          lead="How JMA Customs evolved from a roleplay character into a recognised virtual creative business."
          align="center"
          className="mb-16 md:mb-20"
        />
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
                  <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.65] text-gray-400 tracking-[0.03em]">{step.desc}</p>
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
      </Section>

      {/* ── 04 · Custom asset development ── */}
      <Section id="jma-assets" pad="loose" border="top">
        <SectionHeader
          eyebrow="04 — Craft"
          title="Custom Asset Development"
          lead="Every asset designed with precision — from concept to in-game implementation across clothing, jewellery, environments, and identity."
          align="center"
          className="mb-14 md:mb-16"
        />
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
      </Section>

      {/* ── 05 · Execution — Discord CRM ── */}
      <Section id="jma-discord" pad="loose" border="top">
        <EditorialSplit
          ratio="5/7"
          media={
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
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="05 — Execution" title="Discord CRM" />
            <FadeIn>
              <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>Discord served as the operational backbone of JMA Customs — the place where the brand came alive beyond the game. Every commission, client relationship, and community interaction was managed through a structured Discord ecosystem built for scale.</p>
                <p>What began as a simple server evolved into a full CRM — with ticketing, order pipelines, and community channels that created a professional service experience unlike anything else in the FiveM space.</p>
              </div>
            </FadeIn>
            <div className="flex flex-col">
              {[
                { title: 'Commission Tickets', desc: 'Structured ticket system guiding clients from initial brief through to final delivery.' },
                { title: 'Order Management', desc: 'Clear pipeline tracking across open, in-progress, and completed commissions.' },
                { title: 'Customer Communication', desc: 'Direct channels for updates, revision requests, and delivery confirmations.' },
                { title: 'Community Engagement', desc: 'Public-facing channels for showcasing work, announcements, and community interaction.' },
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
        </EditorialSplit>
      </Section>

      {/* ── 06 · Digital identity ── */}
      <Section id="jma-identity" pad="loose" border="top">
        <SectionHeader
          eyebrow="06 — Brand"
          title="Digital Identity"
          lead="JMA Customs wasn't just a service — it was a fully realised brand. Every visual touchpoint crafted to communicate luxury, exclusivity, and creative authority."
          align="center"
          className="mb-14 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeIn>
            <div className="aspect-video rounded-lg overflow-hidden border border-[#50C1BA]/18">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QGmVpdBSVAU?autoplay=0&mute=0&start=133&controls=1&rel=0&modestbranding=1&playsinline=1"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{ border: 0 }}
                title="JMA Customs — Virtual Creative Agency"
              />
            </div>
            <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-gray-600 mt-3">The brand in motion — cyber-luxury identity walkthrough</p>
          </FadeIn>
          <FactGrid items={identityPillars} />
        </div>
      </Section>

      {/* ── 07 · Final outcome — community impact ── */}
      <Section id="jma-impact" pad="loose" border="top">
        <SectionHeader
          eyebrow="07 — Final Outcome"
          title="Community Impact"
          lead="More than a brand — a recognised virtual creative ecosystem with a community of clients, collaborators, and followers who valued genuine craft."
          align="center"
          className="mb-16 md:mb-20"
        />
        <StatGrid items={stats} columns={4} className="mb-16" />
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
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.65] text-gray-500 tracking-[0.03em]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 08 · Reflection — the full vision ── */}
      <Section pad="loose" border="top">
        <SectionHeader eyebrow="08 — Reflection" title="The Full Vision" align="center" className="mb-14 md:mb-16" />
        <PullQuote variant="panel" attribution="Creative Direction — Visual Rif">
          "JMA Customs transformed roleplay culture into a real creative business ecosystem through branding, identity, and immersive digital design."
        </PullQuote>
      </Section>

      <NextProject title="The Hairy Bastard" to="/projects/the-hairy-bastard" />
    </CaseStudyShell>
  );
}
