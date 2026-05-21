import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

interface NextProjectProps {
  title: string;
  to: string;
}

export function NextProject({ title, to }: NextProjectProps) {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative w-full border-t border-gray-800 px-6 md:px-12 py-24 md:py-40 cursor-pointer overflow-hidden"
      onClick={() => navigate(to)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Subtle teal wash on hover */}
      <motion.div
        className="absolute inset-0 bg-[#50C1BA]/[0.04] pointer-events-none"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      />

      {/* Bottom teal line sweeps left → right on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-[#50C1BA] w-full"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        style={{ originX: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-8">

        {/* Label */}
        <p className="font-['Rajdhani',sans-serif] font-semibold text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-gray-500">
          Next Project
        </p>

        {/* Title + Arrow */}
        <div className="flex items-center justify-between gap-6">
          <motion.h2
            className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-none tracking-[0.02em] uppercase text-white"
            variants={{ rest: { y: 0 }, hover: { y: -8 } }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center text-white"
            variants={{
              rest: { x: 0, borderColor: 'rgba(75,85,99,0.5)' },
              hover: { x: 12, borderColor: 'rgba(80,193,186,1)' },
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
