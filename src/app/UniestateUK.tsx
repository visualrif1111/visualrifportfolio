'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import '../styles/fonts.css';
import { GalleryLightbox, type GalleryImage } from './components/GalleryLightbox';
import { NextProject } from './components/NextProject';
import { FadeIn } from './components/motion/FadeIn';
import { RevealText } from './components/motion/RevealText';
import { useReducedMotion } from './components/motion/useReducedMotion';
import { EASE } from './design/tokens';
import {
  CaseStudyShell,
  Section,
  SectionHeader,
  MetaBar,
  EditorialSplit,
  Figure,
  Callout,
  FactGrid,
  DeliverablesList,
} from './components/case-study';

import imgHero from '../imports/uniestate-uk/playa-viva-hero.jpg';
import imgMobileExplore from '../imports/uniestate-uk/mobile-explore.jpg';
import imgMobileResidence from '../imports/uniestate-uk/mobile-residence.jpg';
import imgMobileEnquire from '../imports/uniestate-uk/mobile-enquire.jpg';

const SITE = 'https://www.uniestate.co.uk/';

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500";
const LABEL = "font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-[#50C1BA]";
const NODE_TITLE = "font-['Barlow',sans-serif] font-medium text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-white leading-snug";
const NODE_NOTE = "font-['Lato',sans-serif] font-light text-[14px] md:text-[15px] leading-[1.55] tracking-[0.03em] text-gray-400";
const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50C1BA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020404]';

const GALLERY: GalleryImage[] = [
  { src: imgHero, alt: 'Playa Viva development page on the UNIESTATE UK website, desktop' },
  { src: imgMobileExplore, alt: 'Playa Viva development page on mobile, with the enquiry buttons near the top' },
  { src: imgMobileResidence, alt: 'Residence selector on mobile, with the one-bedroom option selected (prices redacted)' },
  { src: imgMobileEnquire, alt: 'Quick enquiry form on mobile' },
];

const JOURNEY = [
  {
    n: '01',
    title: 'Explore',
    note: 'Playa Viva is introduced through architectural imagery, with the main enquiry buttons near the top of the page.',
    src: imgMobileExplore,
    alt: 'Playa Viva development page on mobile, with the enquiry buttons near the top',
  },
  {
    n: '02',
    title: 'Choose a Residence',
    note: 'Buyers select a residence type. Their choice carries into the enquiry.',
    src: imgMobileResidence,
    alt: 'Residence selector on mobile, with the one-bedroom option selected (prices redacted)',
  },
  {
    n: '03',
    title: 'Enquire',
    note: 'A short form with errors that are easy to find and fix, or WhatsApp with the selection already written.',
    src: imgMobileEnquire,
    alt: 'Quick enquiry form on mobile',
  },
];

const RESIDENCES = [
  { id: 'studio', label: 'Studio', phrase: 'the studios' },
  { id: '1br', label: 'One bedroom', phrase: 'the one-bedroom residences' },
  { id: '2br', label: 'Two bedrooms', phrase: 'the two-bedroom residences' },
  { id: '3br', label: 'Three bedrooms', phrase: 'the three-bedroom residences' },
] as const;

const WORKFLOW = [
  { n: '01', title: 'Website Enquiry', note: 'Quick Enquiry or Market Comparison, with the context of what prompted it.' },
  { n: '02', title: 'CRM Contact', note: 'Lead Optimiser receives the details. A shared reference links the website confirmation to the contact.' },
  { n: '03', title: 'New Lead', note: 'The intake workflow creates a sales opportunity for follow-up.' },
];

const VERIFIED = [
  {
    title: 'Quick Enquiry',
    note: "Production testing confirmed that Quick Enquiry's topic, mode and summary reached the CRM.",
    fields: ['Topic', 'Mode', 'Summary'],
  },
  {
    title: 'Market Comparison',
    note: 'A tagged Market Comparison test carried through the selected budget, landing page and campaign tags and created an open opportunity in the New Lead stage.',
    fields: ['Budget', 'Landing page', 'Campaign tags', 'Open opportunity · New Lead'],
  },
];

const SERVICES = ['Web Design', 'UX / UI Design', 'Development', 'CRM Integration'];

function LiveSiteLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={SITE}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 border border-white/30 hover:border-[#50C1BA] hover:text-[#50C1BA] transition-colors px-7 md:px-9 py-3.5 font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-white ${FOCUS} ${className}`}
    >
      Visit Live Website
      <span className="sr-only">(opens in a new tab)</span>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function BrowserFrame({ src, alt, onClick, className = '' }: { src: string; alt: string; onClick?: () => void; className?: string }) {
  return (
    <div className={`rounded-[10px] md:rounded-[16px] overflow-hidden border border-gray-800 bg-[#0a1015] ${className}`}>
      <div className="flex items-center gap-2 px-4 h-9 md:h-11 border-b border-gray-800" aria-hidden="true">
        <span className="w-[8px] h-[8px] rounded-full bg-gray-700" />
        <span className="w-[8px] h-[8px] rounded-full bg-gray-700" />
        <span className="w-[8px] h-[8px] rounded-full bg-gray-700" />
        <div className="ml-3 flex-1 max-w-[340px] h-5 md:h-6 rounded-full border border-gray-800 bg-black/40 flex items-center px-3 overflow-hidden">
          <span className="font-['Rajdhani',sans-serif] font-medium text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-gray-500 truncate">uniestate.co.uk/developments/playa-viva</span>
        </div>
      </div>
      <Figure src={src} alt={alt} onClick={onClick} rounded="none" priority imgClassName="w-full h-auto object-cover" />
    </div>
  );
}

function PhoneFrame({ src, alt, onClick }: { src: string; alt: string; onClick?: () => void }) {
  return (
    <div className="rounded-[22px] md:rounded-[28px] border border-gray-700/60 bg-[#0a1015] p-[5px] md:p-[6px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="relative rounded-[17px] md:rounded-[23px] overflow-hidden">
        <Figure src={src} alt={alt} onClick={onClick} rounded="none" imgClassName="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

function Reveal({ children, className = '', delay = 0, x = 0, y = 20 }: { children: React.ReactNode; className?: string; delay?: number; x?: number; y?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.7, delay, ease: EASE.out }}
    >
      {children}
    </motion.div>
  );
}

function Connector({ i }: { i: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex md:flex-1 items-center justify-center md:px-2 h-10 md:h-auto" aria-hidden="true">
      <div className="relative w-[1px] h-full md:w-full md:h-[1px] bg-gray-800 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[#50C1BA] origin-top md:origin-left"
          initial={reduce ? false : { scaleX: 0, scaleY: 0 }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.35, ease: EASE.inOut }}
        />
      </div>
    </div>
  );
}

