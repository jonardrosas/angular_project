import { UserInfoState } from './user-session-state';
import * as fromUserSessionState from './../states/user-session-state';

export interface CoreModuleState {
    userInfoState: fromUserSessionState.UserInfoState
}

export * from './user-session-state';