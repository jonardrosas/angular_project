import { createReducer, on, Action} from '@ngrx/store';
import { User } from '../../models';
import { CoreModuleState, SessionState } from '../states';
import * as coreModAction from '../actions';

export const initialState: SessionState = {
    userSession: null,
    selectedGroup: null,
};

const SessionReducer = createReducer(
    initialState,
    on(
        coreModAction.loadUserSessionAction,
        (state) => ({ ...state })
    ),
    on(
        coreModAction.setUserSessionAction,
        (state, {userSession}) => {
            debugger;
            state.userSession = userSession;
            return { ...state, loading: false };
        }
    ),
)

export function reducer(state, action: Action) {
    return SessionReducer(state, action);
}

