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
  FeatureImage,
  ImageGrid,
  PullQuote,
  Callout,
  FactGrid,
  StatGrid,
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

import pfHero from '../imports/swiftrooms-platform/home-hero.jpg';
import pfNav from '../imports/swiftrooms-platform/nav-detail.jpg';
import pfTypeDisplay from '../imports/swiftrooms-platform/type-display.jpg';
import pfUiButtons from '../imports/swiftrooms-platform/ui-buttons.jpg';
import pfMegaMenu from '../imports/swiftrooms-platform/nav-megamenu.jpg';
import pfProblem from '../imports/swiftrooms-platform/home-problem.jpg';
import pfSolutions from '../imports/swiftrooms-platform/home-solutions.jpg';
import pfTransform from '../imports/swiftrooms-platform/home-transform.jpg';
import pfCatalogue from '../imports/swiftrooms-platform/catalogue.jpg';
import pfCategory from '../imports/swiftrooms-platform/category-sliding-doors.jpg';
import pfProductDetail from '../imports/swiftrooms-platform/product-detail.jpg';
import pfProductCards from '../imports/swiftrooms-platform/detail-product-cards.jpg';
import pfSelector from '../imports/swiftrooms-platform/guided-selector.jpg';
import pfBrands from '../imports/swiftrooms-platform/brands.jpg';
import pfCatalogueBrands from '../imports/swiftrooms-platform/catalogue-brands.jpg';
import pfPortfolio from '../imports/swiftrooms-platform/portfolio.jpg';
import pfPortfolioDetail from '../imports/swiftrooms-platform/portfolio-detail.jpg';
import pfTechnical from '../imports/swiftrooms-platform/technical.jpg';
import pfTechnicalResources from '../imports/swiftrooms-platform/technical-resources.jpg';
import pfTechnicalProcess from '../imports/swiftrooms-platform/technical-process.jpg';
import pfShowroom from '../imports/swiftrooms-platform/showroom.jpg';
import pfEnquire from '../imports/swiftrooms-platform/enquire.jpg';
import pfContact from '../imports/swiftrooms-platform/contact.jpg';
import pfReviews from '../imports/swiftrooms-platform/reviews.jpg';
import pfConversion from '../imports/swiftrooms-platform/detail-conversion.jpg';
import pfTabletHome from '../imports/swiftrooms-platform/tablet-home.jpg';
import pfTabletCatalogue from '../imports/swiftrooms-platform/tablet-catalogue.jpg';
import pfTabletPortfolio from '../imports/swiftrooms-platform/tablet-portfolio.jpg';
import pfMobileHome from '../imports/swiftrooms-platform/mobile-home.jpg';
import pfMobileCatalogue from '../imports/swiftrooms-platform/mobile-catalogue.jpg';
import pfMobileCategory from '../imports/swiftrooms-platform/mobile-category.jpg';
import pfMobilePortfolio from '../imports/swiftrooms-platform/mobile-portfolio.jpg';
import pfMobileShowroom from '../imports/swiftrooms-platform/mobile-showroom.jpg';
import pfMobileEnquire from '../imports/swiftrooms-platform/mobile-enquire.jpg';
import pfMobileTechnical from '../imports/swiftrooms-platform/mobile-technical.jpg';

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

  { src: pfHero, alt: 'Swiftrooms platform homepage' },
  { src: pfMegaMenu, alt: 'Product range mega menu' },
  { src: pfNav, alt: 'Navigation bar detail' },
  { src: pfTypeDisplay, alt: 'Display typography specimen' },
  { src: pfUiButtons, alt: 'Primary and secondary buttons' },
  { src: pfProblem, alt: 'Homepage — the problem' },
  { src: pfSolutions, alt: 'Homepage — the solutions' },
  { src: pfTransform, alt: 'Homepage — transform unused space' },
  { src: pfCatalogue, alt: 'Product catalogue' },
  { src: pfProductCards, alt: 'Product category cards' },
  { src: pfCategory, alt: 'Aluminium sliding doors category' },
  { src: pfProductDetail, alt: 'Product system detail' },
  { src: pfSelector, alt: 'Guided product selector' },
  { src: pfBrands, alt: 'Manufacturer brands' },
  { src: pfCatalogueBrands, alt: 'Shop by brand' },
  { src: pfPortfolio, alt: 'Project portfolio' },
  { src: pfPortfolioDetail, alt: 'Project case study' },
  { src: pfTechnical, alt: 'Technical hub' },
  { src: pfTechnicalResources, alt: 'Technical resources' },
  { src: pfTechnicalProcess, alt: 'Installation process' },
  { src: pfShowroom, alt: 'Showroom page' },
  { src: pfConversion, alt: 'In-journey conversion actions' },
  { src: pfEnquire, alt: 'Enquiry journey' },
  { src: pfContact, alt: 'Contact page' },
  { src: pfReviews, alt: 'Customer reviews' },
  { src: pfTabletHome, alt: 'Homepage — tablet' },
  { src: pfTabletCatalogue, alt: 'Catalogue — tablet' },
  { src: pfTabletPortfolio, alt: 'Portfolio — tablet' },
  { src: pfMobileHome, alt: 'Homepage — mobile' },
  { src: pfMobileCatalogue, alt: 'Catalogue — mobile' },
  { src: pfMobileCategory, alt: 'Category — mobile' },
  { src: pfMobilePortfolio, alt: 'Portfolio — mobile' },
  { src: pfMobileShowroom, alt: 'Showroom — mobile' },
  { src: pfMobileEnquire, alt: 'Enquiry — mobile' },
  { src: pfMobileTechnical, alt: 'Technical — mobile' },
];

