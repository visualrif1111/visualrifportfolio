import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  CUSTOM_MODULES,
  DEVICE_FRAMES,
  GRID_COLUMNS,
  HEADER_ALIGNS,
  HEADER_TONES,
  IMAGE_FITS,
  IMAGE_FRAMES,
  LIST_COLUMNS,
  QUOTE_VARIANTS,
  ROUNDED,
  SECTION_BORDERS,
  SECTION_PADS,
  SECTION_ROLES,
  SECTION_WIDTHS,
  SPLIT_ALIGNS,
  SPLIT_RATIOS,
} from '../options';

// Blocks map one-to-one onto the existing case-study kit in
// src/app/components/case-study. The kit owns all presentation and motion.

/** Body copy paragraphs. Bold, italic and links only — styling comes from the page. */
export const paragraph = defineType({
  name: 'paragraph',
  title: 'Paragraph',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              defineField({
                name: 'link',
                type: 'object',
                fields: [defineField({ name: 'href', type: 'url', validation: rule => rule.required().uri({ scheme: ['https', 'mailto', 'tel'] }) })],
              }),
            ],
          },
        }),
      ],
      validation: rule => rule.required().length(1).error('One paragraph per item.'),
    }),
    defineField({
      name: 'desktopOnly',
      title: 'Desktop only',
      type: 'boolean',
      description: 'Hidden on mobile to keep case studies short on small screens.',
      initialValue: false,
    }),
  ],
  preview: {
    select: { blocks: 'content', desktopOnly: 'desktopOnly' },
    prepare: ({ blocks, desktopOnly }) => {
      const text = (blocks?.[0]?.children ?? []).map((c: { text?: string }) => c.text ?? '').join('');
      return { title: text || 'Empty paragraph', subtitle: desktopOnly ? 'Desktop only' : undefined };
    },
  },
});

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text',
  type: 'object',
  fields: [defineField({ name: 'paragraphs', type: 'array', of: [defineArrayMember({ type: 'paragraph' })], validation: rule => rule.min(1) })],
  preview: { select: { first: 'paragraphs.0' }, prepare: () => ({ title: 'Text' }) },
});

const imagePresentation = [
  defineField({ name: 'rounded', type: 'string', options: { list: ROUNDED }, initialValue: 'none' }),
  defineField({ name: 'frame', title: 'Framing', type: 'string', options: { list: IMAGE_FRAMES }, initialValue: 'natural' }),
  defineField({ name: 'fit', type: 'string', options: { list: IMAGE_FITS, layout: 'radio', direction: 'horizontal' }, initialValue: 'cover' }),
  defineField({ name: 'device', title: 'Device frame', type: 'string', options: { list: DEVICE_FRAMES }, initialValue: 'none' }),
  defineField({ name: 'lightbox', title: 'Opens in lightbox', type: 'boolean', initialValue: true }),
];

export const figureBlock = defineType({
  name: 'figureBlock',
  title: 'Figure',
  type: 'object',
  fields: [defineField({ name: 'image', type: 'accessibleImage' }), ...imagePresentation],
  preview: { select: { title: 'image.alt', subtitle: 'image.caption', media: 'image' } },
});

export const featureImageBlock = defineType({
  name: 'featureImageBlock',
  title: 'Feature image',
  type: 'object',
  fields: [defineField({ name: 'image', type: 'accessibleImage' }), ...imagePresentation],
  preview: { select: { title: 'image.alt', media: 'image' }, prepare: ({ title, media }) => ({ title, subtitle: 'Feature image', media }) },
});

export const imageGridBlock = defineType({
  name: 'imageGridBlock',
  title: 'Image grid',
  type: 'object',
  fields: [
    defineField({ name: 'images', type: 'array', of: [defineArrayMember({ type: 'accessibleImage' })], options: { layout: 'grid' }, validation: rule => rule.min(2) }),
    defineField({ name: 'columns', type: 'number', options: { list: GRID_COLUMNS, layout: 'radio', direction: 'horizontal' }, initialValue: 2 }),
    ...imagePresentation,
  ],
  preview: { select: { media: 'images.0', count: 'images.length' }, prepare: ({ media }) => ({ title: 'Image grid', media }) },
});

export const videoBlock = defineType({
  name: 'videoBlock',
  title: 'Video',
  type: 'object',
  fields: [defineField({ name: 'video', type: 'youtubeVideo' }), defineField({ name: 'caption', type: 'string' })],
  preview: { select: { title: 'video.title', subtitle: 'video.videoId' } },
});

export const pullQuoteBlock = defineType({
  name: 'pullQuoteBlock',
  title: 'Pull quote',
  type: 'object',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 4, validation: rule => rule.required() }),
    defineField({ name: 'attribution', type: 'string' }),
    defineField({ name: 'variant', type: 'string', options: { list: QUOTE_VARIANTS, layout: 'radio', direction: 'horizontal' }, initialValue: 'default' }),
  ],
  preview: { select: { title: 'quote', subtitle: 'attribution' } },
});

export const statGridBlock = defineType({
  name: 'statGridBlock',
  title: 'Stat grid',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({ name: 'value', type: 'string', validation: rule => rule.required() }),
            defineField({ name: 'label', type: 'string', validation: rule => rule.required() }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
      validation: rule => rule.min(1),
    }),
    defineField({ name: 'columns', type: 'number', options: { list: GRID_COLUMNS, layout: 'radio', direction: 'horizontal' }, initialValue: 3 }),
  ],
  preview: { prepare: () => ({ title: 'Stat grid' }) },
});

