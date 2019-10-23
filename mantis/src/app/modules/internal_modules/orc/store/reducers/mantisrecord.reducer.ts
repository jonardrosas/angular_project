import { createReducer, on, Action} from '@ngrx/store';
import * as MantisRecordAction from './../actions/mantisrecord.actions';
import { mantisRecordInitialState, MantisRecordStateInterface } from './../state';


const mantisRecordReducer = createReducer(
    mantisRecordInitialState,
    // on(
    //    MantisRecordAction.getMantisObjectAction,
    //    (state, { id }) => {
    //        return { ...state };
    //    }
    // ),
    // on(
    //    MantisRecordAction.setMantisObjectAction,
    //    (state, {data}) => {
    //        debugger;
    //        state.mantisObject = data;
    //        return { ...state, loading: false };
    //    }
    // ),
    // on(
    //    MantisRecordAction.getMantisErrorSummaryAction,
    //    (state, { id }) => {
    //         return { ...state };
    //    }
    // ),
    on(
        MantisRecordAction.setMantisErrorSummaryAction,
        (state, {description}) => {
            state.mantisErrorSummary = description;
            return { ...state, loading: false };
        }
    ),
    // on(
    //     MantisRecordAction.getMantisJobNotesAction,
    //    (state, { bug }) => {
    //        return { ...state };
    //    }
    // ),
    on(
        MantisRecordAction.setMantisJobNotesAction,
        (state, { notes }) => {
            state.mantisNotes = notes;
            return { ...state, loading: false };
        }
    ),
    // on(
    //    MantisRecordAction.getMantisAttachmentAction,
    //    (state, { bug_id }) => {
    //        return { ...state };
    //    }
    // ),
    on(
        MantisRecordAction.setMantisAttachmentAction,
        (state, { attachments }) => {
            state.attachments = attachments;
            return { ...state, loading: false };
        }
    ),
    // on(
    //    MantisRecordAction.getMantisHistoryAction,
    //    (state, { bug }) => {
    //        return { ...state };
    //    }
    // ),
    on(
        MantisRecordAction.setMantisHistoryAction,
        (state, { histories }) => {
            state.histories = histories;
            return { ...state, loading: false };
        }
    ),
);

export function reducer(state: MantisRecordStateInterface, action: Action) {
    return mantisRecordReducer(state, action);
}
