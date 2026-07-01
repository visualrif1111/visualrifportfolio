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
} from './components/case-study';

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
import imgImg01632 from "../imports/SunilGavaskarProject/64562e22fd549861351b28aadd9a6454b2cc55e9.png";
import imgImg01642 from "../imports/SunilGavaskarProject/b4e9d1362190c004d0a5eadf9236c61881b2bb95.png";
import imgNftieSunilGavaskarMindmap2 from "../imports/SunilGavaskarProject/9f847f2c74c776c680bb990082dd98688f494e30.png";
import imgSg22HomepageV07202204134 from "../imports/SunilGavaskarProject/9048072e8ecc4333edc3d61bb42786c58c07b4a0.png";
import img2SunilGavaskarTheEmblems3 from "../imports/SunilGavaskarProject/d7c9bf7260782b0fa96292eb81ea654f840b990f.png";
import imgSunilGavaskarTheMoments3 from "../imports/SunilGavaskarProject/adde1db957982f5160da06f59e6f2565423909da.png";
import imgSunilGavaskarHallOfFame3 from "../imports/SunilGavaskarProject/24aca0cf507397aef5fa516ca8741c97da3eaf46.png";
import imgSunilGavaskarTheHallOfFameV23 from "../imports/SunilGavaskarProject/130fafa6183f9cf9541eeb73e44ef4db8e3e037b.png";
import imgEllipse5 from "../imports/SunilGavaskarProject/57e05b02450362c31cdcf56162a165d964882973.png";

const SUNIL_GALLERY: GalleryImage[] = [
  { src: imgRectangle43, alt: 'Laptop Preview' },
  { src: imgRectangle46, alt: 'Desktop Preview' },
  { src: imgSg22HomepageV07202204134, alt: 'Website Slice 1' },
  { src: img2SunilGavaskarTheEmblems3, alt: 'Website Slice 2' },
  { src: imgSunilGavaskarTheMoments3, alt: 'Website Slice 3' },
  { src: imgSunilGavaskarHallOfFame3, alt: 'Website Slice 4' },
  { src: imgSunilGavaskarTheHallOfFameV23, alt: 'Website Slice 5' },
  { src: imgNftieSunilGavaskarMindmap2, alt: 'Wireframe' },
  { src: imgImg01632, alt: 'Sketch Process 1' },
  { src: imgImg01642, alt: 'Sketch Process 2' },
  { src: imgNftieSunilGavaskarMindmapV11, alt: 'Mindmap' },
  { src: imgRectangle27, alt: 'Wireframe 1' },
  { src: imgRectangle28, alt: 'Wireframe 2' },
  { src: imgRectangle29, alt: 'Wireframe 3' },
  { src: imgRectangle34, alt: 'Banner 1' },
  { src: imgRectangle52, alt: 'Social Media 1' },
  { src: imgRectangle53, alt: 'Social Media 2' },
  { src: imgRectangle54, alt: 'Social Media 3' },
  { src: imgRectangle55, alt: 'Social Media 4' },
  { src: imgRectangle37, alt: 'Banner 2' },
  { src: imgRectangle30, alt: 'NFT Collectible 1' },
  { src: imgRectangle31, alt: 'NFT Collectible 2' },
  { src: imgRectangle32, alt: 'NFT Collectible 3' },
  { src: imgRectangle33, alt: 'NFT Collectible 4' },
];

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500";

