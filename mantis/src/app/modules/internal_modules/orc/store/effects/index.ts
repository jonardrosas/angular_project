import { MantisRecordEffects } from './mantisrecord.effects';
import { OrcRecordEffects } from './orcrecord.effects';
import { DrcCheckEffects } from './drc.effects';

export const effects: any[] = [
    MantisRecordEffects,
    OrcRecordEffects,
    DrcCheckEffects
];

export * from './mantisrecord.effects';
export * from './orcrecord.effects';
export * from './drc.effects';
