export enum STATUS_GROUP {
    PASS = 'Pass',
    FAIL = 'Fail',
    PATCHING = 'Patching',
    DISPOSING = 'Disposing',
    NEW = 'New',
    ASSIGNED = 'Assigned',
    SOA = 'EscalatedSOA',
    FST = 'EscalatedfST',
    IST = 'EscalatedsST'
}

export const DEFAULT = 'default';
export const ASSIGNED_IST = 'assinged_ist';
export const ASSIGNED_SOA = 'assinged_soa';
export const ASSIGNED_FST = 'assinged_fst';

// Check sections
export const TAB1: any = {
    id: DEFAULT,
    status: ['N', 'A', 'iST', 'SOA', 'POA']
}
export const TAB2: any = {
    id: ASSIGNED_IST,
    status: 'iST',
    field: 'reviews'
}

export const TAB3: any = {
    id: ASSIGNED_SOA,
    status: 'SOA',
    field: 'checkassessments'
}

export const TAB4: any = {
    id: ASSIGNED_FST,
    status: 'fST',
    field: 'reviews'
}

const _QUERY_FIELD = {}
_QUERY_FIELD[ASSIGNED_IST] =  TAB2;
_QUERY_FIELD[ASSIGNED_SOA] =  TAB3;
_QUERY_FIELD[ASSIGNED_FST] =  TAB4;

export const QUERY_FIELD = _QUERY_FIELD;

export const ALL = 'All'

export const JOB_REPORT_URL = '/orc/view'
export const CHECK_REPORT_URL = '/orc/check'