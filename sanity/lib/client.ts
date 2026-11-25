import { createClient } from 'next-sanity';
import { apiVersion, dataset, isSanityConfigured, projectId } from '../env';

/** Public, published-content client. Server-only tokens are never attached here. */
export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null;
