import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Phone, ArrowLeft } from 'lucide-react';
import Lenis from 'lenis';
import { useNavigate } from 'react-router';
import YouTube from 'react-youtube';
import '../styles/fonts.css';

import svgPaths from "../imports/Frame24/svg-acruz23zjw";

import imgRectangle43 from "../imports/Visualrif-1/a645a819abc40e638a7992e97fea53af676407ec.png";
import imgRectangle44 from "../imports/Visualrif-1/c9b2e3a432bca3cba9190717df00cde00ecf4202.png";
import imgRectangle45 from "../imports/Visualrif-1/931a3a5709ef6b5589579e9c993b87f8f719ba2b.png";
import imgRectangle42 from "../imports/Visualrif-1/329bc9e9c97c6b2052a68dd3618cdc88c9e79166.png";
import imgScreenshot20260513At1815031 from "../imports/Visualrif-1/e24734850d4a8a6b1718612d4e17bfa7c0ccbe3e.png";
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
import img202503191215452 from "../imports/Visualrif-1/ee65806ac353dff4c1ea7b5dc2955f481a2218a6.png";
import imgImage3 from "../imports/Visualrif-1/32b71aec4774900729dbc80c4acd99f7a5314c6a.png";
import imgScreenshot20260513At1823491 from "../imports/Visualrif-1/caca11b23f57ea9f4602a75373f6caacc7d1ac00.png";
import imgImageLaptopMockup from "../imports/Visualrif-1/4e3ab4c3d653794d535a17543585de77fd8a6835.png";
import imgImageMobileMockup from "../imports/Visualrif-1/2abb1b520770ba4aafb04a4995fc2119afda74d7.png";
import importedImage3 from "../imports/image-3.png";
import imgImageDesktopMockup from "../imports/Visualrif-1/aca2bf96a01d37bd2387add99b2478911f4430b4.png";
import imgImageDesignElement from "../imports/Visualrif-1/8d6b9f37409293f48dd5a87217cc54b21bc9c277.png";


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

function InteractiveVideoPlayer({ videoId }: { videoId: string }) {
  const [player, setPlayer] = useState<any>(null);

  const handleReady = (event: any) => {
    setPlayer(event.target);
    event.target.playVideo();
    event.target.mute();
  };

  const handleMouseEnter = () => {
    if (player) {
      player.unMute();
    }
  };

  const handleMouseLeave = () => {
    if (player) {
      player.mute();
    }
  };

  const handleClick = () => {
    if (player) {
      if (player.isMuted()) {
        player.unMute();
      } else {
        player.mute();
      }
    }
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="absolute inset-0 z-10 cursor-pointer"></div>
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
            controls: 0,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0
          },
        }}
        onReady={handleReady}
        className="w-full h-full scale-[1.05] pointer-events-none"
        iframeClassName="w-full h-full"
      />
    </div>
  );
}

