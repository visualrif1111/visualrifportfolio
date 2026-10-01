export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';
export const apiVersion = '2026-10-01';

/** Without these the site renders its built-in content and /studio explains what is missing. */
export const isSanityConfigured = Boolean(projectId && dataset);
