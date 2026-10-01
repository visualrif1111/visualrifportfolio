import { defineArrayMember, defineField, defineType } from 'sanity';
import { THEMES } from '../options';

export const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Project category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', description: 'Used in menus, e.g. “UX / UI, Web Design”.', validation: rule => rule.required() }),
    defineField({
      name: 'key',
      type: 'slug',
      description: 'Stable identifier used in code (digital, immersive, branding, 3d).',
      options: { source: 'title' },
      validation: rule => rule.required(),
    }),
    defineField({ name: 'homepageTitle', type: 'string', description: 'Heading on the homepage, e.g. “UX / UI, WEB DESIGN”.' }),
    defineField({ name: 'blurb', type: 'string' }),
    defineField({ name: 'theme', type: 'string', options: { list: THEMES, layout: 'radio', direction: 'horizontal' }, initialValue: 'dark' }),
    defineField({ name: 'order', type: 'number', validation: rule => rule.integer().min(0) }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'key.current' } },
});

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'group', type: 'string', options: { list: ['UX / UI', 'Web', 'Brand', '3D', 'Strategy', 'Print', 'Creative direction'] } }),
    defineField({ name: 'order', type: 'number', validation: rule => rule.integer().min(0) }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'group' } },
});

export const client = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: rule => rule.required() }),
    defineField({
      name: 'kind',
      type: 'string',
      description: 'A client commissioned the work; an agency is a studio it was delivered through.',
      options: { list: [{ title: 'Client', value: 'client' }, { title: 'Agency', value: 'agency' }], layout: 'radio', direction: 'horizontal' },
      initialValue: 'client',
      validation: rule => rule.required(),
    }),
    defineField({ name: 'website', type: 'url' }),
    defineField({ name: 'logo', type: 'accessibleImage' }),
    defineField({ name: 'industry', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
  ],
  preview: { select: { title: 'name', subtitle: 'kind', media: 'logo' } },
});

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'year', type: 'string', validation: rule => rule.required().regex(/^\d{4}$/, { name: 'year' }) }),
    defineField({ name: 'location', type: 'string', description: 'e.g. “VERB BRANDS APPRENTICESHIP — LONDON”.' }),
    defineField({ name: 'title', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({ name: 'focus', type: 'array', of: [defineArrayMember({ type: 'string' })], description: 'Shown as a bulleted list.' }),
    defineField({ name: 'skills', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'skill' }] })] }),
    defineField({ name: 'keyLearning', type: 'text', rows: 3 }),
  ],
  orderings: [{ title: 'Year', name: 'yearAsc', by: [{ field: 'year', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'year' } },
});
