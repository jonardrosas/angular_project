import { BootstrapAlertComponent } from './../../../../../shared/';
import { CheckAddNotesComponent } from './../../components/check-list/components/check-add-notes/check-add-notes.component';
import { CheckUploadImageComponent } from './../../components/check-list/components/check-upload-image/check-upload-image.component';


export interface CheckDisposeButtonInterface{
    allCheckButtons?;
    iSTCheckButtons?;
    sOACheckButtons?;
}

interface checkDispoInterface {
    agGridApi;
    modalService;
    mantisRecord;
    alerts;    
}

/** All commoon function and buttons should be declared here */
export class CheckDisposeButtonBase implements CheckDisposeButtonInterface {
    public allCheckButtons;
    public iSTCheckButtons;
    public sOACheckButtons;
    protected agGridApi;
    protected modalService;
    protected mantisRecord;
    public buttonStatusClass;

    constructor(dispoParams){
        this.modalService = dispoParams.modalService;
        this.mantisRecord = dispoParams.mantisRecord;
        this.buttonStatusClass = dispoParams.status;        
        this.allCheckButtons = [
            this.addNotes,
            this.addImage,
        ];
        this.iSTCheckButtons = [
            this.addNotes,
            this.addImage
        ];
        this.sOACheckButtons = [
            this.addNotes,
            this.addImage            
        ];
    }

    public addNotes = {
        label: 'Add Notes',
        class: 'btn btn-secondary btn-sm',
        icon: 'fas fa-pencil-alt',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(CheckAddNotesComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }

    public addImage = {
        label: 'Upload Image',
        class: 'btn btn-sm btn-secondary',
        icon: 'far fa-image',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(CheckUploadImageComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }    

}