import React from 'react';
import imgLogo from '../imports/visualrif-cv-logo.png';
import { education, experience, profile, skills, standalone, type Experience } from './data/cv';

// Fonts come from next/font variables set on the (print) root layout.
const MONO = 'font-[family-name:var(--font-cv-mono)] text-[6.4pt] tracking-[0.12em] uppercase';
const DISP = 'font-[family-name:var(--font-cv-display)]';
const ACC = 'text-[#00B8B8]';
const MUTED = 'text-[#727272]';
const RULE = 'border-t-[0.5pt] border-[#DFDFDF]';
const LABEL_COL = 'grid grid-cols-[34mm_1fr] gap-[6mm]';
const SHEET =
  'relative flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-[#F7F7F5] pt-[12mm] pr-[13mm] pb-[9mm] pl-[14mm] text-[#171717] font-[family-name:var(--font-cv-sans)] text-[8.1pt] leading-[1.38] shadow-xl print:shadow-none break-after-page last:break-after-auto';

function SideRail({ page }: { page: number }) {
  return (
    <div className={`absolute left-[5.2mm] top-[14mm] h-[269mm] rotate-180 [writing-mode:vertical-rl] ${MONO} ${MUTED}`}>
      <div className="flex h-full justify-between">
        <span>
          Visual<span className={ACC}>rif</span> — CV 2026
        </span>
        <span>{String(page).padStart(2, '0')} / 02</span>
      </div>
    </div>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <div className={`mt-auto flex items-center justify-between pt-[3mm] ${RULE} ${MONO} ${MUTED}`}>
      <span>Arif Tariq — Multidisciplinary Designer</span>
      <a href={profile.website} className={ACC}>{profile.websiteLabel}</a>
      <span>Page {page} of 2</span>
    </div>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-[3mm] flex items-baseline gap-[3mm]">
      <span className={`${MONO} ${ACC}`}>{n}</span>
      <span className={`${MONO} font-medium`}>{children}</span>
      <span className={`flex-1 -translate-y-[1pt] ${RULE}`} />
    </div>
  );
}