export const factGridBlock = defineType({
  name: 'factGridBlock',
  title: 'Fact grid',
  type: 'object',
  fields: [defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'metaItem' })], validation: rule => rule.min(1) })],
  preview: { prepare: () => ({ title: 'Fact grid' }) },
});

export const calloutBlock = defineType({
  name: 'calloutBlock',
  title: 'Callout',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'body', type: 'text', rows: 3, validation: rule => rule.required() }),
  ],
  preview: { select: { title: 'label', subtitle: 'body' } },
});

export const deliverablesBlock = defineType({
  name: 'deliverablesBlock',
  title: 'Deliverables list',
  type: 'object',
  fields: [
    defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'string' })], validation: rule => rule.min(1) }),
    defineField({ name: 'columns', type: 'number', options: { list: LIST_COLUMNS, layout: 'radio', direction: 'horizontal' }, initialValue: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Deliverables list' }) },
});

export const colourPaletteBlock = defineType({
  name: 'colourPaletteBlock',
  title: 'Colour palette',
  type: 'object',
  fields: [defineField({ name: 'swatches', type: 'array', of: [defineArrayMember({ type: 'colourSwatch' })], validation: rule => rule.min(1) })],
  preview: { prepare: () => ({ title: 'Colour palette' }) },
});

export const customModuleBlock = defineType({
  name: 'customModuleBlock',
  title: 'Custom module',
  type: 'object',
  description: 'A bespoke, code-built section. Its content and interaction live in code.',
  fields: [defineField({ name: 'key', title: 'Module', type: 'string', options: { list: CUSTOM_MODULES }, validation: rule => rule.required() })],
  preview: { select: { title: 'key' }, prepare: ({ title }) => ({ title: CUSTOM_MODULES.find(m => m.value === title)?.title ?? title, subtitle: 'Custom module' }) },
});

/** Media column of an EditorialSplit. */
const SPLIT_MEDIA = ['figureBlock', 'imageGridBlock', 'videoBlock', 'statGridBlock', 'colourPaletteBlock', 'customModuleBlock'];
/** Text column of an EditorialSplit. */
const SPLIT_TEXT = ['textBlock', 'pullQuoteBlock', 'factGridBlock', 'calloutBlock', 'deliverablesBlock', 'statGridBlock'];

export const editorialSplitBlock = defineType({
  name: 'editorialSplitBlock',
  title: 'Editorial split',
  type: 'object',
  fieldsets: [{ name: 'layout', title: 'Layout', options: { columns: 2 } }],
  fields: [
    defineField({ name: 'media', type: 'array', of: SPLIT_MEDIA.map(type => defineArrayMember({ type })), validation: rule => rule.length(1).error('Add one media item.') }),
    defineField({ name: 'content', title: 'Text column', type: 'array', of: SPLIT_TEXT.map(type => defineArrayMember({ type })), validation: rule => rule.min(1) }),
    defineField({ name: 'ratio', title: 'Text / media columns', type: 'string', options: { list: SPLIT_RATIOS }, initialValue: '5/7', fieldset: 'layout' }),
    defineField({ name: 'align', type: 'string', options: { list: SPLIT_ALIGNS }, initialValue: 'center', fieldset: 'layout' }),
    defineField({ name: 'reverse', title: 'Media on the left', type: 'boolean', initialValue: false, fieldset: 'layout' }),
    defineField({ name: 'mobileMediaFirst', title: 'Media first on mobile', type: 'boolean', initialValue: false, fieldset: 'layout' }),
  ],
  preview: { select: { media: 'media.0.image' }, prepare: ({ media }) => ({ title: 'Editorial split', media }) },
});

const SECTION_BLOCKS = [
  'textBlock',
  'editorialSplitBlock',
  'figureBlock',
  'featureImageBlock',
  'imageGridBlock',
  'videoBlock',
  'pullQuoteBlock',
  'statGridBlock',
  'factGridBlock',
  'calloutBlock',
  'deliverablesBlock',
  'colourPaletteBlock',
  'customModuleBlock',
];

/** One case-study section: the Section wrapper, its SectionHeader, then ordered blocks. */
export const caseStudySection = defineType({
  name: 'caseStudySection',
  title: 'Section',
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    defineField({ name: 'eyebrow', type: 'string', description: 'e.g. “01 — Introduction”.', group: 'content' }),
    defineField({ name: 'title', type: 'string', group: 'content' }),
    defineField({ name: 'lead', type: 'text', rows: 2, group: 'content' }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'What this section covers. Used for summaries and structured data, never for layout.',
      options: { list: SECTION_ROLES },
      initialValue: 'other',
      group: 'content',
    }),
    defineField({ name: 'blocks', type: 'array', of: SECTION_BLOCKS.map(type => defineArrayMember({ type })), group: 'content' }),
    defineField({ name: 'anchor', title: 'Anchor id', type: 'slug', description: 'Optional in-page link target.', group: 'layout' }),
    defineField({ name: 'width', type: 'string', options: { list: SECTION_WIDTHS }, initialValue: 'default', group: 'layout' }),
    defineField({ name: 'pad', title: 'Vertical spacing', type: 'string', options: { list: SECTION_PADS }, initialValue: 'default', group: 'layout' }),
    defineField({ name: 'border', type: 'string', options: { list: SECTION_BORDERS }, initialValue: 'none', group: 'layout' }),
    defineField({ name: 'headerAlign', type: 'string', options: { list: HEADER_ALIGNS }, initialValue: 'left', group: 'layout' }),
    defineField({ name: 'headerTone', type: 'string', options: { list: HEADER_TONES }, initialValue: 'teal', group: 'layout' }),
  ],
  preview: { select: { title: 'title', subtitle: 'eyebrow' } },
});
