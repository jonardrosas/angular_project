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


// Check sections
export const TAB1: any = {
    id: 'default',
    status: ['N', 'A', 'iST', 'SOA', 'POA']
}
export const TAB2: any = {
    id: 'assinged_ist',
    status: ['iST']
}
export const TAB3: any = {
    id: 'assinged_soa',
    status: ['SOA']
}


export const QUERY_FIELD = {
    'assinged_ist': 'reviews',
    'assinged_soa': 'checkassessments'
}

export const ALL = 'All';
