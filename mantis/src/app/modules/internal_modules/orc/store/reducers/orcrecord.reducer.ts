import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordActions from '../actions';
import { orcRecordInitialState, OrcRecordStateInterface } from './../state';


const orcRecordReducer = createReducer(
    orcRecordInitialState,
    on(
        orcRecordActions.getOrcObjectAction,
        state => ({ ...state, id: 1 })
    ),
    on(
        orcRecordActions.getOrcChecksAction,
        (state, { record }) => {
            state.checks = []
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
        orcRecordActions.setAssignedChecksAction,
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
    on(
        orcRecordActions.setRecordChecksAction,
        (state, { checks }) => {
            state.checks = checks;
            return { ...state, loading: false };
        }
    ),      
    on(
        orcRecordActions.setRecordChecksStatCountAction,
        (state, { checkStatCount }) => {
            state.checkStatCount = checkStatCount;
            return { ...state, loading: false };
        }
    ),      

);


export function reducer(state: OrcRecordStateInterface, action: Action) {
    return orcRecordReducer(state, action);
}
