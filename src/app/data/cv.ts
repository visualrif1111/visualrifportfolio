// Single content source for both the interactive CV (/cv) and the A4 print CV (/cv/print).
export type Experience = {
  id: string;
  index: string;
  name: string;
  role: string;
  dates: string;
  url: string;
  urlLabel: string;
  description: string;
  highlights: string[];
  hard: string[];
  soft: string[];
};

export type StandaloneProject = {
  name: string;
  tag: string;
  /** Omitted until the project has a case study page. */
  url?: string;
  urlLabel?: string;
  description: string;
};

export const profile = {
  name: "Arif Tariq",
  firstName: "Arif",
  lastName: "Tariq",
  title: "Multidisciplinary Designer",
  location: "Shrewsbury / Remote",
  phone: "07598 078 923",
  phoneHref: "tel:+447598078923",
  email: "hello@visualrif.com",
  website: "https://visualrif.com/",
  websiteLabel: "visualrif.com",
  statement:
    "Independent multidisciplinary designer working across brand identity, UX/UI, web, print and 3D. I take projects from research and concept through to design and front-end build — managing clients directly, balancing commercial goals with craft, and delivering human-led work that is considered, usable and built to last.",
};

export const portfolioPdf = {
  href: "/visualrif-portfolio-2026.pdf",
  pages: 23,
  size: "12 MB",
};

export const experience: Experience[] = [
  {
    id: "uniestate",
    index: "01",
    name: "Uniestate UK",
    role: "UX/UI Designer & Web Developer",
    dates: "2026 – Present",
    url: "https://uniestate-uk.vercel.app/",
    urlLabel: "uniestate-uk.vercel.app",
    description:
      "Ongoing design and development of Uniestate's UK-facing property platform, presenting Playa Viva on Al Marjan Island, Ras Al Khaimah.",
    highlights: [
      "Luxury property storytelling, location content and responsive, mobile-first layouts",
      "Property information architecture, events and news, and structured buyer enquiry journeys",
      "Front-end build and content management",
    ],
    hard: ["Figma — UX/UI & responsive design", "React, Next.js & Tailwind CSS", "Sanity & Vercel"],
    soft: ["Creative direction", "Stakeholder collaboration", "Project ownership & communication"],
  },
  {
    id: "swiftrooms",
    index: "02",
    name: "Swiftrooms",
    role: "Freelance UX/UI Designer",
    dates: "2026 – Present",
    url: "https://visualrif.com/projects/swiftrooms",
    urlLabel: "visualrif.com/projects/swiftrooms",
    description:
      "Website transformation for a UAE interiors and fit-out business — from a Google Ads landing page to a wider redesign.",
    highlights: [
      "UX strategy, sitemap and functional specifications for desktop and mobile",
      "Get Free Quote and Book Showroom enquiry flows with improved form design",
      "CMS architecture for ongoing content updates",
    ],
    hard: ["Figma — UX strategy & prototyping", "React, Next.js & Tailwind CSS", "Sanity & Vercel"],
    soft: ["Client collaboration", "Technical planning", "Analytical thinking"],
  },
  {
    id: "investinuk",
    index: "03",
    name: "INVESTINUK",
    role: "UX/UI Designer & Web Developer",
    dates: "2026 – Present",
    url: "https://visualrif.com/projects/investinuk",
    urlLabel: "visualrif.com/projects/investinuk",
    description:
      "Premium UK property investment platform designed to attract international investors, including those based in the UAE.",
    highlights: [
      "Brand positioning, UX research and information architecture",
      "Responsive case studies and interactive property presentation",
      "Front-end build with CRM-integrated, concierge-style enquiry workflows",
    ],
    hard: ["Figma — UX/UI & design systems", "React, Next.js & Tailwind CSS", "Sanity, Vercel & CRM integration"],
    soft: ["Stakeholder management", "Strategic thinking", "Project planning"],
  },
  {
    id: "jma",
    index: "04",
    name: "JMA Customs",
    role: "3D Artist — Self-employed",
    dates: "2023 – 2025",
    url: "https://visualrif.com/projects/jma-customs",
    urlLabel: "visualrif.com/projects/jma-customs",
    description:
      "Independent studio creating bespoke 3D assets and immersive environments for the FiveM (GTA V roleplay) community.",
    highlights: [
      "Generated over £6,000 in revenue within the first six months",
      "Built a base of 70+ recurring customers; collaborated with UK rap artists",
      "Work recognised by Rockstar Games employees",
    ],
    hard: ["Blender — modelling & UV mapping", "3ds Max — rigging & texturing", "Adobe CC & asset optimisation"],
    soft: ["Entrepreneurship", "Client relationships", "Self-directed learning"],
  },
  {
    id: "verb",
    index: "05",
    name: "Verb Brands",
    role: "Apprentice / Junior Designer",
    dates: "2019 – 2020",
    url: "https://visualrif.com/projects/moncks-of-dover-street",
    urlLabel: "visualrif.com/projects/moncks-of-dover-street",
    description:
      "Progressed from apprentice to junior designer within a creative agency, contributing to branding, digital and print for luxury clients including Moncks of Dover Street and Bugatti.",
    highlights: [
      "Completed the Moncks of Dover Street website within one month",
      "Following completion and sale of the project, Verb Brands generated £12,000 in revenue.",
    ],
    hard: ["Adobe Creative Cloud", "Sketch — UX/UI design", "Jira & Zeplin — design handoff"],
    soft: ["Teamwork", "Learning agility", "Accountability"],
  },
];

export const standalone: StandaloneProject[] = [
  {
    name: "Diversion Audio",
    tag: "Brand identity · Music",
    url: "https://visualrif.com/projects/diversion-audio",
    urlLabel: "visualrif.com/projects/diversion-audio",
    description:
      "Original brand identity and visual language for a UK Drum & Bass/Jungle collective directly involved with Boomtown Fair, one of the UK's major independent music and arts festivals. Rooted in underground rave culture, live performance and community — recognisable across social media and club events, including Volks.",
  },
  {
    name: "Sunil Gavaskar",
    tag: "Interactive · Storytelling",
    url: "https://visualrif.com/projects/sunil-gavaskar",
    urlLabel: "visualrif.com/projects/sunil-gavaskar",
    description:
      "Immersive web experience for NFTIE honouring the cricketer's career and legacy through digital storytelling and interactive design.",
  },
  {
    name: "The Hairy Bastard",
    tag: "Print · Collateral",
    url: "https://visualrif.com/projects/the-hairy-bastard",
    urlLabel: "visualrif.com/projects/the-hairy-bastard",
    description: "Distinctive printed business cards and collateral inspired by London's Brick Lane landmarks.",
  },
  {
    name: "Dilchad",
    tag: "Campaign · Print",
    description: "Christmas poster and seasonal menu campaign for a Liverpool Street restaurant in London.",
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Design & Creative", items: "Figma, Adobe Creative Cloud, branding, UX/UI, visual identity, editorial, motion" },
  { group: "Web & Frontend", items: "Next.js, React, Tailwind CSS, VS Code, GitHub, Vercel" },
  { group: "CMS & Integrations", items: "Sanity, Resend, Lead Optimiser" },
  { group: "Security & Monitoring", items: "Cloudflare Turnstile, Redis, Zod, Sentry" },
  { group: "3D & Environments", items: "Blender, 3ds Max, UV mapping, texturing, optimisation" },
  { group: "Project Management", items: "Trello, Jira, documentation, client communication" },
];

export const education = {
  school: "Havering Sixth Form College",
  dates: "2013 – 2015",
  quals: ["A Level — Graphic Communication (C)", "A Level — Photography (C)"],
};
