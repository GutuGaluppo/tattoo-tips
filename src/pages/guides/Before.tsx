import { beforeGuide } from '@/content/client/before';
import { GuidePage } from '../GuidePage';

export default function Before() {
  return <GuidePage guide={beforeGuide} />;
}
