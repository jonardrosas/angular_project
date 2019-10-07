import { CheckDisposeButtonBase } from './base';
import { CheckChangeStatusComponent } from './../../components/check-list/components/check-change-status/check-change-status.component';
import { BootstrapAlertComponent } from './../../../../../shared/';


export class OrcCheckDispositionButtonClass extends CheckDisposeButtonBase {
    modalService;

    public orcChangeStatus = {
        label: 'Change Status',
        class: 'btn btn-primary btn-sm',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(CheckChangeStatusComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.statusGroup = this.buttonStatusClass;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }        
    }    

    public orcEscalateIst = {
        label: 'Escalate to iST',
        class: 'btn btn-info btn-sm',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(CheckChangeStatusComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }
 
    constructor(private options){
        super();
        this.modalService = options.modalService;
        this.mantisRecord = options.mantisRecord;
        this.buttonStatusClass = options.status;
        this.buttons = [
            this.orcEscalateIst,
            this.orcChangeStatus,
            this.addNotes,
        ]
    }

}
