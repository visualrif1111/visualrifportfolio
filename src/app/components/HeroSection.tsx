"use client";

import React from "react";
import { motion } from "motion/react";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

// SVG path data for icons (extracted for cleaner code)
const SVG_PATHS = {
  scrollTriangle: "M11.4268 0L22.8536 19.7918H0L11.4268 0Z",
  logo: {
    accent:
      "M164.526 9.05154L155.475 0L155.013 0.500724L154.55 0.924413L151.431 4.04431L148.657 6.81755L147.155 8.35823L141.686 13.8277L141.339 14.1743L140.646 14.8676L140.453 15.0602L144.228 18.8349L145.383 19.9904L148.85 23.4185L155.59 30.159L170.689 15.0602L164.642 9.01303L164.526 9.05154ZM159.789 21.223L155.513 25.4984L145.075 15.0602L155.513 4.62207L160.02 9.12858L164.68 13.8277L165.913 15.0602L159.789 21.1845V21.223Z",
    v: "M9.72588 28.002H7.14522C6.83709 28.002 6.60598 27.8479 6.52895 27.5013L0.0195411 5.04574C-0.0574933 4.66057 0.0965755 4.5065 0.481748 4.5065H2.25354C2.56168 4.5065 2.75426 4.66057 2.8313 5.00722L8.26222 24.9977H8.41629L13.9243 5.00722C14.0013 4.66057 14.1939 4.5065 14.502 4.5065H16.3123C16.659 4.5065 16.813 4.69909 16.736 5.04574L10.2651 27.4628C10.1496 27.8094 9.95698 27.9635 9.68736 27.9635L9.72588 28.002Z",
    i1: "M47.7854 28.002H46.1291C45.7824 28.002 45.6284 27.8479 45.6284 27.5013V5.00722C45.6284 4.66056 45.7824 4.50649 46.1291 4.50649H47.7854C48.132 4.50649 48.2861 4.66056 48.2861 5.00722V27.5013C48.2861 27.8479 48.132 28.002 47.7854 28.002Z",
    s: "M59.3415 28.002H55.4436C53.906 28.002 52.6901 27.5728 51.7961 26.6788C50.9021 25.7848 50.4372 24.569 50.4372 22.9955V22.1372C50.4372 21.7906 50.5913 21.6365 50.9379 21.6365H52.5557C52.9023 21.6365 53.0564 21.7906 53.0564 22.1372V22.8474C53.0564 24.8143 54.0577 25.8156 56.0602 25.8156H58.9573C60.9598 25.8156 61.9611 24.8143 61.9611 22.8474V21.7361C61.9611 20.1627 60.6515 19.1999 58.0697 18.7322C56.9254 18.5177 55.8167 18.3031 54.6724 18.0171C53.5281 17.731 52.6341 17.2303 51.8474 16.4436C51.0607 15.6569 50.6673 14.6199 50.6673 13.2994V11.6875C50.6673 10.1527 51.0965 8.96109 51.9905 8.09132C52.9203 7.22154 54.1004 6.80469 55.5666 6.80469H59.2124C60.7501 6.80469 61.966 7.23382 62.86 8.12783C63.754 9.02185 64.2189 10.2377 64.2189 11.8112V12.4828C64.2189 12.8295 64.0648 12.9835 63.7182 12.9835H62.1005C61.7538 12.9835 61.5998 12.8295 61.5998 12.4828V11.9436C61.5998 9.93955 60.5984 8.93826 58.596 8.93826H55.842C53.8394 8.93826 52.8381 9.93955 52.8381 11.9436V13.3379C52.8381 14.4107 53.5538 15.1617 54.9872 15.5551C55.6309 15.7339 56.3462 15.8879 57.0971 16.0162C57.8838 16.1445 58.6706 16.309 59.4573 16.5237C60.244 16.7383 60.9593 16.9914 61.6032 17.3138C62.2471 17.6362 62.7634 18.1369 63.1568 18.8136C63.5502 19.4903 63.7648 20.312 63.7648 21.2818V22.9183C63.7648 24.4918 63.2999 25.7077 62.4059 26.6017C61.5119 27.4957 60.296 27.9635 58.7584 27.9635L59.3415 28.002Z",
    u: "M79.6332 4.50649H81.2894C81.6361 4.50649 81.7901 4.66056 81.7901 4.9687V22.5711C81.7901 24.2658 81.3279 25.6139 80.365 26.5383C79.4021 27.4628 78.0925 27.9635 76.4363 27.9635H72.3919C70.6972 27.9635 69.3876 27.5013 68.4247 26.5383C67.4617 25.5754 66.961 24.2658 66.961 22.5711V5.00722C66.961 4.66056 67.1151 4.50649 67.4617 4.50649H69.118C69.4646 4.50649 69.6187 4.66056 69.6187 5.00722V22.4555C69.6187 24.574 70.6202 25.6524 72.6616 25.6524H76.0896C78.131 25.6524 79.171 24.574 79.171 22.4555V5.00722C79.171 4.66056 79.325 4.50649 79.6332 4.50649Z",
    a: "M86.8075 25.9985H85.1267C84.8407 25.9985 84.7334 25.8555 84.8407 25.5336L91.1703 4.68515C91.2418 4.36331 91.4564 4.22026 91.814 4.22026H94.2457C94.5676 4.22026 94.8179 4.36331 94.8894 4.68515L101.219 25.5336C101.326 25.8555 101.219 25.9985 100.933 25.9985H99.2164C98.9661 25.9985 98.8231 25.8555 98.7516 25.5336L97.1423 20.5986H88.9531L87.3439 25.5336C87.2366 25.8555 87.0936 25.9985 86.8433 25.9985H86.8075ZM92.9226 6.72351L89.418 18.453H96.5344L93.0299 6.72351H92.8868H92.9226Z",
    l: "M131.018 28.002H119.308C118.962 28.002 118.808 27.8479 118.808 27.5013V5.00722C118.808 4.66056 118.962 4.50649 119.308 4.50649H120.965C121.311 4.50649 121.465 4.66056 121.465 5.00722V25.2288C121.465 25.4599 121.581 25.5369 121.812 25.5369H131.018C131.364 25.5369 131.518 25.7295 131.518 26.0761V27.4242C131.518 27.7709 131.364 27.925 131.018 27.925V28.002Z",
    r: "M172.098 25.9981H170.561C170.239 25.9981 170.096 25.855 170.096 25.5332V4.64897C170.096 4.32712 170.239 4.18408 170.561 4.18408H178.356C179.93 4.18408 181.146 4.61321 182.04 5.50723C182.934 6.40124 183.399 7.61711 183.399 9.19057V12.266C183.399 13.5176 183.077 14.5904 182.469 15.4129C181.861 16.2354 181.003 16.7718 179.93 17.0579V17.201L183.864 25.4259C184.078 25.7835 183.971 25.9623 183.542 25.9623H182.004C181.611 25.9623 181.325 25.8193 181.146 25.4974L177.355 17.3082H172.885C172.67 17.3082 172.563 17.4155 172.563 17.6301V25.5332C172.563 25.855 172.42 25.9981 172.098 25.9981ZM172.921 15.2341H178.035C179.966 15.2341 180.967 14.2686 180.967 12.3018V9.29786C180.967 7.33102 180.001 6.32972 178.035 6.32972H172.921C172.706 6.32972 172.599 6.437 172.599 6.65157V14.9123C172.599 15.1268 172.706 15.1984 172.921 15.1984V15.2341Z",
    i2: "M196.381 4.64897V25.4974C196.381 25.8193 196.238 25.9623 195.916 25.9623H194.378C194.056 25.9623 193.913 25.8193 193.913 25.4974V4.64897C193.913 4.32712 194.056 4.18408 194.378 4.18408H195.916C196.238 4.18408 196.381 4.32712 196.381 4.64897Z",
    f: "M225.462 28.002H223.805C223.459 28.002 223.305 27.8479 223.305 27.5013V5.00722C223.305 4.66056 223.459 4.50649 223.805 4.50649H235.168C235.515 4.50649 235.669 4.66056 235.669 5.00722V6.3168C235.669 6.66346 235.515 6.81753 235.168 6.81753H226.348C226.116 6.81753 226.001 6.93308 226.001 7.16418V15.1372C226.001 15.3683 226.116 15.4839 226.348 15.4839H234.167C234.513 15.4839 234.667 15.638 234.667 15.9846V17.2942C234.667 17.6409 234.513 17.7949 234.167 17.7949H226.348C226.116 17.7949 226.001 17.9105 226.001 18.1416V27.4628C226.001 27.8094 225.847 27.9635 225.5 27.9635L225.462 28.002Z",
  },
  instagram:
    "M5.02638 7.54436C5.02393 6.15655 6.14718 5.02915 7.53473 5.02671C8.92254 5.024 10.0501 6.14677 10.0529 7.53485C10.0555 8.9229 8.93229 10.0501 7.54424 10.0528C6.15669 10.0554 5.02906 8.93244 5.02638 7.54436ZM3.6684 7.54704C3.67255 9.68533 5.4092 11.4149 7.54695 11.4107C9.68494 11.4066 11.4155 9.67042 11.4113 7.53214C11.4072 5.39459 9.6703 3.66405 7.53205 3.6682C5.39426 3.67235 3.66425 5.40926 3.6684 7.54704ZM10.6516 3.50942C10.6526 4.00872 11.0586 4.41304 11.5579 4.41207C12.0575 4.4111 12.4618 4.00531 12.461 3.50601C12.4601 3.00667 12.0541 2.60212 11.5545 2.60309C11.0549 2.60406 10.6506 3.01006 10.6516 3.50942ZM4.50507 13.6822C3.77001 13.6502 3.37084 13.528 3.10483 13.4257C2.75256 13.2894 2.50118 13.1259 2.23661 12.8633C1.97255 12.5997 1.80862 12.3491 1.67107 11.9975C1.56776 11.7315 1.44341 11.3328 1.40895 10.5978C1.37158 9.80308 1.36303 9.56466 1.35938 7.55146C1.35546 5.53873 1.3628 5.30032 1.39749 4.5049C1.42898 3.77031 1.55188 3.37064 1.65399 3.10487C1.7903 2.75212 1.95325 2.50122 2.21635 2.23665C2.47992 1.97211 2.73055 1.80865 3.08233 1.67111C3.34814 1.56729 3.7468 1.44391 4.48163 1.40898C5.27678 1.37137 5.51496 1.3633 7.52766 1.35939C9.5408 1.3555 9.77921 1.36257 10.5747 1.39753C11.3092 1.42951 11.7089 1.55118 11.9744 1.65403C12.3269 1.79033 12.5783 1.95279 12.8426 2.21638C13.1069 2.47998 13.2709 2.73012 13.4084 3.08263C13.5122 3.3477 13.6356 3.74686 13.6703 4.48143C13.7081 5.27661 13.7167 5.51505 13.7203 7.52775C13.7242 9.54095 13.7169 9.7794 13.682 10.5743C13.65 11.3094 13.5281 11.7088 13.4255 11.9751C13.2892 12.3271 13.1262 12.5785 12.8629 12.8431C12.5995 13.1066 12.3489 13.271 11.9969 13.4086C11.7316 13.5122 11.3324 13.6358 10.5981 13.6707C9.80295 13.7081 9.56474 13.7166 7.55134 13.7203C5.53864 13.7242 5.30049 13.7166 4.50507 13.6822ZM4.41713 0.0522133C3.61488 0.0900593 3.06696 0.218559 2.58812 0.406169C2.09247 0.599404 1.67231 0.858377 1.25436 1.27807C0.83587 1.698 0.578871 2.1189 0.387108 2.61505C0.201472 3.09509 0.0756521 3.64328 0.0402212 4.44579C0.00430694 5.24952 -0.00447749 5.50688 0.00116156 7.54996C0.00631785 9.59304 0.0165706 9.85018 0.0559839 10.6532C0.0959099 11.4555 0.226384 12.0032 0.415955 12.4813C0.611163 12.9763 0.871607 13.396 1.29299 13.8128C1.7141 14.2304 2.13548 14.4862 2.63235 14.6762C3.11337 14.8639 3.66202 14.9877 4.46497 15.021C5.26889 15.0542 5.52578 15.0626 7.56888 15.0574C9.61219 15.052 9.86958 15.0415 10.6723 14.9999C11.4746 14.9577 12.0225 14.8272 12.5006 14.6377C12.9955 14.4425 13.4152 14.1823 13.8319 13.7612C14.2493 13.3403 14.505 12.9192 14.6948 12.4229C14.8824 11.9421 15.0062 11.394 15.0394 10.5915C15.0726 9.78778 15.0811 9.53092 15.0759 7.48783C15.0705 5.44475 15.06 5.18739 15.0186 4.38463C14.9765 3.58237 14.8462 3.03473 14.6566 2.55663C14.4614 2.0619 14.2012 1.64248 13.7803 1.22599C13.3594 0.809231 12.9387 0.553201 12.4423 0.363428C11.9618 0.175829 11.4136 0.0520359 10.6112 0.0188107C9.80803 -0.0144049 9.55091 -0.0228574 7.50734 -0.0176971C5.46402 -0.0127594 5.20666 -0.0022702 4.40366 0.0393863L4.41713 0.0522133Z",
  linkedin:
    "M13.9874 0H1.13662C0.521892 0 0 0.486078 0 1.08505V13.9939C0 14.5934 0.342499 15.0795 0.956958 15.0795H13.8077C14.4232 15.0795 15.0795 14.5934 15.0795 13.9939V1.08505C15.0795 0.486078 14.6026 0 13.9874 0ZM5.74443 5.74443H7.77451V6.77926H7.79674C8.10614 6.22129 9.02021 5.65487 10.1506 5.65487C12.3199 5.65487 12.9254 6.80668 12.9254 8.9399V12.9254H10.771V9.33288C10.771 8.37783 10.3897 7.53974 9.4979 7.53974C8.415 7.53974 7.8988 8.27278 7.8988 9.47646V12.9254H5.74443V5.74443ZM2.1541 12.9254H4.30846V5.74443H2.1541V12.9254ZM4.57768 3.23128C4.57768 3.97518 3.97518 4.57768 3.23128 4.57768C2.48738 4.57768 1.88488 3.97518 1.88488 3.23128C1.88488 2.48738 2.48738 1.88488 3.23128 1.88488C3.97518 1.88488 4.57768 2.48738 4.57768 3.23128Z",
  phone:
    "M14.0802 10.6343L13.6084 11.9469C13.0089 13.6137 11.3282 14.5566 9.59165 13.9549C6.4078 12.8516 3.58124 10.3966 1.72357 7.62095C1.0868 6.66916 0.595364 5.68708 0.211066 4.61736C-0.0483926 3.8949 -0.0865895 3.16823 0.197558 2.44251C0.522231 1.6147 1.14922 0.925329 1.99048 0.613969L3.48528 0.0602344C4.01817 -0.136929 4.63631 0.168371 4.80214 0.707191C5.01874 1.41055 5.24187 2.07615 5.41282 2.79022C5.55257 3.37286 5.131 3.94523 4.61721 4.14333L3.52068 4.56609C5.01129 7.07048 7.08696 9.14839 9.57535 10.6199L10.0235 9.46301C10.221 8.95309 10.8396 8.57041 11.3822 8.73122L13.429 9.33856C13.9503 9.4933 14.2745 10.0932 14.0798 10.6339L14.0802 10.6343Z",
} as const;

