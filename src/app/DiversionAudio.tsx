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

const DIVERSION_GALLERY: GalleryImage[] = [
  { src: imgRectangle51, alt: 'Event Context 1' },
  { src: imgRectangle76, alt: 'Event Context 2' },
  { src: imgRectangle77, alt: 'Logo Black Background' },
  { src: imgRectangle78, alt: 'Logo Yellow Background' },
  { src: imgRectangle80, alt: 'Man in Orange Shirt' },
  { src: imgRectangle27, alt: 'Inspiration Shape 1' },
  { src: imgRectangle28, alt: 'Inspiration Shape 2' },
  { src: imgRectangle29, alt: 'Inspiration Shape 3' },
  { src: imgRectangle57, alt: 'Experimentation Path' },
  { src: imgRectangle58, alt: 'Experimentation Cross' },
  { src: imgRectangle59, alt: 'Experimentation Complex' },
  { src: imgRectangle60, alt: 'Experimentation Final White' },
  { src: imgRectangle61, alt: 'Experimentation Final Yellow' },
  { src: imgRectangle62, alt: 'Experimentation Small Black' },
  { src: imgRectangle67, alt: 'Final Yellow Logo' },
  { src: imgRectangle66, alt: 'Final Black Logo' },
  { src: imgRectangle34, alt: 'Event Hero' },
  { src: imgRectangle52, alt: 'Event Photo 1' },
  { src: imgRectangle53, alt: 'Event Photo 2' },
  { src: imgRectangle54, alt: 'Event Photo 3' },
  { src: imgRectangle55, alt: 'Event Photo 4' },
];

const INSPIRATION_LOGOS = [
  imgQ9WBmv, imgWmSe6X, imgGLl5Y0, imgPAw4Ua,
  imgShxZJi, img86AdbQ, imgKSp8PB, imgUnts7W,
  imgQqBlvg, imgI8U1V0, imgJrYl5T, imgMRbMkF,
  imgM0WPKe, imgU83Uhq, imgVf1Flk, imgMp0GAu,
];

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500";

