import { defineArrayMember, defineField, defineType } from 'sanity';
import { HERO_ALIGNS } from '../options';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'overview', title: 'Overview', default: true },
    { name: 'listing', title: 'Card & ordering' },
    { name: 'hero', title: 'Hero' },
    { name: 'body', title: 'Case study' },
    { name: 'credits', title: 'Credits & links' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', type: 'string', group: 'overview', validation: rule => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'overview',
      description: 'The URL is /projects/<slug>. Changing it breaks existing links.',
      options: { source: 'title' },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      group: 'overview',
      description: 'Coming-soon projects appear on the homepage without a case study.',
      options: { list: [{ title: 'Published', value: 'published' }, { title: 'Coming soon', value: 'comingSoon' }], layout: 'radio', direction: 'horizontal' },
      initialValue: 'published',
      validation: rule => rule.required(),
    }),
    defineField({ name: 'client', type: 'reference', to: [{ type: 'client' }], group: 'overview' }),
    defineField({ name: 'agency', type: 'reference', to: [{ type: 'client' }], group: 'overview', description: 'The studio or agency the work was delivered through, if any.' }),
    defineField({ name: 'year', type: 'string', group: 'overview', validation: rule => rule.regex(/^\d{4}$/, { name: 'year' }) }),
    defineField({ name: 'category', type: 'reference', to: [{ type: 'projectCategory' }], group: 'overview', validation: rule => rule.required() }),
    defineField({ name: 'disciplines', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'skill' }] })], group: 'overview' }),
    defineField({ name: 'disciplineLabel', title: 'Discipline line', type: 'string', group: 'overview', description: 'As shown on cards, e.g. “UX / UI · Web Design · Build”.' }),
    defineField({ name: 'role', type: 'text', rows: 2, group: 'overview' }),
    defineField({ name: 'meta', title: 'Meta bar', type: 'array', of: [defineArrayMember({ type: 'metaItem' })], group: 'overview', description: 'YEAR, LOCATION, ROLE, INDUSTRY… in display order.' }),

    defineField({ name: 'statement', type: 'text', rows: 2, group: 'listing', description: 'One line for cards and the mobile menu.' }),
    defineField({ name: 'cardImage', type: 'accessibleImage', group: 'listing' }),
    defineField({
      name: 'order',
      type: 'number',
      group: 'listing',
      description: 'Browsing order. Drives the Next Project loop and the mobile menu.',
      validation: rule => rule.integer().min(0),
    }),
    defineField({ name: 'featured', type: 'boolean', group: 'listing', initialValue: false }),
    defineField({
      name: 'nextProjectOverride',
      title: 'Next project (override)',
      type: 'reference',
      to: [{ type: 'project' }],
      group: 'listing',
      description: 'Leave empty to follow the browsing order, which always loops back to the first project.',
      options: {
        filter: ({ document }) => ({
          filter: 'status == "published" && !(_id in [$id, "drafts." + $id])',
          params: { id: document._id.replace(/^drafts\./, '') },
        }),
      },
      validation: rule =>
        rule.custom((ref, context) => (ref && ref._ref === context.document?._id.replace(/^drafts\./, '') ? 'A project cannot be its own next project.' : true)),
    }),

    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'titleLines', title: 'Title lines', type: 'array', of: [defineArrayMember({ type: 'string' })], validation: rule => rule.min(1) }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'image', type: 'accessibleImage' }),
        defineField({ name: 'video', type: 'youtubeVideo', description: 'Takes priority over the image when set.' }),
        defineField({ name: 'align', type: 'string', options: { list: HERO_ALIGNS }, initialValue: 'center' }),
      ],
    }),

    defineField({
      name: 'sections',
      title: 'Case study sections',
      type: 'array',
      group: 'body',
      of: [defineArrayMember({ type: 'caseStudySection' })],
      description: 'Rendered in order by the existing case-study components. Each project keeps its own composition.',
    }),
    defineField({
      name: 'subPages',
      title: 'Sub-pages',
      type: 'array',
      group: 'body',
      of: [defineArrayMember({ type: 'projectSubPage' })],
      description: 'Gallery pages under this project, e.g. JMA Customs categories.',
      validation: rule => rule.unique(),
    }),

    defineField({ name: 'websiteUrl', title: 'Live website', type: 'url', group: 'credits', validation: rule => rule.uri({ scheme: ['https', 'http'] }) }),
    defineField({ name: 'credits', type: 'array', of: [defineArrayMember({ type: 'credit' })], group: 'credits' }),

    defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
  ],
  orderings: [{ title: 'Browsing order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', year: 'year', status: 'status', media: 'cardImage' },
    prepare: ({ title, year, status, media }) => ({ title, subtitle: [year, status === 'comingSoon' ? 'Coming soon' : null].filter(Boolean).join(' · '), media }),
  },
});
