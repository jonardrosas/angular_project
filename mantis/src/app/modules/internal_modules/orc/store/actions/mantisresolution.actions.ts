import { createAction, props } from '@ngrx/store';
import {
    MantisResolution
} from '../../models';


// For object
export const GET_MANTIS_RESOLUTION = '[Mantis Resolution] GetMantisResolution';
export const SET_MANTIS_RESOLUTION = '[Mantis Resolution] SetMantisResolution';

export const getMantisResolutionAction = createAction(GET_MANTIS_RESOLUTION, props<{id?: number, stage?: number, name?: string}>());
export const setMantisResolutionAction = createAction(SET_MANTIS_RESOLUTION, props<{resolutions: MantisResolution[]}>());


export const GET_MANTIS_OPEN_RESOLUTION = '[Mantis Resolution] GetMantisOpenResolution';
export const SET_MANTIS_OPEN_RESOLUTION = '[Mantis Resolution] SetMantisOpenResolution';

export const getMantisOpenResolutionAction = createAction(GET_MANTIS_OPEN_RESOLUTION, props<{id?: number, stage?: number, name?: string}>());
export const setMantisOpenResolutionAction = createAction(SET_MANTIS_OPEN_RESOLUTION, props<{resolutions: MantisResolution[]}>());


export const GET_MANTIS_CLOSE_RESOLUTION = '[Mantis Resolution] GetMantisCloseResolution';
export const SET_MANTIS_CLOSED_RESOLUTION = '[Mantis Resolution] SetMantisCloseResolution';

export const getMantisCloseResolutionAction = createAction(GET_MANTIS_CLOSE_RESOLUTION, props<{id?: number, stage?: number, name?: string}>());
export const setMantisCloseResolutionAction = createAction(SET_MANTIS_CLOSED_RESOLUTION, props<{resolutions: MantisResolution[]}>());
