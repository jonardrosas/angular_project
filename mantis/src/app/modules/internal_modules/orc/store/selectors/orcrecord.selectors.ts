import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordState, OrcModuleState } from './../state';

export const getOrcObjectFn = (state: OrcRecordState) => state.orcObject;
export const getOrcCheckFn = (state: OrcRecordState) => state.checks;
export const getIstSupportTeamGroupFn = (state: OrcRecordState) => state.istSupportTeamGroup;


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


export const getIstSupportTeamGroupSelector = createSelector(
    getOrcRecordStateSelector,
    getIstSupportTeamGroupFn
);

