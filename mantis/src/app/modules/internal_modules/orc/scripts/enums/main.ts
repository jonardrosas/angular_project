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
export const TAB1: string = 'default'
export const TAB2: string = 'assinged_ist'
export const TAB3: string = 'assinged_soa'