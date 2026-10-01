import { defineArrayMember, defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  groups: [
    { name: 'site', title: 'Site', default: true },
    { name: 'contact', title: 'Contact' },
    { name: 'seo', title: 'Default SEO' },
  ],
  fields: [
    defineField({ name: 'siteName', type: 'string', group: 'site', initialValue: 'VISUALRIF', validation: rule => rule.required() }),
    defineField({ name: 'tagline', type: 'string', group: 'site', initialValue: 'Multidisciplinary Designer' }),
    defineField({ name: 'siteUrl', title: 'Canonical site URL', type: 'url', group: 'site', initialValue: 'https://visualrif.com', validation: rule => rule.uri({ scheme: ['https'] }) }),
    defineField({ name: 'copyright', type: 'string', group: 'site', description: 'Footer line, e.g. “© 2026 VISUALRIF. All rights reserved.”' }),
    defineField({
      name: 'contact',
      type: 'object',
      group: 'contact',
      description: 'Public contact details shown in the footer and sidebar. Enquiries themselves are never stored in Sanity.',
      fields: [
        defineField({ name: 'phoneDisplay', title: 'Phone (as displayed)', type: 'string' }),
        defineField({
          name: 'phoneE164',
          title: 'Phone (for tel: links)',
          type: 'string',
          description: 'International format without spaces, e.g. +447598078923.',
          validation: rule => rule.regex(/^\+[1-9]\d{6,14}$/, { name: 'E.164 phone number' }),
        }),
        defineField({ name: 'email', type: 'email' }),
        defineField({ name: 'location', type: 'string' }),
        defineField({ name: 'socials', type: 'array', of: [defineArrayMember({ type: 'socialLink' })] }),
      ],
    }),
    defineField({ name: 'seo', title: 'Default SEO', type: 'seo', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
});

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'sidebar',
      title: 'Homepage sidebar',
      type: 'array',
      of: [defineArrayMember({ type: 'navItem' })],
      validation: rule => rule.unique(),
    }),
    defineField({ name: 'backToHomeLabel', title: 'Back to Home label', type: 'string', initialValue: 'Back to Home' }),
    defineField({ name: 'mobileContactLabel', title: 'Mobile contact label', type: 'string', initialValue: 'Contact' }),
    defineField({
      name: 'legalLinkLabels',
      title: 'Footer legal link labels',
      type: 'object',
      description: 'The legal pages themselves stay in code until their content is approved.',
      fields: [
        defineField({ name: 'privacy', type: 'string', initialValue: 'Privacy Policy' }),
        defineField({ name: 'terms', type: 'string', initialValue: 'Terms & Conditions' }),
        defineField({ name: 'gdpr', title: 'GDPR', type: 'string', initialValue: 'GDPR & Data Usage' }),
        defineField({ name: 'cookies', type: 'string', initialValue: 'Cookie Policy' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Navigation' }) },
});

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'about', title: 'About' },
    { name: 'projects', title: 'Projects' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'headlineLines', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
        defineField({ name: 'subline', type: 'text', rows: 2 }),
        defineField({ name: 'backgroundVideo', type: 'youtubeVideo' }),
      ],
    }),
    defineField({
      name: 'about',
      type: 'object',
      group: 'about',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'paragraphs', type: 'array', of: [defineArrayMember({ type: 'text', rows: 3 })] }),
        defineField({
          name: 'gallery',
          type: 'array',
          of: [defineArrayMember({ type: 'gallerySlide' })],
          description: 'Slides rotate every five seconds, in this order.',
          validation: rule => rule.min(1),
        }),
        defineField({ name: 'experience', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'experience' }] })], validation: rule => rule.unique() }),
      ],
    }),
    defineField({
      name: 'projectGroups',
      title: 'Project groups',
      type: 'array',
      group: 'projects',
      of: [defineArrayMember({ type: 'homepageProjectGroup' })],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Homepage' }) },
});
