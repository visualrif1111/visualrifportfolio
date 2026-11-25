import JMACustoms from '@/app/JMACustoms';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/jma-customs';

export const metadata = projectMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH)} />
      <JMACustoms />
    </>
  );
}
