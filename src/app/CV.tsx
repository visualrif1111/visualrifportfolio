'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from './components/Footer';
import { FadeIn } from './components/motion/FadeIn';
import { RevealText } from './components/motion/RevealText';
import { twMerge } from 'tailwind-merge';
import { TYPE } from './design/tokens';
import { education, experience, profile, skills, standalone } from './data/cv';

// The CV is a light page. #50C1BA stays for decorative marks; text-sized teal uses a deeper
// shade that keeps AA contrast on the warm white.
const TEAL = 'text-[#0E7C76]';
const T = {
  label: twMerge(TYPE.label, TEAL),
  meta: twMerge(TYPE.meta, 'text-gray-600'),
  lead: twMerge(TYPE.lead, 'text-[#171717]'),
  body: twMerge(TYPE.body, 'text-gray-700'),
  caption: twMerge(TYPE.caption, 'text-gray-500'),
};
const SMALL = "font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-700";

const LINK = "font-['Rajdhani',sans-serif] font-semibold uppercase text-[12px] tracking-[0.24em] text-[#0E7C76] hover:text-[#171717] transition-colors [overflow-wrap:anywhere]";

/** visualrif.com URLs stay in the app (teal wipe, no new tab); anything else opens externally. */
function CVLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (href.startsWith(profile.website)) {
    return <Link scroll={false} href={`/${href.slice(profile.website.length)}`} className={className}>{children}</Link>;
  }
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <FadeIn className="grid gap-6 border-t border-black/15 py-12 md:grid-cols-[200px_1fr] md:py-16">
      <h2 className={T.label}>
        {n}<span className="ml-3 text-gray-500">{title}</span>
      </h2>
      <div className="min-w-0">{children}</div>
    </FadeIn>
  );
}

