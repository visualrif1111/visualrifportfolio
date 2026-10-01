import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

type WebhookPayload = { _type?: string; slug?: string };

/**
 * Sanity GROQ webhook target. Configure it in sanity.io/manage with the
 * projection {_type, "slug": slug.current} and the SANITY_REVALIDATE_SECRET
 * as its secret. Fetches are tagged by document type (and type:slug), so a
 * publish refreshes only the pages that read that content.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    console.error('[sanity] revalidate called without SANITY_REVALIDATE_SECRET configured');
    return NextResponse.json({ message: 'Not configured' }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret, true);
    if (!isValidSignature) return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    if (!body?._type || !/^[A-Za-z0-9_-]+$/.test(body._type)) return NextResponse.json({ message: 'Bad request' }, { status: 400 });

    const tags = [body._type, ...(body.slug ? [`${body._type}:${body.slug}`] : [])];
    tags.forEach(tag => revalidateTag(tag, 'max'));
    return NextResponse.json({ revalidated: tags });
  } catch (error) {
    console.error('[sanity] revalidate failed', { message: error instanceof Error ? error.message : 'unknown' });
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
