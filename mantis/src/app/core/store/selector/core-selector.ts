import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { SessionState, CoreModuleState } from '../states';


export const getUserSessionFn = (state: SessionState) => state.userSession;

const getCoreModuleState = createFeatureSelector<CoreModuleState>('core');

export const getCoreStateSelector = createSelector(
    getCoreModuleState,
    (state: CoreModuleState) => state.sessionState
);

export const getOrcRecordCheckStateSelector = createSelector(
    getCoreStateSelector,
    getUserSessionFn
);
