import { createAction, props } from '@ngrx/store';

export const getOrcRecordCheckObject = createAction('[Orc Checks] GetObjects', props<{id: number}>());
export const setOrcRecordCheckObject = createAction('[Orc Checks] SetObjects', props<{checkObject: any}>());

export const getOrcRecordCheckObjectImages = createAction('[Orc Checks] GetObjectsImages', props<{check: number}>());
export const setOrcRecordCheckObjectImages = createAction('[Orc Checks] SetObjectsImages', props<{checkImages: any}>());