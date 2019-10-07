import { createReducer, on, Action} from '@ngrx/store';
import { User } from './../../models';
import { UserInfoState } from './../states/';
import * as coreModAction from './../actions';


export const initialState: UserInfoState = {
    userInfo: {
        ACL_permissions: [],
        user_permissions: [],
        title: null,
        ACL_gid: null,
        ACL_gname: null,
        user: null,
        ACL_techtype: null,
        user_profile_img_ur: null,
        user_id: null,
        ACL_sub_group: null,
        status_code: 401,
        ACL_fab: null,
        name: '',
    },
    selectedGroup: null,
};


const UserSessionReducer = createReducer(
    initialState,
    on(
        coreModAction.loadUserAction,
        (state) => ({ ...state })
    ),
    on(
        coreModAction.setUserAction,
        (state, {userInfo}) => {
            state.userInfo = userInfo;
            return { ...state, loading: false };
        }
    ),
)


export function reducer(state, action: Action) {
    return UserSessionReducer(state, action);
}