export default function CV() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#171717] selection:bg-[#50C1BA] selection:text-black">
      <div className="w-full flex flex-col relative pt-28 md:pt-36 z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 md:mb-24">
            <Link scroll={false} href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#171717] transition-colors uppercase tracking-widest text-sm font-medium font-['Barlow',sans-serif]">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex items-center gap-6">
              <a href="/cv/print" className={`hidden sm:inline ${LINK}`}>Print view</a>
              <a href="/arif-tariq-cv-2026.pdf" download className={`${TYPE.cta} border border-[#171717] px-5 py-3 text-[#171717] hover:bg-[#171717] hover:text-[#F7F7F5] transition-colors`}>
                Download PDF ↓
              </a>
            </div>
          </div>

          <header className="pb-14">
            <p className={T.label}>{profile.title} — CV 2026</p>
            <RevealText className="mt-6">
              <h1 className={TYPE.display}>
                {profile.firstName}<br />{profile.lastName}<span className="text-[#50C1BA]">.</span>
              </h1>
            </RevealText>
            <div className={`mt-12 grid gap-3 border-t border-black/15 pt-5 sm:grid-cols-2 lg:grid-cols-4 ${T.meta}`}>
              <span>{profile.location}</span>
              <a href={profile.phoneHref} className="hover:text-[#0E7C76] transition-colors">{profile.phone}</a>
              <button type="button" onClick={copyEmail} aria-live="polite" className="text-left uppercase tracking-[inherit] text-[length:inherit] font-[inherit] leading-[inherit] text-[#0E7C76] hover:text-[#171717] transition-colors">
                {copied ? 'Copied ✓' : profile.email}
              </button>
              <Link scroll={false} href="/" className="lg:text-right hover:text-[#0E7C76] transition-colors">{profile.websiteLabel} ↗</Link>
            </div>
          </header>

          <Section n="00" title="Profile">
            <p className={T.lead}>{profile.statement}</p>
          </Section>

          <Section n="01" title="Experience">
            <div className="divide-y divide-black/10">
              {experience.map((e) => (
                <article key={e.id} className="group grid gap-4 py-10 first:pt-0 md:grid-cols-[120px_1fr]">
                  <div>
                    <div className={T.label}>{e.index}</div>
                    <div className={`mt-2 ${T.meta}`}>{e.dates}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[30px] md:text-[40px] leading-[1] tracking-[0.02em] transition-colors group-hover:text-[#0E7C76]">
                        {e.name}
                      </h3>
                      <CVLink href={e.url} className={LINK}>{e.urlLabel} ↗</CVLink>
                    </div>
                    <div className={`mt-2 ${T.meta}`}>{e.role}</div>
                    <p className={`mt-5 max-w-2xl ${T.body}`}>{e.description}</p>
                    <ul className={`mt-4 space-y-1 ${T.body}`}>
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-3"><span className="text-[#50C1BA]">•</span>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-6 grid gap-6 border-t border-black/10 pt-5 sm:grid-cols-2">
                      {([['Hard Skills', e.hard], ['Soft Skills', e.soft]] as const).map(([label, list]) => (
                        <div key={label}>
                          <div className={`mb-2 ${T.caption}`}>{label}</div>
                          <ul className={`space-y-1 ${SMALL}`}>
                            {list.map((s) => (
                              <li key={s} className="flex gap-3"><span className="text-[#50C1BA]">—</span>{s}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section n="02" title="Standalone Projects">
            <div className="grid gap-px bg-black/10 border border-black/10 sm:grid-cols-2">
              {standalone.map((p) => {
                const body = (
                  <>
                    <div className={T.caption}>{p.tag}</div>
                    <h3 className="mt-3 font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[26px] leading-[1.05] tracking-[0.02em] transition-colors group-hover:text-[#0E7C76]">
                      {p.name}{p.url && <span className="text-[#50C1BA]"> ↗</span>}
                    </h3>
                    <p className={`mt-4 ${SMALL}`}>{p.description}</p>
                  </>
                );
                return p.url ? (
                  <CVLink key={p.name} href={p.url} className="group block bg-[#F7F7F5] p-6 md:p-8 transition-colors hover:bg-white">{body}</CVLink>
                ) : (
                  <div key={p.name} className="bg-[#F7F7F5] p-6 md:p-8">{body}</div>
                );
              })}
            </div>
          </Section>

          <Section n="03" title="Technical Skills">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div key={s.group}>
                  <div className={`mb-2 ${T.label}`}>{s.group}</div>
                  <p className={SMALL}>{s.items}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section n="04" title="Education">
            <h3 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[26px] leading-[1.05] tracking-[0.02em]">{education.school}</h3>
            <div className={`mt-2 ${T.meta}`}>{education.dates}</div>
            <ul className={`mt-4 ${T.body}`}>
              {education.quals.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </Section>

          <Section n="05" title="Download">
            <div id="download" className="grid gap-10 bg-[#171717] p-8 md:p-12 text-[#F7F7F5] lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className={twMerge(TYPE.label, 'text-[#50C1BA]')}>{profile.name} — CV 2026</p>
                <h3 className="mt-5 font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[40px] md:text-[60px] leading-[0.95] tracking-[0.02em]">
                  Download the CV<span className="text-[#50C1BA]">.</span>
                </h3>
                <p className="mt-5 max-w-md font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.6] text-gray-300">
                  The same CV as a two-page A4 PDF, with links to each case study.
                </p>
                <p className={twMerge(TYPE.meta, 'mt-6 text-gray-400')}>PDF · A4 · 2 pages</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/arif-tariq-cv-2026.pdf"
                  download
                  className={`${TYPE.cta} bg-[#50C1BA] px-8 py-4 text-center whitespace-nowrap text-[#020404] hover:bg-[#F7F7F5] transition-colors`}
                >
                  Download PDF ↓
                </a>
                <a
                  href="/cv/print"
                  className={`${TYPE.cta} border border-[#F7F7F5]/30 px-8 py-4 text-center whitespace-nowrap hover:border-[#50C1BA] hover:text-[#50C1BA] transition-colors`}
                >
                  Print view
                </a>
              </div>
            </div>
          </Section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
