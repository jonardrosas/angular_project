import { checkStatusMapping } from './../common';


interface DetailSummaryInterface {
    mantisInfoTable;
    cadInfoTable;
    directoriesTable;
}

export class CommonSummaryField {
    public id = { field: 'orc_record_id', headerName: 'RecordId' };
    public orcRecordId = { field: 'orc_record__id', headerName: 'RecordId' };
    public mantisId = { field: 'id', headerName: 'Mantis Id' };
    public pdbStatus = { field: 'pdb_status', headerName: 'Pdb Status' };
    public dispositionMethod = { field: 'orc_record__orc_ext__disposition_method', headerName: 'Disposition Method' };
    public aggregateStatus = { field: 'orc_record__status', headerName: 'Aggregate Status',
        cellTemplate: (val: string, row?: any, extraMap?: any)=>{
            return `<span class="p-0 pl-1 pr-1 btn btn-sm ${checkStatusMapping[val].btnClass}">${val}</span>`;
        }
    };
    public techtype = { field: 'techtype', headerName: 'Tech' };
    public jobId = { field: 'job_id', headerName: 'Job Id' };
    public runHistory = { field: 'run_history', headerName: 'Run History' };
    public gtoReviewStatus  = { field: 'gto_status', headerName: 'Gto Status' };
    public dateGen = { field: 'date_gen_string', headerName: 'Date Gen' };
    public reviewer = { field: 'handler__username', headerName: 'Reviewer' };
    public maskset = { field: 'maskset', headerName: 'Maskset' };
    public device = { field: 'device', headerName: 'Device' };
    public primeDieName = { field: 'device', headerName: 'Prime Die Name' };
    public ritName = { field: 'ptrf', headerName: 'RIT'};
    public layer = {
        field: 'layer',
        headerName: 'Layer',
        cellTemplate: (val: string, row?: any, extraMap?: any)=>{
            return `${val}[${row.layer_rev || ''}]`;
        }
    };
    public layerRev = { field: 'layer_rev', headerName: 'Layer Rev'};
    public processId = { field: 'process_id', headerName: 'Process Id'};
    public operation = { field: 'operation', headerName: 'Operation'};
    public stage = {
        field: 'status_code',
        headerName: 'Stage', 
        cellTemplate: (val: string, row?: any, extraMap?: any)=>{
            return `<span class="rounded pl-1 pr-1 border" style="background-color: ${extraMap.stage[val].color}">${extraMap.stage[val].name}</span>`;
        }    
    };
    public status = {
        field: 'resolution_code',
        headerName: 'Status',
        cellTemplate: (val: string, row?: any, extraMap?: any)=>{
            return `<span class="rounded pl-1 pr-1 border" style="background-color: ${extraMap.status[val].color}">${extraMap.status[val].name}</span>`;
        }            

    };
    public resolutionCode  = { field: 'resolution_code', headerName: 'Resolution Code'};
    public fab = { field: 'orc_record__orc_ext__fab', headerName: 'Fab'};
    public keyword = { field: 'orc_record__techfile', headerName: 'Keyword'};
    public techfile = { field: 'orc_record__techfile', headerName: 'Techfile'};
    public crmDid = { field: 'orc_record__tapeout_crmdid', headerName: 'CRMDID'};
    public piyeApprover = { field: 'piye_approver', headerName: 'PIYE Approver'};
    public genericInfo = { field: 'generic_info', headerName: 'Generic Info', col: 12};
    public tapeoutWorkdir = { field: 'workdir', headerName: 'Tapeout Work Dir', colspan: 6};
    public logfile = { field: 'logfile', headerName: 'Logfile Directory', colspan: 6};    

    public secureDevice = { field: 'secure_device', headerName: ' Secure Device'};  // need to located
    public deptOwner = { field: 'dept_owner', headerName: 'DEPT Owner'};  // need to located

    public processDevStatus  = { field: 'orc_record__orc_ext__process_name__process_dev_status', headerName: 'Process Dev Satus'};
    public plmTechtype = { field: 'orc_record__orc_ext__process_name__tech_type', headerName: 'PLM Techtype'};
    public techgeo = { field: 'orc_record__orc_ext__process_name__tech_geometry', headerName: 'Tech Geometry'};
    public processTechnology = { field: 'orc_record__orc_ext__process_name__tech_type', headerName: 'PT'};
    public pidNumber = { field: 'orc_record__orc_ext__process_name__pid_number', headerName: 'PID Number'};
    public fnd = { field: 'orc_record__orc_ext__fnd_date', headerName: 'FND'};
    public rtm = { field: 'orc_record__orc_ext__rtm_date', headerName: 'RTM'};    

    public layoutPath = { field: 'bug_text__inpath', headerName: 'Layout Path', colspan: 6};
    public resultPath = { field: 'bug_text__outpath', headerName: 'Result Path', colspan: 6};

