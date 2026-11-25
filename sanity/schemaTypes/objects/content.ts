import { defineArrayMember, defineField, defineType } from 'sanity';
import { CARD_LAYOUTS, NAV_TARGETS, SOCIAL_PLATFORMS, THEMES } from '../options';

/** A project MetaBar entry (YEAR / LOCATION / ROLE / INDUSTRY / SCOPE…). Line breaks are kept. */
export const metaItem = defineType({
  name: 'metaItem',
  title: 'Meta item',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'value', type: 'text', rows: 2, description: 'Press Enter for a line break.', validation: rule => rule.required() }),
  ],
  preview: { select: { title: 'label', subtitle: 'value' } },
});

export const credit = defineType({
  name: 'credit',
  title: 'Credit',
  type: 'object',
  fields: [
    defineField({ name: 'role', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'name', type: 'string', description: 'A person or studio. Use Organisation instead for a client or agency.' }),
    defineField({ name: 'organisation', type: 'reference', to: [{ type: 'client' }] }),
    defineField({ name: 'url', title: 'Link', type: 'url' }),
  ],
  validation: rule =>
    rule.custom(value => {
      const v = value as { name?: string; organisation?: unknown } | undefined;
      return v?.name || v?.organisation ? true : 'Add a name or an organisation.';
    }),
  preview: { select: { title: 'role', subtitle: 'name', org: 'organisation.name' }, prepare: ({ title, subtitle, org }) => ({ title, subtitle: subtitle ?? org }) },
});

export const colourSwatch = defineType({
  name: 'colourSwatch',
  title: 'Colour swatch',
  type: 'object',
  fields: [
    defineField({
      name: 'hex',
      type: 'string',
      validation: rule => rule.required().regex(/^#[0-9A-Fa-f]{6}$/, { name: 'hex colour' }).error('Use a 6-digit hex value such as #50C1BA.'),
    }),
    defineField({ name: 'name', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'role', type: 'string' }),
  ],
  preview: { select: { title: 'name', subtitle: 'hex' } },
});

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  fields: [
    defineField({ name: 'platform', type: 'string', options: { list: SOCIAL_PLATFORMS }, validation: rule => rule.required() }),
    defineField({ name: 'url', type: 'url', validation: rule => rule.required().uri({ scheme: ['https'] }) }),
  ],
  preview: { select: { title: 'platform', subtitle: 'url' } },
});

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation item',
  type: 'object',
  fields: [
    defineField({
      name: 'target',
      type: 'string',
      description: 'The homepage section this item scrolls to.',
      options: { list: NAV_TARGETS },
      validation: rule => rule.required(),
    }),
    defineField({ name: 'label', type: 'string', validation: rule => rule.required() }),
  ],
  preview: { select: { title: 'label', subtitle: 'target' } },
});

export const homepageProjectCard = defineType({
  name: 'homepageProjectCard',
  title: 'Project card',
  type: 'object',
  fields: [
    defineField({ name: 'project', type: 'reference', to: [{ type: 'project' }], validation: rule => rule.required() }),
    defineField({
      name: 'layout',
      type: 'string',
      description: 'Card size in the grid. Coming-soon projects show “Coming Soon” on hover automatically.',
      options: { list: CARD_LAYOUTS, layout: 'radio', direction: 'horizontal' },
      initialValue: 'full',
      validation: rule => rule.required(),
    }),
    defineField({ name: 'video', title: 'Hover video', type: 'youtubeVideo', description: 'Optional video that opens in the card.' }),
  ],
  preview: {
    select: { title: 'project.title', subtitle: 'layout', media: 'project.cardImage' },
  },
});

export const homepageProjectGroup = defineType({
  name: 'homepageProjectGroup',
  title: 'Project group',
  type: 'object',
  fields: [
    defineField({ name: 'category', type: 'reference', to: [{ type: 'projectCategory' }], validation: rule => rule.required() }),
    defineField({ name: 'title', type: 'string', description: 'Defaults to the category’s homepage title.' }),
    defineField({ name: 'blurb', type: 'string' }),
    defineField({ name: 'theme', type: 'string', options: { list: THEMES, layout: 'radio', direction: 'horizontal' }, initialValue: 'dark' }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [defineArrayMember({ type: 'homepageProjectCard' })],
      validation: rule => rule.min(1),
    }),
  ],
  preview: { select: { title: 'title', category: 'category.homepageTitle' }, prepare: ({ title, category }) => ({ title: title ?? category }) },
});

/** A gallery sub-page of a project, e.g. /projects/jma-customs/custom-clothing. */
export const projectSubPage = defineType({
  name: 'projectSubPage',
  title: 'Sub-page',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: rule => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'Part of the public URL. Changing it breaks existing links.',
      options: { source: (_doc, context) => (context.parent as { title?: string })?.title ?? '' },
      validation: rule => rule.required(),
    }),
    defineField({ name: 'number', type: 'string', description: 'Displayed index, e.g. 01.' }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'detail', type: 'text', rows: 4 }),
    defineField({ name: 'images', type: 'array', of: [defineArrayMember({ type: 'accessibleImage' })], options: { layout: 'grid' } }),
  ],
  preview: { select: { title: 'title', subtitle: 'slug.current' } },
});
