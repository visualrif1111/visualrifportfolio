import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import YouTube from 'react-youtube';
import '../styles/fonts.css';
import { GalleryLightbox, type GalleryImage } from './components/GalleryLightbox';
import { NextProject } from './components/NextProject';
import { RevealText } from './components/motion/RevealText';
import { FadeIn } from './components/motion/FadeIn';
import { ResponsiveYouTubeEmbed } from './components/ResponsiveYouTubeEmbed';
import {
  CaseStudyShell,
  Section,
  SectionHeader,
  Hero,
  MetaBar,
  EditorialSplit,
  Figure,
  DeliverablesList,
} from './components/case-study';

import imgImage3 from "../imports/Visualrif-1/32b71aec4774900729dbc80c4acd99f7a5314c6a.png";
import imgImageLaptopMockup from "../imports/Visualrif-1/4e3ab4c3d653794d535a17543585de77fd8a6835.png";
import imgImageMobileMockup from "../imports/Visualrif-1/2abb1b520770ba4aafb04a4995fc2119afda74d7.png";
import importedImage3 from "../imports/image-3.png";
import imgImageDesktopMockup from "../imports/Visualrif-1/aca2bf96a01d37bd2387add99b2478911f4430b4.png";
import imgScene12 from "../imports/Visualrif-1/ee33e1fe62363e5a68f91107234df46315c7195a.png";
import imgScene1A3 from "../imports/Visualrif-1/ee597eb4d2c8e12316bb5dffd631266394ad662e.png";
import imgScene2A3 from "../imports/Visualrif-1/ac4d8e12cf7a3e2b33325b1abd6b17b73b26ee74.png";
import imgScene3A2 from "../imports/Visualrif-1/3fc5f6e80775cd5cd09138e04bdbe6e6075c9611.png";
import imgScene32 from "../imports/Visualrif-1/12031fcfc958d0a4135cf9b6b8744b9139d70554.png";
import imgScene24 from "../imports/Visualrif-1/b91f574ac557632b74f1dd78267c2dd6fb7a4dc0.png";
import imgScene42 from "../imports/Visualrif-1/ded2b63c031bb4c99e443fb67432189d667255f5.png";
import imgScene4A2 from "../imports/Visualrif-1/14937e1b9ff940e370ab9ca05f3230b63729d1d7.png";
import imgScene4B2 from "../imports/Visualrif-1/abcff01d42f157d304ca928b6be75177b14a61c9.png";
import imgScene13 from "../imports/Visualrif-1/d97ef631768ef7e7dd24a23a73ba46a8ca295239.png";
import imgScene1B2 from "../imports/Visualrif-1/cde67092c15c4ac87d33525845df421edb876ce0.png";
import imgScene1A4 from "../imports/Visualrif-1/a03c86a07d0a0e4bfce1a53922d0a53ae5918f54.png";
import imgScene25 from "../imports/Visualrif-1/fd9bf323ab3cc34807f033611afbf4eed1c0a34d.png";
import imgScene2A4 from "../imports/Visualrif-1/f3ef4de29e15f03b98a1e193cf9f0ce9fc8f0f9e.png";
import imgScene8A2 from "../imports/Visualrif-1/79108231a1332970999d747842e2a89a7759b4e0.png";
import imgScene8B2 from "../imports/Visualrif-1/a4acd5c98a4de253463fe87bb0d5d16146d371b7.png";
import imgScene92 from "../imports/Visualrif-1/0036c6bfe992c470be4babc22b86fa41312294fb.png";
import imgScene9A2 from "../imports/Visualrif-1/34513c3c99489ceec50e81b88f4f4d7fb2baa481.png";
import img202503191215262 from "../imports/Visualrif-1/a4ec3b89434cb26e83aba1aa5ac277424b4ace79.png";

