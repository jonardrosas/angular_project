import { OrcCheckInterface, GroupProfileInterface, OrcCheckZeroInterface } from './../../models';

export interface OrcRecordStateInterface {
    orcObject: any;
    checks: OrcCheckInterface[];
    checkszero: OrcCheckZeroInterface[];
    istChecks?: OrcCheckInterface[];
    soaChecks?: OrcCheckInterface[];
    loaded: boolean;
    loading: boolean;
    istSupportTeamGroup?: GroupProfileInterface[];
    soaSupportTeamGroup?: GroupProfileInterface[];
    checkStatCount?: any;
}

export const orcRecordInitialState: OrcRecordStateInterface = {
    orcObject: {},
    checks: [],
    checkszero: [],
    istSupportTeamGroup: [],
    soaSupportTeamGroup: [],
    loaded: false,
    loading: false,
    soaChecks: [],
    istChecks: [],
    checkStatCount: {}
};
