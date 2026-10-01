import { defineField, defineType } from 'sanity';
import { STRUCTURED_DATA_TYPES } from '../options';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fieldsets: [
    { name: 'social', title: 'Social sharing', options: { collapsible: true, collapsed: true } },
    { name: 'indexing', title: 'Indexing', options: { columns: 3 } },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'SEO title',
      type: 'string',
      description: 'Shown in search results and the browser tab. Aim for 30–60 characters.',
      validation: rule => [
        rule.max(70).warning('Titles over 60 characters are usually truncated in search results.'),
        rule.min(15).warning('Very short titles waste search result space.'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Aim for 70–160 characters.',
      validation: rule => [
        rule.max(160).warning('Descriptions over 160 characters are usually truncated.'),
        rule.min(70).warning('Short descriptions are often replaced by text Google picks itself.'),
      ],
    }),
    defineField({ name: 'focusKeyword', title: 'Focus keyword', type: 'string' }),
    defineField({
      name: 'secondaryKeywords',
      title: 'Secondary keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Leave empty to use this page’s own URL.',
      validation: rule => rule.uri({ scheme: ['https'] }),
    }),
    defineField({ name: 'ogTitle', title: 'OG title', type: 'string', fieldset: 'social', description: 'Defaults to the SEO title.' }),
    defineField({
      name: 'ogDescription',
      title: 'OG description',
      type: 'text',
      rows: 2,
      fieldset: 'social',
      description: 'Defaults to the meta description.',
      validation: rule => rule.max(200).warning('Most platforms show about 200 characters.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG image',
      type: 'image',
      fieldset: 'social',
      description: '1200 × 630 px.',
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: rule => rule.required() })],
    }),
    defineField({ name: 'index', title: 'Index', type: 'boolean', initialValue: true, fieldset: 'indexing' }),
    defineField({ name: 'follow', title: 'Follow', type: 'boolean', initialValue: true, fieldset: 'indexing' }),
    defineField({
      name: 'includeInSitemap',
      title: 'Include in sitemap',
      type: 'boolean',
      initialValue: true,
      fieldset: 'indexing',
      validation: rule =>
        rule.custom((include, context) => {
          const parent = context.parent as { index?: boolean } | undefined;
          return include && parent?.index === false ? 'A page set to noindex should not be in the sitemap.' : true;
        }).warning(),
    }),
    defineField({
      name: 'structuredDataType',
      title: 'Structured data type',
      type: 'string',
      options: { list: STRUCTURED_DATA_TYPES },
      initialValue: 'none',
      description: 'Only choose a type that matches what is visible on the page.',
    }),
  ],
});
