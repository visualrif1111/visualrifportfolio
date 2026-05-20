import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from './OptimizedImage';

// SVG path data for icons
const ARIF_LOGO_PATHS = {
  outer: "M51.7704 12.6222H51.662L39.8442 0.70424L39.1395 0L38.2722 0.866757L28.677 10.4553L6.28834 32.7743L0 39.0583C1.46367 40.7918 3.19838 42.4169 4.82468 44.0421C4.98731 44.2046 5.14994 44.3671 5.31257 44.5297C11.4383 50.8136 17.6724 57.0435 23.9065 63.2191C26.8339 66.1444 29.7612 69.1239 32.6885 72.0492C34.7485 74.1619 36.7543 76.1663 38.7601 78.279H42.7174V54.5515H62.9376L64.0761 53.4139L73.2375 44.1504L78.279 39.1124L51.8246 12.6763L51.7704 12.6222ZM68.3586 41.496L60.4982 49.4593H38.0553L37.8385 49.676V69.9907L31.9838 64.14L17.835 50.0552L10.1372 42.3628L6.72202 39.0041L38.9769 6.82571L42.5005 10.2927L63.6966 31.4741L71.0149 38.7874L68.3044 41.5502L68.3586 41.496Z",
  inner: "M38.9767 22.9148L22.9848 38.8956L27.6469 43.6086L39.302 31.9616L42.663 35.4828L27.5384 50.4885L16.046 39.0581L38.9767 16.1432L61.7991 39.0581L58.5465 42.471L38.9767 22.9148Z"
};

const DIAMOND_PATH = "M13.009 0L26.018 13.009L13.009 26.018L0 13.009L13.009 0Z";

// Timeline data
const timelineData = [
  {
    year: "2016",
    location: "EAST END PRINTERS — LONDON",
    title: "FIRST PROFESSIONAL DESIGN ROLE",
    subtitle: "Began working within a professional print environment, collaborating on client-facing projects and developing practical production knowledge.",
    focus: ["Print design", "Client communication", "Production-ready artwork"],
    keyLearning: "Built confidence working with real clients, deadlines, revisions, and deliverables within a fast-paced production environment."
  },
  {
    year: "2019",
    location: "VERB BRANDS APPRENTICESHIP — LONDON",
    title: "BREAKING INTO INDUSTRY",
    subtitle: "Transitioned further into digital design, contributing to professional creative projects and gaining experience within a collaborative industry environment.",
    focus: ["Digital design", "UX / UI", "Professional collaboration"],
    keyLearning: "Developed adaptability, creative discipline, and a stronger understanding of commercial design expectations."
  },
  {
    year: "2023",
    location: "FREELANCE & COMMUNITY-BASED DESIGN — SHREWSBURY",
    title: "INDEPENDENT BRAND BUILDING",
    subtitle: "Built a recognised creative presence within online communities through branding, digital assets, and visual identity work.",
    focus: ["Brand identity", "Community-driven design", "Digital asset creation", "Creative direction"],
    keyLearning: "Learned how strong visual identity and consistent branding can build engagement, trust, and community recognition."
  },
  {
    year: "2026",
    location: "BRIGHTON & HOVE",
    title: "INDEPENDENT DESIGN PRACTICE",
    subtitle: "Continuing to work independently with businesses and clients across branding, digital design, and creative problem-solving.",
    focus: ["Branding", "UX/UI", "Creative strategy", "Client collaboration"],
    keyLearning: "Focused on delivering thoughtful, scalable design solutions while continuing to refine creative and strategic thinking."
  }
];

// Reusable SVG Components
export const ArifLogo = React.memo(function ArifLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 78.2791 78.279" aria-hidden="true">
      <path d={ARIF_LOGO_PATHS.outer} fill="#50C1BA" />
      <path d={ARIF_LOGO_PATHS.inner} fill="#50C1BA" />
    </svg>
  );
});

