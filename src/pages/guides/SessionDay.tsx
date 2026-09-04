import { sessionDayGuide as pt } from '@/content/client/session-day';
import { sessionDayGuide as en } from '@/content/client/session-day.en';
import { sessionDayGuide as es } from '@/content/client/session-day.es';
import { sessionDayGuide as de } from '@/content/client/session-day.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function SessionDay() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
