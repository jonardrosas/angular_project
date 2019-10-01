import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { MantisRecordState, OrcModuleState  } from './../state';
import { MantisRecordInterface, MantisRecordModel } from './../../models';

export const getMantisObjectFn = (state: MantisRecordState) => state.mantisObject;
export const getMantisSummaryFn = (state: MantisRecordState) => state.mantisErrorSummary;
export const getMantisJobNotesFn = (state: MantisRecordState) => state.mantisNotes;

// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');
const getMantisRecordState = createFeatureSelector<MantisRecordState>('mantisRecordState');
const getMantisRecordObjectState = createFeatureSelector<MantisRecordModel>('mantisObject');

export const getMantisRecordStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.mantisRecordState
);

export const getMantisRecordObjectStateSelector = createSelector(
    getMantisRecordStateSelector,
    getMantisObjectFn
);

export const getMantisRecordSummaryStateSelector = createSelector(
    getMantisRecordStateSelector,
    getMantisSummaryFn
);

export const getMantisRecordJobNotesStateSelector = createSelector(
    getMantisRecordStateSelector,
    getMantisJobNotesFn
);


