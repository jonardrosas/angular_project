import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordActions from '../actions/orcrecord.actions';
import { OrcRecordInterface, OrcRecordModel } from '../../models';
import { OrcRecordState } from './../state';


export const initialState: OrcRecordState = {
    orcObject: {},
    checks: [],
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
        (state, { record_id }) => {
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
);


export function reducer(state: OrcRecordState, action: Action) {
    return orcRecordReducer(state, action);
}