export default function DiversionAudio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <CaseStudyShell>
      {/* ── Hero (full-bleed video behind sidebar) ── */}
      <Hero
        overflowVisible
        overlayClassName=""
        heightClassName="h-[50vh] md:h-[70vh]"
        titleClassName="text-[40px] md:text-[80px] lg:text-[110px] leading-none tracking-[0.1em]"
        titleLines={['Diversion Audio']}
        media={
          <div className="absolute inset-0 md:-left-[280px] md:w-[calc(100%+280px)] w-full h-full overflow-hidden pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/qOugLMycEe0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=qOugLMycEe0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              style={{ border: 0 }}
              allowFullScreen
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[50vh] md:min-h-[70vh] min-w-[88.88vh] md:min-w-[124.44vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        }
      />

      <MetaBar
        items={[
          { label: 'YEAR', value: '2024' },
          { label: 'LOCATION', value: 'SHREWSBURY' },
          { label: 'ROLE', value: <span className="leading-snug">EARLY BRAND<br />IDENTITY</span> },
          { label: 'INDUSTRY', value: <span className="leading-snug">MUSIC &amp;<br />ENTERTAINMENT</span> },
        ]}
      />

      {/* ── 01 · Introduction ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4" data-cursor="view">
                <Figure src={imgRectangle51} alt="Event Context 1" onClick={() => openAt(0)} rounded="2xl" frameClassName="aspect-[4/5]" imgClassName="w-full h-full object-cover" />
                <Figure src={imgRectangle76} alt="Event Context 2" onClick={() => openAt(1)} rounded="2xl" frameClassName="aspect-[4/5]" imgClassName="w-full h-full object-cover" />
                <Figure src={imgRectangle77} alt="Logo Black Background" onClick={() => openAt(2)} rounded="2xl" frameClassName="aspect-[16/9]" imgClassName="w-full h-full object-cover" />
                <Figure src={imgRectangle78} alt="Logo Yellow Background" onClick={() => openAt(3)} rounded="2xl" frameClassName="aspect-[16/9]" imgClassName="w-full h-full object-cover" />
              </div>
              <p className={CAPTION}>The identity in context — live events & logo lock-ups</p>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="01 — Introduction" title="Overview" />
            <FadeIn>
              <div className={BODY}>
                <p>Diversion Audio is a London-based Drum &amp; Bass collective focused on underground electronic music and live events. I was tasked with creating the initial visual identity for the brand, developing the early logo direction and foundational branding across digital and promotional platforms.</p>
                <p>This project marked my first introduction to working within the electronic music industry — a space I'm personally passionate about as an avid Drum &amp; Bass listener. Seeing the identity later featured at events and venues including Boomtown Fair and Volks Nightclub made the project especially rewarding.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 02 · Problem + Solution ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          align="stretch"
          media={
            <Figure src={imgRectangle80} alt="Man in Orange Shirt" onClick={() => openAt(4)} rounded="2xl" frameClassName="h-full" imgClassName="w-full h-full min-h-[400px] md:min-h-[520px] object-cover" />
          }
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <SectionHeader eyebrow="02 — The Problem" title="The Challenge" />
              <FadeIn>
                <div className={BODY}>
                  <p>One of the main challenges was defining the level of brand development required during the early stages of the collective. A strong focus was placed on creating a comprehensive visual identity system that extended beyond just logo design, ensuring the brand had a scalable foundation for long-term growth.</p>
                </div>
              </FadeIn>
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeader eyebrow="03 — The Response" title="The Solution" />
              <FadeIn>
                <div className={BODY}>
                  <p>The final solution came through an iterative design process that began with exploring more complex visual concepts before gradually refining the identity into a simpler and more effective outcome. Simplicity became a key part of the final logo — a bold and adaptable identity that worked across digital platforms, event branding, merchandise, and promotional material while remaining instantly recognisable.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Approach pull quote ── */}
      <Section width="narrow" pad="tight">
        <PullQuote attribution="Diversion Audio">
          Bold minimalism, strong typography, and a scalable visual system — built to work across events, merchandise, and digital platforms, positioning Diversion Audio for long-term growth within the UK music scene.
        </PullQuote>
      </Section>

      {/* ── 04 · Thinking — research ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="04 — Thinking"
          title="Research"
          lead="Mapping the underground Drum & Bass scene — audience, culture, and visual language."
          align="center"
          className="mb-10 md:mb-14"
        />
        <FadeIn className="w-full max-w-7xl mx-auto overflow-hidden">
          <img src={imgRectangle93} alt="Research Mindmap" loading="lazy" className="w-full h-auto object-contain invert mix-blend-screen opacity-90 min-h-[300px]" />
        </FadeIn>
      </Section>

      {/* ── 05 · Creative process — inspiration ── */}
      <Section width="narrow" pad="default">
        <SectionHeader
          eyebrow="05 — Creative Process"
          title="Inspiration"
          lead="Bold, minimal reference marks that shaped the direction of the identity."
          align="center"
          className="mb-10 md:mb-14"
        />
        <FadeIn className="w-full bg-white rounded-[24px] p-8 md:p-16 shadow-2xl flex flex-col justify-center items-center gap-10 md:gap-16 max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 w-full px-2">
            {INSPIRATION_LOGOS.slice(0, 5).map((logo, i) => (
              <img key={i} src={logo} alt={`Inspiration logo ${i + 1}`} loading="lazy" className="h-16 md:h-24 w-auto object-contain mix-blend-multiply" />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 w-full px-2">
            {INSPIRATION_LOGOS.slice(5).map((logo, i) => (
              <img key={i + 5} src={logo} alt={`Inspiration logo ${i + 6}`} loading="lazy" className="h-8 md:h-12 w-auto object-contain mix-blend-multiply" />
            ))}
          </div>
        </FadeIn>
        <div className="max-w-4xl mx-auto">
          <ImageGrid
            cols={3}
            rounded="2xl"
            items={[imgRectangle27, imgRectangle28, imgRectangle29].map((src, i) => ({
              src,
              alt: `Inspiration shape ${i + 1}`,
              onClick: () => openAt(5 + i),
              frameClassName: 'aspect-square',
              imgClassName: 'w-full h-full object-cover',
            }))}
          />
          <p className={`${CAPTION} text-center mt-4`}>Mood & shape studies</p>
        </div>
      </Section>

      {/* ── 06 · Iteration — experimentation ── */}
      <Section width="narrow" pad="default" border="top">
        <SectionHeader
          eyebrow="06 — Iteration"
          title="Experimentation"
          lead="Exploring complexity first, then stripping the logo back to its most recognisable form."
          align="center"
          className="mb-10 md:mb-14"
        />
        <div className="max-w-4xl mx-auto">
          <ImageGrid
            cols={3}
            rounded="2xl"
            items={[imgRectangle57, imgRectangle58, imgRectangle59, imgRectangle60, imgRectangle61, imgRectangle62].map((src, i) => ({
              src,
              alt: `Experimentation ${i + 1}`,
              onClick: () => openAt(8 + i),
              frameClassName: 'aspect-square',
              imgClassName: 'w-full h-full object-cover',
            }))}
          />
        </div>
      </Section>

      {/* ── 07 · Final outcome ── */}
      <Section width="narrow" pad="default" border="top">
        <SectionHeader eyebrow="07 — Final Outcome" title="The Mark" align="center" className="mb-10 md:mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
          <Figure src={imgRectangle67} alt="Final Yellow Logo" onClick={() => openAt(14)} rounded="2xl" imgClassName="w-full h-auto object-cover min-h-[300px]" />
          <Figure src={imgRectangle66} alt="Final Black Logo" onClick={() => openAt(15)} rounded="2xl" imgClassName="w-full h-auto object-cover min-h-[300px]" />
        </div>
        <p className={`${CAPTION} text-center mt-6`}>Final logo — yellow & black variations</p>
      </Section>

      {/* ── 08 · Reflection ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={
            <FadeIn>
              <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[18px] leading-[1.8] tracking-[0.05em] text-gray-300 space-y-6">
                <p>The concept behind the Diversion Audio logo was built around the idea of redirecting people back towards music, culture, and connection. This is reflected through the manipulated typography, where the chevron-inspired forms visually guide the eye back towards the word "Diversion", symbolising movement, energy, and redirection within the music scene.</p>
                <p>The logo later took on a deeper personal meaning during Boomtown Fair 2025. After being separated from a friend across different campsites for several days, seeing the Diversion placard in the distance became a reminder of the original purpose behind the logo — the idea of diverting back towards the music, the people, and the experiences that connect communities together.</p>
              </div>
            </FadeIn>
          }
        >
          <SectionHeader eyebrow="08 — Reflection" title="Breakdown" />
        </EditorialSplit>
      </Section>

      {/* ── Immersive — video showcase ── */}
      <Section width="narrow" pad="tight">
        <div className="video-wrapper aspect-video drop-shadow-2xl bg-black/50 border border-gray-800">
          <iframe
            src="https://www.youtube.com/embed/qOugLMycEe0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=qOugLMycEe0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </Section>

      {/* ── In the wild — gallery ── */}
      <Section width="wide" pad="default">
        <SectionHeader
          eyebrow="In The Wild"
          title="Live"
          lead="The identity live across events and venues — including Boomtown Fair and Volks Nightclub."
          className="mb-10 md:mb-14 max-w-2xl"
        />
        <div className="flex flex-col gap-8 md:gap-16">
          <FeatureImage src={imgRectangle34} alt="Event Hero" onClick={() => openAt(16)} rounded="3xl" imgClassName="w-full h-auto object-cover min-h-[400px] md:min-h-[600px]" />
          <ImageGrid
            cols={4}
            rounded="2xl"
            items={[imgRectangle52, imgRectangle53, imgRectangle54, imgRectangle55].map((src, i) => ({
              src,
              alt: `Event photo ${i + 1}`,
              onClick: () => openAt(17 + i),
              frameClassName: 'aspect-square',
              imgClassName: 'w-full h-full object-cover',
            }))}
          />
        </div>
      </Section>

      <NextProject title="Moncks of Dover Street" to="/projects/moncks-of-dover-street" />

      <GalleryLightbox
        images={DIVERSION_GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
