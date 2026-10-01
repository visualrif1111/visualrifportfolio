import { defineField, defineType } from 'sanity';
import { IMAGE_FITS, IMAGE_POSITIONS, VIDEO_ASPECTS, VIDEO_PRESENTATIONS } from '../options';

/** Every image on the site: crop, hotspot and required alt text. Dimensions come from the asset's metadata. */
export const accessibleImage = defineType({
  name: 'accessibleImage',
  title: 'Image',
  type: 'image',
  options: { hotspot: true, metadata: ['lqip', 'palette'] },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the image for people who cannot see it.',
      validation: rule => rule.required().error('Alt text is required.'),
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
  ],
  validation: rule => rule.required().assetRequired(),
});

/** Homepage About gallery slide: fit and focal position map to fixed classes in Home.tsx. */
export const gallerySlide = defineType({
  name: 'gallerySlide',
  title: 'Gallery slide',
  type: 'object',
  fields: [
    defineField({ name: 'image', type: 'accessibleImage' }),
    defineField({
      name: 'fit',
      type: 'string',
      options: { list: IMAGE_FITS, layout: 'radio', direction: 'horizontal' },
      initialValue: 'cover',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Focal position',
      type: 'string',
      description: 'Which edge stays visible when the image is cropped to fill the frame.',
      options: { list: IMAGE_POSITIONS },
      initialValue: 'center',
    }),
  ],
  preview: { select: { title: 'image.alt', media: 'image' } },
});

export const youtubeVideo = defineType({
  name: 'youtubeVideo',
  title: 'YouTube video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoId',
      title: 'YouTube video ID',
      type: 'string',
      description: 'The 11-character ID, e.g. _4cuwDSUX4Y from youtube.com/watch?v=_4cuwDSUX4Y.',
      validation: rule =>
        rule.required().regex(/^[A-Za-z0-9_-]{11}$/, { name: 'YouTube ID' }).error('Enter the 11-character video ID, not the full URL.'),
    }),
    defineField({ name: 'title', title: 'Accessible title', type: 'string', validation: rule => rule.required() }),
    defineField({
      name: 'presentation',
      type: 'string',
      options: { list: VIDEO_PRESENTATIONS, layout: 'radio' },
      initialValue: 'embed',
      validation: rule => rule.required(),
    }),
    defineField({ name: 'aspect', title: 'Aspect ratio', type: 'string', options: { list: VIDEO_ASPECTS }, initialValue: '16/9' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'videoId' },
  },
});