const STORYBOARD = [
  imgScene12, imgScene1A3, imgScene2A3, imgScene3A2, imgScene32,
  imgScene24, imgScene42, imgScene4A2, imgScene4B2, imgScene13,
  imgScene1B2, imgScene1A4, imgScene25, imgScene25, imgScene2A4,
  imgScene8A2, imgScene8B2, imgScene92, imgScene9A2, img202503191215262,
];

const BODY = "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4";
const CAPTION = "font-['Rajdhani',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gray-500";

const LABEL = "font-['Rajdhani',sans-serif] font-semibold text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-[#50C1BA]";
const BODY_MUTED = "font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.65] tracking-[0.04em] text-gray-400 space-y-4";

const PLATFORM_NEEDS = [
  'Present a large product catalogue clearly',
  'Communicate technical performance without overwhelming users',
  'Showcase completed UAE projects',
  'Strengthen the premium positioning of the brand',
  'Improve mobile usability',
  'Generate higher-quality enquiries',
  'Support showroom visits',
  'Create clearer paths from inspiration to specification',
  'Give the internal team greater control over content',
  'Establish a scalable foundation for future products and manufacturers',
];

const INTENTIONS = [
  { key: 'Discover', note: 'Understand Swiftrooms, explore projects and discover what\u2019s possible.' },
  { key: 'Explore', note: 'Browse systems, manufacturers, technical information and completed installations.' },
  { key: 'Enquire', note: 'Request a quotation, speak to the team or arrange a showroom visit.' },
];

const ECOSYSTEM = ['Products', 'Manufacturers', 'Projects', 'Technical Information', 'Resources', 'Showroom', 'Enquiries'];

const CATEGORIES = [
  'Aluminium Sliding Doors', 'Aluminium Bi-Folding Doors', 'Aluminium Windows', 'Aluminium Doors',
  'uPVC Windows & Doors', 'Curtain Wall Systems', 'Garden Rooms', 'Insect Screens',
  'Skylights & Rooflights', 'Aluminium Glass Doors',
];

const CASE_STRUCTURE = ['Project', 'Location', 'Property Type', 'System', 'Challenge', 'Solution', 'Result'];

const TECHNICAL_LAYER = [
  'Product specifications', 'Performance information', 'Technical guides', 'Glazing information',
  'Acoustic guidance', 'Sustainability resources', 'Downloads', 'Architectural resources',
];

const INFLUENCES = [
  'Architectural publishing', 'Premium property', 'European product design',
  'Technical specification', 'Contemporary editorial design',
];

