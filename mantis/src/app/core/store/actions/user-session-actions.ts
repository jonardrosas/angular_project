import { createAction, props } from '@ngrx/store';
import { User } from './../../models/';

export const  LOAD_USER_SESSION = '[User Record] LoadUser';
export const  SET_USER_SESSION = '[User Record] SetUser';

export const loadUserAction = createAction(
    LOAD_USER_SESSION
);

export const setUserAction = createAction(
    SET_USER_SESSION,
    props<{userInfo: User}>()
);