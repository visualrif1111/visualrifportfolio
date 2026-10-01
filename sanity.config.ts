'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes, SINGLETONS } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

const singletons = new Set<string>(SINGLETONS);

export default defineConfig({
  name: 'visualrif',
  title: 'VISUALRIF',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Singletons are opened from the desk structure, never created from "New document".
    templates: templates => templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletons.has(schemaType) ? actions.filter(({ action }) => action && !['unpublish', 'delete', 'duplicate'].includes(action)) : actions,
  },
});
