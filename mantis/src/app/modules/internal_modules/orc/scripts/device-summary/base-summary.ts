import { checkStatusMapping } from './../common';


interface DetailSummaryInterface {
    setHeadTable(): void;
    setMainTable(): void;
    setTableDirectories(): void;
}

class CommonSummaryField {
    public id = { field: 'orc_record_id', headerName: 'RecordId' };
    public orcRecordId = { field: 'orc_record__id', headerName: 'RecordId' };
    public mantisId = { field: 'id', headerName: 'Mantis Id' };
    public pdbStatus = { field: 'pdb_status', headerName: 'Pdb Status' };
    public dispositionMethod = { field: 'orc_record__orc_ext__disposition_method', headerName: 'Disposition Method' };
    public aggregateStatus = { field: 'orc_record__status', headerName: 'Aggregate Status',
        cellTemplate: (val: string)=>{
            return `<button class="btn btn-small ${checkStatusMapping[val].btnClass}">${val}</button>`;
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
    public ptrfName = { field: 'ptrf', headerName: 'PTRF'};
    public ptsrName = { field: 'ptrf', headerName: 'PTSR'};
    public ritName = { field: 'ptrf', headerName: 'RIT'};
    public layer = { field: 'layer', headerName: 'Layer'};
    public processId = { field: 'process_id', headerName: 'Process Id'};
    public operation = { field: 'operation', headerName: 'operation'};
    public stage = { field: 'status', headerName: 'Stage'};
    public status = { field: 'resolution', headerName: 'Status'};
    public resolutionCode  = { field: 'resolution_code', headerName: 'Resolution Code'};
    public fab = { field: 'orc_record__orc_ext__fab', headerName: 'Fab'};
    public keyword = { field: 'orc_record__techfile', headerName: 'Keyword'};
    public techfile = { field: 'orc_record__techfile', headerName: 'Techfile'};
    public crmDid = { field: 'orc_record__tapeout_crmdid', headerName: 'CRMDID'};  // need to locate
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
    public secureDevice = { field: 'secure_device', headerName: ' Secure Device'};  // need to located
    public deptOwner = { field: 'dept_owner', headerName: 'DEPT Owner'};  // need to located
    public genericInfo = { field: 'generic_info', headerName: 'Generic Info', colspan: 6};
    public tapeoutLayers = { field: 'tapeout_layers', headerName: 'Tapeout Layers', colspan: 6};  // need to locate
    public topupLayers = { field: 'topup_layers', headerName: 'Topup Layers', colspan: 6};  // need to locate
    public tapeoutWorkdir = { field: 'workdir', headerName: 'Tapeout Work Dir', colspan: 6};
    public logfile = { field: 'logfile', headerName: 'Logfile Directory', colspan: 6};
    public layoutPath = { field: 'bug_text__inpath', headerName: 'Layout Path', colspan: 6};  // need to locate
    public resultPath = { field: 'bug_text__outpath', headerName: 'Result Path', colspan: 6}; // need to locate
    public inlayoutMd5Sum = { field: 'orc_record__calibre_record__md5sum_string', headerName: 'Inlayout MD5SUM', colspan: 6};  // need to locate
    public inlayoutPath = { field: 'orc_record__calibre_record__md5sum_path', headerName: 'Inlayout Path', colspan: 6};  // need to locate    

    public commonColumnFields = [
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
            this.ptrfStatus,
        ],
        [
            this.customer,
            this.topCell,
            this.fieldEngineer,
            this.plmTechtype,
            this.plmTechtype,
            this.plmTechtype,
        ],
        [
            this.genericInfo,
        ],
        [
            this.topupLayers,        
        ],
        [
            this.tapeoutLayers,
        ]
    ]
}


export class DetailSummaryBase extends CommonSummaryField implements DetailSummaryInterface {
    public columns: any[];
    public mantisInfoTable;
    public cadInfoTable;
    public headTable;
    public mainTable;
    public directoriesTable;
    public additionalInfoTable;
    public tables

