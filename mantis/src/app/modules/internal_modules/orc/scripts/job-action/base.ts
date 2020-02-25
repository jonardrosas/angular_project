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

        this.allButtons = {
            'achangeStatus' : this.changeStatusButton,
            'baddNotes': this.addNotesButton,
            'caddAttachment': this.addAttachmentButton,
        }

        // number prefix is for ordering since the order is based from key 
    }
    
    public changeStatusButton = {
        label: 'Job Change Status',
        class: 'btn btn-info btn-sm' ,
        icon: 'fas fa-share-square',
        function: (container) =>  {
            const modalRef = this.modalService.open(this.popups.DetailJobChangeStatusComponent, {backdrop: 'static', keyboard: false});
            modalRef.componentInstance.mantisRecord = this.mantisRecord;
            modalRef.componentInstance.filterStages =   (stages) => {
                const sourceStages = []
                for(let stage of stages){
                    const stage_id = stage.id
                        if([60, 70, 90].indexOf(stage_id) > -1){
                            sourceStages.push(stage);
                        }
                }
                return sourceStages;
            }
            modalRef.componentInstance.filterResolution =   (resolutions) => {
                const sourceResolutions = []
                for(let resolution of resolutions){
                    const resolution_id = resolution.id
                        if([60, 62, 64, 66, 68, 70,  80, 82, 83, 84, 85,  86, 90, 91, 92, 94, 100].indexOf(resolution_id) > -1){
                            sourceResolutions.push(resolution);
                        }
                }
                return sourceResolutions;
            }            
            modalRef.result.then(
                (result) => {
                    if(container){
                        container.getObjectUsingStore(this.mantisRecord.id)
                    }
                }, (reason) => {
                    // dispoManagerInstance.checkComponentInstance.loadCheck()
                }
            )
        }
    }

    public addNotesButton = {
        label: 'Job Add Notes',
        class: 'btn btn-info btn-sm',
        icon: 'fas fa-pencil-alt',
        function: (container) =>  {
            const modalRef = this.modalService.open(this.popups.DetailJobActionAddNotesComponent, {backdrop: 'static', keyboard: false});
            modalRef.componentInstance.mantisRecord = this.mantisRecord;
            modalRef.componentInstance.validation = (data, form) => {
                return
            }
            modalRef.result.then(
                (result) => {
                    if(container){
                        container.getObjectUsingStore(this.mantisRecord.id)
                    }
                }, (reason) => {
                    // dispoManagerInstance.checkComponentInstance.loadCheck()
                }
            )            
        }
    }    
   
    public addAttachmentButton = {
        label: 'Job Add Attachment',
        class: 'btn btn-info btn-sm',
        icon: 'fas fa-paperclip',        
        function: (container) =>  {
            const modalRef = this.modalService.open(this.popups.DetailJobActionAddAttachmentComponent, {backdrop: 'static', keyboard: false});
            modalRef.componentInstance.mantisRecord = this.mantisRecord;
            modalRef.componentInstance.container = container;
            modalRef.result.then(
                (result) => {
                    if(container){
                        container.getObjectUsingStore(this.mantisRecord.id)
                    }
                }, (reason) => {
                    // dispoManagerInstance.checkComponentInstance.loadCheck()
                }
            )             
        }
    }   
    
}