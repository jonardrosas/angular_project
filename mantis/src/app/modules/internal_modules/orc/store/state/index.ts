import * as fromMantisRecordState from './mantisrecord.state';
import * as fromOrcRecordState from './orcrecord.state';

export interface OrcModuleState {
    mantisRecordState: fromMantisRecordState.MantisRecordState;
    orcRecordState: fromOrcRecordState.OrcRecordState;
}

export * from './mantisrecord.state';
export * from './orcrecord.state';

