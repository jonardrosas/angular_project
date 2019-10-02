interface DetailSummaryInterface {
    setHeadTable(): void;
    setMainTable(): void;
    setTableDirectories(): void;
}


export class DetailSummaryBase implements DetailSummaryInterface {
    public id = { field: 'id', headerName: 'RecordId' };
    public orcRecordId = { field: 'orc_record_id', headerName: 'RecordId' };
    public mantisId = { field: 'mantis_id', headerName: 'Mantis Id' };
    public pdbStatus = { field: 'pdb_status', headerName: 'Pdb Status' };
    public dispositionMethod = { field: 'disposition_method', headerName: 'Disposition Method' };
    public aggregateStatus = { field: 'status', headerName: 'Aggregate Status' };
    public techtype = { field: 'techtype', headerName: 'Tech' };
    public jobId = { field: 'job_id', headerName: 'Job Id' };
    public runHistory = { field: 'run_history', headerName: 'Run History' };
    public gtoReviewStatus  = { field: 'gto_review_code', headerName: 'Gto Status' };
    public dateGen = { field: 'date_generated', headerName: 'Date Gen' };
    public reviewer = { field: 'reviewer', headerName: 'Reviewer' };
    public maskset = { field: 'maskset', headerName: 'Maskset' };
    public device = { field: 'device', headerName: 'Device' };
    public primeDieName = { field: 'device', headerName: 'Prime Die Name' };
    public ptrfName = { field: 'ptrf', headerName: 'PTRF'};
    public ptsrName = { field: 'ptrf', headerName: 'PTSR'};
    public ritName = { field: 'ptrf', headerName: 'RIT'};
    public layer = { field: 'layer', headerName: 'Layer'};
    public processId = { field: 'process_id', headerName: 'Process Id'};
    public operation = { field: 'operation', headerName: 'operation'};
    public stage = { field: 'stage', headerName: 'Stage'};
    public status = { field: 'resolution', headerName: 'Status'};
    public resolutionCode  = { field: 'resolution', headerName: 'Resolution Code'};
    public fab = { field: 'fab', headerName: 'Fab'};
    public keyword = { field: 'techfile', headerName: 'Keyword'};
    public techfile = { field: 'techfile', headerName: 'Techfile'};
    public crmDid = { field: 'crmdid', headerName: 'CRMDID', colspan: 2};  // need to locate
    public ptrfStatus = { field: 'crmdid', headerName: 'PTRF Status'};  // need to locate
    public customer = { field: 'customer', headerName: 'Customer'};
    public topCell = { field: 'topcell', headerName: 'Topcell Name'}; // need to locate
    public fieldEngineer = { field: 'field_engineer', headerName: 'Field Enginer'};  // need to locate
    public tapeoutOption = { field: 'tape_option', headerName: 'Tapeout Option'};  // need to located
    public plmTechtype = { field: 'plm_techtype', headerName: 'PLM Techtype'};  // need to located
    public piyeApprover = { field: 'piye_approver', headerName: 'PIYE Approver'};  // need to located
    public processDevStatus  = { field: 'process_dev_status', headerName: 'Process Dev Satus'};  // need to located
    public fnd = { field: 'fnd_date', headerName: 'FND'};
    public rtm = { field: 'rtm_date', headerName: 'RTM'};
    public secureDevice = { field: 'secure_device', headerName: ' Secure Devicie'};  // need to located
    public deptOwner = { field: 'dept_owner', headerName: 'DEPT Owner'};  // need to located
    public genericInfo = { field: 'generic_info', headerName: 'Generic Info', colspan: 6};
    public tapeoutLayers = { field: 'tapeout_layers', headerName: 'Tapeout Layers', colspan: 6};  // need to locate
    public topupLayers = { field: 'topup_layers', headerName: 'Topup Layers', colspan: 6};  // need to locate
    public tapeoutWorkdir = { field: 'workdir', headerName: 'Tapeout Work Dir', colspan: 6};
    public logfile = { field: 'logfile', headerName: 'Logfile Directory', colspan: 6};
    public layoutPath = { field: 'lay', headerName: 'Layout Path', colspan: 6};  // need to locate
    public resultPath = { field: 'result_path', headerName: 'Result Path', colspan: 6}; // need to locate
    public inlayoutMd5Sum = { field: 'inlayout_path', headerName: 'Inlayout MD5SUM', colspan: 6};  // need to locate
    public inlayoutPath = { field: 'inlayout_path', headerName: 'Inlayout Path', colspan: 6};  // need to locate

    public columns: any[];
    public headTable: object;
    public mainTable: object;
    public directoriesTable: object;
    public additionalInfoTable: object;

    constructor() {
        this.setHeadTable();
        this.setMainTable();
        this.setTableDirectories();
    }

    setHeadTable() {
        this.headTable = {
            fields: [
                [
                    this.orcRecordId,
                    this.mantisId,
                    this.pdbStatus,
                    this.dispositionMethod,
                    this.aggregateStatus,
                ]
            ]
        };
    }

    setMainTable() {
        this.mainTable = {
            fields: [
                [
                    this.techtype,
                    this.jobId,
                    this.runHistory,
                    this.gtoReviewStatus,
                    this.dateGen,
                    this.reviewer,
                ],
                [
                    this.maskset,
                    this.primeDieName,
                    this.ptrfName,
                    this.layer,
                    this.processId,
                    this.operation,
                ],
                [
                    this.stage,
                    this.status,
                    this.fab,
                    this.techfile,
                    this.crmDid,
                ],
                [
                    this.ptrfStatus,
                    this.customer,
                    this.topCell,
                    this.fieldEngineer,
                    this.tapeoutOption,
                    this.plmTechtype,
                ],
                [
                    this.piyeApprover,
                    this.processDevStatus,
                    this.fnd,
                    this.rtm,
                    this.secureDevice,
                    this.deptOwner,
                ],
                [ this.genericInfo ],
                [ this.tapeoutLayers ],
                [ this.topupLayers ],
                [ this.tapeoutWorkdir ],
                [ this.logfile ],
                [ this.layoutPath ],
                [ this.resultPath ],
                [ this.inlayoutMd5Sum ],
                [ this.inlayoutPath ],
            ]
        };
    }

    setTableDirectories() {
        this.directoriesTable = {
            fields: [
                [this.genericInfo],
                [this.tapeoutLayers],
            ]
        };
    }


}
