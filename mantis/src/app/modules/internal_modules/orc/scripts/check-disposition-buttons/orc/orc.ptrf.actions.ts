import * as _ENUMS from './../../enums';
import { OrcCheckDispositionButtonBase } from './orc.actions';


export class OrcPtrfCheckDispositionButton extends OrcCheckDispositionButtonBase {

    public soaRecommendationButton = {
        label: 'Recommend',
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
                modalRef.componentInstance.newStat = 'fST'
                modalRef.componentInstance.validation = (checks, form) => {
                    let errors = []
                    const allowedToiST = ['SOA']
                    for (var k in checks) {
                        let check = checks[k]        
                        if(allowedToiST.indexOf(check.status) == -1){
                            errors.push(`Cannot recommend from ${check.status} to fST (${check.name})`)
                        }else if(check.status == form.newStat){
                            errors.push(`The rule is already at SOA (${check.name})`)
                        }
                    }
                    return errors
                }                
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


    public fSTRecommendationButton = {
        label: 'Recommend',
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
                modalRef.componentInstance.newStat = 'fST'
                modalRef.componentInstance.validation = (checks, form) => {
                    let errors = []
                    const allowedToiST = ['fST']
                    for (var k in checks) {
                        let check = checks[k]        
                        if(allowedToiST.indexOf(check.status) == -1){
                            errors.push(`Cannot recommend from ${check.status} to POA (${check.name})`)
                        }
                    }
                    return errors
                }                
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

}

/* LEVEL3 */
export class OrcPtrfF1CheckDispositionButton extends OrcPtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.soaRecommendationButton,
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.fSTRecommendationButton,
        ]        
        this._generateButtons()        
    }

}


export class OrcPtrfF7CheckDispositionButton extends OrcPtrfCheckDispositionButton {

    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB2.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()
    }

}


export class OrcPtrfF8CheckDispositionButton extends OrcPtrfCheckDispositionButton {
}