const UI_PATTERNS = [
  'Product cards', 'Product categories', 'Manufacturer pages', 'Project cards',
  'Case studies', 'Galleries', 'Technical specifications', 'Calls to action',
  'Forms', 'Navigation', 'Mobile interactions',
];

const MOBILE_FOCUS = [
  'Content hierarchy', 'Touch targets', 'Image proportions', 'Horizontal product exploration',
  'Vertical scrolling', 'Sticky conversion actions', 'Form usability', 'Navigation depth', 'Performance',
];

const CMS_SCOPE = [
  'New products', 'New manufacturers', 'New projects', 'Technical resources',
  'Testimonials', 'Team members', 'Articles', 'Galleries',
];

const PLATFORM_PALETTE = [
  { hex: '#1C1C1E', name: 'Ink', role: 'Type & structure' },
  { hex: '#007969', name: 'Deep Teal', role: 'Primary action' },
  { hex: '#4DD9C0', name: 'Accent', role: 'Labels & highlights' },
  { hex: '#6B7280', name: 'Slate', role: 'Supporting copy' },
  { hex: '#F8F9FA', name: 'Mist', role: 'Alternating bands' },
  { hex: '#FFFFFF', name: 'White', role: 'Base surface' },
];

const PROJECT_SERVICES = [
  'Digital Strategy', 'Information Architecture',
  'UX Design', 'UI Design',
  'Responsive Web Design', 'Creative Direction',
  'Web Development', 'CMS Architecture',
  'Content Architecture', 'Conversion Rate Optimisation',
  'Interaction Design', 'Technical SEO',
  'Performance Optimisation', 'Digital Asset Creation',
  'AI-Assisted Design Workflows', 'Motion Graphics & Storyboarding',
  'Lead Generation Optimisation', 'Design-to-Development Translation',
];

