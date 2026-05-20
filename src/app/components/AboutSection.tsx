import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from './OptimizedImage';

// Timeline data moved to component
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

// SVG paths for the ArifLogo
const ARIF_LOGO_PATHS = {
  outer: "M51.7704 12.6222H51.662L39.8442 0.70424L39.1395 0L38.2722 0.866757L28.677 10.4553L6.28834 32.7743L0 39.0583C1.46367 40.7918 3.19838 42.4169 4.82468 44.0421C4.98731 44.2046 5.14994 44.3671 5.31257 44.5297C11.4383 50.8136 17.6724 57.0435 23.9065 63.2191C26.8339 66.1444 29.7612 69.1239 32.6885 72.0492C34.7485 74.1619 36.7543 76.1663 38.7601 78.279H42.7174V54.5515H62.9376L64.0761 53.4139L73.2375 44.1504L78.279 39.1124L51.8246 12.6763L51.7704 12.6222ZM68.3586 41.496L60.4982 49.4593H38.0553L37.8385 49.676V69.9907L31.9838 64.14L17.835 50.0552L10.1372 42.3628L6.72202 39.0041L38.9769 6.82571L42.5005 10.2927L63.6966 31.4741L71.0149 38.7874L68.3044 41.5502L68.3586 41.496Z",
  inner: "M38.9767 22.9148L22.9848 38.8956L27.6469 43.6086L39.302 31.9616L42.663 35.4828L27.5384 50.4885L16.046 39.0581L38.9767 16.1432L61.7991 39.0581L58.5465 42.471L38.9767 22.9148Z"
};

// Diamond SVG path
const DIAMOND_PATH = "M13.009 0L26.0181 13.009L13.009 26.018L0 13.009L13.009 0Z";

// Reusable Components
const ArifLogo = React.memo(function ArifLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 78.2791 78.279" 
      aria-hidden="true"
    >
      <path d={ARIF_LOGO_PATHS.outer} fill="#50C1BA" />
      <path d={ARIF_LOGO_PATHS.inner} fill="#50C1BA" />
    </svg>
  );
});

const Diamond = React.memo(function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`w-3 h-3 ${className}`} 
      viewBox="0 0 26.0181 26.018" 
      fill="none" 
      aria-hidden="true"
    >
      <path d={DIAMOND_PATH} fill="#50C1BA" />
    </svg>
  );
});

// About Intro Section
function AboutIntro() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center flex flex-col items-center"
    >
      <h2 className="font-barlow-condensed text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] md:tracking-[0.25em] font-medium mb-8 md:mb-12 uppercase text-white max-w-3xl text-balance leading-relaxed">
        Hey, I&apos;m Arif — most people just call me Rif
      </h2>
      
      <div className="font-rajdhani font-semibold text-sm sm:text-base md:text-lg tracking-[0.15em] md:tracking-[0.2em] text-white/80 uppercase leading-relaxed text-center mb-12 max-w-2xl space-y-4">
        <p>
          I&apos;ve worked freelance and in agencies across digital, 3D, and branding.
        </p>
        <p>
          I started at Verb Brands in London, later expanding into game design within the GTA community, currently now based in Brighton.
        </p>
      </div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-4"
      >
        <ArifLogo className="w-16 h-16 md:w-20 md:h-20" />
      </motion.div>
    </motion.div>
  );
}

// Portrait Section with gradient background
interface PortraitSectionProps {
  imageSrc: string;
}

