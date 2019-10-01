import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcModuleState } from './../state';

import * as fromMantisReducer from './mantisrecord.reducer';
import * as fromOrcRecordReducer from './orcrecord.reducer';

export const reducers: ActionReducerMap<OrcModuleState> = {
    mantisRecordState: fromMantisReducer.reducer,
    orcRecordState: fromOrcRecordReducer.reducer,
};





