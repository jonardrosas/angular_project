import { ActionReducerMap } from '@ngrx/store';
import { OrcModuleState } from './../state';

import * as fromMantisReducer from './mantisrecord.reducer';
import * as fromMantisResolutionReducer from './mantisresolution.reducer';
import * as fromMantisStageReducer from './mantisstage.reducer';
import * as fromOrcRecordReducer from './orcrecord.reducer';
import * as fromMantisObject from './mantisobject.reducer';
import * as fromOrcRecordCheckReducer from './orcrecordcheck.reducer';
import * as orcRecordViolationReducer from './orcrecordviolation.reducer';

export const reducers: ActionReducerMap<OrcModuleState> = {
    mantisRecordState: fromMantisReducer.reducer,
    mantisResolutionState: fromMantisResolutionReducer.reducer,
    mantisStageState: fromMantisStageReducer.reducer,
    mantisObjectState: fromMantisObject.reducer,
    orcRecordState: fromOrcRecordReducer.reducer,
    orcRecordCheckState: fromOrcRecordCheckReducer.reducer,
    orcRecordViolationState: orcRecordViolationReducer.reducer,
};





