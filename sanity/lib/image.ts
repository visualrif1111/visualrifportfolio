import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { dataset, projectId } from '../env';

const builder = createImageUrlBuilder({ projectId, dataset });

/** Image URLs honour the editor's crop and hotspot. Returns a plain string, matching how the site already uses images. */
export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto('format');
}