export default function SunilGavaskar() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <CaseStudyShell>
      {/* ── Hero ── */}
      <Hero
        media={<img src={imgRectangle51} alt="Always First — Sunil Gavaskar" className="w-full h-full object-cover object-center" />}
        overlayClassName="bg-black/40"
        heightClassName="h-[45vh] md:h-[70vh]"
        titleClassName="text-[36px] md:text-[80px] lg:text-[98px] leading-none tracking-[0.08em]"
        titleLines={[
          'Always First',
          <span key="sg" className="text-[18px] md:text-[32px] font-['Barlow',sans-serif] tracking-[0.25em]">Sunil Gavaskar</span>,
        ]}
      >
        <div className="absolute inset-y-0 right-0 w-[25%] bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </Hero>

      <MetaBar
        items={[
          { label: 'YEAR', value: '2022' },
          { label: 'LOCATION', value: 'LONDON' },
          { label: 'ROLE', value: <span className="leading-snug">UX / UI DESIGN<br />DIGITAL DESIGN</span> },
          { label: 'INDUSTRY', value: <span className="leading-snug">WEB3 / NFT /<br />DIGITAL COLLECTIBLES</span> },
        ]}
      />

      {/* ── 01 · Introduction ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-6">
              <Figure src={imgRectangle43} alt="Laptop Preview" onClick={() => openAt(0)} rounded="lg" imgClassName="w-full h-auto object-cover" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Figure src={imgRectangle46} alt="Desktop Preview" onClick={() => openAt(1)} rounded="lg" imgClassName="w-full h-auto object-cover" />
                <div className="relative flex items-center justify-center bg-[#011615] rounded-lg p-6 overflow-hidden min-h-[300px]">
                  <div className="flex items-start justify-center gap-1.5 md:gap-2 h-[200px] md:h-[240px] relative z-10 w-full overflow-hidden">
                    <img src={imgSg22HomepageV07202204134} loading="lazy" className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer" alt="Slice 1" onClick={() => openAt(2)} />
                    <img src={img2SunilGavaskarTheEmblems3} loading="lazy" className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer" alt="Slice 2" onClick={() => openAt(3)} />
                    <img src={imgSunilGavaskarTheMoments3} loading="lazy" className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer" alt="Slice 3" onClick={() => openAt(4)} />
                    <img src={imgSunilGavaskarHallOfFame3} loading="lazy" className="h-full w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer" alt="Slice 4" onClick={() => openAt(5)} />
                    <div className="h-full flex flex-col justify-start">
                      <img src={imgSunilGavaskarTheHallOfFameV23} loading="lazy" className="h-[25%] w-auto object-cover rounded-[4px] shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer" alt="Slice 5" onClick={() => openAt(6)} />
                    </div>
                  </div>
                  <img src={imgEllipse5} loading="lazy" className="absolute bottom-4 right-4 w-20 md:w-24 h-auto drop-shadow-[0_10px_30px_rgba(210,176,99,0.3)] z-20" alt="Gold Seal" />
                </div>
              </div>
              <p className={CAPTION}>The Always First platform — homepage, virtual gallery & collectibles</p>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="01 — Introduction" title="Overview" />
            <FadeIn>
              <div className={BODY}>
                <p>As a Freelance Digital Designer at Velvet Badger, I worked on Always First – Sunil Gavaskar, a Web3 and NFT project created for legendary cricketer Sunil Gavaskar. This project marked a key moment in my career, shaping my interest in digital assets and immersive experiences.</p>
                <p>The objective was to design a website that brought together the wider Always First campaign, alongside a supporting social media campaign to promote the NFT launch and virtual gallery experience. The platform allowed fans to explore Sunil Gavaskar's achievements and engage with the NFT collection through a modern and accessible digital experience.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 02 · The Problem + Solution ── */}
      <Section pad="default" border="top">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="02 — The Problem" title="The Challenge" />
            <FadeIn>
              <div className={BODY}>
                <p>One of the main challenges was translating a complex Web3 and NFT concept into a clear and engaging user experience within a short production timeframe.</p>
                <p>The project included multiple moving parts — website design, NFT storytelling, and social media assets — all of which needed to feel cohesive under one visual direction. I began with research and mind mapping to understand the Web3 space, audience, and visual identity before moving into a rapid design sprint.</p>
              </div>
            </FadeIn>
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="03 — The Response" title="The Solution" />
            <FadeIn>
              <div className={BODY}>
                <p>The final solution was a cohesive digital campaign that combined the website, NFT experience, and social media content into a unified platform. The website acted as a central hub for the project, while the social media campaign helped build awareness and engagement around the launch.</p>
                <p>Using a clean visual hierarchy and contemporary Web3-inspired design, the final experience balanced innovation with accessibility — creating an engaging platform for both existing fans and audiences new to NFTs.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Approach pull quote ── */}
      <Section width="narrow" pad="tight">
        <PullQuote attribution="Always First — Sunil Gavaskar">
          A modern, accessible Web3 experience centred around immersive layouts, bold typography, and digital storytelling — balancing innovation with clarity for both existing fans and audiences new to NFTs.
        </PullQuote>
      </Section>

      {/* ── 04 · Thinking — research & wireframing ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="04 — Thinking"
          title="Research & Wireframing"
          lead="From mind mapping the Web3 space to early sketches and wireframes that shaped the user journey."
          className="mb-10 md:mb-14 max-w-2xl"
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          <div className="w-full lg:w-1/4 hidden md:flex justify-center lg:justify-start items-start">
            <img src={imgNftieSunilGavaskarMindmap2} alt="Wireframe" className="w-full max-w-[300px] h-auto object-contain rounded-2xl bg-[#0a0a0a] p-4 drop-shadow-2xl cursor-pointer" data-cursor="view" onClick={() => openAt(7)} />
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-8">
            <div className="w-full bg-[#011615] rounded-[24px] py-16 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
              <div className="w-full md:w-[40%] flex justify-center gap-4 relative z-10 opacity-80 mix-blend-screen">
                <img src={imgImg01632} className="w-[45%] h-auto rounded cursor-pointer" alt="Sketch Process 1" onClick={() => openAt(8)} />
                <img src={imgImg01642} className="w-[45%] h-auto rounded mt-8 cursor-pointer" alt="Sketch Process 2" onClick={() => openAt(9)} />
              </div>
              <div className="w-full md:w-[60%] flex justify-center z-10">
                <img src={imgNftieSunilGavaskarMindmapV11} alt="Mindmap" className="w-full h-auto object-cover rounded-xl cursor-pointer" data-cursor="view" onClick={() => openAt(10)} />
              </div>
            </div>
            <ImageGrid
              cols={3}
              rounded="2xl"
              items={[imgRectangle27, imgRectangle28, imgRectangle29].map((src, i) => ({
                src,
                alt: `Wireframe ${i + 1}`,
                onClick: () => openAt(11 + i),
                imgClassName: 'w-full aspect-square object-cover',
              }))}
            />
            <p className={CAPTION}>Wireframes — defining structure before visual design</p>
          </div>
        </div>
      </Section>

      {/* ── 05 · Breakdown ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={
            <FadeIn>
              <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[18px] leading-[1.8] tracking-[0.05em] text-gray-300 space-y-6 lg:pt-2">
                <p>Coming into the project with a fresh perspective on the Web3 and NFT space, I began by researching the industry and creating a structured mind map to break down the visual identity, audience, and wider campaign direction. This was followed by early wireframes and layout exploration to define the user journey and overall structure of the website experience.</p>
                <p>Working within a tight two-week timeframe, I moved into a rapid design sprint focused on delivering a cohesive digital experience across the website and supporting social media campaign, successfully unifying multiple parts of the project under one creative direction.</p>
              </div>
            </FadeIn>
          }
        >
          <SectionHeader eyebrow="05 — Creative Process" title="Breakdown" />
        </EditorialSplit>
      </Section>

      {/* ── 06 · Execution — campaign & collectibles ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="06 — Execution"
          title="Campaign & Collectibles"
          lead="Key visuals and social assets that carried the launch, alongside the NFT collectibles themselves."
          className="mb-10 md:mb-14 max-w-2xl"
        />
        <div className="flex flex-col gap-8 md:gap-16">
          <FeatureImage src={imgRectangle34} alt="Banner 1" onClick={() => openAt(14)} rounded="3xl" caption="Campaign key visual" />
          <div>
            <p className={`${CAPTION} mb-4`}>Social media campaign</p>
            <ImageGrid
              cols={4}
              rounded="2xl"
              items={[imgRectangle52, imgRectangle53, imgRectangle54, imgRectangle55].map((src, i) => ({
                src,
                alt: `Social media ${i + 1}`,
                onClick: () => openAt(15 + i),
                imgClassName: 'w-full aspect-square object-cover',
              }))}
            />
          </div>
          <FeatureImage src={imgRectangle37} alt="Banner 2" onClick={() => openAt(19)} rounded="3xl" caption="Launch announcement" />
        </div>
      </Section>

      {/* ── 07 · Final outcome — NFT collectibles ── */}
      <Section width="wide" pad="tight">
        <SectionHeader eyebrow="07 — Final Outcome" title="NFT Collectibles" className="mb-10 md:mb-14" />
        <ImageGrid
          cols={4}
          rounded="2xl"
          frameClassName="bg-[#111]"
          items={[imgRectangle30, imgRectangle31, imgRectangle32, imgRectangle33].map((src, i) => ({
            src,
            alt: `NFT collectible ${i + 1}`,
            onClick: () => openAt(20 + i),
            imgClassName: 'w-full aspect-square object-contain',
          }))}
        />
      </Section>

      <NextProject title="JMA Customs" to="/projects/jma-customs" />

      <GalleryLightbox
        images={SUNIL_GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
