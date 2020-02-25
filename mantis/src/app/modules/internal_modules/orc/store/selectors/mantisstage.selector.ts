import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcModuleState, MantisStageStateInterface  } from '../state';

const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getMantisStageStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.mantisStageState
);

export const getMantisStagesStateSelector = createSelector(
    getMantisStageStateSelector,
    (state: MantisStageStateInterface) => {
        return state.stages;
    }
);





