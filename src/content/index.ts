import type { Guide } from './types';
import { beforeGuide } from './client/before';
import { sessionDayGuide } from './client/session-day';
import { aftercareGuide } from './client/aftercare';
import { healingGuide } from './client/healing';
import { warningSignsGuide } from './client/warning-signs';
import { emergencyGuide } from './client/emergency';
import { screeningGuide } from './artist/screening';
import { workstationGuide } from './artist/workstation';
import { duringSessionGuide } from './artist/during-session';
import { closingGuide } from './artist/closing';
import { machineSetupGuide } from './artist/machine-setup';
import { beginnerLimitsGuide } from './artist/beginner-limits';

/** Registro único dos guias publicados — usado pelas rotas e pela validação. */
export const guides: Guide[] = [
  beforeGuide,
  sessionDayGuide,
  aftercareGuide,
  healingGuide,
  warningSignsGuide,
  emergencyGuide,
  screeningGuide,
  workstationGuide,
  duringSessionGuide,
  closingGuide,
  machineSetupGuide,
  beginnerLimitsGuide,
];

/**
 * Fontes usadas fora dos guias (hubs, home). Declaradas aqui para que a
 * validação não as trate como órfãs.
 */
export const nonGuideSources = ['t101-beginners-video'] as const;

export {
  beforeGuide,
  sessionDayGuide,
  aftercareGuide,
  healingGuide,
  warningSignsGuide,
  emergencyGuide,
  screeningGuide,
  workstationGuide,
  duringSessionGuide,
  closingGuide,
  machineSetupGuide,
  beginnerLimitsGuide,
};
