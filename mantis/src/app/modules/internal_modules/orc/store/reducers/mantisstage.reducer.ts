import { createReducer, on, Action} from '@ngrx/store';
import * as MantisStageAction from '../actions/mantisstage.actions';
import { MantisStageInitialState, MantisStageStateInterface } from '../state';


const mantisStageReducer = createReducer(
    MantisStageInitialState,
    on(
        MantisStageAction.getMantisStageAction,
        (state) => {
            return { ...state, loading: true };
        }
    ),
    on(
       MantisStageAction.setMantisStageAction,
       (state, {stages}) => {
            state.stages = stages;
            return { ...state, loading: false };
        }

    ),
);

export function reducer(state: MantisStageStateInterface, action: Action) {
    return mantisStageReducer(state, action);
}
