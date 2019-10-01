import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcRecordState, OrcModuleState } from './../state';

export const getOrcObjectFn = (state: OrcRecordState) => state.orcObject;
export const getOrcQuerysetFn = (state: OrcRecordState) => state.orcQuerysets;


// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');
export const getOrcRecordStateSelector = createSelector(
    getOrcModuleState,
    (state) =>  {
        return state.orcRecordState;
    }
);

