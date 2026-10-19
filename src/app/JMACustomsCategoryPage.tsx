'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';
import { useNavigate } from './navigation';
import '../styles/fonts.css';
import { FadeIn } from './components/motion/FadeIn';
import { CaseStudyShell, Section, SectionHeader, Hero } from './components/case-study';
import { CATEGORIES } from './data/jmaCategories';


export default function JMACustomsCategoryPage() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const data = category ? CATEGORIES[category] : null;

  if (!data) {
    return (
      <div className="relative bg-transparent text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Rajdhani',sans-serif] text-gray-500 tracking-[0.3em] uppercase mb-4">Page not found</p>
          <button onClick={() => navigate('/projects/jma-customs')} className="text-[#50C1BA] hover:text-white transition-colors font-['Rajdhani',sans-serif] tracking-[0.25em] uppercase text-sm">
            Back to JMA Customs
          </button>
        </div>
      </div>
    );
  }

  return (
    <CaseStudyShell>
      {/* ── Hero ── */}
      <Hero
        heightClassName="h-[55vh] md:h-[65vh]"
        align="bottom-left"
        overlayClassName=""
        eyebrow={`JMA Customs — ${data.num}`}
        titleClassName="text-[12vw] md:text-[7.5vw] tracking-[0.05em]"
        titleLines={[data.title]}
        media={
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-[#50C1BA]/6 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(80,193,186,0.01) 3px, rgba(80,193,186,0.01) 4px)' }} />
            <div className="absolute bottom-0 right-0 w-[500px] h-[200px] bg-[#50C1BA]/6 blur-[120px] pointer-events-none" />
          </div>
        }
      />

      {/* ── Description ── */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.7] text-gray-300 tracking-[0.04em]">{data.desc}</p>
            </FadeIn>
            <FadeIn>
              <p className="font-['Lato',sans-serif] font-light text-[15px] md:text-[16px] leading-[1.7] text-gray-400 tracking-[0.04em]">{data.detail}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <Section pad="loose">
        <SectionHeader
          eyebrow="Gallery"
          title={data.title}
          lead={data.images && data.images.length > 0
            ? `A selection of ${data.title.toLowerCase()} designed and implemented in-game.`
            : 'Selected work from this category — coming soon.'}
          align="center"
          className="mb-14 md:mb-16"
        />
        {data.images && data.images.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {data.images.map((src, i) => (
              <motion.div
                key={src}
                className="break-inside-avoid overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              >
                <img src={src} alt={`${data.title} — design ${i + 1}`} loading="lazy" className="w-full h-auto block" />
              </motion.div>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="aspect-[4/3] bg-[#060f0f] border border-gray-800/60 rounded-lg flex items-center justify-center">
                <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-gray-800">Coming Soon</p>
              </div>
              <div className="aspect-[4/3] bg-[#060f0f] border border-gray-800/60 rounded-lg flex items-center justify-center">
                <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-gray-800">Coming Soon</p>
              </div>
            </div>
            <div className="aspect-[21/9] bg-[#060f0f] border border-gray-800/60 rounded-lg flex items-center justify-center">
              <p className="font-['Rajdhani',sans-serif] font-semibold text-[10px] tracking-[0.35em] uppercase text-gray-800">Coming Soon</p>
            </div>
          </FadeIn>
        )}
      </Section>

      {/* ── Back to full case study ── */}
      <section
        className="border-t border-gray-800 px-6 md:px-12 py-20 md:py-28 cursor-pointer group"
        onClick={() => navigate('/projects/jma-customs')}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <p className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-gray-500 group-hover:text-[#50C1BA] transition-colors">
            Full Case Study
          </p>
          <div className="flex items-center justify-between gap-6">
            <motion.h2
              className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[8vw] sm:text-[6vw] md:text-[5vw] leading-none tracking-[0.03em] uppercase text-white"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              Inside The World<br />
              <span className="text-[#50C1BA]">Of JMA Customs</span>
            </motion.h2>
            <motion.div
              className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-700 flex items-center justify-center text-white group-hover:border-[#50C1BA] transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>
    </CaseStudyShell>
  );
}
