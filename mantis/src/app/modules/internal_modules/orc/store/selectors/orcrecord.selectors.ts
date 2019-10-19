import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordState, OrcModuleState } from './../state';

export const getOrcObjectFn = (state: OrcRecordState) => state.orcObject;
export const getOrcCheckFn = (state: OrcRecordState) => state.checks;
export const getIstSupportTeamGroupFn = (state: OrcRecordState) => state.istSupportTeamGroup;
export const getSOASupportTeamGroupFn = (state: OrcRecordState) => state.soaSupportTeamGroup;
export const getdistinctFieldsFn = (state: OrcRecordState) => state.distinctFields;


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


export const getSOASupportTeamGroupSelector = createSelector(
    getOrcRecordStateSelector,
    getSOASupportTeamGroupFn
);

export const getDistinctFieldsFnSelector = createSelector(
    getOrcRecordStateSelector,
    getdistinctFieldsFn
);

