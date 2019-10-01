import { createReducer, on, Action} from '@ngrx/store';
import * as MantisRecordAction from './../actions/mantisrecord.actions';
import { MantisRecordInterface } from './../../models';
import { MantisRecordState } from './../state';


export const initialState: MantisRecordState = {
    mantisObject: {},
    loaded: false,
    loading: false,
    mantisErrorSummary: null,
    mantisNotes: []
};

const mantisRecordReducer = createReducer(
    initialState,
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
    on(
        MantisRecordAction.getMantisErrorSummaryAction,
        (state, { id }) => {
            return { ...state };
        }
    ),
    on(
        MantisRecordAction.setMantisErrorSummaryAction,
        (state, {description}) => {
            state.mantisErrorSummary = description;
            return { ...state, loading: false };
        }
    ),
    on(
        MantisRecordAction.getMantisJobNotesAction,
        (state, { bug_id }) => {
            return { ...state };
        }
    ),
    on(
        MantisRecordAction.setMantisJobNotesAction,
        (state, { notes }) => {
            state.mantisNotes = notes;
            return { ...state, loading: false };
        }
    ),
);

export function reducer(state: MantisRecordState, action: Action) {
    return mantisRecordReducer(state, action);
}
