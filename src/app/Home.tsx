import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Instagram, Linkedin, Phone, X } from 'lucide-react';
import Lenis from 'lenis';
import { Link, useNavigate } from 'react-router';
import '../styles/fonts.css';

import imgRectangle38 from "figma:asset/b8c8dbffb5b4ba3cd7cb9b2c07d4487ef732895c.png";
import imgRectangle10 from "figma:asset/d5ac170d299f945386206acf5b59d5034d41882d.png";
import imgRectangle16 from "figma:asset/7318cbcbc665ca9297d05fb200d7af16fdef3bf0.png";
import imgRectangle15 from "../imports/image-1.png";
import imgRectangle17 from "figma:asset/8a22210a8aa201f9f77f445f757aafe16d8c0beb.png";
import imgRectangle14 from "../imports/image-2.png";
import imgRectangle18 from "figma:asset/78c1f2dac665555e9b580bf39c80dfc07b09595f.png";
import imgRectangle19 from "figma:asset/07fbe3dd7476f28eb4d5db9c9c73edf85ff9c04c.png";
import imgRectangle21 from "figma:asset/ca63ed581481fb71ce8ea5aa4a172c9308bf5287.png";
import imgRectangle22 from "figma:asset/61ed1cb628286e3a99aaaf636c61867b91992a4b.png";
import imgContent61 from "figma:asset/563d3cd2577a5f7a975edccd0c6dce8c0c66c880.png";
import imgScreenshot from "../imports/Screenshot_2026-05-13_at_21.51.35.png";

const timelineData = [
  {
    year: "2013",
    location: "THE WARREN SCHOOL — LONDON",
    title: "EARLY CREATIVE FOUNDATIONS",
    subtitle: "First exposure to understanding the career path of Graphic Design. Recognised by Art teacher for my interest in Adobe Suite as I began selling Youtube background in School. Particularly Inspirational Illustrators such as Shepard Fairey, Cris Vector. Contemporary artists like Banksy.",
    focus: "• Creative software fundamentals; Adobe Illustrator, MAC OS\n• Artist Inspirations & Research\n• Design experimentation",
    keyLearning: "Developed an early understanding of how design can shape identity, emotion, and communication."
  },
  {
    year: "2014",
    location: "WORK EXPERIENCE — LONDON",
    title: "INTRODUCTION TO PRINT & PRODUCTION",
    subtitle: "Gained first-hand exposure to professional print workflows and the realities of commercial design production.",
    focus: "• Print preparation\n• Production workflows\n• Industry processes",
    keyLearning: "Learned the importance of precision, organisation, and designing with real-world production constraints in mind."
  },
  {
    year: "2016",
    location: "EAST END PRINTERS — LONDON",
    title: "FIRST PROFESSIONAL DESIGN ROLE",
    subtitle: "Began working within a professional print environment, collaborating on client-facing projects and developing practical production knowledge.",
    focus: "• Print design\n• Client communication\n• Production-ready artwork",
    keyLearning: "Built confidence working with real clients, deadlines, revisions, and deliverables within a fast-paced production environment."
  },
  {
    year: "2019",
    location: "VERB BRANDS APPRENTICESHIP — LONDON",
    title: "BREAKING INTO INDUSTRY",
    subtitle: "Transitioned further into digital design, contributing to professional creative projects and gaining experience within a collaborative industry environment.",
    focus: "• Digital design\n• UX / UI\n• Professional collaboration",
    keyLearning: "Developed adaptability, creative discipline, and a stronger understanding of commercial design expectations."
  },
  {
    year: "2023",
    location: "FREELANCE & COMMUNITY-BASED DESIGN — SHREWSBURY",
    title: "INDEPENDENT BRAND BUILDING",
    subtitle: "Built a recognised creative presence within online communities through branding, digital assets, and visual identity work.",
    focus: "• Brand identity\n• Community-driven design\n• Digital asset creation\n• Creative direction",
    keyLearning: "Learned how strong visual identity and consistent branding can build engagement, trust, and community recognition."
  },
  {
    year: "2026",
    location: "BRIGHTON & HOVE",
    title: "INDEPENDENT DESIGN PRACTICE",
    subtitle: "Continuing to work independently with businesses and clients across branding, digital design, and creative problem-solving.",
    focus: "• Branding\n• UX/UI\n• Creative strategy\n• Client collaboration",
    keyLearning: "Focused on delivering thoughtful, scalable design solutions while continuing to refine creative and strategic thinking."
  }
];

