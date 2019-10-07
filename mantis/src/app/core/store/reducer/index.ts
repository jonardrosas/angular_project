import { ActionReducerMap } from '@ngrx/store';
import { CoreModuleState } from './../states';

import * as fromUserInfoReducer from './user-session-reducer';

export const reducers: ActionReducerMap<CoreModuleState> = {
    userInfoState: fromUserInfoReducer.reducer
};
