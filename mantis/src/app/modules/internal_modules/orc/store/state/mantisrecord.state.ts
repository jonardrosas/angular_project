import {
    MantisNotesInterface,
    MantisAttachmentInterface,
    MantisRecordHistoryInterface
} from './../../models';

export interface MantisRecordStateInterface {
    mantisErrorSummary: any;
    mantisNotes: MantisNotesInterface[];
    attachments: MantisAttachmentInterface[];
    histories: MantisRecordHistoryInterface[];
    loaded: boolean;
    loading: boolean;
}

export const mantisRecordInitialState: MantisRecordStateInterface = {
    // mantisObject: {},
    loaded: false,
    loading: false,
    histories: [],
    attachments: [],
    mantisErrorSummary: null,
    mantisNotes: []
};