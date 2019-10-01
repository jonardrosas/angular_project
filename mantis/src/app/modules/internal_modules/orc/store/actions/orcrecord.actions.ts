import { createAction, props } from '@ngrx/store';

export const getOrcObjectAction = createAction('[Orc Record] GetMantisObject', props<{id: number}>());
export const getOrcChecksAction = createAction('[Orc Record] GetMantisChecks', props<{record_id: number}>());