export const Diamond = React.memo(function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-3 h-3 ${className}`} viewBox="0 0 26.0181 26.018" fill="none" aria-hidden="true">
      <path d={DIAMOND_PATH} fill="#50C1BA" />
    </svg>
  );
});

// Sub-components
const AboutIntro = React.memo(function AboutIntro() {
  return (
    <section id="about" className="text-center pt-24 md:pt-32 pb-16 flex flex-col items-center px-4 md:px-0">
      <h2 className="text-[6vw] sm:text-[24px] md:text-[31.87px] tracking-[0.5vw] sm:tracking-[4px] md:tracking-[7.96px] font-['Barlow',sans-serif] font-medium mb-8 md:mb-12 uppercase text-white w-full max-w-[800px] break-words">
        Hey, I&apos;m Arif — most people just call me Rif
      </h2>
      <div className="font-['Rajdhani',sans-serif] font-semibold text-[3.5vw] sm:text-[16px] md:text-[19.79px] tracking-[0.5vw] sm:tracking-[3px] md:tracking-[4.94px] text-white uppercase leading-relaxed md:leading-normal text-center mb-16 w-full max-w-[646px]">
        <p className="mb-4 md:mb-0">I&apos;ve worked freelance and in agencies across digital, 3D, and branding.</p>
        <p>I started at Verb Brands in London, later expanding into game design within the GTA community, CURRENTLY now based in Brighton.</p>
      </div>
      <div className="mt-8 mb-8 flex justify-center">
        <ArifLogo className="w-[78.22px] h-[78.22px] text-white" />
      </div>
    </section>
  );
});

interface PortraitSectionProps {
  imageSrc: string;
}

const PortraitSection = React.memo(function PortraitSection({ imageSrc }: PortraitSectionProps) {
  return (
    <div className="w-full -mt-1 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <motion.div 
          className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden"
          initial={{ y: 0 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div
            className="absolute inset-0 w-full h-[120%]"
            initial={{ y: 0 }}
            whileInView={{ y: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ willChange: "transform" }}
          >
            <OptimizedImage
              src={imageSrc}
              alt="Arif portrait"
              priority={true}
              placeholderColor="transparent"
              className="w-full h-full object-contain object-center"
              containerClassName="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

const MarqueeSection = React.memo(function MarqueeSection() {
  return (
    <div className="py-12 border-t border-b border-gray-800 flex items-center overflow-hidden whitespace-nowrap mb-32">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-8 text-2xl tracking-widest font-medium text-gray-500 uppercase will-change-transform"
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span>MULTIDISCIPLINARY</span>
            <Diamond />
            <span>DESIGNER</span>
            <Diamond />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
});

interface TimelineItemProps {
  item: typeof timelineData[0];
  index: number;
}

const TimelineItem = React.memo(function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-[320px] md:w-[400px] flex flex-col items-center shrink-0 group/item will-change-transform"
    >
      {/* Node Top */}
      <div className="h-[56px] flex items-center justify-center relative z-10 w-full mb-6">
        <div className="w-10 h-10 md:w-[46px] md:h-[46px] flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
          <ArifLogo className="w-full h-full" />
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-col items-center text-center h-[450px] justify-start w-full px-4">
        <h3 className="font-['Barlow_Semi_Condensed',sans-serif] text-[22px] md:text-[26px] font-semibold text-white tracking-[0.15em] leading-none mb-3 group-hover/item:text-[#50C1BA] transition-colors">
          {item.year}
        </h3>
        <p className="font-['Inter',sans-serif] text-[9px] md:text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-8 leading-none">
          {item.location}
        </p>
        
        <p className="font-['Rajdhani',sans-serif] text-[13px] md:text-[15px] text-white tracking-[0.15em] uppercase leading-tight mb-2">
          {item.title}
        </p>
        <p className="font-['Rajdhani',sans-serif] text-[10px] md:text-[12px] text-white tracking-[0.15em] uppercase mb-8 leading-tight max-w-[250px]">
          {item.subtitle}
        </p>
        
        <div className="flex-1 flex flex-col justify-end pb-4">
          <p className="font-['Barlow_Semi_Condensed',sans-serif] text-[10px] md:text-[11px] text-gray-500 tracking-[0.2em] uppercase mb-3 leading-none">
            FOCUS
          </p>
          <p className="font-['Rajdhani',sans-serif] text-[12px] md:text-[13px] text-gray-400 tracking-[0.15em] uppercase max-w-[250px] leading-snug whitespace-pre-wrap group-hover/item:text-gray-300 transition-colors">
            {item.focus.map((f, i) => `• ${f}`).join('\n')}
          </p>
        </div>
      </div>

      {/* Bottom line tick */}
      <div className="relative w-full flex justify-center">
        <div className="absolute top-0 w-[1px] h-8 md:h-12 bg-[#2E3642] group-hover/item:bg-[#50C1BA] transition-all duration-300 origin-top" />
      </div>

      {/* Key Learning */}
      <div className="flex flex-col items-center text-center mt-12 md:mt-24 opacity-70 group-hover/item:opacity-100 transition-opacity duration-300 pt-2 px-4 w-full">
        <p className="font-['Barlow_Semi_Condensed',sans-serif] text-[10px] md:text-[11px] text-gray-500 tracking-[0.2em] uppercase mb-3 leading-none">
          KEY LEARNING
        </p>
        <p className="font-['Rajdhani',sans-serif] text-[11px] md:text-[12px] text-gray-400 tracking-[0.15em] uppercase max-w-[280px] leading-relaxed group-hover/item:text-gray-300 transition-colors">
          {item.keyLearning}
        </p>
      </div>
    </motion.div>
  );
});

const TimelineSection = React.memo(function TimelineSection() {
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="mb-40 w-full flex flex-col relative pt-32 group/timeline bg-transparent" aria-label="Career Timeline">
      <div 
        ref={timelineRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-32 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        <div className={`min-w-full w-max flex justify-center relative px-[5vw] md:px-[10vw] min-h-[700px] ${isDragging ? 'pointer-events-none' : ''}`}>
          {/* Horizontal lines */}
          <div className="absolute top-[28px] left-0 right-0 h-[1px] bg-[#2E3642] group-hover/timeline:bg-[#50C1BA]/50 transition-colors duration-700" />
          <div className="absolute top-[530px] left-0 right-0 h-[1px] bg-[#2E3642] group-hover/timeline:bg-[#50C1BA]/50 transition-colors duration-700" />
          
          {timelineData.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

// Main AboutSection Component
interface AboutSectionProps {
  portraitImageSrc: string;
}

export function AboutSection({ portraitImageSrc }: AboutSectionProps) {
  return (
    <>
      <div className="relative z-10 w-full px-6 pt-24 md:pt-0 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-x-hidden">
        <AboutIntro />
      </div>

      <PortraitSection imageSrc={portraitImageSrc} />

      <div className="relative z-10 w-full px-6 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-x-hidden">
        <div className="h-16 md:h-24" />
        <MarqueeSection />
      </div>

      <TimelineSection />
    </>
  );
}
