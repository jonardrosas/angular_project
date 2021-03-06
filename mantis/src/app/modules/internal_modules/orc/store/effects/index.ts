import { MantisRecordEffects } from './mantisrecord.effects';
import { MantisResolutionEffects } from './mantisresolution.effects';
import { MantisStageEffects } from './mantisstage.effects';
import { OrcRecordEffects } from './orcrecord.effects';
import { OrcRecordCheckEffects } from './orcrecordcheck.effects';
import { OrcRecordViolationEffects } from './orcrecordviolation.effects';
import { DrcCheckEffects } from './drc.effects';

export const effects: any[] = [
    MantisRecordEffects,
    OrcRecordEffects,
    DrcCheckEffects,
    OrcRecordCheckEffects,
    MantisResolutionEffects,
    MantisStageEffects,
    OrcRecordViolationEffects
];
// seems like you need to put your latest effect at the end of the list(array)

export * from './mantisrecord.effects';
export * from './mantisresolution.effects';
export * from './mantisstage.effects';
export * from './orcrecord.effects';
export * from './orcrecordcheck.effects';
export * from './orcrecordviolation.effects';
export * from './drc.effects';
