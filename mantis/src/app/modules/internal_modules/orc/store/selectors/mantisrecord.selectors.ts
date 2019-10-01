import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { MantisRecordState, OrcModuleState  } from './../state';
import { MantisRecordInterface, MantisRecordModel } from './../../models';

export const getMantisObjectFn = (state: MantisRecordState) => state.mantisObject;
export const getMantisSummaryFn = (state: MantisRecordState) => state.mantisErrorSummary;
export const getMantisJobNotesFn = (state: MantisRecordState) => state.mantisNotes;
export const getMantisAttachmentFn = (state: MantisRecordState) => state.attachments;
export const getMantisHistoriesFn = (state: MantisRecordState) => state.histories;

// selectors
const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

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

export const getMantisRecordJobAttachmentStateSelector = createSelector(
    getMantisRecordStateSelector,
    getMantisAttachmentFn
);

export const getMantisRecordJobHistoryStateSelector = createSelector(
    getMantisRecordStateSelector,
    getMantisHistoriesFn
);




