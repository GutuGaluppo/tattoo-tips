import { aftercareGuide as pt } from '@/content/client/aftercare';
import { aftercareGuide as en } from '@/content/client/aftercare.en';
import { aftercareGuide as es } from '@/content/client/aftercare.es';
import { aftercareGuide as de } from '@/content/client/aftercare.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function Aftercare() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
