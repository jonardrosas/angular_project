import * as fromMantisRecordState from './mantisrecord.state';
import * as fromOrcRecordState from './orcrecord.state';
import * as fromMantisObjectState from './mantisobject.state';

export interface OrcModuleState {
    mantisRecordState: fromMantisRecordState.MantisRecordStateInterface;
    mantisObjectState: fromMantisObjectState.MantisObjectStateInterface;
    orcRecordState: fromOrcRecordState.OrcRecordStateInterface;
}

export * from './mantisrecord.state';
export * from './mantisobject.state';
export * from './orcrecord.state';

