import { CheckDisposeButtonBase, CheckDisposeButtonInterface } from './base';


export class OrcCheckDispositionButtonBase extends CheckDisposeButtonBase {
    modalService;

    public orcChangeStatus = {
        label: 'Change Status',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckChangeStatusComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }        
    }    

    public orcEscalateIst = {
        label: 'Escalate to iST',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckEscalateIstComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }

    public orcEscalateSOA = {
        label: 'Escalate to SOA',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckEscalateSoaComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }    

    public checkRecommend = {
        label: 'Recommend',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckRecommendComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }    

    public checkAsSoaRecommend = {
        label: 'Recommend As SOA',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckRecommendAsSoaComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }       

    constructor(private dispoParams){
        super(dispoParams);
        this.allCheckButtons = [
            this.orcEscalateIst,
            this.orcEscalateSOA,
            this.orcChangeStatus,
            this.checkRecommend,
            this.addNotes,
            this.addImage
        ]
        this.iSTCheckButtons = [
            this.orcEscalateSOA,
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]
        this.sOACheckButtons = [
            this.checkAsSoaRecommend,
            this.addNotes,
            this.addImage            
        ]        
    }

}

export class OrcPtrfCheckDispositionButtonBase extends OrcCheckDispositionButtonBase {}
export class OrcRitCheckDispositionButtonBase extends OrcCheckDispositionButtonBase {}
export class OrcFtrfCheckDispositionButtonBase extends OrcCheckDispositionButtonBase {}


export class OrcCheckDispositionButtonClass {
    private instance;
    public buttons: CheckDisposeButtonInterface = {};

    constructor(private dispoParams){
        if (this.dispoParams.mantisRecord.ptrf.startsWith("PTRF")){
            this.instance = new OrcPtrfCheckDispositionButtonBase(dispoParams)
        }else if(this.dispoParams.mantisRecord.ptrf.startsWith("RIT")){
            this.instance = new OrcRitCheckDispositionButtonBase(dispoParams)
        }else if(this.dispoParams.mantisRecord.ptrf.startsWith("FTRF")){
            this.instance = new OrcFtrfCheckDispositionButtonBase(dispoParams)
        }else{
            this.instance = new OrcCheckDispositionButtonBase(dispoParams)
        }
        this.buttons.allCheckButtons =  this.instance.allCheckButtons;
        this.buttons.iSTCheckButtons =  this.instance.iSTCheckButtons;
        this.buttons.sOACheckButtons =  this.instance.sOACheckButtons;
    }    
}
