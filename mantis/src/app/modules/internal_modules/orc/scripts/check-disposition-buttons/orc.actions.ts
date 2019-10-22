import { CheckDisposeButtonBase } from './base';
import { CheckChangeStatusComponent } from './../../components/check-list/components/check-change-status/check-change-status.component';
import { CheckEscalateIstComponent } from './../../components/check-list/components/check-escalte-ist-status/check-escalate-ist-status.component';
import { CheckEscalateSoaComponent } from './../../components/check-list/components/check-escalate-soa/check-escalate-soa.component';
import { CheckRecommendComponent } from './../../components/check-list/components/check-recommend/check-recommend.component';
import { BootstrapAlertComponent } from './../../../../../shared/';


export class OrcCheckDispositionButtonClass extends CheckDisposeButtonBase {
    modalService;

    public orcChangeStatus = {
        label: 'Change Status',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(CheckChangeStatusComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
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
                const modalRef = this.modalService.open(CheckEscalateIstComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
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
                const modalRef = this.modalService.open(CheckEscalateSoaComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
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
                const modalRef = this.modalService.open(CheckRecommendComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }    

    constructor(private dispoParams){
        super(dispoParams);
        this.buttons = [
            this.orcEscalateIst,
            this.orcEscalateSOA,
            this.orcChangeStatus,
            this.checkRecommend,
            this.addNotes,
            this.addImage
        ]
    }

}
