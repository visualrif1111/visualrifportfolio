import Swiftrooms from '@/app/Swiftrooms';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/swiftrooms';

export const metadata = projectMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH)} />
      <Swiftrooms />
    </>
  );
}
