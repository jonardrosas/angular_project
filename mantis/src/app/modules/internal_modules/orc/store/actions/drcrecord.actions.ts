import { createAction, props } from '@ngrx/store';

export const getDrcChecksAction = createAction('[Drc Record] GetDrcChecks', props<{record: number, limit: number}>());
export const getDrciSTChecksAction = createAction('[Drc Record] GetIstDrcChecks', props<{record: number, limit: number}>());
export const getDrcSoaChecksAction = createAction('[Drc Record] GetSoaDrcChecks', props<{record: number, limit: number}>());