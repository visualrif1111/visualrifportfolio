import type { SchemaTypeDefinition } from 'sanity';
import { project } from './documents/project';
import { client, experience, projectCategory, skill } from './documents/taxonomy';
import { homepage, navigation, siteSettings } from './singletons';
import { seo } from './objects/seo';
import { accessibleImage, gallerySlide, youtubeVideo } from './objects/media';
import { colourSwatch, credit, homepageProjectCard, homepageProjectGroup, metaItem, navItem, projectSubPage, socialLink } from './objects/content';
import {
  calloutBlock,
  caseStudySection,
  colourPaletteBlock,
  customModuleBlock,
  deliverablesBlock,
  editorialSplitBlock,
  factGridBlock,
  featureImageBlock,
  figureBlock,
  imageGridBlock,
  paragraph,
  pullQuoteBlock,
  statGridBlock,
  textBlock,
  videoBlock,
} from './objects/caseStudy';

/** One document per type; edited in place, never created or deleted from the Studio. */
export const SINGLETONS = ['siteSettings', 'navigation', 'homepage'] as const;

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  navigation,
  homepage,
  project,
  projectCategory,
  experience,
  client,
  skill,
  seo,
  accessibleImage,
  gallerySlide,
  youtubeVideo,
  metaItem,
  credit,
  colourSwatch,
  socialLink,
  navItem,
  homepageProjectCard,
  homepageProjectGroup,
  projectSubPage,
  paragraph,
  textBlock,
  figureBlock,
  featureImageBlock,
  imageGridBlock,
  videoBlock,
  pullQuoteBlock,
  statGridBlock,
  factGridBlock,
  calloutBlock,
  deliverablesBlock,
  colourPaletteBlock,
  customModuleBlock,
  editorialSplitBlock,
  caseStudySection,
];