function PortraitSection({ imageSrc }: PortraitSectionProps) {
  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[927px] relative overflow-hidden">
      {/* Gradient background - black to white transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-white" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-full flex justify-center"
      >
        <OptimizedImage
          src={imageSrc}
          alt="Arif Tariq - Multidisciplinary Designer"
          priority={true}
          className="w-full max-w-[1920px] h-[120%] object-contain object-center absolute top-[-10%]"
          containerClassName="w-full h-full"
        />
      </motion.div>
    </div>
  );
}

// Marquee Section
function MarqueeSection() {
  return (
    <div 
      className="py-10 md:py-12 border-t border-b border-white/10 flex items-center overflow-hidden whitespace-nowrap"
      aria-hidden="true"
    >
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-6 md:gap-8 text-xl md:text-2xl tracking-[0.2em] font-medium text-white/30 uppercase will-change-transform"
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="font-barlow-condensed">MULTIDISCIPLINARY</span>
            <Diamond />
            <span className="font-barlow-condensed">DESIGNER</span>
            <Diamond />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

// Timeline Item Component
interface TimelineItemProps {
  item: typeof timelineData[0];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-[300px] sm:w-[340px] md:w-[400px] flex flex-col items-center shrink-0 group/item will-change-transform"
    >
      {/* Node Top (Logo overlaps the top horizontal line) */}
      <div className="h-14 flex items-center justify-center relative z-10 w-full mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
          <ArifLogo className="w-full h-full" />
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-col items-center text-center h-[420px] md:h-[450px] justify-start w-full px-4">
        {/* Year */}
        <h3 className="font-barlow-condensed text-2xl md:text-3xl font-semibold text-white tracking-[0.15em] leading-none mb-3 group-hover/item:text-[#50C1BA] transition-colors duration-300">
          {item.year}
        </h3>
        
        {/* Location */}
        <p className="font-inter text-[9px] md:text-[10px] text-white/40 tracking-[0.2em] uppercase mb-6 md:mb-8 leading-none">
          {item.location}
        </p>
        
        {/* Title */}
        <h4 className="font-rajdhani text-sm md:text-base text-white tracking-[0.15em] uppercase leading-tight mb-2 font-semibold">
          {item.title}
        </h4>
        
        {/* Subtitle */}
        <p className="font-rajdhani text-xs md:text-sm text-white/70 tracking-[0.1em] uppercase mb-6 md:mb-8 leading-relaxed max-w-[260px]">
          {item.subtitle}
        </p>
        
        {/* Focus Section */}
        <div className="flex-1 flex flex-col justify-end pb-4">
          <p className="font-barlow-condensed text-[10px] md:text-[11px] text-white/40 tracking-[0.2em] uppercase mb-3 leading-none">
            FOCUS
          </p>
          <ul className="font-rajdhani text-xs md:text-sm text-white/50 tracking-[0.1em] uppercase max-w-[250px] leading-relaxed space-y-1 group-hover/item:text-white/70 transition-colors duration-300">
            {item.focus.map((focusItem, i) => (
              <li key={i} className="flex items-center justify-center gap-2">
                <span className="w-1 h-1 bg-[#50C1BA] rounded-full opacity-60" />
                {focusItem}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom line tick */}
      <div className="relative w-full flex justify-center">
        <div className="absolute top-0 w-px h-8 md:h-12 bg-white/20 group-hover/item:bg-[#50C1BA] transition-all duration-300 origin-top" />
      </div>

      {/* Key Learning (below bottom line) */}
      <div className="flex flex-col items-center text-center mt-12 md:mt-16 opacity-60 group-hover/item:opacity-100 transition-opacity duration-300 pt-2 px-4 w-full">
        <p className="font-barlow-condensed text-[10px] md:text-[11px] text-white/40 tracking-[0.2em] uppercase mb-3 leading-none">
          KEY LEARNING
        </p>
        <p className="font-rajdhani text-[11px] md:text-xs text-white/50 tracking-[0.1em] uppercase max-w-[280px] leading-relaxed group-hover/item:text-white/70 transition-colors duration-300">
          {item.keyLearning}
        </p>
      </div>
    </motion.article>
  );
}

// Timeline Section
function TimelineSection() {
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
    <section 
      className="w-full flex flex-col relative pt-20 md:pt-32 group/timeline"
      aria-labelledby="timeline-title"
    >
      <h2 id="timeline-title" className="sr-only">Career Timeline</h2>
      
      <div 
        ref={timelineRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto scrollbar-hide pb-24 md:pb-32 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region"
        aria-label="Draggable timeline"
      >
        <div className={`min-w-full w-max flex justify-center relative px-[5vw] md:px-[10vw] min-h-[650px] md:min-h-[700px] ${isDragging ? 'pointer-events-none' : ''}`}>
          {/* Horizontal lines */}
          <div 
            className="absolute top-7 left-0 right-0 h-px bg-white/10 group-hover/timeline:bg-[#50C1BA]/30 transition-colors duration-700" 
            aria-hidden="true" 
          />
          <div 
            className="absolute top-[500px] md:top-[530px] left-0 right-0 h-px bg-white/10 group-hover/timeline:bg-[#50C1BA]/30 transition-colors duration-700" 
            aria-hidden="true" 
          />
          
          {timelineData.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main About Section Component
interface AboutSectionProps {
  portraitImageSrc: string;
  className?: string;
}

export function AboutSection({ portraitImageSrc, className = "" }: AboutSectionProps) {
  return (
    <div className={className}>
      {/* Intro Section */}
      <div className="relative z-10 w-full px-6 pt-24 md:pt-32 pb-16 md:pb-20 md:pl-[280px] md:pr-12 max-w-7xl mx-auto">
        <section id="about" aria-labelledby="about-title">
          <h1 id="about-title" className="sr-only">About Arif Tariq</h1>
          <AboutIntro />
        </section>
      </div>

      {/* Portrait Section - Full width */}
      <PortraitSection imageSrc={portraitImageSrc} />

      {/* Marquee and Timeline Container */}
      <div className="relative z-10 w-full px-6 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-x-hidden">
        <div className="h-12 md:h-24" aria-hidden="true" />
        <MarqueeSection />
      </div>

      {/* Timeline - Full width for dragging */}
      <TimelineSection />
    </div>
  );
}

// Export individual components for flexibility
export { AboutIntro, PortraitSection, MarqueeSection, TimelineSection, ArifLogo, Diamond };
