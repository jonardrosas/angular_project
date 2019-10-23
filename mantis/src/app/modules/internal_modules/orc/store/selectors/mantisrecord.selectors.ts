import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MantisRecordStateInterface, OrcModuleState } from './../state';

const getOrcModuleState = createFeatureSelector<OrcModuleState>('orc');

export const getMantisRecordStateSelector = createSelector(
    getOrcModuleState,
    (state: OrcModuleState) => state.mantisRecordState
);

export const getMantisRecordSummaryStateSelector = createSelector(
    getMantisRecordStateSelector,
    (state: MantisRecordStateInterface) => state.mantisErrorSummary
);

export const getMantisRecordJobNotesStateSelector = createSelector(
    getMantisRecordStateSelector,
    (state: MantisRecordStateInterface) => state.mantisNotes
);

export const getMantisRecordJobAttachmentStateSelector = createSelector(
    getMantisRecordStateSelector,
    (state: MantisRecordStateInterface) => state.attachments
);

export const getMantisRecordJobHistoryStateSelector = createSelector(
    getMantisRecordStateSelector,
    (state: MantisRecordStateInterface) => state.histories
);




