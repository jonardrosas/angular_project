import { OrcCheckInterface, GroupProfileInterface } from './../../models';

export interface OrcRecordStateInterface {
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

export const orcRecordInitialState: OrcRecordStateInterface = {
    orcObject: {},
    checks: [],
    istSupportTeamGroup: [],
    soaSupportTeamGroup: [],
    loaded: false,
    loading: false,
    soaChecks: [],
    istChecks: [],
    distinctFields: []
};
