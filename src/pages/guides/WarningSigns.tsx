import { warningSignsGuide as pt } from '@/content/client/warning-signs';
import { warningSignsGuide as en } from '@/content/client/warning-signs.en';
import { warningSignsGuide as es } from '@/content/client/warning-signs.es';
import { warningSignsGuide as de } from '@/content/client/warning-signs.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function WarningSigns() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
