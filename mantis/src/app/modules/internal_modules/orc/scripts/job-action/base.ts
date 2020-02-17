export interface JobActionInterface {
    changeStatusButton?;
    assignToButton?;
    mantisRecord?;
    modalService?;
}

interface checkDispoInterface {
    // agGridApi;
    modalService;
    mantisRecord;
    alerts;
    popups;
}

export class JobActionBase implements JobActionInterface {
    public allButtons;
    public modalService;
    public mantisRecord;
    public popups;
    
    constructor(dispoParams) {
        this.modalService = dispoParams.modalService;
        this.mantisRecord = dispoParams.mantisRecord;
        this.popups = dispoParams.registeredCheckPopUps;
        this.allButtons = [
            this.changeStatusButton,
        ]
    }
    
    public changeStatusButton = {
        label: 'Job Change Status',
        class: 'btn btn-outline-success',
        // icon: 'fas fa-pencil-alt',        
        function: () =>  {
            const modalRef = this.modalService.open(this.popups.DetailJobChangeStatusComponent, {backdrop: 'static', keyboard: false});
            modalRef.componentInstance.mantisRecord = this.mantisRecord;
        }
    }
    
    
}