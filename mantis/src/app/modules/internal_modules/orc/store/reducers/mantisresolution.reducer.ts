import { createReducer, on, Action} from '@ngrx/store';
import * as MantisResolutionAction from '../actions/mantisresolution.actions';
import { MantisResolutionInitialState, MantisResolutionStateInterface } from '../state';


const mantisResolutionReducer = createReducer(
    MantisResolutionInitialState,
    on(
        MantisResolutionAction.getMantisResolutionAction,
        (state) => {
            return { ...state, loading: true };
        }
    ),
    on(
        MantisResolutionAction.setMantisResolutionAction,
        (state, { resolutions }) => {
            state.resolutions = resolutions;
            state.closed_status = resolutions
            .filter((data) => data.stage === 90 )
            .map(
                (data) => data.symbol
            )
            state.open_status = resolutions
            .filter((data) => data.stage != 90 )
            .map(
                (data) => data.symbol
            ) 
            return { ...state, loading: false };
        }
    ),
);

export function reducer(state: MantisResolutionStateInterface, action: Action) {
    return mantisResolutionReducer(state, action);
}
