import React, { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/fonts.css';
import { GalleryLightbox, type GalleryImage } from './components/GalleryLightbox';
import { NextProject } from './components/NextProject';
import { RevealText } from './components/motion/RevealText';
import { FadeIn } from './components/motion/FadeIn';
import {
  CaseStudyShell,
  Section,
  SectionHeader,
  MetaBar,
  EditorialSplit,
  Figure,
  FeatureImage,
  ImageGrid,
  PullQuote,
  Callout,
  FactGrid,
  StatGrid,
  DeliverablesList,
} from './components/case-study';

import imgHero from '../imports/investinuk/home-hero.jpg';
import imgNavDetail from '../imports/investinuk/nav-detail.jpg';
import imgTypeDisplay from '../imports/investinuk/type-display.jpg';
import imgUiButtons from '../imports/investinuk/ui-buttons.jpg';
import imgWhyInvestinuk from '../imports/investinuk/why-investinuk.jpg';
import imgWhyUk from '../imports/investinuk/why-uk.jpg';
import imgWhyHmo from '../imports/investinuk/why-hmo.jpg';
import imgHowItWorks from '../imports/investinuk/how-it-works.jpg';
import imgPageHowItWorks from '../imports/investinuk/page-how-it-works.jpg';
import imgCaseStudyFeatured from '../imports/investinuk/case-study-featured.jpg';
import imgProjectIndex from '../imports/investinuk/project-index.jpg';
import imgPropertyCards from '../imports/investinuk/detail-property-cards.jpg';
import imgFigures from '../imports/investinuk/detail-figures.jpg';
import imgCaseDetail from '../imports/investinuk/page-case-detail.jpg';
import imgResources from '../imports/investinuk/resources.jpg';
import imgResourceGate from '../imports/investinuk/detail-resource-gate.jpg';
import imgPageResources from '../imports/investinuk/page-resources.jpg';
import imgEnquiryChoice from '../imports/investinuk/detail-enquiry-choice.jpg';
import imgEnquiryForm from '../imports/investinuk/detail-enquiry-form.jpg';
import imgPageOpportunities from '../imports/investinuk/page-opportunities.jpg';
import imgPageCaseStudies from '../imports/investinuk/page-case-studies.jpg';
import imgPageContact from '../imports/investinuk/page-contact.jpg';
import imgTabletHome from '../imports/investinuk/tablet-home.jpg';
import imgTabletOpportunities from '../imports/investinuk/tablet-opportunities.jpg';
import imgTabletCaseStudies from '../imports/investinuk/tablet-case-studies.jpg';
import imgMobileHome from '../imports/investinuk/mobile-home.jpg';
import imgMobileIndex from '../imports/investinuk/mobile-index.jpg';
import imgMobileOpportunities from '../imports/investinuk/mobile-opportunities.jpg';
import imgMobileCaseStudies from '../imports/investinuk/mobile-case-studies.jpg';
import imgMobileResources from '../imports/investinuk/mobile-resources.jpg';
import imgMobileEnquiry from '../imports/investinuk/mobile-enquiry.jpg';

const SITE = 'https://investinuk.uk/';

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const BODY_MUTED = "font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.65] tracking-[0.04em] text-gray-400 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500";
const LABEL = "font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-[#50C1BA]";

const GALLERY: GalleryImage[] = [
  { src: imgHero, alt: 'INVESTINUK homepage hero' },
  { src: imgNavDetail, alt: 'Navigation bar detail' },
  { src: imgTypeDisplay, alt: 'Display typography specimen' },
  { src: imgUiButtons, alt: 'Primary and secondary button set' },
  { src: imgWhyInvestinuk, alt: 'Why INVESTINUK section' },
  { src: imgWhyUk, alt: 'Why the UK section' },
  { src: imgWhyHmo, alt: 'Why HMO section' },
  { src: imgHowItWorks, alt: 'Five-stage investor process' },
  { src: imgPageHowItWorks, alt: 'How It Works page' },
  { src: imgCaseStudyFeatured, alt: 'Featured case study — Darlington HMO' },
  { src: imgProjectIndex, alt: 'Project index table' },
  { src: imgPropertyCards, alt: 'Completed project cards' },
  { src: imgFigures, alt: 'Project appraisal figures' },
  { src: imgCaseDetail, alt: 'Individual case study page' },
  { src: imgResources, alt: 'Investor resources section' },
  { src: imgResourceGate, alt: 'Gated resource request' },
  { src: imgPageResources, alt: 'Resources page' },
  { src: imgEnquiryChoice, alt: 'Quick and detailed enquiry paths' },
  { src: imgEnquiryForm, alt: 'Enquiry form' },
  { src: imgPageOpportunities, alt: 'Investment opportunities page — desktop' },
  { src: imgTabletOpportunities, alt: 'Investment opportunities page — tablet' },
  { src: imgMobileOpportunities, alt: 'Investment opportunities page — mobile' },
  { src: imgPageCaseStudies, alt: 'Case studies page — desktop' },
  { src: imgTabletCaseStudies, alt: 'Case studies page — tablet' },
  { src: imgMobileCaseStudies, alt: 'Case studies page — mobile' },
  { src: imgTabletHome, alt: 'Homepage — tablet' },
  { src: imgMobileHome, alt: 'Homepage — mobile' },
  { src: imgMobileIndex, alt: 'Project index — mobile' },
  { src: imgMobileResources, alt: 'Resources — mobile' },
  { src: imgMobileEnquiry, alt: 'Enquiry — mobile' },
  { src: imgPageContact, alt: 'Contact page' },
];

const CHALLENGE = ['Property\nInvestment', 'Complex\nInformation', 'International\nAudience', 'Trust'];

const PALETTE = [
  { hex: '#FAF8F2', name: 'Ivory', role: 'Base surface' },
  { hex: '#F3F0E8', name: 'Limestone', role: 'Alternating bands' },
  { hex: '#C6A15B', name: 'Bronze', role: 'Primary action' },
  { hex: '#273037', name: 'Ink', role: 'Body & headings' },
  { hex: '#143E3B', name: 'Teal', role: 'Depth accent' },
  { hex: '#08151F', name: 'Deep Navy', role: 'Cinematic zones' },
];

const ARCHITECTURE = [
  { label: 'Why INVESTINUK', note: 'Credibility first — the team behind the introduction.' },
  { label: 'Why UK Property', note: 'The market case, before any single opportunity.' },
  { label: 'Why HMO', note: 'The strategy explained on its own terms.' },
  { label: 'How It Works', note: 'The process, so nothing feels opaque.' },
  { label: 'Investment Opportunities', note: 'Live opportunities, matched to stated criteria.' },
  { label: 'Case Studies', note: 'Completed and active projects with real figures.' },
  { label: 'Investor Resources', note: 'Guides and deal packs for self-directed research.' },
  { label: 'Enquiry', note: 'A conversation, at whatever depth suits.' },
];

const JOURNEY = [
  { n: '01', title: 'Investor Consultation', note: 'Criteria, capital, strategy and timeframe.' },
  { n: '02', title: 'Opportunity Selection', note: 'Selected opportunities matched to those criteria.' },
  { n: '03', title: 'Figures & Strategy', note: 'Property information, projected costs and yields.' },
  { n: '04', title: 'Finance & Professional Team', note: 'Introductions to the specialists required.' },
  { n: '05', title: 'Acquisition & Conversion', note: 'One point of contact through to an operating asset.' },
];

const RESPONSIBILITIES = [
  'Creative Direction', 'UX / UI Design',
  'Web Design', 'Front-End Development',
  'Information Architecture', 'Design System & Tokens',
  'Editorial Layout Design', 'Responsive Design',
  'Data Presentation Design', 'Conversion & Enquiry UX',
  'Content Structure', 'Interaction & Motion Design',
];

function BrowserFrame({
  src,
  alt,
  onClick,
  url = 'investinuk.uk',
  className = '',
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  url?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-[10px] md:rounded-[16px] overflow-hidden border border-gray-800 bg-[#0a1015] ${className}`}>
      <div className="flex items-center gap-2 px-4 h-9 md:h-11 border-b border-gray-800">
        <span className="w-[8px] h-[8px] rounded-full bg-gray-700" />
        <span className="w-[8px] h-[8px] rounded-full bg-gray-700" />
        <span className="w-[8px] h-[8px] rounded-full bg-gray-700" />
        <div className="ml-3 flex-1 max-w-[280px] h-5 md:h-6 rounded-full border border-gray-800 bg-black/40 flex items-center px-3 overflow-hidden">
          <span className="font-['Rajdhani',sans-serif] font-medium text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-gray-500 truncate">{url}</span>
        </div>
      </div>
      <Figure src={src} alt={alt} onClick={onClick} rounded="none" imgClassName="w-full h-auto object-cover" />
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  onClick,
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  caption?: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div className="rounded-[20px] md:rounded-[28px] border border-gray-700/60 bg-[#0a1015] p-[4px] md:p-[6px]">
        <div className="relative rounded-[16px] md:rounded-[23px] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32%] h-[8px] md:h-[12px] rounded-b-[8px] bg-[#0a1015] z-20 pointer-events-none" />
          <Figure src={src} alt={alt} onClick={onClick} rounded="none" imgClassName="w-full h-auto object-cover" />
        </div>
      </div>
      {caption && <figcaption className={`${CAPTION} text-center`}>{caption}</figcaption>}
    </figure>
  );
}

function Swatch({ hex, name, role, i }: { hex: string; name: string; role: string; i: number }) {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
    >
      <div className="h-20 md:h-28 rounded-[6px] border border-white/10" style={{ backgroundColor: hex }} />
      <div>
        <p className="font-['Barlow',sans-serif] font-medium text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white">{name}</p>
        <p className="font-['Rajdhani',sans-serif] font-medium text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#50C1BA]/70 mt-1">{hex}</p>
        <p className="font-['Lato',sans-serif] font-light text-[13px] md:text-[14px] tracking-[0.03em] text-gray-500 mt-1.5">{role}</p>
      </div>
    </motion.div>
  );
}

export default function InvestInUK() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const open = (src: string) => {
    setLightboxIndex(Math.max(0, GALLERY.findIndex(g => g.src === src)));
    setLightboxOpen(true);
  };

  return (
    <CaseStudyShell>
      {/* ── 01 · Hero ── */}
      <section className="relative w-full overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24 px-5 md:px-12">
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

        <div className="relative z-20 w-full max-w-[1240px] mx-auto flex flex-col items-center text-center">
          <motion.p
            className="font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[13px] tracking-[0.42em] md:tracking-[0.5em] uppercase text-[#50C1BA] mb-5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            UX/UI Design · Web Design · Digital Experience
          </motion.p>

          <h1 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[46px] md:text-[104px] leading-none tracking-[0.06em] uppercase text-white drop-shadow-lg overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              INVESTINUK
            </motion.span>
          </h1>

          <motion.div
            className="flex flex-col items-center gap-7 mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <p className="font-['Barlow',sans-serif] font-medium text-[14px] md:text-[24px] tracking-[0.28em] md:tracking-[0.3em] uppercase text-white/90 leading-snug">
              UK Property Investment<br />for UAE Investors
            </p>
            <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[17px] leading-[1.75] tracking-[0.04em] text-gray-300 max-w-[620px]">
              A premium digital platform designed to simplify the journey between UAE investors and UK property opportunities.
            </p>
            <a
              href={SITE}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border border-white/30 hover:border-[#50C1BA] hover:text-[#50C1BA] transition-colors px-7 md:px-9 py-3.5 font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-white"
            >
              View Live Website
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="w-full mt-14 md:mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrowserFrame
              src={imgHero}
              alt="INVESTINUK homepage"
              onClick={() => open(imgHero)}
              className="shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
            />
          </motion.div>
        </div>
      </section>

      <MetaBar
        size="md"
        items={[
          { label: 'ROLE', value: <span className="leading-snug">UX / UI<br />&amp; WEB</span> },
          { label: 'INDUSTRY', value: <span className="leading-snug">PROPERTY<br />INVESTMENT</span> },
          { label: 'LOCATION', value: <span className="leading-snug">UK<br />&rarr; UAE</span> },
          { label: 'PLATFORM', value: <span className="leading-snug">RESPONSIVE<br />WEB</span> },
          { label: 'YEAR', value: '2026' },
        ]}
      />

      {/* ── 02 · Project overview ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          align="center"
          media={
            <Figure
              src={imgWhyInvestinuk}
              alt="Why INVESTINUK — the team behind the introduction"
              onClick={() => open(imgWhyInvestinuk)}
              rounded="2xl"
              imgClassName="w-full h-auto object-cover"
              caption="Credibility established before a single opportunity is shown"
            />
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="02 — Overview" title="One Platform, One Journey" />
            <FadeIn>
              <div className={BODY}>
                <p>
                  VISUAL RIF designed and developed <a href={SITE} target="_blank" rel="noreferrer" className="underline text-white hover:text-[#50C1BA] transition-colors">investinuk.uk</a> — a digital experience that brings property opportunities, educational content, case studies and enquiry journeys together inside one coherent platform.
                </p>
                <p className="hidden md:block">
                  The work covered creative direction, information architecture, the visual system, interface design and front-end build.
                </p>
              </div>
            </FadeIn>
            <Callout label="Positioning">
              A premium investment platform that reads as considered rather than promotional — measured, evidenced and calm.
            </Callout>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 03 · The challenge ── */}
      <Section pad="default" border="top">
        <SectionHeader
          eyebrow="03 — The Challenge"
          title="Four Forces, One Interface"
          align="center"
          className="mb-14 md:mb-20"
        />

        <div className="flex flex-wrap items-stretch justify-center gap-x-4 gap-y-8 md:gap-x-8">
          {CHALLENGE.map((word, i) => (
            <React.Fragment key={word}>
              <motion.div
                className="flex-1 min-w-[136px] max-w-[260px] border border-gray-800 hover:border-[#50C1BA]/30 transition-colors rounded-[6px] px-5 py-8 md:py-12 flex items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <p className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[19px] md:text-[30px] leading-[1.15] tracking-[0.1em] uppercase text-white whitespace-pre-line">
                  {word}
                </p>
              </motion.div>
              {i < CHALLENGE.length - 1 && (
                <div className="flex items-center justify-center shrink-0 text-[#50C1BA] font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[22px] md:text-[34px] w-4 md:w-6">
                  +
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <FadeIn className="mt-14 md:mt-20 max-w-3xl mx-auto text-center">
          <p className="font-['Lato',sans-serif] font-light text-[17px] md:text-[21px] leading-[1.65] tracking-[0.04em] text-gray-300">
            The challenge was turning a potentially complicated investment journey into an experience that feels structured, credible and easy to navigate.
          </p>
        </FadeIn>
      </Section>

      {/* ── 04 · Design direction ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="04 — Design Direction"
          title="The Visual System"
          lead="A restrained editorial system: a serif display voice for authority, a neutral interface face for clarity, and a bronze accent reserved almost entirely for action."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Typography */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className={LABEL}>Typography</p>
            <Figure
              src={imgTypeDisplay}
              alt="Display typography specimen"
              onClick={() => open(imgTypeDisplay)}
              rounded="lg"
              frameClassName="bg-[#08151f] p-6 md:p-10 flex items-center"
              imgClassName="w-full h-auto object-contain"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border-l-2 border-[#50C1BA]/25 pl-5">
                <p className="font-['Barlow',sans-serif] font-medium text-[12px] tracking-[0.3em] uppercase text-white mb-1.5">EB Garamond</p>
                <p className="font-['Lato',sans-serif] font-light text-[14px] leading-[1.6] text-gray-400">Display and headings. Medium weight, tightened tracking — authority without stiffness.</p>
              </div>
              <div className="border-l-2 border-[#50C1BA]/25 pl-5">
                <p className="font-['Barlow',sans-serif] font-medium text-[12px] tracking-[0.3em] uppercase text-white mb-1.5">Inter</p>
                <p className="font-['Lato',sans-serif] font-light text-[14px] leading-[1.6] text-gray-400">Body, labels, data and forms. Neutral by design, so the figures read first.</p>
              </div>
            </div>
          </div>

          {/* Colour */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className={LABEL}>Colour Palette</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-5 md:gap-6">
              {PALETTE.map((c, i) => <Swatch key={c.hex} {...c} i={i} />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mt-10 md:mt-14">
          {/* Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className={LABEL}>Buttons &amp; Actions</p>
            <Figure
              src={imgUiButtons}
              alt="Primary and secondary button set"
              onClick={() => open(imgUiButtons)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="Bronze primary, outlined secondary, quiet tertiary links"
            />
          </div>

          {/* Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className={LABEL}>Cards</p>
            <Figure
              src={imgPropertyCards}
              alt="Completed project cards"
              onClick={() => open(imgPropertyCards)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="One card geometry, reused across every project surface"
            />
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex flex-col gap-5">
          <p className={LABEL}>Investment Data</p>
          <Figure
            src={imgFigures}
            alt="Project appraisal figures"
            onClick={() => open(imgFigures)}
            rounded="lg"
            imgClassName="w-full h-auto object-cover"
            caption="Every figure labelled calculated, estimated or projected"
          />
        </div>

        <FadeIn className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-gray-800 pt-10">
            <div>
              <p className={LABEL}>Navigation</p>
              <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.65] text-gray-400 mt-3">
                A logo, one bronze action and a menu. Nine destinations sit behind a single control rather than across the header.
              </p>
            </div>
            <div>
              <p className={LABEL}>Spacing</p>
              <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.65] text-gray-400 mt-3">
                A single vertical rhythm scales from mobile to desktop, so every section breathes at the same ratio regardless of width.
              </p>
            </div>
            <div>
              <p className={LABEL}>Geometry</p>
              <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.65] text-gray-400 mt-3">
                A 3px corner radius throughout. Almost square — closer to print than to product UI, which is the point.
              </p>
            </div>
            <div>
              <p className={LABEL}>Imagery</p>
              <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.65] text-gray-400 mt-3">
                Real property photography only. Where a project has none yet, the interface says so rather than filling the gap.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── 05 · Information architecture ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="6/6"
          reverse
          media={
            <div className="flex flex-col gap-6">
              <Figure src={imgPageOpportunities} alt="Investment Opportunities page" onClick={() => open(imgPageOpportunities)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Investment Opportunities" />
              <Figure src={imgPageResources} alt="Resources page" onClick={() => open(imgPageResources)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Investor Resources" />
            </div>
          }
        >
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="05 — Information Architecture"
              title="Earn Trust, Then Ask"
              lead="The order is the argument. Credibility and education come before any opportunity, and the enquiry sits last — by the time an investor reaches it, every question it implies has already been answered."
            />

            <div className="relative pl-1">
              <div className="absolute left-[10px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#50C1BA]/50 via-[#50C1BA]/20 to-transparent" />
              <ol className="flex flex-col gap-6">
                {ARCHITECTURE.map((step, i) => (
                  <motion.li
                    key={step.label}
                    className="relative pl-9"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                  >
                    <span className="absolute left-[6px] top-[7px] w-[9px] h-[9px] rounded-full border border-[#50C1BA] bg-[#020404]" />
                    <p className="font-['Barlow',sans-serif] font-medium text-[13px] md:text-[15px] tracking-[0.24em] uppercase text-white leading-snug">
                      {step.label}
                    </p>
                    <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[15px] leading-[1.55] tracking-[0.03em] text-gray-500 mt-1.5">
                      {step.note}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 06 · Investor journey ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="06 — Investor Journey"
          title="Five Stages, End to End"
          lead="The process is published up front, in the same five steps every time — on the homepage, on its own page and inside the investor guide."
          size="lg"
          className="mb-14 md:mb-20 max-w-3xl"
        />

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[26px] h-[1px] bg-gradient-to-r from-transparent via-[#50C1BA]/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            {JOURNEY.map((stage, i) => (
              <motion.div
                key={stage.n}
                className="relative flex md:flex-col items-start gap-5 md:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="shrink-0 w-[52px] h-[52px] rounded-full border border-[#50C1BA]/45 bg-[#020404] flex items-center justify-center md:mb-7">
                  <span className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[17px] tracking-[0.08em] text-[#50C1BA]">{stage.n}</span>
                </div>
                <div className="md:pr-5">
                  <p className="font-['Barlow',sans-serif] font-medium text-[13px] md:text-[14px] tracking-[0.22em] uppercase text-white leading-snug">
                    {stage.title}
                  </p>
                  <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[15px] leading-[1.55] tracking-[0.03em] text-gray-500 mt-2.5">
                    {stage.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <FeatureImage
          src={imgHowItWorks}
          alt="Five-stage investor process as built"
          onClick={() => open(imgHowItWorks)}
          rounded="2xl"
          className="mt-14 md:mt-20"
          caption="The same five stages, as built — numbered, connected and deliberately unhurried"
        />
      </Section>

      {/* ── 07 · Website experience ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="07 — Website Experience"
          title="Composition & Rhythm"
          lead="Sections alternate between limestone, ivory and deep navy. The tonal shift does the pacing, so an investor always knows when a new argument begins."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <BrowserFrame src={imgPageHowItWorks} alt="How It Works page" onClick={() => open(imgPageHowItWorks)} url="investinuk.uk/how-it-works" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
          <Figure
            src={imgWhyUk}
            alt="Why the UK section"
            onClick={() => open(imgWhyUk)}
            rounded="2xl"
            imgClassName="w-full h-auto object-cover"
            caption="Why the UK — the market case, four reasons"
          />
          <Figure
            src={imgWhyHmo}
            alt="Why HMO section"
            onClick={() => open(imgWhyHmo)}
            rounded="2xl"
            imgClassName="w-full h-auto object-cover"
            caption="Why HMO — the strategy, with its trade-offs stated"
          />
        </div>

        <FeatureImage
          src={imgProjectIndex}
          alt="Project index table"
          onClick={() => open(imgProjectIndex)}
          rounded="3xl"
          className="mt-14 md:mt-20"
          caption="Every project in one index — scannable, comparable, and honest where a value is unconfirmed"
        />

        <EditorialSplit
          ratio="5/7"
          align="center"
          className="mt-16 md:mt-24"
          media={
            <Figure
              src={imgNavDetail}
              alt="Navigation bar detail"
              onClick={() => open(imgNavDetail)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
            />
          }
        >
          <div className="flex flex-col gap-5">
            <p className={LABEL}>Detail — Navigation</p>
            <h3 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[26px] tracking-[0.2em] uppercase text-white leading-[1.2]">
              One Action, Always Visible
            </h3>
            <div className={BODY_MUTED}>
              <p>
                A site this deep could easily carry a nine-item navigation bar. Instead the header holds a logo, a single bronze action and a menu — everything else is one tap away, and nothing competes with the page.
              </p>
            </div>
          </div>
        </EditorialSplit>

        <div className="mt-16 md:mt-24">
          <p className={`${LABEL} mb-8 md:mb-10`}>Mobile Screens</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            <PhoneFrame src={imgMobileHome} alt="Homepage — mobile" onClick={() => open(imgMobileHome)} caption="Home" />
            <PhoneFrame src={imgMobileIndex} alt="Project index — mobile" onClick={() => open(imgMobileIndex)} caption="Project index" />
            <PhoneFrame src={imgMobileResources} alt="Resources — mobile" onClick={() => open(imgMobileResources)} caption="Resources" />
            <PhoneFrame src={imgMobileEnquiry} alt="Enquiry — mobile" onClick={() => open(imgMobileEnquiry)} caption="Enquiry" />
          </div>
        </div>

        <FeatureImage
          src={imgCaseStudyFeatured}
          alt="Featured case study — Darlington HMO"
          onClick={() => open(imgCaseStudyFeatured)}
          rounded="3xl"
          className="mt-16 md:mt-24"
          caption="The dark band — one featured project, given the full width of the page"
        />
      </Section>

      {/* ── 08 · Property case studies ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-6">
              <Figure src={imgFigures} alt="Project appraisal figures" onClick={() => open(imgFigures)} rounded="lg" imgClassName="w-full h-auto object-cover" />
              <Figure src={imgCaseDetail} alt="Individual case study page" onClick={() => open(imgCaseDetail)} rounded="lg" imgClassName="w-full h-auto object-cover" />
            </div>
          }
        >
          <div className="flex flex-col gap-7">
            <SectionHeader
              eyebrow="08 — Property Case Studies"
              title="Designing Complex Information"
              lead="A property appraisal is a dense object: costs, strategy, room counts, projections and caveats. The design problem was hierarchy — deciding what an investor reads first, second and last."
            />
            <FactGrid
              items={[
                { label: 'Location & Strategy', value: 'Set as a quiet metadata line, never as a headline claim.' },
                { label: 'Bedrooms & Configuration', value: 'Room count and en-suite provision stated plainly in the index.' },
                { label: 'Property Costs', value: 'Capital expenditure separated from purchase price, both labelled.' },
                { label: 'Projected Income', value: 'Gross annual income and net yield, each tagged with how it was derived.' },
                { label: 'Imagery', value: 'One lead image plus a supporting pair — enough to read the standard of finish.' },
                { label: 'Interactive Tours', value: 'A 360° walkthrough sits beside the figures, not in place of them.' },
              ]}
            />
          </div>
        </EditorialSplit>

        <StatGrid
          columns={4}
          className="mt-16 md:mt-24"
          items={[
            { value: '6', label: 'Projects Indexed' },
            { value: '4', label: 'Completed Case Studies' },
            { value: '5', label: 'Data Points Per Project' },
            { value: '3', label: 'Provenance Labels' },
          ]}
        />

        <Callout label="Design Note" className="mt-10 md:mt-14 max-w-3xl">
          Every number carries a badge — <span className="text-white">calculated</span>, <span className="text-white">estimated</span> or <span className="text-white">projected</span>. Where a figure has not been confirmed, the index shows a dash rather than an estimate. Restraint reads as credibility.
        </Callout>

        <FeatureImage
          src={imgPropertyCards}
          alt="Completed project cards"
          onClick={() => open(imgPropertyCards)}
          rounded="2xl"
          className="mt-14 md:mt-20"
          caption="Completed projects — consistent card geometry, with placeholders that admit what is missing"
        />
      </Section>

      {/* ── 09 · Resource experience ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="09 — Resource Experience"
          title="A Library, Not a Download Page"
          lead="The guides carry the heaviest reading load on the site. Editorial design was used to make that load feel optional rather than imposed."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <FeatureImage
          src={imgResources}
          alt="Investor resources section"
          onClick={() => open(imgResources)}
          rounded="3xl"
          caption="The resource shelf — a tabbed primary guide, with secondary packs below"
        />

        <EditorialSplit
          ratio="7/5"
          align="center"
          className="mt-14 md:mt-20"
          media={
            <Figure
              src={imgResourceGate}
              alt="Gated resource request"
              onClick={() => open(imgResourceGate)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="A gated pack states what it wants, and why, before the form"
            />
          }
        >
          <div className="flex flex-col gap-6">
            <div className={BODY}>
              <p>
                The <span className="text-white">UAE Investor Guide</span> is the anchor — 26 pages, presented with its cover, its contents listed as chips, and its page count and file size stated before anyone commits to a download.
              </p>
              <p className="hidden md:block">
                Around it sit the deal pack, the HMO guide and the UK tax guide. Each is marked <span className="text-white">gated</span> or <span className="text-white">no details required</span> on the card itself, so the cost of a click is known in advance.
              </p>
            </div>
            <DeliverablesList
              columns={1}
              items={[
                'Cover-led presentation, in the manner of a printed report',
                'Contents surfaced as chips before the download decision',
                'Page count, format and file size stated up front',
                'Gating declared on the card, never after the click',
              ]}
            />
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 10 · Enquiry UX ── */}
      <Section pad="default" border="top">
        <SectionHeader
          eyebrow="10 — Enquiry UX"
          title="Two Doors, One Team"
          lead="Rather than one form that suits nobody, the enquiry splits by how much an investor is ready to say."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <FeatureImage
          src={imgEnquiryChoice}
          alt="Quick and detailed enquiry paths"
          onClick={() => open(imgEnquiryChoice)}
          rounded="2xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mt-12 md:mt-16">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              className="border border-gray-800 rounded-[6px] p-7 md:p-8 hover:border-[#50C1BA]/30 transition-colors"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className={LABEL}>About 1–2 Minutes</p>
              <h3 className="font-['Barlow',sans-serif] font-medium text-[18px] md:text-[21px] tracking-[0.2em] uppercase text-white mt-3 mb-4">Quick Enquiry</h3>
              <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-400">
                Contact details and a short message. For the investor who wants an answer before a commitment.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-800 rounded-[6px] p-7 md:p-8 hover:border-[#50C1BA]/30 transition-colors"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <p className={LABEL}>About 3–5 Minutes</p>
              <h3 className="font-['Barlow',sans-serif] font-medium text-[18px] md:text-[21px] tracking-[0.2em] uppercase text-white mt-3 mb-4">Detailed Enquiry</h3>
              <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-400">
                Criteria, capital, timeframe and preferences — with a review step before submission.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={BODY_MUTED}>
              <p>
                Friction is not removed, it is <span className="text-white">relocated</span>. The investor chooses how much to give, and each path states its own time cost before it starts.
              </p>
              <p className="hidden md:block">
                Both routes reach the same team. Alongside them sit a discovery call, WhatsApp and a direct line — for an audience five time zones away, the channel matters as much as the form.
              </p>
            </div>
          </div>
        </div>

        <FeatureImage
          src={imgEnquiryForm}
          alt="Enquiry form"
          onClick={() => open(imgEnquiryForm)}
          rounded="2xl"
          className="mt-14 md:mt-20"
          caption="Grouped fields, visible labels, one question per line"
        />
      </Section>

      {/* ── 11 · Responsive design ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="11 — Responsive Design"
          title="Three Widths, One Argument"
          lead="Mobile is not a narrower desktop. Tables become stacked records, the five-stage flow turns vertical, and descriptive copy is trimmed — but the order of the argument never changes."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="lg:col-span-7">
            <Figure
              src={imgPageOpportunities}
              alt="Investment opportunities page — desktop"
              onClick={() => open(imgPageOpportunities)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="Desktop — 1440"
            />
          </div>
          <div className="lg:col-span-3">
            <Figure
              src={imgTabletOpportunities}
              alt="Investment opportunities page — tablet"
              onClick={() => open(imgTabletOpportunities)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="Tablet — 834"
            />
          </div>
          <div className="lg:col-span-2">
            <PhoneFrame src={imgMobileOpportunities} alt="Investment opportunities page — mobile" onClick={() => open(imgMobileOpportunities)} caption="Mobile — 390" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end mt-12 md:mt-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <PhoneFrame src={imgMobileCaseStudies} alt="Case studies page — mobile" onClick={() => open(imgMobileCaseStudies)} caption="Mobile — 390" />
          </div>
          <div className="lg:col-span-3 order-3 lg:order-2">
            <Figure
              src={imgTabletCaseStudies}
              alt="Case studies page — tablet"
              onClick={() => open(imgTabletCaseStudies)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="Tablet — 834"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-3">
            <Figure
              src={imgPageCaseStudies}
              alt="Case studies page — desktop"
              onClick={() => open(imgPageCaseStudies)}
              rounded="lg"
              imgClassName="w-full h-auto object-cover"
              caption="Desktop — 1440"
            />
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <EditorialSplit
            ratio="5/7"
            align="center"
            media={
              <Figure
                src={imgTabletHome}
                alt="Homepage — tablet"
                onClick={() => open(imgTabletHome)}
                rounded="lg"
                imgClassName="w-full h-auto object-cover"
              />
            }
          >
            <div className="flex flex-col gap-6">
              <p className={LABEL}>What Adapts</p>
              <FactGrid
                items={[
                  { label: 'Navigation', value: 'Persistent action stays; the menu collapses to a single control.' },
                  { label: 'Property Cards', value: 'Three across becomes one, with the lead image doing more work.' },
                  { label: 'Case Studies', value: 'Figure pairs stack, each keeping its provenance badge.' },
                  { label: 'Resources', value: 'Tabs become a horizontally snapping shelf.' },
                  { label: 'Forms', value: 'Full-width controls at a fixed 3rem height, one field per row.' },
                  { label: 'Typography', value: 'Display sizes drop roughly a third; body text holds its measure.' },
                ]}
              />
            </div>
          </EditorialSplit>
        </div>
      </Section>

      {/* ── 12 · Final experience ── */}
      <Section width="wide" pad="loose" border="top">
        <SectionHeader eyebrow="12 — Final Experience" title="The Platform" align="center" size="lg" className="mb-12 md:mb-20" />

        <FeatureImage src={imgHero} alt="INVESTINUK homepage hero" onClick={() => open(imgHero)} rounded="3xl" />

        <ImageGrid
          cols={2}
          className="mt-6 md:mt-8"
          rounded="2xl"
          items={[
            { src: imgPageCaseStudies, alt: 'Case studies page', onClick: () => open(imgPageCaseStudies) },
            { src: imgPageContact, alt: 'Contact page', onClick: () => open(imgPageContact) },
          ]}
        />

        <FeatureImage
          src={imgCaseStudyFeatured}
          alt="Featured case study"
          onClick={() => open(imgCaseStudyFeatured)}
          rounded="3xl"
          className="mt-6 md:mt-8"
        />

        <PullQuote variant="panel" attribution="INVESTINUK — Visual Rif" className="mt-16 md:mt-28">
          A digital experience designed to make a complex international property journey feel structured, premium and accessible.
        </PullQuote>

        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href={SITE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-white/25 hover:border-[#50C1BA] hover:text-[#50C1BA] transition-colors px-8 md:px-10 py-4 font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-white"
          >
            View Live Website
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Section>

      {/* ── Reflection ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={<DeliverablesList columns={2} items={RESPONSIBILITIES} />}
        >
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow="Reflection" title="Responsibilities" />
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400">
                I led the creative direction, information architecture, visual system, interface design and front-end build — shaping how a complex, cross-border investment proposition is structured, evidenced and navigated.
              </p>
            </FadeIn>
            <RevealText>
              <p className={`${CAPTION} mt-2`}>Creative &amp; Design Credit — Visual Rif</p>
            </RevealText>
          </div>
        </EditorialSplit>
      </Section>

      <NextProject title="JMA Customs" to="/projects/jma-customs" />

      <GalleryLightbox
        images={GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
