import Home from '@/app/Home';
import { getAboutGallery } from '../../sanity/lib/homepage';

export default async function Page() {
  const aboutGallery = await getAboutGallery();
  return <Home aboutGallery={aboutGallery ?? undefined} />;
}
