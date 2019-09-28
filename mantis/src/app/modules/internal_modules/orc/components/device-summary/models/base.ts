
class DetailSummaryBaseColumns {
    public id = { field: 'id', headerName: 'RecordId' };
    public orcRecordId = { field: 'orc_record_id', headerName: 'RecordId' };
    public mantisId = { field: 'mantis_id', headerName: 'Mantis Id' };
    public pdbStatus = { field: 'pdb_status', headerName: 'Pdb Status' };
    public dispositionMethod = { field: 'disposition_method', headerName: 'Disposition Method' };
    public aggregateStatus = { field: 'status', headerName: 'Aggregate Status' };
    public techtype = { field: 'techtype', headerName: 'Tech' };
    public jobId = { field: 'job_id', headerName: 'Job Id' };
    public runHistory  = { field: 'run_history', headerName: 'Run History' };
    public gtoReviewStatus  = { field: 'gto_review_status', headerName: 'Gto Status' };
    public dateGen  = { field: 'date_generated', headerName: 'Date Gen' };
    public reviewer  = { field: 'reviewer', headerName: 'Reviewer' };
    public maskset  = { field: 'maskset', headerName: 'Maskset' };
    public device  = { field: 'device', headerName: 'Device' };
    public primeDieName  = { field: 'device', headerName: 'Prime Die Name' };
    public ptrfName  = { field: 'ptrf', headerName: 'PTRF'};
    public ptsrName  = { field: 'ptrf', headerName: 'PTSR'};
    public ritName  = { field: 'ptrf', headerName: 'RIT'};
    public layer  = { field: 'layer', headerName: 'Layer'};
    public processId  = { field: 'process_id', headerName: 'Process Id'};
    public operation  = { field: 'operation', headerName: 'operation'};
    public stage  = { field: 'stage', headerName: 'Stage'};
    public status  = { field: 'resolution', headerName: 'Status'};
    public resolutionCode  = { field: 'resolution', headerName: 'Resolution Code'};
    public fab  = { field: 'fab', headerName: 'Fab'};
    public keyword  = { field: 'techfile', headerName: 'Keyword'};
    public techfile  = { field: 'techfile', headerName: 'Techfile'};
    public crmDid  = { field: 'crmdid', headerName: 'CRMDID'};  // need to locate
    public ptrfStatus  = { field: 'crmdid', headerName: 'CRMDID'};  // need to locate
    public customer  = { field: 'customer', headerName: 'Customer'};
    public topCell  = { field: 'topcell', headerName: 'Topcell Name'}; // need to locate
    public fieldEngineer  = { field: 'field_engineer', headerName: 'Field Enginer'};  // need to locate
    public tapeoutOption  = { field: 'tape_option', headerName: 'Tapeout Option'};  // need to located
    public plmTechtype  = { field: 'plm_techtype', headerName: 'PLM Techtype'};  // need to located
    public piyeApprover  = { field: 'piye_approver', headerName: 'PIYE Approver'};  // need to located
    public processDevStatus  = { field: 'process_dev_status', headerName: 'Process Dev Satus'};  // need to located
    public fnd  = { field: 'fnd_date', headerName: 'FND'};
    public rtm  = { field: 'rtm_date', headerName: 'RTM'};
    public secureDevice = { field: 'secure_device', headerName: ' Secure Devicie'};  // need to located
    public deptOwner = { field: 'dept_owner', headerName: 'DEPT Owner'};  // need to located
    public genericInfo = { field: 'generic_info', headerName: 'Generic Info'};
    public tapeoutLayers = { field: 'tapeout_layers', headerName: 'Tapeout Layers'};  // need to locate
    public topupLayers = { field: 'topup_layers', headerName: 'Topup Layers'};  // need to locate
    public tapeoutWorkdir = { field: 'workdir', headerName: 'Tapeout Work Dir'};
    public logfile = { field: 'logfile', headerName: 'Logfile Directory'};
    public layoutPath = { field: 'lay', headerName: 'Layout Path'};  // need to locate
    public resultPath = { field: 'result_path', headerName: 'Result Path'}; // need to locate
    public inlayoutPath = { field: 'inlayout_path', headerName: 'Inlayout Path'};  // need to locate

    public row1: any[];
    public row2: any[];
    public row3: any[];
    public row4: any[];
    public row5: any[];
    public row6: any[];
    public columns: any[];

}

export { DetailSummaryBaseColumns };
