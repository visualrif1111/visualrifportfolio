import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
import { isSanityConfigured } from '../../../../sanity/env';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <p style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.
      </p>
    );
  }
  return <NextStudio config={config} />;
}
