import { createReducer, on, Action} from '@ngrx/store';
import * as MantisRecordAction from './../actions/mantisrecord.actions';
import { MantisObjectInitialState, MantisObjectStateInterface} from './../state';


const mantisObjectReducer = createReducer(
    MantisObjectInitialState,
    on(
       MantisRecordAction.getMantisObjectAction,
        (state, { id }) => {
            return { ...state };
        }
    ),
    on(
       MantisRecordAction.setMantisObjectAction,
       (state, {data}) => {
            state.mantisObject = data;
            return { ...state, loading: false };
        }
    ),
);

export function reducer(state: MantisObjectStateInterface, action: Action) {
    return mantisObjectReducer(state, action);
}
