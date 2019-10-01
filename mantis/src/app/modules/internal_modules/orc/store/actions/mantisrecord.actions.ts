import { createAction, props } from '@ngrx/store';
import { MantisRecordInterface, MantisRecordModel, MantisNotesInterface } from './../../models';



export const GET_MANTIS_OBJECT = '[Mantis Record] GetMantisObject';
export const SET_MANTIS_OBJECT = '[Mantis Record] SetMantisObject';

export const GET_MANTIS_ERROR_SUMMARY = '[Mantis Record] GetMantisErrorSummary';
export const SET_MANTIS_ERROR_SUMMARY = '[Mantis Record] SetMantisErrorSummary';

export const GET_MANTIS_JOB_NOTES = '[Mantis Record] GetMantisJobNotes';
export const SET_MANTIS_JOB_NOTES = '[Mantis Record] SetMantisJobNotes';
export const ADD_MANTIS_JOB_NOTES = '[Mantis Record] AddMantisJobNotes';

export const GET_MANTIS_QSET = '[Mantis Record] GetMantisQueryset';

export const getMantisObjectAction = createAction(GET_MANTIS_OBJECT, props<{id: number}>());
export const setMantisObjectAction = createAction(SET_MANTIS_OBJECT, props<{data: MantisRecordInterface}>());

export const getMantisErrorSummaryAction = createAction(GET_MANTIS_ERROR_SUMMARY, props<{id: number}>());
export const setMantisErrorSummaryAction = createAction(SET_MANTIS_ERROR_SUMMARY, props<{description: string}>());

export const getMantisJobNotesAction = createAction(GET_MANTIS_JOB_NOTES, props<{bug_id: number}>());
export const setMantisJobNotesAction = createAction(SET_MANTIS_JOB_NOTES, props<{notes: MantisNotesInterface[]}>());

