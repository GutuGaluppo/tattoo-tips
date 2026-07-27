import { emergencyGuide } from '@/content/client/emergency';
import { GuidePage } from '../GuidePage';

export default function Emergency() {
  return <GuidePage guide={emergencyGuide} />;
}
