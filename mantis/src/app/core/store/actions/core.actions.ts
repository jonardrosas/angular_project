import { createAction, props } from '@ngrx/store';
import { User, LoginCredentials } from './../../models/';

export const  LOGIN_USER = '[Login Page] Login';
export const  LOGOUT_USER = '[Login Page] Logout';
export const  GET_USER_SESSION = '[User Record] GetUserSession';
export const  SET_USER_SESSION = '[User Record] SetUserSession';

export const loadUserSessionAction = createAction(
    GET_USER_SESSION
);

export const setUserSessionAction = createAction(
    SET_USER_SESSION,
    props<{userSession}>()
);
