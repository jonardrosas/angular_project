import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordStateInterface, OrcModuleState } from './../state';

export const getOrcObjectFn = (state: OrcRecordStateInterface) => state.orcObject;
export const getSoaChecksFn = (state: OrcRecordStateInterface) => state.soaChecks;

// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getOrcRecordStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.orcRecordState
);

export const getOrcRecordCheckStateSelector = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordStateInterface) => state.checks
);

export const getIstSupportTeamGroupSelector = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordStateInterface) => state.istSupportTeamGroup
);

export const getSOASupportTeamGroupSelector = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordStateInterface) => state.soaSupportTeamGroup
);

export const getRecordCheckStatCountSelector = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordStateInterface) => state.checkStatCount
);

export const getIstCheckSelector = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordStateInterface) => state.istChecks
);

export const getSoaCheckSelector = createSelector(
    getOrcRecordStateSelector,
    (state: OrcRecordStateInterface) => state.soaChecks
);



