import React, { useState } from 'react';
import '../styles/fonts.css';
import { GalleryLightbox, type GalleryImage } from './components/GalleryLightbox';
import { NextProject } from './components/NextProject';
import { FadeIn } from './components/motion/FadeIn';
import {
  CaseStudyShell,
  Section,
  SectionHeader,
  Hero,
  MetaBar,
  EditorialSplit,
  Figure,
  FeatureImage,
  ImageGrid,
  PullQuote,
  DeliverablesList,
} from './components/case-study';

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

const MONCKS_GALLERY: GalleryImage[] = [
  { src: imgRectangle23, alt: 'Laptop Mockup' },
  { src: imgRectangle24, alt: 'Mobile Mockup' },
  { src: imgRectangle25, alt: 'Desktop Mockup' },
  { src: imgMoncksStylingSheetDesktop11, alt: 'Styling Sheet' },
  { src: imgRectangle40, alt: 'Typography & Colors' },
  { src: imgRectangle27, alt: 'Design Element' },
  { src: imgRectangle30, alt: 'Gallery 1' },
  { src: imgRectangle31, alt: 'Gallery 2' },
  { src: imgRectangle32, alt: 'Gallery 3' },
  { src: imgRectangle33, alt: 'Gallery 4' },
  { src: img49, alt: 'Sitemap' },
  { src: img59, alt: 'Mobile Screens' },
];

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500 mt-3";

const RESPONSIBILITIES = [
  'Creative Direction Support',
  'UX/UI Design',
  'Art Direction',
  'Brand Experience Design',
  'Visual Research & Strategy',
  'Layout & Interaction Design',
  'Responsive Design',
  'Development Collaboration',
  'Digital Asset Creation',
  'Cross-Platform Consistency',
];

