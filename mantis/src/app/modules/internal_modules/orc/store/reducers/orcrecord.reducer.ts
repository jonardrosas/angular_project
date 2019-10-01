import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordActions from '../actions/orcrecord.actions';
import { OrcRecordInterface, OrcRecordModel } from '../../models';
import { OrcRecordState } from './../state';


export const initialState: OrcRecordState = {
    orcQuerysets: [],
    orcObject: {
        device: 'Test',
        id: 12,
    },
    loaded: false,
    loading: false,
};

const orcRecordReducer = createReducer(
    initialState,
    on(
        orcRecordActions.getOrcObjectAction,
        state => ({ ...state, id: 1 })
    ),
);


export function reducer(state: OrcRecordState, action: Action) {
    return orcRecordReducer(state, action);
}

export const getOrcObjectSelector = (state: OrcRecordState) => state.orcObject;
export const getOrcQuerysetSelecctor = (state: OrcRecordState) => state.orcQuerysets;

