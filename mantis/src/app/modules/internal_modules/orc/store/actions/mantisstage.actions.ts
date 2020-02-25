import { createAction, props } from '@ngrx/store';
import {
    MantisStage
} from '../../models';


// For object
export const GET_MANTIS_STAGE = '[Mantis Stage] GetMantisStage';
export const SET_MANTIS_STAGE = '[Mantis Stage] SetMantisStage';

export const getMantisStageAction = createAction(GET_MANTIS_STAGE, props<{id?: number,  name?: string}>());
export const setMantisStageAction = createAction(SET_MANTIS_STAGE, props<{stages: MantisStage[]}>());