export default function MoncksOfDoverStreet() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <CaseStudyShell>
      {/* ── Hero ── */}
      <Hero
        media={<img src={imgRectangle4} alt="Moncks of Dover Street" className="w-full h-full object-cover object-bottom" />}
        titleLines={['Moncks Of', 'Dover Street']}
        heightClassName="h-[50vh] md:h-[70vh]"
        titleClassName="text-[50px] md:text-[98px] leading-none tracking-[0.08em]"
      />

      <MetaBar
        items={[
          { label: 'YEAR', value: '2019' },
          { label: 'LOCATION', value: 'LONDON' },
          { label: 'ROLE', value: 'UX / UI' },
          { label: 'INDUSTRY', value: 'LUXURY HOSPITALITY' },
        ]}
      />

      {/* ── 01 · Introduction ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          align="start"
          media={
            <div className="flex flex-col gap-6">
              <Figure src={imgRectangle23} alt="Laptop Mockup" onClick={() => openAt(0)} rounded="lg" imgClassName="w-full h-auto min-h-[300px] md:min-h-[500px] object-cover" />
              <ImageGrid
                cols={2}
                rounded="lg"
                items={[
                  { src: imgRectangle24, alt: 'Mobile Mockup', onClick: () => openAt(1), imgClassName: 'w-full h-auto min-h-[200px] md:min-h-[400px] object-cover' },
                  { src: imgRectangle25, alt: 'Desktop Mockup', onClick: () => openAt(2), imgClassName: 'w-full h-auto min-h-[200px] md:min-h-[400px] object-cover' },
                ]}
              />
              <p className={CAPTION}>Homepage design across desktop, tablet & mobile</p>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="01 — Introduction" title="Overview" />
            <FadeIn>
              <div className={BODY}>
                <p>As a Digital Designer at Verb Brands, I was tasked with designing a luxury hospitality website for Moncks Of Dover Street, a premium brasserie located in Mayfair, London. This project marked a pivotal moment in my career, allowing me to establish myself within the luxury digital design space.</p>
                <p>The objective was to create a refined 15-page brochure website that reflected the restaurant's premium identity, heritage, and interior experience, while also functioning seamlessly for a B2C audience through features such as reservation integrations. The project was delivered within a one-month timeframe with a £12,000 production budget.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 02 · The Problem ── */}
      <Section pad="tight" border="top">
        <EditorialSplit
          ratio="6/6"
          reverse
          align="center"
          media={
            <Figure src={imgRectangle27} alt="Design Element" onClick={() => openAt(5)} rounded="pill" imgClassName="w-full h-auto min-h-[300px] md:min-h-[520px] object-cover" caption="Editorial imagery carrying the atmosphere of the brasserie" />
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="02 — The Problem" title="The Challenge" />
            <FadeIn>
              <div className={BODY}>
                <p>Before beginning the design phase, I conducted extensive research using the sitemap, functional specifications, brand guidelines, and interior design references provided. This allowed me to build a strategic understanding of the brand's visual language, cultural influences, and audience expectations.</p>
                <p>One of the main challenges was creating a digital identity for a relatively new brand with a strong and recognisable name. I explored influences tied to both Christopher Monck and Dover Street's association with luxury fashion, art, and culture in London, using these references to shape the overall creative direction.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 03 · Thinking — structure ── */}
      <Section width="wide" pad="tight">
        <SectionHeader
          eyebrow="03 — Thinking"
          title="Structure"
          lead="A 15-page brochure site, mapped into a clear and navigable journey before a single screen was designed."
          className="mb-10 md:mb-14 max-w-3xl"
        />
        <FeatureImage
          src={img49}
          alt="Sitemap"
          onClick={() => openAt(10)}
          rounded="lg"
          imgClassName="w-full h-auto object-cover bg-white"
          caption="Sitemap — structuring the 15-page journey"
        />
      </Section>

      {/* ── 04 · Creative process — visual language ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-6">
              <Figure src={imgMoncksStylingSheetDesktop11} alt="Styling Sheet" onClick={() => openAt(3)} rounded="lg" imgClassName="w-full h-auto object-cover bg-white min-h-[280px] md:min-h-[420px]" caption="Styling sheet — the components that define the interface" />
              <Figure src={imgRectangle40} alt="Typography & Colours" onClick={() => openAt(4)} rounded="lg" imgClassName="w-full h-auto object-cover min-h-[280px] md:min-h-[420px]" caption="Typography & a restrained colour palette" />
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="04 — Creative Process" title="Visual Language" />
            <FadeIn>
              <div className={BODY}>
                <p>My approach combined strategic research with refined UX/UI thinking to create a digital experience that felt both immersive and functional. By merging the sitemap and functional requirements with the brand research, I designed a website that balanced elegant visuals with intuitive usability.</p>
                <p>Through considered layouts, typography, and imagery, the final experience translated the atmosphere of the restaurant into a premium online journey that encouraged users to engage with the brand and visit the establishment.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 05 · Execution — interface details ── */}
      <Section width="wide" pad="tight">
        <SectionHeader eyebrow="05 — Execution" title="Interface Details" className="mb-10 md:mb-14" />
        <ImageGrid
          cols={4}
          rounded="3xl"
          items={[imgRectangle30, imgRectangle31, imgRectangle32, imgRectangle33].map((src, i) => ({
            src,
            alt: `Interface detail ${i + 1}`,
            onClick: () => openAt(6 + i),
            imgClassName: 'w-full h-auto object-cover min-h-[250px] md:min-h-[400px]',
          }))}
        />
      </Section>

      {/* ── 06 · Final outcome ── */}
      <Section width="wide" pad="tight">
        <SectionHeader eyebrow="06 — Final Outcome" title="Across Every Screen" className="mb-10 md:mb-14" />
        <FeatureImage
          src={img59}
          alt="Mobile Screens"
          onClick={() => openAt(11)}
          rounded="lg"
          caption="Mobile screens — the experience carried across every breakpoint"
        />
      </Section>

      {/* ── 07 · Reflection ── */}
      <Section width="narrow" pad="default">
        <PullQuote attribution="Moncks of Dover Street">
          A premium digital experience built around elegant typography, editorial layouts, and a restrained colour palette — translating the atmosphere of Moncks Of Dover Street into a refined online presence that elevated the brand within London's luxury hospitality market.
        </PullQuote>
      </Section>

      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={<DeliverablesList columns={2} items={RESPONSIBILITIES} />}
        >
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow="Reflection" title="Responsibilities" tone="white" />
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400">
                Throughout the project I supported both the strategic and creative execution of the digital experience — from creative direction and the UX/UI design system through to translating the brand's luxury positioning into a refined, immersive online experience, working closely with senior creatives and developers.
              </p>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      <NextProject title="The Sunil Gavaskar Project" to="/projects/sunil-gavaskar" />

      <GalleryLightbox
        images={MONCKS_GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
