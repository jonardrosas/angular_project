import { createAction, props } from '@ngrx/store';
import { OrcCheckModel, OrcRecordInterface, GroupProfileInterface } from '../../models';


export const GET_ORC_CHECK = '[Orc Record] GetOrcChecks';
export const SET_ORC_CHECK = '[Orc Record] SetOrcChecks';
export const GET_IST_GROUP_OPTION = '[Orc Record] GetIstGroup';
export const SET_IST_GROUP_OPTION = '[Orc Record] SetIstGroup';

export const getIstGroupAction = createAction(GET_IST_GROUP_OPTION, props<{status: string}>());
export const setIstGroupAction = createAction(SET_IST_GROUP_OPTION, props<{groups: GroupProfileInterface[]}>());

export const getOrcObjectAction = createAction('[Orc Record] GetOrcObject', props<{id: number}>());
export const setOrcObjectAction = createAction('[Orc Record] setOrcObject', props<{objects: OrcRecordInterface}>());

export const getOrcChecksAction = createAction(GET_ORC_CHECK, props<{record: number}>());
export const setOrcChecksAction = createAction(SET_ORC_CHECK, props<{checks: OrcCheckModel[]}>());