import MoncksOfDoverStreet from '@/app/MoncksOfDoverStreet';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/moncks-of-dover-street';

export const metadata = projectMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH)} />
      <MoncksOfDoverStreet />
    </>
  );
}
