export const MantisStageStatusModel = [
    {
        bg_color: '#F08080',
        label: 'new',
        truth: false,
        bold: false,
        status: [
            "wait",
            "notified",
            "onhold",
            "reopened",
            "closed-no-layer"
        ]
    },
    {
        bg_color: '#FFFACD',
        label: 'assigned',
        truth: false,
        bold: false,
        status: [
            "assigned"
        ]
    },
    {
        bg_color: '#FFA500',
        label: 'disposing',
        truth: false,
        bold: false,
        status: [
            "init-supportteam-comment",
            "owner-check",
            "software-debug",
            "recipe-improvement",
            "external-recipe-issue",
            "owner-check-process",
            "closed-some-layer"
        ]
    },
    {
        bg_color: '#F0E68C',
        label: 'escalatedFST',
        truth: false,
        bold: false,
        status: [
            "final-supportteam-comment"
        ]
    },
    {
        bg_color: '#F0E68C',
        label: 'escalatedSOA',
        truth: false,
        bold: false,
        status: [
            "stake-owner-action"
        ]
    },
    {
        bg_color: '#F0E68C',
        label: 'escalatedPOA',
        truth: false,
        bold: false,
        status: [
           "proto-owner-action"
        ]
    },
    {
        bg_color: '#F0E68C',
        label: 'reescalated',
        truth: false,
        bold: false,
        status: [
            "collaborator-revert-request"
        ]
    },
    {
        bg_color: '#F0E68C',
        label: 'submitting',
        truth: false,
        bold: false,
        status: [
            "pending-board-action"
        ]
    },
    {
        bg_color: '#BDB76B',
        label: 'submitted',
        truth: false,
        bold: false,
        status:[
            "pending-collaborator-action"
        ]
    },
    {
        bg_color: '#D8BFD8',
        label: 'patching',
        truth: false,
        bold: false,
        status: [
            "manual-patch"
        ]
    },
    {
        bg_color: '#90EE90',
        label: 'closed',
        truth: false,
        bold: false,
        status: [
            "passed-not-inspect-region",
            "passed-auto",
            "passed-waive",
            "passed-clean",
            "passed-patched",
            "passed-weakpoint",
            "passed-ignore",
            "passed-check-fail",
            "passed-waive-customer",
            "passed-waive-auto",
            "passed-protoowner",
            "passed-no-check",
            "passed-ignore-auto",
            "closed-all-layer",
            "waive-customer-risk",
            "waive-exceptional-arrangement",
            "pass-job-non-gating",
            "pass-outofscope-customer-fix",
            "passed-waive-registered",
            "pass-waive-outofscope",
            "pass-outofscope-customer",
            "passed-approved"
        ]
    },
//    {
//        bg_color: '#ADD8E6',
//        label: 'closed',
//        truth: false,
//        bold: false,
//        status: [
//            "fail-design",
//            "fail-recipe",
//            "fail-software",
//            "fail-upstream",
//            "fail-protoowner",
//            "fail-not-tapeout",
//            "fail-customer-fix",
//            "fail-apvrmanager"
//        ]
//    },
//    {
//        bg_color: '#D3D3D3',
//        label: 'closed',
//        truth: false,
//        bold: false,
//        status: [
//            "void-ignore",
//            "void-cancel",
//            "void-rerun",
//            "void-incomplete_job",
//            "void-no_def_db",
//            "void-no_log",
//            "void-no_opc_layer",
//            "void-cancel-ptrf",
//            "void-cancel-ptsr",
//            "void-cancel-device",
//            "void-cancel-layer"
//        ]
//    }
]