const SWIFTROOMS_GALLERY: GalleryImage[] = [
  { src: imgImageLaptopMockup, alt: 'Laptop Mockup' },
  { src: imgImageMobileMockup, alt: 'Mobile Mockup' },
  { src: imgImageDesktopMockup, alt: 'Desktop Mockup' },
  { src: imgImage3, alt: 'Sitemap' },
  { src: importedImage3, alt: 'Wireframes and Content Request' },
  { src: imgScene12, alt: 'Storyboard Scene 1' },
  { src: imgScene1A3, alt: 'Storyboard Scene 2' },
  { src: imgScene2A3, alt: 'Storyboard Scene 3' },
  { src: imgScene3A2, alt: 'Storyboard Scene 4' },
  { src: imgScene32, alt: 'Storyboard Scene 5' },
  { src: imgScene24, alt: 'Storyboard Scene 6' },
  { src: imgScene42, alt: 'Storyboard Scene 7' },
  { src: imgScene4A2, alt: 'Storyboard Scene 8' },
  { src: imgScene4B2, alt: 'Storyboard Scene 9' },
  { src: imgScene13, alt: 'Storyboard Scene 10' },
  { src: imgScene1B2, alt: 'Storyboard Scene 11' },
  { src: imgScene1A4, alt: 'Storyboard Scene 12' },
  { src: imgScene25, alt: 'Storyboard Scene 13' },
  { src: imgScene25, alt: 'Storyboard Scene 14' },
  { src: imgScene2A4, alt: 'Storyboard Scene 15' },
  { src: imgScene8A2, alt: 'Storyboard Scene 16' },
  { src: imgScene8B2, alt: 'Storyboard Scene 17' },
  { src: imgScene92, alt: 'Storyboard Scene 18' },
  { src: imgScene9A2, alt: 'Storyboard Scene 19' },
  { src: img202503191215262, alt: 'Storyboard Scene 20' },
];

const STORYBOARD = [
  imgScene12, imgScene1A3, imgScene2A3, imgScene3A2, imgScene32,
  imgScene24, imgScene42, imgScene4A2, imgScene4B2, imgScene13,
  imgScene1B2, imgScene1A4, imgScene25, imgScene25, imgScene2A4,
  imgScene8A2, imgScene8B2, imgScene92, imgScene9A2, img202503191215262,
];

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500";

const RESPONSIBILITIES = [
  'Creative Direction', 'UX/UI Design', 'Landing Page Design', 'Conversion-Focused Design',
  'Art Direction', 'AI-Assisted Design Workflows', 'Visual Research & Strategy', 'Responsive Web Design',
  'Motion Graphics & Storyboarding', 'Interaction Design', 'Development Collaboration', 'Design-to-Development Translation',
  'Digital Asset Creation', 'Cross-Platform Consistency', 'Lead Generation Optimisation', 'Google Ads Landing Page Support',
];

function InteractiveVideoPlayer({ videoId }: { videoId: string }) {
  const [player, setPlayer] = useState<any>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = React.useMemo(() => window.matchMedia('(hover: none)').matches, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleReady = (event: any) => {
    setPlayer(event.target);
    event.target.playVideo();
    event.target.mute();
  };

  const handleMouseEnter = () => { if (player) player.unMute(); };
  const handleMouseLeave = () => { if (player) player.mute(); };
  const handleClick = () => {
    if (isTouch || !player) return;
    if (player.isMuted()) player.unMute();
    else player.mute();
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {!isTouch && <div className="absolute inset-0 z-10 cursor-pointer"></div>}
      {isIntersecting && (
        <YouTube
          videoId={videoId}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: 1,
              mute: 1,
              loop: 1,
              playlist: videoId,
              controls: isTouch ? 1 : 0,
              modestbranding: 1,
              playsinline: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              disablekb: isTouch ? 0 : 1,
            },
          }}
          onReady={handleReady}
          className={`w-full h-full scale-[1.05] ${isTouch ? '' : 'pointer-events-none'}`}
          iframeClassName={`w-full h-full ${isTouch ? '' : 'pointer-events-none'}`}
        />
      )}
    </div>
  );
}

