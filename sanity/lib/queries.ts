import { defineQuery } from 'next-sanity';

export const HOMEPAGE_ABOUT_GALLERY_QUERY = defineQuery(`
  *[_id == "homepage"][0].about.gallery[defined(image.asset)]{
    fit,
    position,
    "alt": image.alt,
    "image": image{asset, crop, hotspot},
    "width": image.asset->metadata.dimensions.width
  }
`);
