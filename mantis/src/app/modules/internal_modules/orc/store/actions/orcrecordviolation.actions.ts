import { createAction, props } from '@ngrx/store';

export const getOrcRecordViolationsAction = createAction('[Orc Violation] GetViolation', props<{record_id: number, limit?: number, new_status__in?: string}>());
export const setOrcRecordViolationsAction = createAction('[Orc Violation] SetViolation', props<{violations: any[]}>());