// Reusable SVG Icon Components
const VisualRifLogo = React.memo(function VisualRifLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`block ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 235.669 30.159"
      aria-label="VisualRif logo"
    >
      <path d={SVG_PATHS.logo.accent} fill="#50C1BA" />
      <path d={SVG_PATHS.logo.v} fill="white" />
      <path d={SVG_PATHS.logo.i1} fill="white" />
      <path d={SVG_PATHS.logo.s} fill="white" />
      <path d={SVG_PATHS.logo.u} fill="white" />
      <path d={SVG_PATHS.logo.a} fill="white" />
      <path d={SVG_PATHS.logo.l} fill="white" />
      <path d={SVG_PATHS.logo.r} fill="white" />
      <path d={SVG_PATHS.logo.i2} fill="white" />
      <path d={SVG_PATHS.logo.f} fill="white" />
    </svg>
  );
});

const ScrollTriangle = React.memo(function ScrollTriangle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 22.8536 19.7918"
      aria-hidden="true"
    >
      <path d={SVG_PATHS.scrollTriangle} fill="currentColor" />
    </svg>
  );
});

const SocialIcon = React.memo(function SocialIcon({
  type,
  className = "",
}: {
  type: "instagram" | "linkedin" | "phone";
  className?: string;
}) {
  const paths = {
    instagram: SVG_PATHS.instagram,
    linkedin: SVG_PATHS.linkedin,
    phone: SVG_PATHS.phone,
  };

  const viewBoxes = {
    instagram: "0 0 15.0795 15.0795",
    linkedin: "0 0 15.0795 15.0795",
    phone: "0 0 14.1371 14.1373",
  };

  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox={viewBoxes[type]}
      aria-hidden="true"
    >
      {type === "linkedin" ? (
        <path
          clipRule="evenodd"
          d={paths[type]}
          fill="currentColor"
          fillRule="evenodd"
        />
      ) : (
        <path d={paths[type]} fill="currentColor" />
      )}
    </svg>
  );
});

// Navigation Items
const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "ALL PROJECTS" },
  { id: "contact", label: "CONTACT US" },
] as const;

// Social Links
const SOCIAL_LINKS = [
  {
    type: "instagram" as const,
    href: "https://www.instagram.com/visualrif/",
    label: "Instagram",
  },
  {
    type: "linkedin" as const,
    href: "https://www.linkedin.com/in/ariftariq/",
    label: "LinkedIn",
  },
  { type: "phone" as const, href: "tel:07598078923", label: "Phone" },
] as const;

// Desktop Navigation Component
const DesktopNav = React.memo(function DesktopNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] py-14 px-10 flex-col z-50 mix-blend-difference justify-between"
      aria-label="Main navigation"
    >
      <div>
        <button
          className="mb-12 cursor-pointer bg-transparent border-0 p-0"
          onClick={() => onNavigate("home")}
          aria-label="Go to home"
        >
          <VisualRifLogo className="w-[180px] h-[24px]" />
        </button>

        <div className="relative pl-6">
          <div
            className="absolute left-[3px] top-2 bottom-[-400px] w-px bg-white/20"
            aria-hidden="true"
          />
          <div
            className="absolute left-[0.5px] top-2 w-1.5 h-1.5 rounded-full bg-white"
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-8 text-lg tracking-[0.25em] text-gray-300 font-['Rajdhani',sans-serif] font-medium uppercase relative z-10 whitespace-nowrap list-none p-0 m-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`bg-transparent border-0 p-0 cursor-pointer transition-colors duration-200 hover:text-white ${
                    activeSection === item.id ? "text-white" : "text-gray-300"
                  }`}
                  onClick={() => onNavigate(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 pl-4 relative">
        <div
          className="absolute left-[0.5px] bottom-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
          aria-hidden="true"
        />
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.type}
            href={link.href}
            target={link.type !== "phone" ? "_blank" : undefined}
            rel={link.type !== "phone" ? "noreferrer" : undefined}
            className="text-white hover:text-[#50C1BA] transition-colors duration-200"
            aria-label={link.label}
          >
            <SocialIcon
              type={link.type}
              className={link.type === "phone" ? "w-3.5 h-3.5" : "w-[15px] h-[15px]"}
            />
          </a>
        ))}
      </div>
    </nav>
  );
});

// Mobile Navigation Component
const MobileNav = React.memo(function MobileNav({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="md:hidden fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center bg-black/90"
      aria-label="Mobile navigation"
    >
      <button
        className="cursor-pointer bg-transparent border-0 p-0"
        onClick={() => onNavigate("home")}
        aria-label="Go to home"
      >
        <VisualRifLogo className="w-[140px] h-[18px]" />
      </button>
      <button
        className="text-[#50C1BA] font-['Rajdhani',sans-serif] font-medium text-sm tracking-widest uppercase bg-transparent border-0 cursor-pointer"
        onClick={() => onNavigate("contact")}
      >
        CONTACT US
      </button>
    </nav>
  );
});

// Hero Content Component
const HeroContent = React.memo(function HeroContent({
  onScrollDown,
}: {
  onScrollDown: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full px-4 mt-8 md:mt-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[10vw] sm:text-5xl md:text-[65px] leading-[1.1] font-medium tracking-[0.4vw] sm:tracking-[2.5px] md:tracking-[5px] font-['Barlow_Semi_Condensed',sans-serif] uppercase text-white mb-6 md:mb-12 w-full flex flex-col items-center justify-center text-balance"
      >
        <span>Multidisciplinary</span>
        <span>Designer</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-['Rajdhani',sans-serif] font-semibold text-[3.5vw] sm:text-sm md:text-xl tracking-[0.5vw] sm:tracking-[2px] md:tracking-[5px] text-white uppercase leading-relaxed text-center w-full px-2"
      >
        <p className="mb-1 md:mb-0">
          Experience specialising in end-to-end design solutions
        </p>
        <p>across UX/UI and 3D design</p>
      </motion.div>
    </div>
  );
});

// Scroll Indicator Component
const ScrollIndicator = React.memo(function ScrollIndicator({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex justify-center w-full"
    >
      <button
        onClick={onClick}
        className="group flex flex-col items-center gap-6 cursor-pointer bg-transparent border-0 p-0"
        aria-label="Scroll down to about section"
      >
        <span className="font-['Rajdhani',sans-serif] font-semibold text-base md:text-xl tracking-[5px] uppercase text-white transition-opacity duration-200 group-hover:opacity-80">
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[26px] h-[26px] flex items-center justify-center rotate-180"
        >
          <ScrollTriangle className="w-[23px] h-5" />
        </motion.div>
      </button>
    </motion.div>
  );
});

// Main Hero Section Component
interface HeroSectionProps {
  videoId?: string;
  onNavigate?: (id: string) => void;
  activeSection?: string;
}

export function HeroSection({
  videoId = "_4cuwDSUX4Y",
  onNavigate,
  activeSection = "home",
}: HeroSectionProps) {
  const handleNavigate = React.useCallback(
    (id: string) => {
      if (onNavigate) {
        onNavigate(id);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onNavigate]
  );

  const handleScrollDown = React.useCallback(() => {
    handleNavigate("about");
  }, [handleNavigate]);

  return (
    <>
      {/* Navigation */}
      <DesktopNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav onNavigate={handleNavigate} />

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <HeroBackgroundVideo videoId={videoId} overlayOpacity={70} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full px-6 pt-24 md:pt-0 md:pl-[280px] md:pr-12 max-w-7xl mx-auto overflow-x-hidden">
        <section
          id="home"
          className="min-h-[calc(100vh-6rem)] md:min-h-screen flex flex-col items-center justify-between relative w-full pt-16 md:pt-32 pb-8 md:pb-12"
          aria-labelledby="hero-heading"
        >
          <h2 id="hero-heading" className="sr-only">
            Hero Section
          </h2>

          <HeroContent onScrollDown={handleScrollDown} />
          <ScrollIndicator onClick={handleScrollDown} />
        </section>
      </div>
    </>
  );
}

export default HeroSection;
