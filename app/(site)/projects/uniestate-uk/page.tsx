import UniestateUK from '@/app/UniestateUK';
import { JsonLd } from '@/app/components/JsonLd';
import { projectJsonLd, projectMetadata } from '@/app/seo';

const PATH = '/projects/uniestate-uk';
const TITLE = 'UNIESTATE UK — Web Design & Development Case Study | VISUALRIF';
const DESCRIPTION = "How Arif Tariq designed and developed UNIESTATE UK's Playa Viva property website: editorial UX, responsive design and CRM-integrated enquiries.";

export const metadata = projectMetadata(PATH, { title: TITLE, description: DESCRIPTION });

export default function Page() {
  return (
    <>
      <JsonLd data={projectJsonLd(PATH, 'UNIESTATE UK', DESCRIPTION)} />
      <UniestateUK />
    </>
  );
}
