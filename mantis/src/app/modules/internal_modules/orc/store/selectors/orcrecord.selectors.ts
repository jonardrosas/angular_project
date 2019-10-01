import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordState, OrcModuleState } from './../state';

export const getOrcObjectFn = (state: OrcRecordState) => state.orcObject;
export const getOrcCheckFn = (state: OrcRecordState) => state.checks;


// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getOrcRecordStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.orcRecordState
);

export const getOrcRecordCheckStateSelector = createSelector(
    getOrcRecordStateSelector,
    getOrcCheckFn
);

