import Home from '@/app/Home';
import { JsonLd } from '@/app/components/JsonLd';
import { PERSON, POSITIONING, SITE_NAME, SITE_URL } from '@/app/seo';
import { getAboutGallery } from '../../sanity/lib/homepage';

export const metadata = { alternates: { canonical: '/' } };

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    { ...PERSON, description: POSITIONING },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, publisher: { '@id': PERSON['@id'] }, inLanguage: 'en-GB' },
  ],
};

export default async function Page() {
  const aboutGallery = await getAboutGallery();
  return (
    <>
      <JsonLd data={JSON_LD} />
      <Home aboutGallery={aboutGallery ?? undefined} />
    </>
  );
}
