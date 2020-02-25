import * as fromMantisRecordState from './mantisrecord.state';
import * as fromOrcRecordState from './orcrecord.state';
import * as fromOrcRecordCheckState from './orcrecordcheck.state';
import * as fromMantisObjectState from './mantisobject.state';
import * as fromMantisResolutionState from './mantisresolution.state';
import * as fromMantisStageState from './mantisstage.state';

export interface OrcModuleState {
    mantisRecordState: fromMantisRecordState.MantisRecordStateInterface;
    mantisObjectState: fromMantisObjectState.MantisObjectStateInterface;
    orcRecordState: fromOrcRecordState.OrcRecordStateInterface;
    orcRecordCheckState: fromOrcRecordCheckState.OrcRecordCheckStateInterface;
    mantisResolutionState: fromMantisResolutionState.MantisResolutionStateInterface;
    mantisStageState: fromMantisStageState.MantisStageStateInterface;
}

export * from './mantisresolution.state';
export * from './mantisstage.state';
export * from './mantisrecord.state';
export * from './mantisobject.state';
export * from './orcrecord.state';
export * from './orcrecordcheck.state';