const projects = {
  uxui: [
    { title: "MONCKS OF DOVER STREET", img: imgRectangle10, type: "full", hover: "View Project", link: "/projects/moncks-of-dover-street" },
    { title: "SWIFTROOMS", img: imgRectangle15, type: "half", hover: "View Project", link: "/projects/swiftrooms" },
    { title: "THE SUNIL GAVASKAR PROJECT", img: imgRectangle14, type: "half", hover: "Coming Soon" },
  ],
  branding: [
    { title: "DIVERSION AUDIO", img: imgRectangle16, type: "full", hover: "Coming Soon" },
    { title: "TREND", img: imgRectangle19, type: "tall", hover: "Coming Soon" },
    { title: "THE HAIRY BASTARD", img: imgRectangle17, type: "quarter", hover: "Coming Soon" },
    { title: "DILCHAD", img: imgRectangle18, type: "quarter", hover: "Coming Soon" },
  ],
  design3d: [
    { title: "JMA CUSTOMS", img: imgRectangle21, type: "full", hover: "View Video", videoId: "rhynMLdthSs" },
    { title: "T H E \u00A0 \u00A0 E P I P H A N I E S", img: imgRectangle22, type: "full", hover: "Coming Soon" },
  ]
};

import svgPaths from "../imports/Frame24/svg-acruz23zjw";
import svgPathsFrame27 from "../imports/Frame27/svg-sniomcvdel";

function VisualRifLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={`block ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 235.669 30.159">
      <path d={svgPaths.p13c84500} fill="#50C1BA" />
      <path d={svgPaths.p37476b00} fill="white" />
      <path d={svgPaths.pa013800} fill="white" />
      <path d={svgPaths.p630c200} fill="white" />
      <path d={svgPaths.p349de6f0} fill="white" />
      <path d={svgPaths.p39faef00} fill="white" />
      <path d={svgPaths.p141d9280} fill="white" />
      <path d={svgPaths.p4738e00} fill="white" />
      <path d={svgPaths.pffcfbf0} fill="white" />
      <path d={svgPaths.p2b767700} fill="white" />
    </svg>
  );
}

const Diamond = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3 h-3 ${className}`} viewBox="0 0 26.0181 26.018" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={svgPathsFrame27.p16002240} fill="#50C1BA" />
  </svg>
);

function ArifLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 78.2791 78.279">
      <path d={svgPaths.p2e710980} fill="#50C1BA" />
      <path d={svgPaths.p10597380} fill="#50C1BA" />
    </svg>
  );
}

function ScrollTriangle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 22.8536 19.7918">
      <path d={svgPaths.p1ef2d800} fill="currentColor" />
    </svg>
  );
}

function SocialInstagram({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 15.0795 15.0795">
      <path d={svgPaths.p386b1640} fill="currentColor" />
    </svg>
  );
}

function SocialLinkedin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 15.0795 15.0795">
      <path clipRule="evenodd" d={svgPaths.p1a85db80} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

