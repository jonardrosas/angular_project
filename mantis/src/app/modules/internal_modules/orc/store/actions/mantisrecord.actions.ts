import { createAction, props } from '@ngrx/store';
import {
    MantisRecordInterface,
    MantisRecordModel,
    MantisNotesInterface,
    MantisAttachmentInterface,
    MantisRecordHistoryInterface
} from './../../models';


export const GET_MANTIS_QSET = '[Mantis Record] GetMantisQueryset';

// For object
export const GET_MANTIS_OBJECT = '[Mantis Record] GetMantisObject';
export const SET_MANTIS_OBJECT = '[Mantis Record] SetMantisObject';

// Summary section
export const GET_MANTIS_ERROR_SUMMARY = '[Mantis Record] GetMantisErrorSummary';
export const SET_MANTIS_ERROR_SUMMARY = '[Mantis Record] SetMantisErrorSummary';

// job notes section
export const GET_MANTIS_JOB_NOTES = '[Mantis Record] GetMantisJobNotes';
export const SET_MANTIS_JOB_NOTES = '[Mantis Record] SetMantisJobNotes';
export const ADD_MANTIS_JOB_NOTES = '[Mantis Record] AddMantisJobNotes';

// Job Attachment
export const GET_MANTIS_ATTACHMENT = '[Mantis Record] GetMantisJobAttachment';
export const SET_MANTIS_ATTACHMENT = '[Mantis Record] SetMantisJobAttachment';
export const ADD_MANTIS_ATTACHMENT = '[Mantis Record] AddMantisJobAttachment';
export const DELETE_MANTIS_ATTACHMENT = '[Mantis Record] DeleteMantisJobAttachment';

// Job History
export const GET_MANTIS_HISTORY = '[Mantis Record] GetMantisJobHistory';
export const SET_MANTIS_HISTORY = '[Mantis Record] SetMantisJobHistory';


// ACTION CREATORS
export const getMantisObjectAction = createAction(GET_MANTIS_OBJECT, props<{id: number}>());
export const setMantisObjectAction = createAction(SET_MANTIS_OBJECT, props<{data: MantisRecordInterface}>());

export const getMantisErrorSummaryAction = createAction(GET_MANTIS_ERROR_SUMMARY, props<{id: number}>());
export const setMantisErrorSummaryAction = createAction(SET_MANTIS_ERROR_SUMMARY, props<{description: string}>());

export const getMantisJobNotesAction = createAction(GET_MANTIS_JOB_NOTES, props<{bug: number}>());
export const setMantisJobNotesAction = createAction(SET_MANTIS_JOB_NOTES, props<{notes: MantisNotesInterface[]}>());


export const getMantisAttachmentAction = createAction(GET_MANTIS_ATTACHMENT, props<{bug_id: number}>());
export const setMantisAttachmentAction = createAction(SET_MANTIS_ATTACHMENT, props<{attachments: MantisAttachmentInterface[]}>());
export const addtMantisAttachmentAction = createAction(ADD_MANTIS_ATTACHMENT, props<{data: any}>());
export const deletetMantisAttachmentAction = createAction(DELETE_MANTIS_ATTACHMENT, props<{id: number}>());

export const getMantisHistoryAction = createAction(GET_MANTIS_HISTORY, props<{bug: number}>());
export const setMantisHistoryAction = createAction(SET_MANTIS_HISTORY, props<{histories: MantisRecordHistoryInterface[]}>());
