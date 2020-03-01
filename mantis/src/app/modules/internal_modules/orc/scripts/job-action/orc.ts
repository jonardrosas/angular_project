import { JobActionBase } from './base';

export class OrcJobAction extends JobActionBase {
    
    constructor(dispoParams) {
        super(dispoParams)
        this.allButtons = {
            'achangeStatus' : this.changeStatusButton,
            'baddNotes': this.addNotesButton,
            'caddAttachment': this.addAttachmentButton,
            'dreleaseForMaskswrite': this.releaseForMaskWrite,
        }        
    }
    
    public releaseForMaskWrite = {
        label: 'Release for Maskwrite',
        class: 'btn btn-outline-info btn-sm' ,
        icon: 'fas fa-check-double',        
        function: (container) =>  {
            const modalRef = this.modalService.open(this.popups.DetailReleaseForMaskwriteComponent, {backdrop: 'static', keyboard: false});
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