function ChapterDivider({ index, title, blurb, meta }: { index: string; title: React.ReactNode; blurb: string; meta: string }) {
  return (
    <section className="w-full border-t border-gray-800 py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="flex items-center gap-5">
            <span className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[15vw] md:text-[9vw] leading-[0.8] tracking-[-0.01em] text-[#50C1BA]/20 select-none">
              {index}
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#50C1BA]/40 to-transparent" />
            <span className="hidden md:block font-['Rajdhani',sans-serif] font-semibold text-[12px] tracking-[0.4em] uppercase text-gray-500 text-right shrink-0">
              {meta}
            </span>
          </div>
          <span className="md:hidden font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.3em] uppercase text-gray-500 leading-relaxed">
            {meta}
          </span>
        </div>
        <RevealText>
          <h2 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[34px] md:text-[70px] leading-[1.02] tracking-[0.04em] uppercase text-white">
            {title}
          </h2>
        </RevealText>
        <FadeIn>
          <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[19px] leading-[1.65] tracking-[0.04em] text-gray-400 max-w-2xl">
            {blurb}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function BrowserFrame({ src, alt, onClick, url = 'swiftrooms.ae', className = '' }: {
  src: string; alt: string; onClick?: () => void; url?: string; className?: string;
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

function PhoneFrame({ src, alt, onClick, caption, className = '' }: {
  src: string; alt: string; onClick?: () => void; caption?: React.ReactNode; className?: string;
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
  const open = (src: string) => openAt(Math.max(0, SWIFTROOMS_GALLERY.findIndex(g => g.src === src)));

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
        size="md"
        items={[
          { label: 'YEAR', value: '2026' },
          { label: 'LOCATION', value: <span className="leading-snug">DUBAI<br />&amp; UAE</span> },
          { label: 'ROLE', value: <span className="leading-snug">UX / UI<br />&amp; BUILD</span> },
          { label: 'INDUSTRY', value: <span className="leading-snug">ARCHITECTURAL<br />GLAZING</span> },
          { label: 'SCOPE', value: <span className="leading-snug">LANDING PAGE<br />&rarr; PLATFORM</span> },
        ]}
      />

      {/* ── Feature video ── */}
      <Section width="wide" pad="tight">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
          <InteractiveVideoPlayer videoId="wZznfhVYa5c" />
        </div>
      </Section>

      <ChapterDivider
        index="01"
        meta="2026 · Conversion & Campaign"
        title={<>The Landing<br />Page</>}
        blurb="The first engagement: stepping into an active build midway through, taking ownership of the design direction, and delivering a conversion-focused landing page to support paid campaigns."
      />

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

      <ChapterDivider
        index="02"
        meta="Digital Transformation · swiftrooms.ae"
        title={<>The<br />Platform</>}
        blurb="The second engagement: rebuilding Swiftrooms' entire digital presence as a scalable platform for architectural glazing — catalogue, manufacturers, portfolio, technical layer, showroom and conversion in one system."
      />

      {/* ── Platform · Overview ── */}
      <Section pad="default">
        <EditorialSplit
          ratio="5/7"
          align="center"
          media={<BrowserFrame src={pfHero} alt="Swiftrooms platform homepage" onClick={() => open(pfHero)} />}
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="Overview" title="A Platform, Not a Brochure" />
            <FadeIn>
              <div className={BODY}>
                <p>Swiftrooms is a UAE specialist in premium aluminium windows, doors and architectural glazing systems, working across residential and commercial projects. Established in Dubai in 2011, the company supplies systems from manufacturers including Cortizo, Vetromax and Gulf Extrusions.</p>
                <p>The project transformed its digital presence into a premium, scalable platform capable of communicating both the architectural quality of the work and the technical complexity behind the product range.</p>
              </div>
            </FadeIn>
            <Callout label="Positioning">
              A digital structure capable of translating a technically complex physical product into an experience people could understand, explore and act upon.
            </Callout>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · The Challenge ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          reverse
          media={<DeliverablesList columns={2} items={PLATFORM_NEEDS} />}
        >
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="The Challenge"
              title="Simple for Some, Deep for Others"
              lead="Swiftrooms had developed an extensive offering spanning architectural glazing, windows, sliding systems, doors, façades and specialist products."
            />
            <FadeIn>
              <div className={BODY_MUTED}>
                <p>The challenge was to organise that offering into an experience that stayed simple for homeowners while providing enough technical depth for architects, developers and commercial clients.</p>
              </div>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · Strategy ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="The Strategy"
          title="Three Intentions"
          lead="The project moved beyond a traditional brochure website. The experience was structured around what a visitor actually arrives wanting to do."
          size="lg"
          className="mb-14 md:mb-20 max-w-3xl"
        />

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[30px] h-[1px] bg-gradient-to-r from-transparent via-[#50C1BA]/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {INTENTIONS.map((step, i) => (
              <motion.div
                key={step.key}
                className="relative flex md:flex-col items-start gap-5 md:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="shrink-0 w-[60px] h-[60px] rounded-full border border-[#50C1BA]/45 bg-[#020404] flex items-center justify-center md:mb-8">
                  <span className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[18px] tracking-[0.08em] text-[#50C1BA]">{`0${i + 1}`}</span>
                </div>
                <div className="md:pr-8">
                  <p className="font-['Barlow',sans-serif] font-medium text-[16px] md:text-[20px] tracking-[0.24em] uppercase text-white leading-snug">{step.key}</p>
                  <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.6] tracking-[0.03em] text-gray-500 mt-3">{step.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20">
          <Figure src={pfProblem} alt="Homepage — the problem" onClick={() => open(pfProblem)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="Discover — the problem framed" />
          <Figure src={pfSolutions} alt="Homepage — the solutions" onClick={() => open(pfSolutions)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="Explore — the systems offered" />
          <Figure src={pfTransform} alt="Homepage — transform unused space" onClick={() => open(pfTransform)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="Enquire — the invitation to act" />
        </div>
      </Section>

      {/* ── Platform · Information Architecture ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Information Architecture"
          title="Interconnected, Not Isolated"
          lead="A new content architecture was developed to accommodate the expanding Swiftrooms ecosystem. Rather than treating these areas as separate silos, they are wired to each other."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5 md:gap-x-5 mb-14 md:mb-20">
            {ECOSYSTEM.map((node, i) => (
              <React.Fragment key={node}>
                <span className="border border-gray-800 hover:border-[#50C1BA]/40 transition-colors rounded-full px-5 md:px-7 py-2.5 md:py-3 font-['Barlow',sans-serif] font-medium text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-white whitespace-nowrap">
                  {node}
                </span>
                {i < ECOSYSTEM.length - 1 && <span className="text-[#50C1BA]/50 text-[14px]">&bull;</span>}
              </React.Fragment>
            ))}
          </div>
        </FadeIn>

        <FeatureImage
          src={pfMegaMenu}
          alt="Product range mega menu"
          onClick={() => open(pfMegaMenu)}
          rounded="2xl"
          caption="The product range, revealed in one move — the architecture made visible"
        />

        <Callout label="The Principle" className="mt-10 md:mt-14 max-w-3xl">
          A visitor viewing a product can discover relevant manufacturers, technical information and completed projects before progressing naturally towards an enquiry.
        </Callout>
      </Section>

      {/* ── Platform · Product Experience ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Product Experience"
          title="Ten Categories, One System"
          lead="One of the largest areas of the project was restructuring the product catalogue — balancing architectural storytelling against practical product information."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <BrowserFrame src={pfCatalogue} alt="Product catalogue" onClick={() => open(pfCatalogue)} url="swiftrooms.ae/catalogue" />

        <EditorialSplit
          ratio="4/8"
          className="mt-14 md:mt-20"
          media={
            <Figure src={pfProductCards} alt="Product category cards" onClick={() => open(pfProductCards)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="One card pattern, ten categories, product counts surfaced" />
          }
        >
          <div className="flex flex-col gap-5">
            <p className={LABEL}>The Range</p>
            <DeliverablesList columns={1} items={CATEGORIES} />
          </div>
        </EditorialSplit>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-14 md:mt-20">
          <Figure src={pfCategory} alt="Aluminium sliding doors category" onClick={() => open(pfCategory)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="Category — browse visually" />
          <Figure src={pfProductDetail} alt="Product system detail" onClick={() => open(pfProductDetail)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="System — specify technically" />
        </div>
      </Section>

      {/* ── Platform · Guided Discovery ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          align="center"
          media={<Figure src={pfSelector} alt="Guided product selector" onClick={() => open(pfSelector)} rounded="2xl" imgClassName="w-full h-auto object-cover" />}
        >
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="Guided Discovery" title="Not Everyone Knows the Terminology" />
            <FadeIn>
              <div className={BODY}>
                <p>Not every customer arrives knowing which glazing system they need. A guided selector was therefore built into the catalogue.</p>
                <p>Rather than requiring users to understand technical product terminology immediately, the journey begins with straightforward questions about their property and requirements — then progressively guides them towards suitable systems.</p>
              </div>
            </FadeIn>
            <Callout label="Five Steps">
              Property type first, technical language last. Complexity is deferred until the user has enough context to meet it.
            </Callout>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · Manufacturer Ecosystem ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Manufacturer Ecosystem"
          title="Specialist & System"
          lead="Swiftrooms works with multiple international and regional manufacturers. The platform had to make that relationship legible without fragmenting the customer journey."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-20">
          <motion.div
            className="border border-gray-800 rounded-[6px] p-8 md:p-10 hover:border-[#50C1BA]/30 transition-colors"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p className={LABEL}>The Specialist</p>
            <h3 className="font-['Barlow',sans-serif] font-medium text-[19px] md:text-[24px] tracking-[0.2em] uppercase text-white mt-3 mb-4">Swiftrooms</h3>
            <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.6] text-gray-400">Specification, supply and installation across the UAE.</p>
          </motion.div>
          <motion.div
            className="border border-gray-800 rounded-[6px] p-8 md:p-10 hover:border-[#50C1BA]/30 transition-colors"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p className={LABEL}>The Engineers</p>
            <h3 className="font-['Barlow',sans-serif] font-medium text-[19px] md:text-[24px] tracking-[0.2em] uppercase text-white mt-3 mb-4">Manufacturers</h3>
            <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.6] text-gray-400">Cortizo, Vetromax and Gulf Extrusions — the companies engineering the underlying systems.</p>
          </motion.div>
        </div>

        <ImageGrid
          cols={2}
          rounded="2xl"
          items={[
            { src: pfBrands, alt: 'Manufacturer brands', onClick: () => open(pfBrands), caption: 'Manufacturer index' },
            { src: pfCatalogueBrands, alt: 'Shop by brand', onClick: () => open(pfCatalogueBrands), caption: 'Shop by brand — inside the journey' },
          ]}
        />
      </Section>

      {/* ── Platform · Portfolio & Storytelling ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Portfolio"
          title="Case Studies, Not a Gallery"
          lead="Completed projects became central to the experience. Rather than a conventional image gallery, projects were structured as architectural case studies across Dubai, Abu Dhabi, Sharjah and Ras Al Khaimah."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <FeatureImage src={pfPortfolio} alt="Project portfolio" onClick={() => open(pfPortfolio)} rounded="3xl" caption="Explore by location and project type" />

        <EditorialSplit
          ratio="5/7"
          className="mt-14 md:mt-20"
          media={<Figure src={pfPortfolioDetail} alt="Project case study" onClick={() => open(pfPortfolioDetail)} rounded="2xl" imgClassName="w-full h-auto object-cover" />}
        >
          <div className="flex flex-col gap-6">
            <p className={LABEL}>Case Study Structure</p>
            <div className="flex flex-col gap-0">
              {CASE_STRUCTURE.map((row, i) => (
                <motion.div
                  key={row}
                  className="flex items-center gap-4 py-3.5 border-b border-gray-800/60"
                  initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.3em] text-[#50C1BA]/60 w-6 shrink-0">{`0${i + 1}`}</span>
                  <span className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[14px] tracking-[0.24em] uppercase text-white">{row}</span>
                </motion.div>
              ))}
            </div>
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.65] tracking-[0.04em] text-gray-400">
                The objective was to show not simply what Swiftrooms installs, but why particular systems were selected for particular architectural conditions.
              </p>
            </FadeIn>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · Technical Layer ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="5/7"
          reverse
          media={
            <div className="flex flex-col gap-6">
              <Figure src={pfTechnical} alt="Technical hub" onClick={() => open(pfTechnical)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
              <div className="grid grid-cols-2 gap-6">
                <Figure src={pfTechnicalResources} alt="Technical resources" onClick={() => open(pfTechnicalResources)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
                <Figure src={pfTechnicalProcess} alt="Installation process" onClick={() => open(pfTechnicalProcess)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
              </div>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Technical Content"
              title="A Second Level"
              lead="A dedicated technical layer was incorporated for architects, consultants and customers conducting detailed product research."
            />
            <DeliverablesList columns={1} items={TECHNICAL_LAYER} />
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · Visual Direction & UI System ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Visual Direction"
          title="Architecture First"
          lead="Large-format photography, restrained typography and structured editorial layouts let the glazing systems and completed properties become the primary visual elements — deliberately avoiding the look of a conventional construction-company website."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className={LABEL}>Typography</p>
            <Figure
              src={pfTypeDisplay}
              alt="Display typography specimen"
              onClick={() => open(pfTypeDisplay)}
              rounded="lg"
              frameClassName="bg-[#101418] p-6 md:p-10 flex items-center"
              imgClassName="w-full h-auto object-contain"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border-l-2 border-[#50C1BA]/25 pl-5">
                <p className="font-['Barlow',sans-serif] font-medium text-[12px] tracking-[0.3em] uppercase text-white mb-1.5">Exo</p>
                <p className="font-['Lato',sans-serif] font-light text-[14px] leading-[1.6] text-gray-400">Display and headings at 600–800. Engineered, squared, closer to product marking than to publishing.</p>
              </div>
              <div className="border-l-2 border-[#50C1BA]/25 pl-5">
                <p className="font-['Barlow',sans-serif] font-medium text-[12px] tracking-[0.3em] uppercase text-white mb-1.5">Rajdhani</p>
                <p className="font-['Lato',sans-serif] font-light text-[14px] leading-[1.6] text-gray-400">Eyebrows, labels and wide-tracked UI text. Technical without being cold.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className={LABEL}>Colour Palette</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-5 md:gap-6">
              {PLATFORM_PALETTE.map((c, i) => <Swatch key={c.hex} {...c} i={i} />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mt-10 md:mt-14">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className={LABEL}>Navigation</p>
            <Figure src={pfNav} alt="Navigation bar detail" onClick={() => open(pfNav)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Eight destinations and one persistent action" />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className={LABEL}>Buttons &amp; Actions</p>
            <Figure src={pfUiButtons} alt="Primary and secondary buttons" onClick={() => open(pfUiButtons)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Solid teal primary, outlined secondary" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mt-14 md:mt-20">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className={LABEL}>Drawn From</p>
            <FactGrid items={INFLUENCES.map(v => ({ label: v, value: '' }))} />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className={LABEL}>Reusable UI Patterns</p>
            <DeliverablesList columns={2} items={UI_PATTERNS} />
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.65] tracking-[0.04em] text-gray-400 mt-2">
                Consistency across a large and growing website, while allowing individual pages to retain their own visual character.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Platform · Mobile ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Mobile Experience"
          title="Not a Reduced Desktop"
          lead="Navigation, carousels, imagery, product discovery, forms and calls to action were reconsidered around touch — the objective being to make a technically complex catalogue feel straightforward on a small screen."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          <PhoneFrame src={pfMobileHome} alt="Homepage — mobile" onClick={() => open(pfMobileHome)} caption="Home" />
          <PhoneFrame src={pfMobileCatalogue} alt="Catalogue — mobile" onClick={() => open(pfMobileCatalogue)} caption="Catalogue" />
          <PhoneFrame src={pfMobileCategory} alt="Category — mobile" onClick={() => open(pfMobileCategory)} caption="Category" />
          <PhoneFrame src={pfMobilePortfolio} alt="Portfolio — mobile" onClick={() => open(pfMobilePortfolio)} caption="Portfolio" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mt-14 md:mt-20 items-center">
          <div className="lg:col-span-5">
            <p className={`${LABEL} mb-5`}>Particular Attention</p>
            <DeliverablesList columns={1} items={MOBILE_FOCUS} />
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-5 md:gap-8">
            <PhoneFrame src={pfMobileTechnical} alt="Technical — mobile" onClick={() => open(pfMobileTechnical)} caption="Technical" />
            <PhoneFrame src={pfMobileShowroom} alt="Showroom — mobile" onClick={() => open(pfMobileShowroom)} caption="Showroom" />
            <PhoneFrame src={pfMobileEnquire} alt="Enquiry — mobile" onClick={() => open(pfMobileEnquire)} caption="Enquire" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end mt-14 md:mt-20">
          <div className="lg:col-span-4">
            <Figure src={pfTabletHome} alt="Homepage — tablet" onClick={() => open(pfTabletHome)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Tablet — home" />
          </div>
          <div className="lg:col-span-4">
            <Figure src={pfTabletCatalogue} alt="Catalogue — tablet" onClick={() => open(pfTabletCatalogue)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Tablet — catalogue" />
          </div>
          <div className="lg:col-span-4">
            <Figure src={pfTabletPortfolio} alt="Portfolio — tablet" onClick={() => open(pfTabletPortfolio)} rounded="lg" imgClassName="w-full h-auto object-cover" caption="Tablet — portfolio" />
          </div>
        </div>
      </Section>

      {/* ── Platform · Conversion & Showroom ── */}
      <Section width="wide" pad="default" border="top">
        <SectionHeader
          eyebrow="Conversion & Showroom"
          title="Enquire Where Intent Is Strongest"
          lead="Rather than limiting enquiries to the contact page, relevant conversion opportunities are positioned throughout the browsing journey."
          size="lg"
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <StatGrid
          columns={3}
          className="mb-14 md:mb-20"
          items={[
            { value: '01', label: 'Get a Quote' },
            { value: '02', label: 'Book a Showroom Visit' },
            { value: '03', label: 'WhatsApp / Speak to the Team' },
          ]}
        />

        <FeatureImage src={pfConversion} alt="In-journey conversion actions" onClick={() => open(pfConversion)} rounded="2xl" caption="Conversion placed inside the browsing journey, not at the end of it" />

        <EditorialSplit
          ratio="5/7"
          align="center"
          className="mt-14 md:mt-20"
          media={
            <div className="flex flex-col gap-6">
              <Figure src={pfShowroom} alt="Showroom page" onClick={() => open(pfShowroom)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
              <div className="grid grid-cols-2 gap-6">
                <Figure src={pfEnquire} alt="Enquiry journey" onClick={() => open(pfEnquire)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
                <Figure src={pfContact} alt="Contact page" onClick={() => open(pfContact)} rounded="2xl" imgClassName="w-full h-auto object-cover" />
              </div>
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <p className={LABEL}>Digital to Physical</p>
            <h3 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[26px] tracking-[0.2em] uppercase text-white leading-[1.2]">
              The Jebel Ali Showroom
            </h3>
            <div className={BODY_MUTED}>
              <p>Swiftrooms operates a physical showroom where customers can experience full-scale glazing systems. The platform connects digital product discovery to that room.</p>
              <p>Visitors explore systems online, then are encouraged to visit — where working installations, hardware, finishes and glazing specifications can be experienced in person.</p>
            </div>
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · Built to Scale ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="6/6"
          media={
            <div className="flex flex-col gap-6">
              <p className={LABEL}>Search &amp; Content Structure</p>
              <FactGrid
                items={[
                  { label: 'Category Language', value: 'Product categories combine useful customer information with the terminology people actually search for in the UAE.' },
                  { label: 'Editorial Depth', value: 'Technical and educational content creates depth beyond purely commercial product pages.' },
                  { label: 'Internal Relationships', value: 'Stronger links between products, manufacturers, projects and supporting technical information.' },
                ]}
              />
              <Figure src={pfReviews} alt="Customer reviews" onClick={() => open(pfReviews)} rounded="2xl" imgClassName="w-full h-auto object-cover" caption="Reviews — social proof as a content type" />
            </div>
          }
        >
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="CMS & Scalability"
              title="Built to Grow"
              lead="The platform was structured around a reusable content system rather than hard-coded individual pages, so the website can evolve alongside the business without a redesign every time the catalogue expands."
            />
            <DeliverablesList columns={2} items={CMS_SCOPE} />
          </div>
        </EditorialSplit>
      </Section>

      {/* ── Platform · The Result ── */}
      <Section width="wide" pad="loose" border="top">
        <SectionHeader eyebrow="The Result" title="One Coherent System" align="center" size="lg" className="mb-12 md:mb-20" />

        <FeatureImage src={pfHero} alt="Swiftrooms platform homepage" onClick={() => open(pfHero)} rounded="3xl" />

        <ImageGrid
          cols={2}
          className="mt-6 md:mt-8"
          rounded="2xl"
          items={[
            { src: pfPortfolio, alt: 'Project portfolio', onClick: () => open(pfPortfolio) },
            { src: pfCatalogue, alt: 'Product catalogue', onClick: () => open(pfCatalogue) },
          ]}
        />

        <FadeIn className="mt-14 md:mt-20 max-w-3xl mx-auto text-center">
          <p className="font-['Lato',sans-serif] font-light text-[17px] md:text-[20px] leading-[1.7] tracking-[0.04em] text-gray-300">
            The platform works for a homeowner discovering glazing options for the first time, while still providing the depth expected by architects, developers and technically informed clients.
          </p>
        </FadeIn>

        <PullQuote variant="panel" attribution="Designing Beyond the Interface" className="mt-16 md:mt-28">
          The challenge wasn&rsquo;t simply making Swiftrooms look more premium. It was creating a digital structure capable of translating a technically complex physical product into an experience people could understand, explore and act upon.
        </PullQuote>

        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://swiftrooms.ae"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-white/25 hover:border-[#50C1BA] hover:text-[#50C1BA] transition-colors px-8 md:px-10 py-4 font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-white"
          >
            Visit swiftrooms.ae
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Section>

      {/* ── 06 · Reflection ── */}
      <Section pad="default" border="top">
        <EditorialSplit
          ratio="4/8"
          media={<DeliverablesList columns={2} items={PROJECT_SERVICES} />}
        >
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow="Reflection" title="Project Services" />
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.6] tracking-[0.05em] text-gray-400">
                Across both engagements I led the strategic and creative execution — first taking ownership of the landing page's design direction, then rebuilding the wider digital presence as a scalable platform spanning information architecture, product experience, technical content, conversion and CMS structure.
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
