import { createReducer, on, Action} from '@ngrx/store';
import * as orcRecordCheckActions from '../actions';
import { orcRecordCheckInitialState, OrcRecordCheckStateInterface } from '../state';


const orcRecordCheckReducer = createReducer(
    orcRecordCheckInitialState,
    on(
        orcRecordCheckActions.getOrcRecordCheckObject,
        (state, { id }) => {
            return { ...state};
        }
    ),    
    on(
        orcRecordCheckActions.setOrcRecordCheckObject,
        (state, { checkObject }) => {
            state.checkObject = checkObject;
            return { ...state};
        }
    ),
    on(
        orcRecordCheckActions.setOrcRecordCheckObjectImages,
        (state, { checkImages }) => {
            state.checkImages = checkImages;
            return { ...state};
        }
    ),    
);


export function reducer(state: OrcRecordCheckStateInterface, action: Action) {
    return orcRecordCheckReducer(state, action);
}