function SkillCols({ hard, soft }: { hard: string[]; soft: string[] }) {
  return (
    <div className="mt-[1.4mm] grid grid-cols-2 gap-[6mm]">
      {([['Hard Skills', hard], ['Soft Skills', soft]] as const).map(([label, list]) => (
        <div key={label}>
          <div className={`mb-[0.4mm] ${MONO} ${MUTED}`}>{label}</div>
          <div className="text-[7.8pt]">
            {list.map((x, i) => (
              <span key={x}>{i > 0 && <span className={ACC}> / </span>}{x}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExpEntry({ e }: { e: Experience }) {
  return (
    <article className={`${LABEL_COL} break-inside-avoid py-[2.4mm] ${RULE}`}>
      <div>
        <div className={`${MONO} ${ACC}`}>{e.index}</div>
        <div className={`${DISP} mt-[1mm] text-[8pt] font-semibold`}>{e.dates}</div>
      </div>
      <div>
        <div className="flex items-baseline justify-between gap-[4mm]">
          <h3 className={`${DISP} text-[11pt] font-bold uppercase tracking-[-0.01em]`}>{e.name}</h3>
          <a href={e.url} className={`whitespace-nowrap ${MONO} ${ACC}`}>{e.urlLabel} ↗</a>
        </div>
        <div className={`mt-[0.5mm] ${MONO} ${MUTED}`}>{e.role}</div>
        <p className="mt-[1.1mm]">{e.description}</p>
        <ul className="mt-[1mm]">
          {e.highlights.map((h) => (
            <li key={h} className="flex gap-[1.8mm]">
              <span className={ACC}>•</span>
              {h}
            </li>
          ))}
        </ul>
        <SkillCols hard={e.hard} soft={e.soft} />
      </div>
    </article>
  );
}

export default function PrintCV() {
  const page1 = experience.filter((e) => e.id !== 'verb');
  const verb = experience.find((e) => e.id === 'verb')!;

  return (
    <div className="flex flex-col items-center gap-8 bg-[#E6E6E3] py-10 print:gap-0 print:bg-transparent print:p-0">
      <section className={SHEET}>
        <SideRail page={1} />
        <header className="grid grid-cols-[1fr_auto] items-end gap-[6mm]">
          <div>
            <div className={`mb-[2mm] ${MONO} ${MUTED}`}>{profile.title}</div>
            <h1 className={`${DISP} text-[32pt] font-bold uppercase leading-[0.85] tracking-[-0.045em]`}>
              {profile.firstName}<br />{profile.lastName}<span className={ACC}>.</span>
            </h1>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- print sheet, image imports are URL strings */}
          <img src={imgLogo} alt="VISUALRIF" className="h-[20mm] w-auto" />
        </header>
        <div className={`mt-[4mm] grid grid-cols-4 border-t-[1pt] border-[#171717] pt-[2.5mm] ${MONO}`}>
          <span className={MUTED}>{profile.location}</span>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a href={`mailto:${profile.email}`} className={ACC}>{profile.email}</a>
          <a href={profile.website} className={`text-right ${ACC}`}>{profile.websiteLabel} ↗</a>
        </div>

        <div className={`mt-[6mm] ${LABEL_COL}`}>
          <div className={`${MONO} ${ACC}`}>Profile</div>
          <p className={`${DISP} text-[9.2pt] leading-[1.36] tracking-[-0.005em]`}>{profile.statement}</p>
        </div>

        <div className="mt-[6mm]">
          <SectionLabel n="§1">Professional Experience</SectionLabel>
          {page1.map((e) => <ExpEntry key={e.id} e={e} />)}
        </div>
        <Footer page={1} />
      </section>

      <section className={SHEET}>
        <SideRail page={2} />
        <div className="mb-[5mm] flex items-baseline justify-between">
          <span className={`${DISP} text-[12pt] font-bold uppercase tracking-[-0.03em]`}>
            {profile.name}<span className={ACC}>.</span>
          </span>
          <span className={`${MONO} ${MUTED}`}>Experience — continued</span>
        </div>
        <ExpEntry e={verb} />

        <div className="mt-[5mm]">
          <SectionLabel n="§2">Standalone Projects</SectionLabel>
          <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[4mm]">
            {standalone.map((p) => (
              <article key={p.name} className={`pt-[2.5mm] ${RULE}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className={`${DISP} text-[9.5pt] font-bold uppercase`}>{p.name}</h3>
                  <span className={`${MONO} ${MUTED}`}>{p.tag}</span>
                </div>
                {p.url && <a href={p.url} className={`mt-[0.5mm] block ${MONO} ${ACC}`}>{p.urlLabel} ↗</a>}
                <p className="mt-[1.2mm]">{p.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-[6mm]">
          <SectionLabel n="§3">Technical Skills</SectionLabel>
          <div className="grid grid-cols-3 gap-x-[6mm] gap-y-[3mm]">
            {skills.map((s) => (
              <div key={s.group}>
                <div className={`mb-[0.6mm] ${MONO} ${MUTED}`}>{s.group}</div>
                <div className="text-[7.9pt]">{s.items}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[6mm]">
          <SectionLabel n="§4">Education</SectionLabel>
          <div className={LABEL_COL}>
            <div className={`${DISP} text-[8pt] font-semibold`}>{education.dates}</div>
            <div>
              <div className={`${DISP} text-[9.5pt] font-bold uppercase`}>{education.school}</div>
              {education.quals.map((q) => <div key={q}>{q}</div>)}
            </div>
          </div>
        </div>

        <div className={`mt-auto mb-[5mm] ${LABEL_COL}`}>
          <div className={`${MONO} ${ACC}`}>Portfolio</div>
          <div className={`${DISP} text-[26pt] font-bold uppercase leading-[0.9] tracking-[-0.04em]`}>
            <a href={profile.website}>Visual<span className={ACC}>rif</span>.com</a>
          </div>
        </div>
        <Footer page={2} />
      </section>
    </div>
  );
}