function WhatsAppDetail() {
  const [selected, setSelected] = useState<(typeof RESIDENCES)[number]['id']>('1br');
  const residence = RESIDENCES.find(r => r.id === selected)!;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
      <Reveal className="lg:col-span-5">
        <div className="border border-gray-800 rounded-[6px] p-6 md:p-8">
          <p className={LABEL}>Selected residence</p>
          <div className="grid grid-cols-2 gap-3 mt-5" role="group" aria-label="Residence type">
            {RESIDENCES.map(r => {
              const active = r.id === selected;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(r.id)}
                  className={`text-left px-4 py-4 md:py-5 rounded-[3px] border transition-colors font-['Barlow',sans-serif] font-medium text-[12px] md:text-[13px] tracking-[0.18em] uppercase ${FOCUS} ${
                    active ? 'border-[#50C1BA] bg-[#50C1BA]/10 text-white' : 'border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200'
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-2 flex lg:flex-col items-center justify-center gap-3" aria-hidden="true">
        <span className={CAPTION}>Opens WhatsApp</span>
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none" stroke="#50C1BA" strokeWidth="1.2" className="rotate-90 lg:rotate-0">
          <path d="M0 8h38M31 1l7 7-7 7" />
        </svg>
      </div>

      <Reveal className="lg:col-span-5" delay={0.15}>
        <div className="border border-gray-800 rounded-[6px] bg-white/[0.02] p-6 md:p-8">
          <p className={LABEL}>Pre-filled message</p>
          <div className="mt-5 flex justify-end">
            <p
              aria-live="polite"
              className="max-w-[340px] rounded-[14px] rounded-br-[4px] bg-[#50C1BA]/12 border border-[#50C1BA]/25 px-5 py-4 font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.55] tracking-[0.02em] text-gray-100"
            >
              Hello UNIESTATE UK, I&rsquo;d like to find out more about Playa Viva, particularly{' '}
              <span className="text-[#50C1BA] font-normal">{residence.phrase}</span>.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function UniestateUK() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const open = (src: string) => {
    setLightboxIndex(Math.max(0, GALLERY.findIndex(g => g.src === src)));
    setLightboxOpen(true);
  };

  const enter = (delay: number, y = 16) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE.out } };

  return (
    <CaseStudyShell>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative w-full overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24 px-5 md:px-12">
        <img
          src={imgHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[6px] md:blur-[10px] opacity-40"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0) 0%, rgba(2,4,4,0.75) 75%)' }}
        />

        <div className="relative z-20 w-full max-w-[1320px] mx-auto flex flex-col items-center text-center">
          <motion.p
            className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[13px] tracking-[0.36em] md:tracking-[0.5em] uppercase text-[#50C1BA] mb-5"
            {...enter(0.15, 8)}
          >
            Web Design · UX/UI · Development · CRM Integration
          </motion.p>

          <h1 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[46px] md:text-[104px] leading-none tracking-[0.06em] uppercase text-white drop-shadow-lg overflow-hidden">
            <motion.span
              className="block"
              initial={reduce ? false : { y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE.out }}
            >
              UNIESTATE UK
            </motion.span>
          </h1>

          <motion.div className="flex flex-col items-center gap-8 mt-8" {...enter(0.75)}>
            <p className="font-['Barlow',sans-serif] font-medium text-[14px] md:text-[22px] tracking-[0.24em] md:tracking-[0.3em] uppercase text-white/90 leading-snug max-w-[860px] text-balance">
              A UK-facing property microsite for Playa Viva
            </p>
            <LiveSiteLink />
          </motion.div>

          <motion.div className="w-full mt-14 md:mt-20" {...enter(0.95, 40)}>
            <motion.div style={reduce ? undefined : { y: frameY }} className="will-change-transform">
              <BrowserFrame
                src={imgHero}
                alt="Playa Viva development page on the UNIESTATE UK website, desktop"
                onClick={() => open(imgHero)}
                className="shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MetaBar
        size="md"
        items={[
          { label: 'CLIENT', value: 'UNIESTATE UK' },
          { label: 'DEVELOPMENT', value: <span className="leading-snug">PLAYA<br />VIVA</span> },
          { label: 'LOCATION', value: <span className="leading-snug">AL MARJAN<br />ISLAND</span> },
          { label: 'AUDIENCE', value: <span className="leading-snug">UK<br />BUYERS</span> },
          { label: 'YEAR', value: '2026' },
        ]}
      />

      {/* ── 01 · The Project ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="7/5"
          align="center"
          media={
            <FactGrid
              items={[
                { label: 'Development', value: 'Playa Viva, Al Marjan Island, Ras Al Khaimah' },
                { label: 'Audience', value: 'Buyers based in the UK' },
                { label: 'Buyers need', value: 'Residences, prices and how buying from the UK works' },
                { label: 'Next step', value: 'An enquiry with the UK sales team' },
              ]}
            />
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="01 — The Project" title="From exploring Playa Viva to speaking with the UK team" size="lg" />
            <FadeIn>
              <div className={BODY}>
                <p>
                  I designed and built a UK-facing microsite for UNIESTATE&rsquo;s Playa Viva development in Ras Al Khaimah.
                </p>
                <p>
                  The brief was to bring the development to life through architectural imagery while making it easy for buyers to find practical information about residences, prices and buying from the UK.
                </p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 02 · Design & Experience ── */}
      <Section width="wide" pad="default" border="top">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="02 — Design & Experience"
            title="An editorial experience with a clear route to enquiry"
            size="lg"
            className="max-w-4xl"
          />
          <FadeIn className="mt-8 max-w-3xl">
            <div className={BODY}>
              <p>
                The development page introduces Playa Viva through imagery and a sense of place, then gives buyers dedicated sections for residences, location and buying information.
              </p>
              <p>
                On mobile, I brought the main enquiry buttons higher up the page and made form errors easier to find and fix.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 md:mt-24">
            <p className={`${LABEL} mb-10 md:mb-14`}>Mobile journey — Explore → Choose a Residence → Enquire</p>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 lg:gap-14 max-w-[1100px] mx-auto">
              {JOURNEY.map((step, i) => (
                <li key={step.n} className={`flex flex-col gap-6 max-w-[340px] w-full mx-auto ${i === 1 ? 'md:mt-16' : ''} ${i === 2 ? 'md:mt-32' : ''}`}>
                  <Reveal delay={i * 0.12} y={40}>
                    <PhoneFrame src={step.src} alt={step.alt} onClick={() => open(step.src)} />
                  </Reveal>
                  <Reveal delay={0.1 + i * 0.12}>
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-[44px] h-[44px] rounded-full border border-[#50C1BA]/45 flex items-center justify-center font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[15px] tracking-[0.08em] text-[#50C1BA]">
                        {step.n}
                      </span>
                      <div>
                        <h3 className={NODE_TITLE}>{step.title}</h3>
                        <p className={`${NODE_NOTE} mt-2`}>{step.note}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 md:mt-32">
            <EditorialSplit
              ratio="4/8"
              align="center"
              gap="gap-10 md:gap-14"
              media={<WhatsAppDetail />}
            >
              <div className="flex flex-col gap-5">
                <p className={LABEL}>Interaction detail</p>
                <h3 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[26px] tracking-[0.2em] uppercase text-white leading-[1.2]">
                  Selected residence → WhatsApp
                </h3>
                <div className={BODY}>
                  <p>
                    When a visitor selects a residence and opens WhatsApp, their selection carries into the message.
                  </p>
                </div>
                <p className={`${CAPTION} mt-1`}>Diagram · try a residence type to see the message change</p>
              </div>
            </EditorialSplit>
          </div>
        </div>
      </Section>

      {/* ── 03 · CRM Integration ── */}
      <Section pad="default" border="top">
        <SectionHeader
          eyebrow="03 — CRM Integration"
          title="A better handoff to sales"
          lead="I connected the website to Lead Optimiser so the sales team can see what prompted an enquiry."
          size="lg"
          className="mb-14 md:mb-20 max-w-3xl"
        />

        <div className="flex flex-col md:flex-row items-stretch">
          {WORKFLOW.map((node, i) => (
            <React.Fragment key={node.n}>
              <Reveal delay={i * 0.35} className="md:w-[30%] shrink-0">
                <div className="h-full border border-gray-800 hover:border-[#50C1BA]/30 transition-colors rounded-[6px] p-6 md:p-8 bg-[#020404]">
                  <p className={LABEL}>{node.n}</p>
                  <h3 className={`${NODE_TITLE} mt-3`}>{node.title}</h3>
                  <p className={`${NODE_NOTE} mt-3`}>{node.note}</p>
                </div>
              </Reveal>
              {i < WORKFLOW.length - 1 && <Connector i={i} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mt-16 md:mt-24">
          <div className="lg:col-span-5">
            <p className={`${LABEL} mb-6`}>What reaches the sales team</p>
            <FactGrid
              items={[
                { label: 'Quick Enquiry', value: "Captures the buyer's topic and a readable summary." },
                { label: 'Market Comparison', value: 'Can also capture the selected budget and campaign source.' },
              ]}
            />
          </div>
          <div className="lg:col-span-7">
            <FadeIn>
              <div className={BODY}>
                <p>
                  A shared reference connects the website confirmation to the CRM contact, and the intake workflow creates a sales opportunity for follow-up.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── 04 · Testing & Verification ── */}
      <Section pad="default" border="top">
        <SectionHeader
          eyebrow="04 — Testing & Verification"
          title="What I verified"
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {VERIFIED.map((check, i) => (
            <li key={check.title}>
              <Reveal delay={i * 0.12} className="h-full">
                <div className="h-full border border-gray-800 rounded-[6px] p-7 md:p-9">
                  <div className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#50C1BA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M7.5 12.5l3 3 6-6.5" />
                    </svg>
                    <p className={LABEL}>Verified in production</p>
                  </div>
                  <h3 className="font-['Barlow',sans-serif] font-medium text-[18px] md:text-[21px] tracking-[0.2em] uppercase text-white mt-4 mb-4">{check.title}</h3>
                  <p className={NODE_NOTE}>{check.note}</p>
                  <ul className="flex flex-wrap gap-2 mt-6" aria-label="Fields confirmed">
                    {check.fields.map(f => (
                      <li key={f} className="border border-[#50C1BA]/25 rounded-full px-3.5 py-1.5 font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-gray-300">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <FadeIn className="mt-10 md:mt-14 max-w-3xl">
          <p className={BODY}>These checks verified the website-to-sales handoff.</p>
        </FadeIn>

        <Callout label="Measurement" className="mt-8 max-w-3xl">
          <strong className="font-normal text-white">The impact on enquiry volume has not been measured.</strong>
        </Callout>
      </Section>

      {/* ── Close ── */}
      <Section pad="default" border="top">
        <EditorialSplit ratio="4/8" align="center" media={<DeliverablesList columns={2} items={SERVICES} />}>
          <div className="flex flex-col gap-6 items-start">
            <SectionHeader eyebrow="Services" title="Design to Handoff" />
            <LiveSiteLink />
            <RevealText>
              <p className={CAPTION}>Design &amp; Development — Visual Rif</p>
            </RevealText>
          </div>
        </EditorialSplit>
      </Section>

      <NextProject />

      <GalleryLightbox
        images={GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
