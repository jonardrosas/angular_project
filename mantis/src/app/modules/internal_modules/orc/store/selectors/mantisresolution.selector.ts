import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrcModuleState, MantisResolutionStateInterface  } from '../state';

const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getMantisResolutionStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.mantisResolutionState
);

export const getMantisResultionStateSelector = createSelector(
    getMantisResolutionStateSelector,
    (state: MantisResolutionStateInterface) => {
        return state.resolutions;
    }
);


export const getMantisClosedStatusStateSelector = createSelector(
    getMantisResolutionStateSelector,
    (state: MantisResolutionStateInterface) => {
        return state.closed_status;
    }
);


export const getMantisOpenStatusStateSelector = createSelector(
    getMantisResolutionStateSelector,
    (state: MantisResolutionStateInterface) => {
        return state.open_status;
    }
);




