import { emergencyGuide as pt } from '@/content/client/emergency';
import { emergencyGuide as en } from '@/content/client/emergency.en';
import { emergencyGuide as es } from '@/content/client/emergency.es';
import { emergencyGuide as de } from '@/content/client/emergency.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function Emergency() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
