import { OrcCheckInterface } from './../../models';

export interface OrcRecordState {
    orcObject: any;
    checks: OrcCheckInterface[];
    loaded: boolean;
    loading: boolean;
}
