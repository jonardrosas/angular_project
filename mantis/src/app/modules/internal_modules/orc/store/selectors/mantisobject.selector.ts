import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcModuleState, MantisObjectStateInterface  } from './../state';

const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getMantisObjectStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.mantisObjectState
);

export const getMantisRecordObjectStateSelector = createSelector(
    getMantisObjectStateSelector,
    (state: MantisObjectStateInterface) => {
        return state.mantisObject;
    }
);