export default function Swiftrooms() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen font-['Barlow_Semi_Condensed',sans-serif] selection:bg-[#50C1BA] selection:text-black">
      {/* Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between">
        <div>
          <div className="mb-12 cursor-pointer" onClick={() => navigate('/')}>
            <VisualRifLogo className="w-[180px] h-[24px]" />
          </div>
          <div className="relative pl-6">
            <div className="absolute left-[3px] top-2 bottom-[-400px] w-[1px] bg-white opacity-20"></div>
            <div className="absolute left-[0.5px] top-2 w-[6px] h-[6px] rounded-full bg-white"></div>
            <ul className="flex flex-col gap-8 text-[18px] tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => navigate('/')}>
                <span className="flex items-center gap-2">
                  <ArrowLeft size={16} /> BACK TO HOME
                </span>
              </li>
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
        <button className="text-white hover:text-[#50C1BA] transition-colors" onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <VisualRifLogo className="w-[140px] h-[18px]" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 w-full md:pl-[280px]">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-auto md:aspect-video overflow-hidden bg-black">
          <div className="absolute inset-0 w-full h-full scale-[1.05] pointer-events-none">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/V9vBGXX-GwA?autoplay=1&mute=1&loop=1&playlist=V9vBGXX-GwA&controls=0&modestbranding=1" 
              title="Swiftrooms Hero Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 mt-16 md:mt-0 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[50px] md:text-[98px] leading-none font-['Barlow_Semi_Condensed',sans-serif] font-medium tracking-[0.08em] uppercase text-white mb-8 drop-shadow-lg"
            >
              SWIFTROOMS
            </motion.h1>
          </div>
        </section>

        {/* Project Meta Info */}
        <section className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-24 uppercase font-['Barlow',sans-serif] font-medium tracking-[0.25em] text-sm md:text-[26px]">
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">YEAR</p>
              <p>2026</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">LOCATION</p>
              <p>BRIGHTON</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">ROLE</p>
              <p>UX / UI</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 text-xs md:text-sm tracking-[0.25em]">INDUSTRY</p>
              <p className="leading-snug">HOME IMPROVEMENTS &<br/>RENOVATIONS</p>
            </div>
          </div>
        </section>

        {/* Introduction / Overview, Challenge, Solution */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12 md:gap-16">
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Overview</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>Design and deliver a high-converting landing page for <a href="https://swiftrooms.ae" target="_blank" rel="noreferrer" className="underline text-white hover:text-[#50C1BA] transition-colors">Swiftrooms.ae</a>, a Dubai-based home improvement and architectural glazing company. The project focused on improving the company’s digital presence, supporting paid advertising campaigns, and increasing lead generation.</p>
                <p>The target audience primarily focused on B2C homeowners, while also allowing opportunities for B2B enquiries. The outcome was a professional, conversion-driven landing page that continues to support ongoing Google Ads campaigns and lead generation.</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">Challenge</h2>
                <div className="w-8 h-8 rotate-45 border border-[#50C1BA] flex items-center justify-center mt-2 flex-shrink-0">
                  <div className="w-3 h-3 bg-[#50C1BA]"></div>
                </div>
              </div>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>The project required stepping into an active workflow midway through development and taking ownership of the landing page’s design direction and delivery. Key issues quickly became apparent within Syspree design-to-development process, particularly around responsiveness, functionality, and overall execution. An additional challenge was ensuring the final developed build accurately matched the approved design, maintaining a consistent 1:1 translation from design to development.</p>
                <p>Despite months of development, the landing page remained incomplete, lacked mobile optimisation, and failed to provide a polished user experience suitable for paid advertising traffic. These issues risked reducing conversions, weakening brand credibility, and affecting lead generation performance.</p>
                <p>The challenge was to resolve these usability and delivery issues while aligning the landing page with business goals and audience expectations.</p>
              </div>
            </div>
            <div>
              <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] mb-6">Solution</h2>
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16.8px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-4">
                <p>Following discussions with one of the directors, there was a request to explore how AI could support and improve the workflow.</p>
                <p>Combining traditional design methods with AI-assisted tools, I utilised <a href="https://www.figma.com/make" target="_blank" rel="noreferrer" className="underline text-white hover:text-[#50C1BA] transition-colors">Figma Make</a> to help resolve development inconsistencies and demonstrate a more accurate 1:1 translation from design to development.</p>
                <p>The AI prototype resulted in a fully functioning web page with usable code, providing a clear proof of concept for how the final project should be executed and delivered.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="w-full relative">
              <img src={imgImageLaptopMockup} alt="Laptop Mockup" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="relative">
                <img src={imgImageMobileMockup} alt="Mobile Mockup" className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="relative">
                <img src={imgImageDesktopMockup} alt="Desktop Mockup" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </div>
            <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA] mt-4 text-center lg:text-left">
              swiftroomslandingpagevisualrif.vercel.app
            </p>
          </div>
        </section>

        {/* Project Approach Text & 3 Images */}
        <section className="w-full flex flex-col lg:flex-row relative bg-black">
          
          {/* Left Column */}
          <div className="w-full lg:w-[40%] flex flex-col z-0">
            {/* White Box */}
            <div className="bg-white text-black py-24 px-6 md:px-12 lg:pl-12 xl:pl-24 relative min-h-[600px] flex items-center lg:rounded-br-[76px] z-10">
              <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[17px] leading-[2.1] tracking-[0.05em] space-y-6 max-w-2xl lg:ml-auto pr-6">
                <p>The Swiftrooms landing page was approached with a strong emphasis on strategic thinking, ensuring the digital experience reflected the brand’s innovative and premium positioning. Using AI-driven workflows such as Figma Make, the project explored how intelligent design tools could accelerate ideation while maintaining a polished and intentional user experience.</p>
                <p>Drawing from research into modern home improvement websites and contemporary digital experiences, the creative direction focused on delivering a sleek, immersive, and visually engaging interface. Clean typography, structured layouts, and cinematic visual storytelling created a balance between functionality and atmosphere, while motion-led interactions added depth and engagement throughout the experience.</p>
                <p>A key aspect of the project involved experimenting with AI through Midjourney and motion graphics.</p>
                <p>Using authentic photography captured by the Swiftrooms team, I transformed still imagery into storyboard-driven moving visuals that created an immersive brand journey. The final outcome elevated Swiftrooms’ digital presence while delivering a modern and commercially refined landing page experience.</p>
              </div>
            </div>

            {/* Mid Journey Showreel Text */}
            <div className="bg-black py-24 px-6 md:px-12 lg:pl-12 xl:pl-24">
              <div className="max-w-2xl lg:ml-auto pr-6">
                <div className="flex justify-between items-start mb-8 gap-4">
                  <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] max-w-sm">Mid Journey Showreel</h2>
                  <div className="w-8 h-8 rotate-45 border border-[#50C1BA] flex items-center justify-center mt-2 flex-shrink-0">
                    <div className="w-3 h-3 bg-[#50C1BA]"></div>
                  </div>
                </div>
                <div className="font-['Lato',sans-serif] font-light text-[15px] md:text-[17px] leading-[2.1] tracking-[0.05em] text-gray-300 space-y-6">
                  <p>Since I used AI tools such as Figma Make to create a functioning landing page, I wanted to further explore the use of AI through Midjourney. My goal was to visually break down the Swiftrooms journey using a series of photographic stills. These stills were then developed into a precise storyboard, transforming each image into moving visuals that emulate the feel of videography and motion graphics.</p>
                  <p>The result was an immersive video experience that showcases the Swiftrooms journey to the user in a more engaging and dynamic way. All photographs used throughout the project are authentic images captured by the Swiftrooms team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 3 Videos */}
          <div className="w-full lg:w-[60%] flex flex-col gap-16 px-6 md:px-12 py-12 lg:py-0 lg:pt-24 lg:pl-16 xl:pl-32 z-20">
            <div className="relative w-full max-w-[702px] mx-auto lg:ml-auto flex flex-col items-start lg:items-end">
              <div className="w-full text-left">
                <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA] mb-4">old landing page (syspee)</p>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden drop-shadow-2xl bg-black">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/bxJykP0pURI?autoplay=1&mute=1&loop=1&playlist=bxJykP0pURI" 
                  title="Old landing page" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="relative w-full max-w-[702px] mx-auto lg:ml-auto flex flex-col items-start lg:items-end">
              <div className="w-full text-left">
                <p className="font-['Barlow',sans-serif] font-medium text-[12px] md:text-[16px] tracking-[0.25em] uppercase text-[#50C1BA] mb-4">new landing page (visualrif)</p>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/jRnbOu5_xlo?autoplay=1&mute=1&loop=1&playlist=jRnbOu5_xlo" 
                  title="New landing page" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
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

        {/* Design Element */}
        <section className="w-full px-6 md:px-12 py-16 max-w-[1920px] mx-auto">
          <div className="relative w-full overflow-hidden rounded-[30px] md:rounded-[76px] h-[60vh] md:h-[1000px] bg-black">
            <div className="absolute inset-0 w-full h-full scale-[1.05] pointer-events-none">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/aP4L7jnKxYA?autoplay=1&mute=1&loop=1&playlist=aP4L7jnKxYA&controls=0&modestbranding=1" 
                title="Design Element Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Storyboard Section */}
        <section className="w-full px-6 md:px-12 pb-24 pt-12 max-w-[1920px] mx-auto bg-white text-black text-center">
             <h3 className="font-['Barlow',sans-serif] font-medium text-[20px] md:text-[45px] tracking-[0.25em] uppercase text-[#50C1BA] mb-12">Storyboard</h3>
             <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-2">
               {[
                 imgScene12, imgScene1A3, imgScene2A3, imgScene3A2, imgScene32, 
                 imgScene24, imgScene42, imgScene4A2, imgScene4B2, imgScene13,
                 imgScene1B2, imgScene1A4, imgScene25, imgScene25, imgScene2A4,
                 imgScene8A2, imgScene8B2, imgScene92, imgScene9A2, img202503191215262
               ].map((img, idx) => (
                 <div key={idx} className="relative aspect-square">
                   <img src={img} alt={`Storyboard Scene ${idx}`} className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
        </section>

        {/* Further Developments */}
        <section className="w-full py-16 bg-black flex flex-col items-center">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-start mb-12">
               <div className="text-left">
                 <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA]">Further Developments</h2>
                 <p className="font-['Barlow',sans-serif] font-medium text-[16px] md:text-[20px] tracking-[0.25em] uppercase text-[#50C1BA] mt-2">To be updated</p>
               </div>
               <div className="w-8 h-8 rotate-45 border border-[#50C1BA] flex items-center justify-center mt-2 flex-shrink-0">
                  <div className="w-3 h-3 bg-[#50C1BA]"></div>
               </div>
            </div>
            <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-12 aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black group">
                <InteractiveVideoPlayer videoId="jOXGGC4co8s" />
              </div>
            </div>
        </section>

        {/* Wireframes & Content Request */}
        <section className="w-full py-24 bg-black flex flex-col items-start border-t border-gray-800">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 mb-12">
               <h2 className="font-['Barlow',sans-serif] font-medium text-[24px] md:text-[33px] tracking-[0.25em] uppercase text-[#50C1BA] max-w-2xl">SWIFTROOMS Wireframes & Content Request</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1920px] mx-auto px-6 md:px-12 w-full">
              <div className="relative w-full">
                <img src={imgImage3} alt="Sitemap" className="w-full h-auto object-contain bg-white rounded-lg p-4" />
              </div>
              <div className="relative w-full">
                <img src={importedImage3} alt="Wireframes and Content Request" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </div>
        </section>

        {/* Responsibilities */}
        <section className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-['Lato',sans-serif] font-light text-[24px] md:text-[31px] tracking-[0.05em] text-white mb-6">Responsibilities</h2>
            </div>
            <div className="lg:col-span-8 font-['Lato',sans-serif] font-light text-[16px] md:text-[22px] leading-[1.6] tracking-[0.05em] text-gray-300 space-y-8">
              <p>Throughout the project, I was responsible for leading both the strategic and creative execution of the Swiftrooms landing page experience. My role included taking ownership of the website’s design direction, improving the UX/UI experience, and ensuring the final product aligned with the company’s premium positioning and lead generation goals. I collaborated closely with developers and stakeholders to resolve functionality and responsiveness issues while exploring AI-assisted workflows to improve the overall design-to-development process and achieve a more accurate final build.</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                <li>Creative Direction</li>
                <li>UX/UI Design</li>
                <li>Landing Page Design</li>
                <li>Conversion-Focused Design</li>
                <li>Art Direction</li>
                <li>AI-Assisted Design Workflows</li>
                <li>Visual Research & Strategy</li>
                <li>Responsive Web Design</li>
                <li>Motion Graphics & Storyboarding</li>
                <li>Interaction Design</li>
                <li>Development Collaboration</li>
                <li>Design-to-Development Translation</li>
                <li>Digital Asset Creation</li>
                <li>Cross-Platform Consistency</li>
                <li>Lead Generation Optimisation</li>
                <li>Google Ads Landing Page Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1c1c1e] py-16 px-6 md:px-12">
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
          
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 font-['Inter',sans-serif]">
            <p>© 2026 SWIFTROOMS. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
