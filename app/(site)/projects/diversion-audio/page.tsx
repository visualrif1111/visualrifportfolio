import DiversionAudio from '@/app/DiversionAudio';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/diversion-audio';

export const metadata = projectMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH)} />
      <DiversionAudio />
    </>
  );
}
