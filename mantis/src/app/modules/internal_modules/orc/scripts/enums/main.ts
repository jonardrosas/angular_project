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
export const CLOSED = 'Closed'
export const OPEN = 'Open'

export const DEFAULT = 'default';
export const ASSIGNED_IST = 'assinged_ist';
export const ASSIGNED_SOA = 'assinged_soa';
export const ASSIGNED_FST = 'assinged_fst';
export const CHECK_ZERO = 'zero_count';

// Check sections
export const TAB1: any = {
    id: DEFAULT,
    status: [OPEN],
    title: 'All Checks'
}
export const TAB2: any = {
    id: ASSIGNED_IST,
    status: ['iST'],
    field: 'reviews',
    title: 'Assigned iST'
}

export const TAB3: any = {
    id: ASSIGNED_SOA,
    status: ['SOA'],
    field: 'checkassessments',
    title: 'Assigned SOA'
}

export const TAB4: any = {
    id: ASSIGNED_FST,
    status: ['fST'],
    field: 'reviews',
    title: 'Assigned fST'
}

export const TAB5: any = {
    id: CHECK_ZERO,
    status: ['fST'],
    field: 'reviews',
    title: 'Zero Count Checks'
}

const _QUERY_FIELD = {}
_QUERY_FIELD[DEFAULT] = TAB1;
_QUERY_FIELD[ASSIGNED_IST] = TAB2;
_QUERY_FIELD[ASSIGNED_SOA] = TAB3;
_QUERY_FIELD[ASSIGNED_FST] = TAB4;
_QUERY_FIELD[CHECK_ZERO] = TAB5;

export const QUERY_FIELD = _QUERY_FIELD;

export const ALL = 'All'
export const GROUP = 'Group'
export const CHECK_STAGE = [ALL, OPEN, CLOSED]

const _CHECK_STAGE_ICONS = {}
_CHECK_STAGE_ICONS[ALL] = '<i class="fas fa-list"></i>'
_CHECK_STAGE_ICONS[CLOSED] = '<i class="fas fa-book"></i>'
_CHECK_STAGE_ICONS[OPEN] = '<i class="fas fa-book-open"></i>'
_CHECK_STAGE_ICONS[DEFAULT] = '<i class="fas fa-home"></i>'
_CHECK_STAGE_ICONS[GROUP] = '<i class="fas fa-users"></i>'
export const CHECK_STAGE_ICONS = _CHECK_STAGE_ICONS

export const JOB_REPORT_URL = '/orc/view'
export const CHECK_REPORT_URL = '/orc/check'