export default function Swiftrooms() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <CaseStudyShell>
      {/* ── Hero ── */}
      <Hero
        media={
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[45vh] md:min-h-[70vh] min-w-[80vh] md:min-w-[124.44vh] -translate-x-1/2 -translate-y-1/2 scale-[1.05] pointer-events-none"
            src="https://www.youtube.com/embed/V9vBGXX-GwA?autoplay=1&mute=1&loop=1&playlist=V9vBGXX-GwA&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
            title="Swiftrooms Hero Video"
            style={{ border: 0 }}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        }
        heightClassName="h-[45vh] md:h-[70vh]"
        titleClassName="text-[50px] md:text-[98px] leading-none tracking-[0.08em]"
        titleLines={['SWIFTROOMS']}
      />

      <MetaBar
        items={[
          { label: 'YEAR', value: '2026' },
          { label: 'LOCATION', value: 'BRIGHTON' },
          { label: 'ROLE', value: 'UX / UI' },
          { label: 'INDUSTRY', value: <span className="leading-snug">HOME IMPROVEMENTS &amp;<br />RENOVATIONS</span> },
        ]}
      />

      {/* ── Feature video ── */}
      <Section width="wide" pad="tight">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
          <InteractiveVideoPlayer videoId="wZznfhVYa5c" />
        </div>
      </Section>

      {/* ── 01 · Introduction ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          media={
            <div className="flex flex-col gap-6">
              <Figure src={imgImageLaptopMockup} alt="Laptop Mockup" onClick={() => openAt(0)} rounded="lg" imgClassName="w-full h-auto object-cover min-h-[300px] md:min-h-[500px]" />
              <div className="grid grid-cols-2 gap-6 w-full">
                <Figure src={imgImageMobileMockup} alt="Mobile Mockup" onClick={() => openAt(1)} rounded="lg" imgClassName="w-full h-auto object-cover min-h-[200px] md:min-h-[400px]" />
                <Figure src={imgImageDesktopMockup} alt="Desktop Mockup" onClick={() => openAt(2)} rounded="lg" imgClassName="w-full h-auto object-cover min-h-[200px] md:min-h-[400px]" />
              </div>
              <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA]">swiftroomslandingpagevisualrif.vercel.app</p>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="01 — Introduction" title="Overview" />
            <FadeIn>
              <div className={BODY}>
                <p>Design and deliver a high-converting landing page for <a href="https://swiftrooms.ae" target="_blank" rel="noreferrer" className="underline text-white hover:text-[#50C1BA] transition-colors">Swiftrooms.ae</a>, a Dubai-based home improvement and architectural glazing company. The project focused on improving the company's digital presence, supporting paid advertising campaigns, and increasing lead generation.</p>
                <p>The target audience primarily focused on B2C homeowners, while also allowing opportunities for B2B enquiries. The outcome was a professional, conversion-driven landing page that continues to support ongoing Google Ads campaigns and lead generation.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── 02 · Problem + Solution ── */}
      <Section pad="default" border="top">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="02 — The Problem" title="The Challenge" />
            <FadeIn>
              <div className={BODY}>
                <p>The project required stepping into an active workflow midway through development and taking ownership of the landing page's design direction and delivery. Key issues quickly became apparent within Syspree's design-to-development process, particularly around responsiveness, functionality, and overall execution.</p>
                <p>Despite months of development, the landing page remained incomplete, lacked mobile optimisation, and failed to provide a polished user experience suitable for paid advertising traffic — risking conversions, brand credibility, and lead generation performance.</p>
              </div>
            </FadeIn>
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="03 — The Response" title="The Solution" />
            <FadeIn>
              <div className={BODY}>
                <p>Following discussions with one of the directors, there was a request to explore how AI could support and improve the workflow. Combining traditional design methods with AI-assisted tools, I utilised <a href="https://www.figma.com/make" target="_blank" rel="noreferrer" className="underline text-white hover:text-[#50C1BA] transition-colors">Figma Make</a> to help resolve development inconsistencies and demonstrate a more accurate 1:1 translation from design to development.</p>
                <p>The AI prototype resulted in a fully functioning web page with usable code, providing a clear proof of concept for how the final project should be executed and delivered.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── 04 · Creative process — approach + videos (bespoke) ── */}
      <section className="w-full flex flex-col lg:flex-row relative bg-transparent">
        <div className="w-full lg:w-[40%] flex flex-col z-0">
          <div className="bg-white text-black py-24 px-6 md:px-12 lg:pl-12 xl:pl-24 relative min-h-[600px] flex items-center lg:rounded-br-[76px] z-10">
            <FadeIn className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[2.1] tracking-[0.05em] space-y-6 max-w-2xl lg:ml-auto pr-6">
              <p className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-[#50C1BA] not-italic">04 — Creative Process</p>
              <p>The Swiftrooms landing page was approached with a strong emphasis on strategic thinking, ensuring the digital experience reflected the brand's innovative and premium positioning. Using AI-driven workflows such as Figma Make, the project explored how intelligent design tools could accelerate ideation while maintaining a polished and intentional user experience.</p>
              <p>Drawing from research into modern home improvement websites and contemporary digital experiences, the creative direction focused on delivering a sleek, immersive, and visually engaging interface. Clean typography, structured layouts, and cinematic visual storytelling created a balance between functionality and atmosphere, while motion-led interactions added depth and engagement throughout.</p>
              <p>Using authentic photography captured by the Swiftrooms team, I transformed still imagery into storyboard-driven moving visuals that created an immersive brand journey — elevating Swiftrooms' digital presence while delivering a modern, commercially refined landing page.</p>
            </FadeIn>
          </div>

          <div className="bg-transparent py-24 px-6 md:px-12 lg:pl-12 xl:pl-24">
            <div className="max-w-2xl lg:ml-auto pr-6">
              <RevealText className="mb-8">
                <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] max-w-sm">Mid Journey Showreel</h2>
              </RevealText>
              <FadeIn>
                <div className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[2.1] tracking-[0.05em] text-gray-300 space-y-6">
                  <p>Since I used AI tools such as Figma Make to create a functioning landing page, I wanted to further explore the use of AI through Midjourney. My goal was to visually break down the Swiftrooms journey using a series of photographic stills. These stills were then developed into a precise storyboard, transforming each image into moving visuals that emulate the feel of videography and motion graphics.</p>
                  <p>The result was an immersive video experience that showcases the Swiftrooms journey to the user in a more engaging and dynamic way. All photographs used throughout the project are authentic images captured by the Swiftrooms team.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-16 px-6 md:px-12 py-12 lg:py-0 lg:pt-24 lg:pl-16 xl:pl-32 z-20">
          <div className="relative w-full max-w-[702px] mx-auto lg:ml-auto flex flex-col items-start lg:items-end">
            <div className="w-full text-left">
              <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA] mb-4">old landing page (syspee)</p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden drop-shadow-2xl bg-black pointer-events-none">
              <ResponsiveYouTubeEmbed videoId="bxJykP0pURI" title="Old landing page" />
            </div>
          </div>
          <div className="relative w-full max-w-[702px] mx-auto lg:ml-auto flex flex-col items-start lg:items-end">
            <div className="w-full text-left">
              <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA] mb-4">new landing page (visualrif)</p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black pointer-events-none">
              <ResponsiveYouTubeEmbed videoId="jRnbOu5_xlo" title="New landing page" />
            </div>
          </div>
          <div className="relative w-full max-w-[702px] mx-auto lg:ml-auto flex flex-col items-start lg:items-end">
            <div className="w-full text-left">
              <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA] mb-4">mobile responsive breakdown</p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black group">
              <InteractiveVideoPlayer videoId="N-pov1Csd7w" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Immersive — design element video ── */}
      <Section width="wide" pad="tight">
        <div className="relative w-full overflow-hidden rounded-[30px] md:rounded-[76px] min-h-[60vh] md:min-h-[1000px] bg-black">
          <div className="absolute inset-0 w-full h-full scale-[1.05] pointer-events-none">
            <ResponsiveYouTubeEmbed videoId="aP4L7jnKxYA" title="Design Element Video" />
          </div>
        </div>
      </Section>

      {/* ── Storyboard (bespoke white) ── */}
      <section className="w-full px-6 md:px-12 pb-24 pt-12 max-w-[1920px] mx-auto bg-white text-black text-center">
        <RevealText className="mb-4">
          <h3 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[45px] tracking-[0.25em] uppercase text-[#50C1BA]">Storyboard</h3>
        </RevealText>
        <FadeIn className="mb-12">
          <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-600 max-w-xl mx-auto">Authentic Swiftrooms photography sequenced frame-by-frame, then brought to life as motion.</p>
        </FadeIn>
        <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-2" data-cursor="view">
          {STORYBOARD.map((img, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden">
              <motion.img
                src={img}
                alt={`Storyboard Scene ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openAt(5 + idx)}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Further developments ── */}
      <Section width="wide" pad="default">
        <SectionHeader eyebrow="Further Developments" title="To Be Updated" className="mb-10 md:mb-12" />
        <div className="relative w-full aspect-video">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-black group">
            <InteractiveVideoPlayer videoId="jOXGGC4co8s" />
          </div>
        </div>
      </Section>

      {/* ── 05 · Execution — wireframes & content ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader eyebrow="05 — Execution" title="Wireframes & Content Request" className="mb-10 md:mb-14 max-w-2xl" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <Figure src={imgImage3} alt="Sitemap" onClick={() => openAt(3)} rounded="lg" frameClassName="bg-white p-4" imgClassName="w-full h-auto object-contain min-h-[300px] md:min-h-[500px]" caption="Sitemap — mapping the page structure" />
          <Figure src={importedImage3} alt="Wireframes and Content Request" onClick={() => openAt(4)} rounded="lg" imgClassName="w-full h-auto object-cover min-h-[300px] md:min-h-[500px]" caption="Wireframes & content request" />
        </div>
      </Section>

      {/* ── 06 · Reflection ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={<DeliverablesList columns={2} items={RESPONSIBILITIES} />}
        >
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow="Reflection" title="Responsibilities" />
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400">
                I led both the strategic and creative execution of the landing page — taking ownership of the design direction, improving the UX/UI, and aligning the build with the company's premium positioning and lead-generation goals, while exploring AI-assisted workflows to sharpen the design-to-development process.
              </p>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      <NextProject title="Diversion Audio" to="/projects/diversion-audio" />

      <GalleryLightbox
        images={SWIFTROOMS_GALLERY}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </CaseStudyShell>
  );
}
