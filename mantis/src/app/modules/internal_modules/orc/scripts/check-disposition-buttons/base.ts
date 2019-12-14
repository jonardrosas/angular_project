
export interface CheckDisposeButtonInterface{
    allCheckButtons?;
    iSTCheckButtons?;
    fSTCheckButtons?;
    sOACheckButtons?;
}

interface checkDispoInterface {
    agGridApi;
    modalService;
    mantisRecord;
    alerts;
    popups;
}

/** All commoon function and buttons should be declared here */
export class CheckDisposeButtonBase implements CheckDisposeButtonInterface {
    public allCheckButtons;
    public iSTCheckButtons;
    public fSTCheckButtons;
    public sOACheckButtons;
    protected agGridApi;
    protected modalService;
    protected mantisRecord;
    public buttonStatusClass;
    public popups;

    constructor(dispoParams){
        this.modalService = dispoParams.modalService;
        this.mantisRecord = dispoParams.mantisRecord;
        this.buttonStatusClass = dispoParams.status;        
        this.popups = dispoParams.registeredCheckPopUps;
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
        this.fSTCheckButtons = [
            this.addNotes,
            this.addImage
        ];        
    }

    public addNotes = {
        label: 'Add Notes',
        class: 'btn btn-secondary btn-sm',
        icon: 'fas fa-pencil-alt',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            const selectedCheckId = selectedData.map(data => data.id);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckAddNotesComponent, {backdrop: 'static', keyboard: false, size: 'lg' })
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
                modalRef.result.then(
                    (result) => {
                        dispoManagerInstance.checkComponentInstance.previousSelectedRow = selectedCheckId;
                        dispoManagerInstance.checkComponentInstance.loadCheck()
                    }, (reason) => {
                        console.log('Reason', reason);
                    }
                )
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
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
                const modalRef = this.modalService.open(this.popups.CheckUploadImageComponent, {backdrop: 'static', keyboard: false, size: 'lg'})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }    

}