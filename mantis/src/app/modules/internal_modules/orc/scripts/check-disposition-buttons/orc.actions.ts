import * as _ENUMS from './../enums';
import { CheckDisposeButtonBase } from './base';


export class OrcCheckDispositionButtonBase extends CheckDisposeButtonBase {
    modalService;
    restrictedStatus = ['PA']

    public changeStatusValidation(checks, form){
        let errors = []
        const allowedForNew = ['A', 'iST', 'OC', 'SD', 'ER', 'OP', 'MP', 'PW', 'PT', 'PI', 'FD', 'FR']
        for (var k in checks) {
            let check = checks[k]
            if(['PA'].indexOf(check.status) > -1){
                errors.push(`Not allowed to dispose a PA rule (${check.name})`)
            }else if(check.status == form.newStat){
                errors.push(`Changing a rule to same status (${check.name})`)
            }else if(check.status == 'N' && allowedForNew.indexOf(form.newStat) == -1){
                errors.push(`Cannot change from N to ${form.newStat} in the rule name (${check.name})`)
            }
        }
        return errors
    }

    public orcChangeStatus = {
        label: 'Change Status',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            const selectedCheckId = selectedData.map(data => data.id);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckChangeStatusComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
                modalRef.componentInstance.validation = this.changeStatusValidation;
                modalRef.result.then(
                    (result) => {
                        if(dispoManagerInstance.checkComponentInstance){
                            dispoManagerInstance.checkComponentInstance.previousSelectedRow = selectedCheckId;
                            dispoManagerInstance.checkComponentInstance.reloadCheck()
                        }
                    }, (reason) => {
                        // dispoManagerInstance.checkComponentInstance.previousSelectedRow = selectedCheckId;
                        // dispoManagerInstance.checkComponentInstance.loadCheck()
                    }
                )
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        },
        validation: [
            (check, form) => console.log('I don tknow.....')
        ]        
    }   

    public orcEscalateIst = {
        label: 'Escalate to iST',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            const selectedCheckId = selectedData.map(data => data.id);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckEscalateIstComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
                modalRef.result.then(
                    (result) => {
                        if(dispoManagerInstance.checkComponentInstance){
                            dispoManagerInstance.checkComponentInstance.previousSelectedRow = selectedCheckId;
                            dispoManagerInstance.checkComponentInstance.reloadCheck()
                        }
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

    public orcEscalateSOA = {
        label: 'Escalate to SOA',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckEscalateSoaComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
            }else{
                const modalRef = this.modalService.open(this.popups.BootstrapAlertComponent)
                modalRef.componentInstance.data = {type: 'danger', message: 'No check selected', title: 'Warning'};
            }
        }
    }    

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

    public checkAsSoaRecommend = {
        label: 'Recommend As SOA',
        class: 'btn btn-secondary btn-sm',
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckRecommendAsSoaComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
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
            this.orcEscalateSOA,
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]
        this._generateButtons()
    }

}

/* LEVEL 2 */
export class OrcPtrfCheckDispositionButtonBase extends OrcCheckDispositionButtonBase {

    constructor(public dispoParams){
        super(dispoParams);
        this._generateButtons()
    }
}


export class OrcRitCheckDispositionButtonBase extends OrcCheckDispositionButtonBase {}
export class OrcFtrfCheckDispositionButton extends OrcCheckDispositionButtonBase {

    constructor(public dispoParams){
        super(dispoParams);    
    }

}


/* LEVEL3 */
export class OrcPtrfF1CheckDispositionButtonBase extends OrcPtrfCheckDispositionButtonBase {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.checkAsSoaRecommend,
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
        this.buttons[_ENUMS.TAB2.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()
    }
}

