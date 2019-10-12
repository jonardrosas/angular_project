import {
    MantisRecordModel,
    MantisNotesInterface,
    MantisAttachmentInterface,
    MantisRecordHistoryInterface
} from './../../models';

export interface MantisRecordState {
    mantisObject;
    mantisErrorSummary: any;
    mantisNotes: MantisNotesInterface[];
    attachments: MantisAttachmentInterface[];
    histories: MantisRecordHistoryInterface[];
    loaded: boolean;
    loading: boolean;
}

