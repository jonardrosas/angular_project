import { MantisRecordModel, MantisNotesInterface } from './../../models';

export interface MantisRecordState {
    mantisObject: any;
    mantisErrorSummary: any;
    mantisNotes: MantisNotesInterface[];
    loaded: boolean;
    loading: boolean;
}

