'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from './components/Footer';
import { FadeIn } from './components/motion/FadeIn';
import { RevealText } from './components/motion/RevealText';
import { TYPE } from './design/tokens';
import { education, experience, profile, skills, standalone } from './data/cv';

const LINK = "font-['Rajdhani',sans-serif] font-semibold uppercase text-[12px] tracking-[0.24em] text-[#50C1BA] hover:text-white transition-colors [overflow-wrap:anywhere]";

/** visualrif.com URLs stay in the app (teal wipe, no new tab); anything else opens externally. */
function CVLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (href.startsWith(profile.website)) {
    return <Link scroll={false} href={`/${href.slice(profile.website.length)}`} className={className}>{children}</Link>;
  }
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <FadeIn className="grid gap-6 border-t border-white/15 py-12 md:grid-cols-[200px_1fr] md:py-16">
      <h2 className={TYPE.label}>
        {n}<span className="ml-3 text-gray-400">{title}</span>
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
    <div className="min-h-screen text-white bg-transparent">
      <div className="w-full flex flex-col relative pt-28 md:pt-36 z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 md:mb-24">
            <Link scroll={false} href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium font-['Barlow',sans-serif]">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex items-center gap-6">
              <a href="/cv/print" className={`hidden sm:inline ${LINK}`}>Print view</a>
              <a href="/arif-tariq-cv-2026.pdf" download className={`${TYPE.cta} border border-[#50C1BA] px-5 py-3 text-[#50C1BA] hover:bg-[#50C1BA] hover:text-black transition-colors`}>
                Download PDF ↓
              </a>
            </div>
          </div>

          <header className="pb-14">
            <p className={TYPE.label}>{profile.title} — CV 2026</p>
            <RevealText className="mt-6">
              <h1 className={TYPE.display}>
                {profile.firstName}<br />{profile.lastName}<span className="text-[#50C1BA]">.</span>
              </h1>
            </RevealText>
            <div className={`mt-12 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2 lg:grid-cols-4 ${TYPE.meta}`}>
              <span>{profile.location}</span>
              <a href={profile.phoneHref} className="hover:text-[#50C1BA] transition-colors">{profile.phone}</a>
              <button type="button" onClick={copyEmail} aria-live="polite" className="text-left uppercase tracking-[inherit] text-[length:inherit] font-[inherit] leading-[inherit] text-[#50C1BA] hover:text-white transition-colors">
                {copied ? 'Copied ✓' : profile.email}
              </button>
              <Link scroll={false} href="/" className="lg:text-right hover:text-[#50C1BA] transition-colors">{profile.websiteLabel} ↗</Link>
            </div>
          </header>

          <Section n="00" title="Profile">
            <p className={TYPE.lead}>{profile.statement}</p>
          </Section>

          <Section n="01" title="Experience">
            <div className="divide-y divide-white/10">
              {experience.map((e) => (
                <article key={e.id} className="group grid gap-4 py-10 first:pt-0 md:grid-cols-[120px_1fr]">
                  <div>
                    <div className={TYPE.label}>{e.index}</div>
                    <div className={`mt-2 ${TYPE.meta}`}>{e.dates}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[30px] md:text-[40px] leading-[1] tracking-[0.02em] transition-colors group-hover:text-[#50C1BA]">
                        {e.name}
                      </h3>
                      <CVLink href={e.url} className={LINK}>{e.urlLabel} ↗</CVLink>
                    </div>
                    <div className={`mt-2 ${TYPE.meta}`}>{e.role}</div>
                    <p className={`mt-5 max-w-2xl ${TYPE.body}`}>{e.description}</p>
                    <ul className={`mt-4 space-y-1 ${TYPE.body}`}>
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-3"><span className="text-[#50C1BA]">•</span>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-6 grid gap-6 border-t border-white/10 pt-5 sm:grid-cols-2">
                      {([['Hard Skills', e.hard], ['Soft Skills', e.soft]] as const).map(([label, list]) => (
                        <div key={label}>
                          <div className={`mb-2 ${TYPE.caption}`}>{label}</div>
                          <ul className="space-y-1 font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-300">
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
            <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2">
              {standalone.map((p) => {
                const body = (
                  <>
                    <div className={TYPE.caption}>{p.tag}</div>
                    <h3 className="mt-3 font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[26px] leading-[1.05] tracking-[0.02em] transition-colors group-hover:text-[#50C1BA]">
                      {p.name}{p.url && <span className="text-[#50C1BA]"> ↗</span>}
                    </h3>
                    <p className="mt-4 font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-300">{p.description}</p>
                  </>
                );
                return p.url ? (
                  <CVLink key={p.name} href={p.url} className="group block bg-[#020404] p-6 md:p-8 transition-colors hover:bg-[#0b1111]">{body}</CVLink>
                ) : (
                  <div key={p.name} className="bg-[#020404] p-6 md:p-8">{body}</div>
                );
              })}
            </div>
          </Section>

          <Section n="03" title="Technical Skills">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div key={s.group}>
                  <div className={`mb-2 ${TYPE.label}`}>{s.group}</div>
                  <p className="font-['Lato',sans-serif] font-light text-[15px] leading-[1.6] text-gray-300">{s.items}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section n="04" title="Education">
            <h3 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[26px] leading-[1.05] tracking-[0.02em]">{education.school}</h3>
            <div className={`mt-2 ${TYPE.meta}`}>{education.dates}</div>
            <ul className={`mt-4 ${TYPE.body}`}>
              {education.quals.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </Section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
