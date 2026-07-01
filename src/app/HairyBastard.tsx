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
  PullQuote,
} from './components/case-study';

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

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";

export default function HairyBastard() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <CaseStudyShell>
      {/* ── Hero ── */}
      <Hero
        media={<img src={imgHeroBarbershop} alt="The Hairy Bastard Barbershop — Brick Lane London" className="w-full h-full object-cover object-[55%_center]" />}
        overlayClassName="bg-black/60"
        heightClassName="h-[50vh] md:h-[70vh]"
        titleClassName="text-[40px] md:text-[80px] lg:text-[110px] leading-none tracking-[0.1em]"
        titleLines={['The Hairy', 'Bastard']}
      />

      <MetaBar
        size="md"
        items={[
          { label: 'YEAR', value: '2018' },
          { label: 'LOCATION', value: 'LONDON' },
          { label: 'ROLE', value: <span className="leading-snug">BRAND IDENTITY<br />PRINT DESIGN</span> },
          { label: 'INDUSTRY', value: <span className="leading-snug">BARBERSHOP<br />GROOMING</span> },
        ]}
      />

      {/* ── 01 · Introduction ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-4" data-cursor="view">
              <div className="grid grid-cols-[2fr_5fr] gap-4">
                <Figure src={imgBarbershopComposite} alt="Card Front and Back" onClick={() => openAt(1)} rounded="2xl" frameClassName="h-[220px] md:h-[270px]" imgClassName="w-full h-full object-cover object-center" />
                <Figure src={imgCardsStacked} alt="Stacked Cards Mockup" onClick={() => openAt(2)} rounded="2xl" frameClassName="h-[220px] md:h-[270px]" imgClassName="w-full h-full object-cover object-center" />
              </div>
              <Figure src={imgCardsStanding} alt="Final Printed Business Cards" onClick={() => openAt(3)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
              <div className="grid grid-cols-2 gap-4">
                <Figure src={imgCardsStacked} alt="Stacked Cards Mockup" onClick={() => openAt(2)} rounded="2xl" frameClassName="h-[220px] md:h-[300px]" imgClassName="w-full h-full object-cover object-center" />
                <Figure src={imgSpotUV6} alt="Spot UV Card — Standing Mockup" onClick={() => openAt(5)} rounded="2xl" frameClassName="h-[220px] md:h-[300px]" imgClassName="w-full h-full object-cover object-center" />
              </div>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="01 — Introduction" title="Overview" />
            <FadeIn>
              <div className={BODY}>
                <p>The Hairy Bastard is an independent barbershop located at 80 Brick Lane, London — one of East London's most culturally distinctive streets. This project involved developing a complete brand identity from the ground up, covering logo design, typography, colour systems, and print production for the business launch.</p>
                <p>The brief called for an identity that felt genuinely rooted in its environment — bold enough to stand out in a competitive area, while being immediately legible at small sizes across business cards, signage, and digital platforms.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Feature — the shop ── */}
      <Section width="wide" pad="tight">
        <FeatureImage src={imgBarbershopShoot} alt="The Hairy Bastard — Barbershop" onClick={() => openAt(6)} rounded="lg" caption="The Hairy Bastard — 80 Brick Lane, London" />
      </Section>

      {/* ── 02 · The Problem ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="6/6"
          reverse
          align="center"
          media={<Figure src={imgLogoPortraitB} alt="Logo Concept — Portrait" onClick={() => openAt(7)} rounded="lg" imgClassName="w-full h-auto object-cover" />}
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="02 — The Problem" title="The Challenge" />
            <FadeIn>
              <div className={BODY}>
                <p>The key challenge was creating a visual identity that felt genuinely tied to its location. Brick Lane carries a strong sense of place and character — any brand representing a business here needed to reflect that authenticity rather than produce something generic or interchangeable.</p>
                <p>The identity also needed to work across a range of applications simultaneously, from the fine detail of a business card to the larger-scale presence of shop signage, while remaining consistent and recognisable throughout.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 03 · The Thinking ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-4">
              <Figure src={imgCardFrontOrangeA} alt="Card Design — Brick Lane Map" onClick={() => openAt(9)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="The Brick Lane street map as the card's graphic surface" />
              <Figure src={imgLogoMarkDark} alt="Logo Mark — Dark" onClick={() => openAt(8)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="The unified head-and-map mark" />
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="03 — The Thinking" title="The Solution" />
            <FadeIn>
              <div className={BODY}>
                <p>The solution centred on combining two defining elements: a man's head silhouette, and the street layout of Brick Lane itself. By mapping the local streets directly into the head shape, the logo became a literal representation of both the craft and the location — a barber and his Brick Lane home, unified in a single mark.</p>
                <p>This concept carried naturally into the business card, where the street map and silhouette formed a full-bleed graphic composition on the front face, finished with a spot UV lacquer to give the map pattern a premium, tactile quality.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Approach pull quote ── */}
      <Section width="narrow" pad="tight">
        <PullQuote attribution="The Hairy Bastard">
          A barbershop identity rooted in place — combining a man's silhouette with the Brick Lane street map to create a logo that is both a portrait and a postcode, finished with spot UV print for a premium tactile result.
        </PullQuote>
      </Section>

      {/* ── 04 · Creative process — development ── */}
      <Section pad="default" border="top">
        <SectionHeader eyebrow="04 — Creative Process" title="Development · Stage 1" lead="Studying the map detail and testing it across early card iterations." className="mb-10 md:mb-14 max-w-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-6" data-cursor="view">
          <Figure src={imgDev1Maps} alt="Map Studies" onClick={() => openAt(10)} rounded="lg" imgClassName="w-full h-auto object-cover" />
          <Figure src={imgDev1CardB} alt="Card Iteration" onClick={() => openAt(11)} rounded="lg" imgClassName="w-full h-auto object-cover" />
        </div>
        <FeatureImage src={imgCardFinalOrange} alt="Card Design — Final Orange" onClick={() => openAt(12)} rounded="lg" />
      </Section>

      <Section width="narrow" pad="tight">
        <SectionHeader title="Development · Stage 2" lead="Refining the map into a repeatable pattern for the spot UV treatment." align="center" className="mb-10 md:mb-12" />
        <FeatureImage src={imgDev2Patterns} alt="Map Patterns" onClick={() => openAt(13)} rounded="lg" className="max-w-2xl mx-auto" />
      </Section>

      {/* ── 05 · Execution — spot UV ── */}
      <Section pad="default" border="top">
        <SectionHeader eyebrow="05 — Execution" title="Spot UV" lead="A glossy UV lacquer lifts the map pattern off the matte charcoal base — quality you can feel." align="center" className="mb-10 md:mb-14" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto" data-cursor="view">
          <Figure src={imgSpotUVFront} alt="Spot UV Card — Front" onClick={() => openAt(14)} rounded="lg" imgClassName="w-full h-auto object-cover" />
          <Figure src={imgSpotUVClose} alt="Spot UV Card — Close-up" onClick={() => openAt(17)} rounded="lg" imgClassName="w-full h-auto object-cover" />
        </div>
      </Section>

      {/* ── 06 · Reflection ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={
            <FadeIn>
              <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p>The concept behind the business card was built around reinforcing the location and identity of the business through design — a custom illustrated map of Brick Lane, with the surrounding streets integrated directly into the layout to create a stronger connection between the brand and its environment.</p>
                  <p>The card was designed to align with the interior aesthetic of the business, elevating the overall presence and atmosphere associated with the Brick Lane location.</p>
                </div>
                <div className="space-y-4">
                  <p>A strong emphasis was also placed on structure and composition, with the golden ratio influencing the layout system to create a balanced and visually distinctive design that stood apart from traditional business cards.</p>
                </div>
              </div>
            </FadeIn>
          }
        >
          <SectionHeader eyebrow="06 — Reflection" title="Breakdown" />
        </EditorialSplit>
      </Section>

      {/* ── Immersive — collage ── */}
      <Section width="wide" pad="tight">
        <FeatureImage src={imgCollage} alt="Project Collage — Process Overview" onClick={() => openAt(15)} rounded="lg" />
      </Section>

      {/* ── 07 · Final outcome ── */}
      <Section pad="default" border="top">
        <SectionHeader eyebrow="07 — Final Outcome" title="The Card" className="mb-10 md:mb-14" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4" data-cursor="view">
          <div className="flex flex-col gap-4">
            <Figure src={imgCardsStanding} alt="Final Printed Business Cards" onClick={() => openAt(3)} rounded="lg" imgClassName="w-full h-auto object-cover" />
            <Figure src={imgProcessStrip} alt="Project Process Overview" onClick={() => openAt(4)} rounded="lg" imgClassName="w-full h-[180px] md:h-[220px] object-cover object-top" />
            <Figure src={imgSpotUVClose} alt="Spot UV Card — Close-up" onClick={() => openAt(17)} rounded="lg" imgClassName="w-full h-auto object-cover" />
          </div>
          <Figure src={imgCardFlat} alt="Final Card — Front and Back" onClick={() => openAt(16)} rounded="lg" frameClassName="h-full" imgClassName="w-full h-full min-h-[400px] object-cover" />
        </div>
      </Section>

      <NextProject title="Diversion Audio" to="/projects/diversion-audio" />

      <GalleryLightbox
        images={THB_GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
