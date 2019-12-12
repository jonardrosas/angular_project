import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordCheckStateInterface, OrcModuleState } from './../state';

// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getOrcRecordStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.orcRecordCheckState
);

export const getCheckDetail = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordCheckStateInterface) => state.checkObject
);

export const getCheckDetailImages = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordCheckStateInterface) => state.checkImages
);
