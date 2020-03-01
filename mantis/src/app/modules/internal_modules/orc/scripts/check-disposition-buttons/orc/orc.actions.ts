import * as _ENUMS from './../../enums';
import { CheckDisposeButtonBase } from './../base';


export class OrcCheckDispositionButtonBase extends CheckDisposeButtonBase {
    modalService;
    restrictedStatus = ['PA']

    public changeStatusValidation(checks, form){
        let errors = []
        const allowedForNew = ['A', 'iST', 'OC', 'SD', 'ER', 'OP', 'MP', 'PW', 'PT', 'PI', 'FD', 'FR']
        const allowedForAssigned = ['iST', 'OC', 'SD', 'ER', 'OP', 'MP', 'PW', 'PT', 'PI', 'FD', 'FR']
        const allowedForOC = ['iST', 'OC', 'SD', 'ER', 'OP', 'MP', 'PW', 'PT', 'PI', 'FD', 'FR']
        const allowedForIST = ['PW', 'PC', 'PP', 'PT', 'PI', 'PNR', 'FD', 'FR', 'fST']
        const allowedForMP = ['PW', 'PT', 'PI', 'FD', 'FR']
        const allowedForDisposing = ['iST', 'OC', 'SD', 'ER', 'OP', 'MP', 'PW', 'PT', 'PI', 'FD', 'FR']
        const allowedForPass = ['PW', 'PT', 'PI', 'PC', 'PP', 'PNR']
        const allowedForFail = ['FD', 'FR', 'FS']
        for (var k in checks) {
            let check = checks[k]
            debugger;
            if(['PA'].indexOf(check.status) > -1){
                errors.push(`Not allowed to dispose a PA rule (${check.name})`)
            }else if(check.status == form.newStat){
                errors.push(`Changing a rule to same status (${check.name})`)
            }else if(check.status == 'N' && allowedForNew.indexOf(form.newStat) == -1){
                errors.push(`Cannot change from N to ${form.newStat} in the rule name (${check.name})`)
            }else if(check.status == 'A' && allowedForAssigned.indexOf(form.newStat) == -1){
                errors.push(`Cannot change from A to ${form.newStat} in the rule name (${check.name})`)
            }else if(check.status == 'iST' && allowedForIST.indexOf(form.newStat) == -1){
                debugger;
                errors.push(`Cannot change from iST to ${form.newStat} in the rule name (${check.name})`)
            }else if(check.status == 'MP' && allowedForMP.indexOf(form.newStat) == -1){
                errors.push(`Cannot change from MP to ${form.newStat} in the rule name (${check.name})`)
            }else if((allowedForPass.indexOf(check.status)  > -1) && (allowedForPass.indexOf(form.newStat) == -1)){
                errors.push(`Cannot change from ${check.status} to ${form.newStat} in the rule name (${check.name})`)
            }else if((allowedForFail.indexOf(check.status)  > -1) && (allowedForFail.indexOf(form.newStat) == -1)){
                errors.push(`Cannot change from ${check.status} to ${form.newStat} in the rule name (${check.name})`)
            }else if((allowedForDisposing.indexOf(check.status)  > -1) && (allowedForDisposing.indexOf(form.newStat) == -1)){
                errors.push(`Cannot change from ${check.status} to ${form.newStat} in the rule name (${check.name})`)
            }
        }
        return errors
    }

    public orcEscalateIstValidation(checks, form){
        let errors = []
        const allowedToiST = ['N', 'A', 'iST', 'OC', 'SD', 'ER', 'OP', 'MP']
        for (var k in checks) {
            let check = checks[k]        
            if(allowedToiST.indexOf(check.status) == -1){
                errors.push(`Cannot change from ${check.status} to iST (${check.name})`)
            }else if(check.status == form.newStat){
                errors.push(`The rule is already at iST (${check.name})`)
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
                        debugger;
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
                const modalRef = this.modalService.open(this.popups.CheckEscalateIstComponent, {backdrop: 'static', keyboard: false, size: 'xl'})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
                modalRef.componentInstance.validation = this.orcEscalateIstValidation;
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
        function: (agGrid, dispoManagerInstance) =>  {
            this.agGridApi = agGrid.api;
            const selectedNodes = this.agGridApi.getSelectedNodes()
            const selectedData = selectedNodes.map(node => node.data);
            const selectedCheckId = selectedData.map(data => data.id);
            if(selectedData.length > 0){
                const modalRef = this.modalService.open(this.popups.CheckEscalateSoaComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.selectedData = selectedData;
                modalRef.componentInstance.mantisRecord = this.mantisRecord;
                modalRef.componentInstance.dispoManagerInstance = dispoManagerInstance;
                modalRef.componentInstance.validation = (checks, form) => {
                    let errors = []
                    const allowedToiST = ['iST']
                    for (var k in checks) {
                        let check = checks[k]        
                        if(allowedToiST.indexOf(check.status) == -1){
                            errors.push(`Cannot escalate from ${check.status} to SOA (${check.name})`)
                        }else if(check.status == form.newStat){
                            errors.push(`The rule is already at SOA (${check.name})`)
                        }
                    }
                    return errors
                }
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
                modalRef.componentInstance.validation = this.changeStatusValidation;
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
            this.orcEscalateSOA,
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]
        this._generateButtons()
    }

}

