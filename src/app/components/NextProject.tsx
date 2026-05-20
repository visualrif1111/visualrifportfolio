import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { OptimizedImage } from './OptimizedImage';

export interface ProjectInfo {
  slug: string;
  title: string;
  description: string;
  previewImage: string;
}

// Project order: Moncks -> Sunil Gavaskar -> Swiftrooms -> Diversion Audio -> (loop back to Moncks)
export const projectOrder: ProjectInfo[] = [
  {
    slug: '/moncks-of-dover-street',
    title: 'Moncks Of Dover Street',
    description: 'Luxury hospitality website for a premium Mayfair brasserie',
    previewImage: '' // Will be set dynamically
  },
  {
    slug: '/sunil-gavaskar',
    title: 'Always First - Sunil Gavaskar',
    description: 'Web3 and NFT platform for legendary cricketer',
    previewImage: ''
  },
  {
    slug: '/swiftrooms',
    title: 'Swiftrooms',
    description: 'High-converting landing page for home improvements',
    previewImage: ''
  },
  {
    slug: '/diversion-audio',
    title: 'Diversion Audio',
    description: 'Brand identity for underground Drum & Bass collective',
    previewImage: ''
  }
];

export function getNextProject(currentSlug: string): ProjectInfo {
  const currentIndex = projectOrder.findIndex(p => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projectOrder.length;
  return projectOrder[nextIndex];
}

interface NextProjectProps {
  currentSlug: string;
  nextProjectImage: string;
}

export function NextProject({ currentSlug, nextProjectImage }: NextProjectProps) {
  const navigate = useNavigate();
  const nextProject = getNextProject(currentSlug);

  const handleClick = () => {
    // Smooth scroll to top before navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(nextProject.slug);
    }, 300);
  };

  return (
    <section className="w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="font-['Barlow',sans-serif] font-medium text-[14px] md:text-[18px] tracking-[0.25em] uppercase text-gray-500">
              Next Project
            </p>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="text-[#50C1BA]"
            >
              <ArrowRight size={24} />
            </motion.div>
          </div>

          {/* Project Card */}
          <motion.div
            onClick={handleClick}
            className="group cursor-pointer relative overflow-hidden rounded-[24px] md:rounded-[40px]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Preview Image */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <OptimizedImage
                src={nextProjectImage}
                alt={nextProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                containerClassName="w-full h-full"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8"
              >
                <div className="flex flex-col gap-2 md:gap-4">
                  <h3 className="font-['Barlow_Semi_Condensed',sans-serif] font-medium text-[28px] md:text-[48px] lg:text-[64px] tracking-[0.05em] uppercase text-white leading-none group-hover:text-[#50C1BA] transition-colors duration-300">
                    {nextProject.title}
                  </h3>
                  <p className="font-['Lato',sans-serif] font-light text-[14px] md:text-[18px] tracking-[0.02em] text-gray-300 max-w-xl hidden md:block">
                    {nextProject.description}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#50C1BA] text-black font-['Barlow',sans-serif] font-medium text-[14px] md:text-[16px] tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-white self-start md:self-auto"
                >
                  <span>View Project</span>
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
