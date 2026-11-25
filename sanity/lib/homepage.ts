import type { SanityImageSource } from '@sanity/image-url';
import type { AboutSlide } from '@/app/Home';
import { sanityFetch } from './fetch';
import { urlFor } from './image';
import { HOMEPAGE_ABOUT_GALLERY_QUERY } from './queries';

type GallerySlideResult = {
  fit: AboutSlide['fit'] | null;
  position: AboutSlide['position'] | null;
  alt: string | null;
  image: SanityImageSource;
  width: number | null;
};

/** The homepage About gallery from Sanity, or null to keep the built-in slides. */
export async function getAboutGallery(): Promise<AboutSlide[] | null> {
  const slides = await sanityFetch<GallerySlideResult[] | null>({ query: HOMEPAGE_ABOUT_GALLERY_QUERY, tags: ['homepage'] });
  const usable = slides?.filter(s => s.alt);
  if (!usable?.length) return null;
  return usable.map(s => ({
    // The frame is at most 1920 CSS px wide, so 3840px stays sharp on 2x screens; never upscale smaller originals.
    src: urlFor(s.image).width(Math.min(s.width ?? 3840, 3840)).fit('max').url(),
    alt: s.alt!,
    fit: s.fit ?? 'cover',
    position: s.position ?? 'center',
  }));
}
