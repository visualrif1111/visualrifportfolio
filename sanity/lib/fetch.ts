import type { QueryParams } from 'next-sanity';
import { client } from './client';

/**
 * Fetches published content, cached until a Sanity webhook revalidates one of
 * its tags (see app/api/revalidate). Returns null when Sanity is not configured
 * or the request fails, so callers fall back to the site's built-in content.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: false, tags } });
  } catch (error) {
    console.error('[sanity] fetch failed', { tags, message: error instanceof Error ? error.message : 'unknown' });
    return null;
  }
}
