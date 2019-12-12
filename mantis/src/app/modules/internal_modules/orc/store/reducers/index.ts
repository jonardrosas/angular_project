import { ActionReducerMap } from '@ngrx/store';
import { OrcModuleState } from './../state';

import * as fromMantisReducer from './mantisrecord.reducer';
import * as fromOrcRecordReducer from './orcrecord.reducer';
import * as fromMantisObject from './mantisobject.reducer';
import * as fromOrcRecordCheckReducer from './orcrecordcheck.reducer';

export const reducers: ActionReducerMap<OrcModuleState> = {
    mantisRecordState: fromMantisReducer.reducer,
    mantisObjectState: fromMantisObject.reducer,
    orcRecordState: fromOrcRecordReducer.reducer,
    orcRecordCheckState: fromOrcRecordCheckReducer.reducer
};





