import { OrcCheckInterface, GroupProfileInterface } from './../../models';

export interface OrcRecordState {
    orcObject: any;
    checks: OrcCheckInterface[];
    istChecks?: OrcCheckInterface[];
    soaChecks?: OrcCheckInterface[];
    loaded: boolean;
    loading: boolean;
    istSupportTeamGroup?: GroupProfileInterface[];
    soaSupportTeamGroup?: GroupProfileInterface[];
    distinctFields?: any[]
}