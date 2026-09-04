import { screeningGuide as pt } from '@/content/artist/screening';
import { screeningGuide as en } from '@/content/artist/screening.en';
import { screeningGuide as es } from '@/content/artist/screening.es';
import { screeningGuide as de } from '@/content/artist/screening.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function Screening() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
