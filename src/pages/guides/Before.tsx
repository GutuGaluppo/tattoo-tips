import { beforeGuide as pt } from '@/content/client/before';
import { beforeGuide as en } from '@/content/client/before.en';
import { beforeGuide as es } from '@/content/client/before.es';
import { beforeGuide as de } from '@/content/client/before.de';
import { useLocale } from '@/i18n/useLocale';
import { GuidePage } from '../GuidePage';

const byLocale = { pt, en, es, de };

export default function Before() {
  const { locale } = useLocale();
  return <GuidePage guide={byLocale[locale]} />;
}
