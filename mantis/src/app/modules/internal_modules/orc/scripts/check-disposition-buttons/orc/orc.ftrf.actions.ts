import { OrcCheckDispositionButtonBase } from './orc.actions';
import * as _ENUMS from './../../enums';


export class OrcFtrfCheckDispositionButton extends OrcCheckDispositionButtonBase {

    public checkRecommend = {
        label: 'Change Status',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            const selectedCheckId = selectedData.map(data => data.id);            
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckRecommendComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
                modalRef.componentInstance.validation = (checks, form) => {
                    let errors = []
                    const allowedToiST = ['iST']
                    for (var k in checks) {
                        let check = checks[k]        
                        if(allowedToiST.indexOf(check.status) == -1){
                            errors.push(`Cannot recommend from ${check.status} to ${form.final_recommendation} (${check.name})`)
                        }else if(check.status == form.newStat){
                            errors.push(`The rule is already at SOA (${check.name})`)
                        }
                    }
                    return errors                        
                };
                modalRef.componentInstance.newStat = 'fST'
                modalRef.result.then(
                    (result) => {
                        dispoManagerInstance.checkComponentInstance.previousSelectedRow = selectedCheckId;
                        dispoManagerInstance.checkComponentInstance.reloadCheck()
                    }, (reason) => {
                        // dispoManagerInstance.checkComponentInstance.previousSelectedRow = selectedCheckId;
                        // dispoManagerInstance.checkComponentInstance.loadCheck()
                    }
                )                
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }  

    constructor(public dispoParams){
        super(dispoParams);
        this.buttons[_ENUMS.TAB1.id] = [
            this.orcEscalateIst,
            this.orcChangeStatus,
            this.addNotes,
            this.addImage
        ]
        this.buttons[_ENUMS.TAB2.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]
        this._generateButtons()
    }

}

/* LEVEL3 */
export class OrcFtrfF1CheckDispositionButton extends OrcFtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.addNotes,
            this.addImage            
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()        
    }
}


export class OrcFtrfF7CheckDispositionButton extends OrcFtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.addNotes,
            this.addImage            
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()        
    }
}


export class OrcFtrfF8CheckDispositionButton extends OrcFtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.addNotes,
            this.addImage            
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()        
    }
}

