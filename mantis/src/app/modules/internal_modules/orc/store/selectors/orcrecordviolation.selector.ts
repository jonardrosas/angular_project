import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordViolationStateInterface, OrcModuleState } from './../state';

// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getOrcViolationStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.orcRecordViolationState
);

export const getViolationsSelector = createSelector(
    getOrcViolationStateSelector,
    (state: OrcRecordViolationStateInterface) => state.violations
);

