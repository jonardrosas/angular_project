import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordActions from '../actions';
import { OrcRecordInterface, OrcRecordModel } from '../../models';
import { OrcRecordState } from './../state';
import { setIstGroupAction } from '../actions/orcrecord.actions';


export const initialState: OrcRecordState = {
    orcObject: {},
    checks: [],
    istSupportTeamGroup: [],
    soaSupportTeamGroup: [],
    loaded: false,
    loading: false,
    soaChecks: [],
    istChecks: [],
    distinctFields: []
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
    on(
        orcRecordActions.getSOAGroupAction,
        (state, { status }) => {
            return { ...state, id: 1 };
        }
    ),
    on(
        orcRecordActions.setSOAGroupAction,
        (state, { groups }) => {
            state.soaSupportTeamGroup = groups;
            return { ...state, loading: false };
        }
    ),       
    on(
        orcRecordActions.getDistinctFieldAction,
        (state, { record, fields }) => {
            return { ...state, id: 1 };
        }
    ),
    on(
        orcRecordActions.setDistinctFieldAction,
        (state, { data }) => {
            state.distinctFields = data;
            return { ...state, loading: false };
        }
    ),       
    on(
        orcRecordActions.setiSTChecksAction,
        (state, { checks }) => {
            state.istChecks = checks;
            return { ...state, loading: false };
        }
    ),  
    on(
        orcRecordActions.setSoaChecksAction,
        (state, { checks }) => {
            state.soaChecks = checks;
            return { ...state, loading: false };
        }
    ),      

);


export function reducer(state: OrcRecordState, action: Action) {
    return orcRecordReducer(state, action);
}