    public customer = { field: 'customer', headerName: 'Customer'};
    public topCell = { field: 'orc_record__calibre_record__topcell', headerName: 'Topcell Name'}; // need to locate
    public inlayoutMd5Sum = { field: 'orc_record__calibre_record__md5sum_string', headerName: 'Calibre Inlayout MD5SUM', colspan: 6};
    public inlayoutPath = { field: 'orc_record__calibre_record__md5sum_path', headerName: 'Calibre Inlayout Path', colspan: 6};

    public ptrfName = { field: 'ptrf', headerName: 'PTRF'};
    public ptrfStatus = { field: 'orc_record__orc_ext__ptrf_table__ptrf_status', headerName: 'PTRF Status'}; 
    public ptrfSecureDevice = { field: 'orc_record__orc_ext__ptrf_table__SecureDevice', headerName: 'Secure Device'};
    public ptrfcrmDID = { field: 'orc_record__orc_ext__ptrf_table__crmDID', headerName: 'CRMDID'};  // need to locate
    public ptrfFieldEngineer = { field: 'orc_record__orc_ext__ptrf_table__foundryFieldEngineerName', headerName: 'Field Enginer'};
    public ptrfdrcOption = { field: 'orc_record__orc_ext__ptrf_table__drcOption', headerName: 'DRC Options'};  // need to locate    
    public ptrfMaskLayers = { field: 'orc_record__orc_ext__ptrf_table__masklayers', headerName: 'Tapeout Layers', col: 12};
    public ptrfTopUpLayers = { field: 'orc_record__orc_ext__ptrf_table__toplayers', headerName: 'Topup Layers', col: 12};

    public ptsrName = { field: 'ptrf', headerName: 'PTSR'};
    public ptsrSecureDevice = { field: 'orc_record__orc_ext__ptsr_table__SecureDevice', headerName: 'Secure Device'};
    public ptsrMaskLayers = { field: 'orc_record__orc_ext__ptsr_table__masklayers', headerName: 'Tapeout Layers', col: 12};
    public ptsrCrmDID = { field: 'orc_record__orc_ext__ptsr_table__CRMDID', headerName: 'CRMDID'};
    public ptsrServiceOptions = { field: 'orc_record__orc_ext__ptsr_table__service_options', headerName: 'Service Options'};


    public ftrfFormName = { field: 'orc_record__orc_ext__ftrf_subform__form_id', headerName: 'Form Name'};
    public ftrfFormStatus = { field: 'orc_record__orc_ext__ftrf_subform__form_status', headerName: 'Form Status'};
    public ftrfTapeoutRoute = { field: 'orc_record__orc_ext__ftrf_subform__main_form__tapeout_route', headerName: 'Tapeout Route'};
    public productName = { field: 'orc_record__orc_ext__ftrf_subform__main_form__product_name', headerName: 'Product Name'};
    public productNameRevision = { field: 'orc_record__orc_ext__ftrf_subform__main_form__product_revision', headerName: 'Product Revision'};
    public orcextreviewer = { field: 'orc_record__orc_ext__assigned_user', headerName: 'Reviewer'};
    public ftrfSecureDevice = { field: 'orc_record__orc_ext__ftrf_subform__secure_device', headerName: 'Secure Device'};
    public eccnColor = { field: 'orc_record__orc_ext__ftrf_subform__main_form__eccn_technology', headerName: 'ECCN Color'};
    public ftrfProcessTech = { field: 'orc_record__orc_ext__ftrf_subform__main_form__process_technology', headerName: 'Process Technology'};
    public ftrfProcessDevStatus = { field: 'orc_record__orc_ext__ftrf_subform__main_form__process_technology', headerName: 'Process Dev Status'};
    public ftrfTechGeo = { field: 'orc_record__orc_ext__ftrf_subform__main_form__process_geometry', headerName: 'Tech Geo'};
    public ftrfProcessId = { field: 'orc_record__orc_ext__ftrf_subform__main_form__process_id', headerName: 'Process Id'};
    public ftrfServiceRequest = { field: 'orc_record__orc_ext__ftrf_subform__main_form__service_options', headerName: 'Service Request'};


}


export class DetailSummaryBase extends CommonSummaryField implements DetailSummaryInterface {

    public mantisInfoTable = {
        fields: [
            this.mantisId,
            this.jobId,
            this.orcRecordId,
            this.aggregateStatus,
            this.stage,
            this.status,
            this.reviewer,
            this.fab
        ]
    }

    public cadInfoTable = {
        fields: [
                this.operation,
                this.techtype,
                this.runHistory,
                this.gtoReviewStatus,
                this.dateGen,
                this.maskset,
                this.primeDieName,
                this.processId,
                this.ptrfName,
                this.techfile,
                this.crmDid,
                this.customer,
                this.topCell,
                this.genericInfo,
        ]
    }    
    
    public directoriesTable = {
        fields: [
            this.tapeoutWorkdir,
            this.logfile,
            this.layoutPath,
            this.resultPath,
            this.inlayoutMd5Sum,
            this.inlayoutPath,                
        ]
    };    


    constructor(dispoParams) {
        super()
    }


}
