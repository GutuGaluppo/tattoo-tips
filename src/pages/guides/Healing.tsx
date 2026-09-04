import { healingGuide as pt } from '@/content/client/healing';
import { healingGuide as en } from '@/content/client/healing.en';
import { healingGuide as es } from '@/content/client/healing.es';
import { healingGuide as de } from '@/content/client/healing.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function Healing() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
