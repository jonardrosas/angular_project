import { MantisRecordEffects } from './mantisrecord.effects';
import { OrcRecordEffects } from './orcrecord.effects';
import { OrcRecordCheckEffects } from './orcrecordcheck.effects';
import { DrcCheckEffects } from './drc.effects';

export const effects: any[] = [
    MantisRecordEffects,
    OrcRecordEffects,
    DrcCheckEffects,
    OrcRecordCheckEffects
];

export * from './mantisrecord.effects';
export * from './orcrecord.effects';
export * from './orcrecordcheck.effects';
export * from './drc.effects';