function SocialPhone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 14.1371 14.1373">
      <path d={svgPaths.p35dc3720} fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 50]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.05]);
  
  const circleScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1.5]);

  const portraitRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: portraitProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"]
  });
  const smoothPortraitProgress = useSpring(portraitProgress, { damping: 20, stiffness: 100 });
  const portraitY = useTransform(smoothPortraitProgress, [0, 1], ["-5%", "5%"]);

  const [activeSection, setActiveSection] = React.useState('home');

  const timelineRef = React.useRef<HTMLDivElement>(null);
  const [isDraggingTimeline, setIsDraggingTimeline] = React.useState(false);
  const [timelineStartX, setTimelineStartX] = React.useState(0);
  const [timelineScrollLeft, setTimelineScrollLeft] = React.useState(0);

  const handleTimelineMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    setIsDraggingTimeline(true);
    setTimelineStartX(e.pageX - timelineRef.current.offsetLeft);
    setTimelineScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleTimelineMouseLeave = () => {
    setIsDraggingTimeline(false);
  };

  const handleTimelineMouseUp = () => {
    setIsDraggingTimeline(false);
  };

  const handleTimelineMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingTimeline || !timelineRef.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - timelineStartX) * 1.5; 
    timelineRef.current.scrollLeft = timelineScrollLeft - walk;
  };

  React.useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-transparent text-white min-h-screen font-['Barlow_Semi_Condensed',sans-serif] selection:bg-[#50C1BA] selection:text-black">
      {/* Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between">
        <div>
          <div className="mb-12 cursor-pointer" onClick={() => scrollTo('home')}>
            <VisualRifLogo className="w-[180px] h-[24px]" />
          </div>
          <div className="relative pl-6">
            <div className="absolute left-[3px] top-2 bottom-[-400px] w-[1px] bg-white opacity-20"></div>
            <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white"></div>
            <ul className="flex flex-col gap-8 text-[18px] tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap">
              <li className={`hover:text-white transition-colors cursor-pointer ${activeSection === 'home' ? 'text-white' : ''}`} onClick={() => scrollTo('home')}>HOME</li>
              <li className={`hover:text-white transition-colors cursor-pointer ${activeSection === 'about' ? 'text-white' : ''}`} onClick={() => scrollTo('about')}>ABOUT ME</li>
              <li className={`hover:text-white transition-colors cursor-pointer ${activeSection === 'projects' ? 'text-white' : ''}`} onClick={() => scrollTo('projects')}>ALL PROJECTS</li>
              <li className={`hover:text-white transition-colors cursor-pointer ${activeSection === 'contact' ? 'text-white' : ''}`} onClick={() => scrollTo('contact')}>CONTACT US</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 pl-4 relative">
          <div className="absolute left-[0.5px] bottom-1/2 translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white"></div>
          <a href="https://www.instagram.com/visualrif/" target="_blank" rel="noreferrer" className="text-white hover:text-[#50C1BA] transition-colors"><SocialInstagram className="w-[15px] h-[15px]" /></a>
          <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" className="text-white hover:text-[#50C1BA] transition-colors"><SocialLinkedin className="w-[15px] h-[15px]" /></a>
          <a href="tel:07598078923" className="text-white hover:text-[#50C1BA] transition-colors"><SocialPhone className="w-[14px] h-[14px]" /></a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/80 backdrop-blur-sm">
        <div className="cursor-pointer" onClick={() => scrollTo('home')}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
        <button className="text-[#50C1BA] font-['Rajdhani',sans-serif] font-medium text-sm tracking-widest uppercase" onClick={() => scrollTo('contact')}>CONTACT US</button>
      </nav>

      {/* Hero Background Video */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/JtNM6X84Z0s?autoplay=1&mute=1&loop=1&playlist=JtNM6X84Z0s&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media"
          style={{ border: 0 }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 w-full px-6 pt-24 md:pt-0 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-hidden">
        {/* Hero Section */}
        <section id="home" className="h-[calc(100vh-6rem)] md:h-screen flex flex-col items-center justify-between relative w-full pt-16 md:pt-32 pb-8 md:pb-12">
          {/* Centered Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full px-4 sm:px-4 mt-8 md:mt-0">
            <h1 className="text-[10vw] sm:text-[48px] md:text-[65.28px] leading-[1.1] md:leading-tight font-medium tracking-[0.4vw] sm:tracking-[2.5px] md:tracking-[5.22px] font-['Barlow_Semi_Condensed',sans-serif] uppercase text-white mb-6 md:mb-12 w-full flex flex-col items-center justify-center text-center">
              <span>Multidisciplinary</span>
              <span>Designer</span>
            </h1>
            <div className="font-['Rajdhani',sans-serif] font-semibold text-[3.5vw] sm:text-sm md:text-[21.66px] tracking-[0.5vw] sm:tracking-[2px] md:tracking-[5.41px] text-white uppercase leading-relaxed md:leading-normal text-center w-full px-2">
              <p className="mb-1 md:mb-0">experience specialising in end-to-end design solutions</p>
              <p>across UX/UI and 3D design</p>
            </div>
          </div>
          
          {/* Bottom Scroll Down */}
          <div className="flex justify-center w-full">
            <button onClick={() => scrollTo('about')} className="group flex flex-col items-center gap-6 cursor-pointer">
              <span className="font-['Rajdhani',sans-serif] font-semibold text-[16px] md:text-[21.66px] tracking-[5.41px] uppercase text-white transition-opacity hover:opacity-80">SCROLL DOWN</span>
              <div className="w-[26px] h-[26px] flex items-center justify-center rotate-180 group-hover:-translate-y-2 transition-transform duration-300">
                <ScrollTriangle className="w-[22.85px] h-[19.79px]" />
              </div>
            </button>
          </div>
        </section>

        <section id="about" className="text-center pt-24 md:pt-32 pb-16 flex flex-col items-center px-4 md:px-0">
            <h2 className="text-[6vw] sm:text-[24px] md:text-[31.87px] tracking-[0.5vw] sm:tracking-[4px] md:tracking-[7.96px] font-['Barlow',sans-serif] font-medium mb-8 md:mb-12 uppercase text-white w-full max-w-[800px] break-words">
              Hey, I’m Arif — most people just call me Rif
            </h2>
            <div className="font-['Rajdhani',sans-serif] font-semibold text-[3.5vw] sm:text-[16px] md:text-[19.79px] tracking-[0.5vw] sm:tracking-[3px] md:tracking-[4.94px] text-white uppercase leading-relaxed md:leading-normal text-center mb-16 w-full max-w-[646px]">
              <p className="mb-4 md:mb-0">I’ve worked freelance and in agencies across digital, 3D, and branding.</p>
              <p>I started at Verb Brands in London, later expanding into game design within the GTA community, CURRENTLY now based in Brighton.</p>
            </div>
            <div className="mt-8 mb-8 flex justify-center">
              <ArifLogo className="w-[78.22px] h-[78.22px] text-white" />
            </div>
        </section>
      </div>

      <div ref={portraitRef} className="w-full h-[60vh] md:h-[927px] relative overflow-hidden bg-[linear-gradient(to_bottom,black_50%,white_50%)] flex justify-center">
        <motion.img 
          style={{ y: portraitY, x: "7%" }}
          src={imgRectangle38} 
          alt="Arif"
          className="w-full max-w-[1920px] h-[120%] object-contain object-center absolute top-[-10%]"
        />
      </div>

      <div className="relative z-10 w-full px-6 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-hidden">
        <div className="h-16 md:h-24"></div>

        {/* Marquee */}
        <div className="py-12 border-t border-b border-gray-800 flex items-center overflow-hidden whitespace-nowrap mb-32">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex items-center gap-8 text-2xl tracking-widest font-medium text-gray-500 uppercase"
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
      </div>

      {/* Timeline */}
      <section className="mb-40 w-full flex flex-col relative pt-32 group/timeline bg-transparent">
        <div 
          ref={timelineRef}
          onMouseDown={handleTimelineMouseDown}
          onMouseLeave={handleTimelineMouseLeave}
          onMouseUp={handleTimelineMouseUp}
          onMouseMove={handleTimelineMouseMove}
          className={`w-full overflow-x-auto hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-32 ${isDraggingTimeline ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        >
          <div className={`w-max flex relative px-[10vw] min-h-[700px] ${isDraggingTimeline ? 'pointer-events-none' : ''}`}>
            {/* The top horizontal line */}
            <div className="absolute top-[28px] left-0 right-0 h-[1px] bg-[#2E3642] group-hover/timeline:bg-[#50C1BA]/50 transition-colors duration-700" />
            
            {/* The bottom horizontal line */}
            <div className="absolute top-[482px] left-0 right-0 h-[1px] bg-[#2E3642] group-hover/timeline:bg-[#50C1BA]/50 transition-colors duration-700" />
            
            {timelineData.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative w-[320px] md:w-[400px] flex flex-col items-center shrink-0 group/item"
              >
                {/* Node Top (Diamond overlaps the top horizontal line) */}
                <div className="h-[56px] flex items-center justify-center relative z-10 w-full mb-6">
                  <div className="w-10 h-10 md:w-[46px] md:h-[46px] flex items-center justify-center bg-black transition-transform duration-300 group-hover/item:scale-110">
                    <ArifLogo className="w-full h-full" />
                  </div>
                </div>

                {/* Body Content (between top and bottom lines) */}
                <div className="flex flex-col items-center text-center h-[420px] justify-start w-full px-4">
                  <h3 className="font-['Barlow_Semi_Condensed',sans-serif] text-[22px] md:text-[26px] font-semibold text-white tracking-[0.15em] leading-none mb-3 group-hover/item:text-[#50C1BA] transition-colors">{item.year}</h3>
                  <p className="font-['Inter',sans-serif] text-[9px] md:text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-8 leading-none">{item.location}</p>
                  
                  <p className="font-['Rajdhani',sans-serif] text-[13px] md:text-[15px] text-white tracking-[0.15em] uppercase leading-tight mb-2">{item.title}</p>
                  <p className="font-['Rajdhani',sans-serif] text-[10px] md:text-[12px] text-white tracking-[0.15em] uppercase mb-8 leading-tight max-w-[250px]">{item.subtitle}</p>
                  
                  <div className="flex-1 flex flex-col justify-end pb-4">
                    <p className="font-['Barlow_Semi_Condensed',sans-serif] text-[8px] md:text-[9px] text-gray-500 tracking-[0.2em] uppercase mb-3 leading-none">FOCUS</p>
                    <p className="font-['Rajdhani',sans-serif] text-[10px] md:text-[11px] text-gray-400 tracking-[0.15em] uppercase max-w-[250px] leading-snug whitespace-pre-wrap group-hover/item:text-gray-300 transition-colors">{item.focus}</p>
                  </div>
                </div>

                {/* Bottom line interaction / tick */}
                <div className="relative w-full flex justify-center">
                  <div className="absolute top-0 w-[1px] h-8 md:h-12 bg-[#2E3642] group-hover/item:bg-[#50C1BA] transition-all duration-300 origin-top" />
                </div>

                {/* Below Line */}
                <div className="flex flex-col items-center text-center mt-12 md:mt-16 opacity-70 group-hover/item:opacity-100 transition-opacity duration-300 pt-2 px-4 w-full">
                  <p className="font-['Barlow_Semi_Condensed',sans-serif] text-[8px] md:text-[9px] text-gray-500 tracking-[0.2em] uppercase mb-3 leading-none">KEY LEARNING</p>
                  <p className="font-['Rajdhani',sans-serif] text-[9px] md:text-[10px] text-gray-400 tracking-[0.15em] uppercase max-w-[280px] leading-relaxed group-hover/item:text-gray-300 transition-colors">{item.keyLearning}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 w-full px-6 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-hidden">
        {/* Projects */}
        <section id="projects" className="flex flex-col pb-10 md:pb-20 relative z-30">
          <ProjectCategory title="UX / UI, WEB DESIGN" projects={projects.uxui} className="mb-32 md:mb-48" theme="light" />
          <ProjectCategory title="BRANDING & MARKETING" projects={projects.branding} className="mb-32 md:mb-48" theme="dark" />
        </section>

        {/* Expanding Image Section */}
        <section className="flex justify-center items-center pb-32 md:pb-48 relative h-screen z-20">
          <motion.div 
            style={{ scale: circleScale }}
            className="w-[300px] h-[300px] md:w-[800px] md:h-[800px] rounded-full overflow-hidden border border-gray-800 relative z-20 shadow-2xl"
          >
            <img src={imgContent61} alt="Collage" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* 3D Design (Completely Separated) */}
        <section id="3d-design" className="flex flex-col pt-32 md:pt-48 pb-10 md:pb-20 relative z-30">
          <ProjectCategory title="3D DESIGN" projects={projects.design3d} className="mb-10 md:mb-20" theme="light" />
          
          {/* Screenshot below 3D Design */}
          <div className="w-full flex justify-center mb-10 md:mb-20">
            <img src={imgScreenshot} alt="3D Design Showcase" className="w-full max-w-5xl rounded-lg border border-gray-800 shadow-2xl" />
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer id="contact" className="bg-[#1c1c1e] py-16 px-6 md:px-12 md:pl-[280px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h3 className="text-xl font-medium tracking-widest text-[#50C1BA] mb-2 uppercase">VISUALRIF</h3>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-6 font-medium">Multidisciplinary Designer</p>
            
            <div className="flex flex-col gap-3 text-sm tracking-wider text-gray-300 font-['Barlow',sans-serif]">
              <a href="tel:07598078923" className="flex items-center gap-3 hover:text-[#50C1BA] transition-colors">
                <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center"><Phone size={14} className="text-[#50C1BA]" /></div>
                +44 7598 078923
              </a>
              <a href="mailto:hello@visualrif.com" className="flex items-center gap-3 hover:text-[#50C1BA] transition-colors">
                <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50C1BA]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                hello@visualrif.com
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#50C1BA]/10 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50C1BA]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
                Brighton & Hove
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/visualrif" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ariftariq/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-['Inter',sans-serif]">
          <p>© 2026 VISUALRIF. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCategory({ title, projects, className = "", theme = "dark" }: { title: string, projects: any[], className?: string, theme?: "dark" | "light" }) {
  const isBrandingLayout = projects.some(p => p.type === 'tall' || p.type === 'quarter');
  // Always use light text on our dark animated background
  const titleClass = theme === "light" ? "text-gray-300 opacity-40" : "text-gray-300 opacity-20";

  if (isBrandingLayout) {
    const full = projects.find(p => p.type === 'full');
    const tall = projects.find(p => p.type === 'tall');
    const quarters = projects.filter(p => p.type === 'quarter');
    
    return (
      <div className={className}>
        <h2 className={`text-3xl md:text-6xl font-medium font-['Barlow',sans-serif] tracking-[0.3em] mb-12 uppercase text-center ${titleClass}`}>{title}</h2>
        <div className="flex flex-col gap-4">
          <ProjectCard project={full} className="w-full h-[400px] md:h-[600px]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[600px]">
            <ProjectCard project={tall} className="h-[400px] md:h-full" />
            <div className="grid grid-rows-2 gap-4 h-[600px] md:h-full">
              {quarters.map((q, i) => (
                <ProjectCard key={i} project={q} className="h-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h2 className={`text-3xl md:text-6xl font-medium font-['Barlow',sans-serif] tracking-[0.3em] mb-12 uppercase text-center ${titleClass}`}>{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard 
            key={i} 
            project={p} 
            className={p.type === 'full' ? 'col-span-1 md:col-span-2 h-[400px] md:h-[600px]' : 'col-span-1 h-[400px]'}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project: p, className = "" }: { project: any, className?: string }) {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const navigate = useNavigate();

  if (!p) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`group relative overflow-hidden bg-gray-900 ${!isVideoOpen && (p.videoId || p.link) ? 'cursor-pointer' : ''} ${className}`}
      onClick={() => {
        if (p.link) {
          navigate(p.link);
        } else if (p.videoId && !isVideoOpen) {
          setIsVideoOpen(true);
        }
      }}
    >
      {!isVideoOpen ? (
        <>
          <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10">
            <h3 className="text-2xl tracking-widest font-medium mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center px-4">{p.title}</h3>
            <Diamond className="mb-4" />
            <button className="border border-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
              {p.hover}
            </button>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
            <h3 className="text-2xl tracking-widest font-medium mb-4 drop-shadow-lg text-center px-4">{p.title}</h3>
            <Diamond className="drop-shadow-lg" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 z-20 bg-black flex items-center justify-center pointer-events-none">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${p.videoId}?autoplay=1&mute=1&loop=1&playlist=${p.videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#50C1BA] transition-colors bg-black/50 p-2 rounded-full z-30"
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(false);
            }}
          >
            <X size={20} />
          </button>
        </div>
      )}
    </motion.div>
  );
}