import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordCheckActions from '../actions';
import { orcRecordViolationInitialState, OrcRecordViolationStateInterface } from '../state';


const orcRecordViolationReducer = createReducer(
    orcRecordViolationInitialState,
    on(
        orcRecordCheckActions.setOrcRecordViolationsAction,
        (state, { violations }) => {
            state.violations = violations;
            return { ...state};
        }
    ),
);


export function reducer(state: OrcRecordViolationStateInterface, action: Action) {
    return orcRecordViolationReducer(state, action);
}
