import HairyBastard from '@/app/HairyBastard';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/the-hairy-bastard';

export const metadata = projectMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH)} />
      <HairyBastard />
    </>
  );
}