    constructor(private dispoParams) {
        super()
        this.setMantisInfoTable()
        this.setCadInfoTable()
        this.setHeadTable();
        this.setMainTable();
        this.setTableDirectories();
        this.setAdditionalInfoTable();
    }

    setMantisInfoTable() {
        this.mantisInfoTable = {
            fields: [
                [
                    this.orcRecordId,
                    this.jobId,
                    this.mantisId,
                    this.aggregateStatus,
                    this.stage,
                    this.status,
                    this.reviewer,
                ]
            ]
        }
    }

    setCadInfoTable() {
        this.cadInfoTable = {
            fields: [
                [
                    this.techtype,
                    this.runHistory,
                    this.gtoReviewStatus,
                    this.dateGen,
                    this.maskset,
                    this.primeDieName,
                    this.ptrfName,
                    this.layer,
                    this.processId,
                    this.operation,
                    this.fab,
                    this.techfile,
                    this.crmDid,
                    this.customer,
                ],
                [
                    this.genericInfo,
                ],
            ]
        }
    }

    setHeadTable() {
        this.headTable = {
            fields: [
                [
                    this.orcRecordId,
                    this.mantisId,
                    this.dispositionMethod,
                    this.aggregateStatus,                 
                ]
            ]
        };
    }

    setMainTable() {
        this.mainTable = {
            fields: this.commonColumnFields
        };
    }

    setTableDirectories() {
        this.directoriesTable = {
            fields: [
                [ this.tapeoutWorkdir ],
                [ this.logfile ],
                [ this.layoutPath ],
                [ this.resultPath ],
                [ this.inlayoutMd5Sum ],
                [ this.inlayoutPath ],                
            ]
        };
    }

    setAdditionalInfoTable() {
        this.additionalInfoTable = {
            fields: [
                [
                    this.topCell,
                    this.tapeoutLayers,
                    this.topupLayers,
                    this.ptrfStatus,
                ],
            ]
        }
    }

    getHeadFields(){
        const fields = {
            headTable: [],
        };
        for(let r_index in this.headTable.fields) {
            const row = this.headTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.headTable.push(field)
            }            
        }        
        return fields;
    }

    /**** 
     * Need to loop again to simplify the tables
     * because original one is array inside array
     * but we need only array values
     * 
     * Expected Example:
     * headTable: [
     *  field,
     *  field2
     * ]
     * 
     * Original Example:
     * headTable: [
     *  [field, field2],
     *  [field3, field4]
     * ]
    **/
    getAllFields() {
        const fields = {
            headTable: [],
            mainTable: [],
            additionalInfoTable: [],
            mantisInfoTable: [],
            cadInfoTable: [],
            directoriesTable: [],
        };
        for(let r_index in this.mantisInfoTable.fields) {
            const row = this.mantisInfoTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.mantisInfoTable.push(field)
            }            
        }    
        for(let r_index in this.cadInfoTable.fields) {
            const row = this.cadInfoTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.cadInfoTable.push(field)
            }            
        }        
        for(let r_index in this.headTable.fields) {
            const row = this.headTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.headTable.push(field)
            }            
        }
        for(let r_index in this.mainTable.fields) {
            const row = this.mainTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.mainTable.push(field)
            }            
        }
        for(let r_index in this.directoriesTable.fields) {
            const row = this.directoriesTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.directoriesTable.push(field)
            }            
        }        
        for(let r_index in this.additionalInfoTable.fields) {
            const row = this.additionalInfoTable.fields[r_index]
            for(let f_index in row){
                const field = row[f_index]
                fields.additionalInfoTable.push(field)
            }            
        }           
        return fields;
    }

    getTables() {
        return {
            headTable: this.headTable,
            mantisInfoTable: this.mantisInfoTable,
            cadInfoTable: this.cadInfoTable,
            mainTable: this.mainTable,
            directoriesTable: this.directoriesTable,
            additionalInfoTable: this.additionalInfoTable,
        };
    }    


}
