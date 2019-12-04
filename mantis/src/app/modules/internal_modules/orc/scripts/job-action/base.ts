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
    public changeStatusButton;
    public assignToButton;
    public allButtons;
    // protected agGridApi;
    public modalService;
    public mantisRecord;
    public popups;
    
    constructor(dispoParams) {
        //debugger;
        this.modalService = dispoParams.modalService;
        this.mantisRecord = dispoParams.mantisRecord;
        this.popups = dispoParams.registeredCheckPopUps;
        this.changeStatusButton = [
            this.changeStatus
        ];
        this.assignToButton = [
            this.assignTo
        ];
        this.allButtons = [
            this.changeStatusButton,
            this.assignToButton
        ]
    }
    
    public changeStatus = {
        function: () =>  {
            const modalRef = this.modalService.open(this.popups.DetailJobChangeStatusComponent, {backdrop: 'static', keyboard: false});
            modalRef.componentInstance.mantisRecord = this.mantisRecord;
        }
    }
    
    public assignTo = {
        function: () =>  {
            const modalRef = this.modalService.open(this.popups.DetailJobAssignToComponent, {backdrop: 'static', keyboard: false});
            modalRef.componentInstance.mantisRecord = this.mantisRecord;
        }
    }
    
    
}