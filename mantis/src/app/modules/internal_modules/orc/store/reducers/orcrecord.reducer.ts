import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordActions from '../actions';
import { OrcRecordInterface, OrcRecordModel } from '../../models';
import { OrcRecordState } from './../state';


export const initialState: OrcRecordState = {
    orcObject: {},
    checks: [],
    istSupportTeamGroup: [],
    loaded: false,
    loading: false,
};

const orcRecordReducer = createReducer(
    initialState,
    on(
        orcRecordActions.getOrcObjectAction,
        state => ({ ...state, id: 1 })
    ),
    on(
        orcRecordActions.getOrcChecksAction,
        (state, { record }) => {
            return { ...state, id: 1 };
        }
    ),
    on(
        orcRecordActions.setOrcChecksAction,
        (state, { checks }) => {
            state.checks = checks;
            return { ...state, loading: false };
        }
    ),
    on(
        orcRecordActions.getIstGroupAction,
        (state, { status }) => {
            return { ...state, id: 1 };
        }
    ),
    on(
        orcRecordActions.setIstGroupAction,
        (state, { groups }) => {
            state.istSupportTeamGroup = groups;
            return { ...state, loading: false };
        }
    ),    
);


export function reducer(state: OrcRecordState, action: Action) {
    return orcRecordReducer(state, action);
}
