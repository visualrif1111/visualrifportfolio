import InvestInUK from '@/app/InvestInUK';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/investinuk';

export const metadata = projectMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH)} />
      <InvestInUK />
    </>
  );
}
