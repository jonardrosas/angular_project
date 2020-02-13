import * as _ENUMS from './../enums';


interface checkDispoInterface {
    agGridApi;
    modalService;
    mantisRecord;
    alerts;
    popups;
}


export class checkApiBase{
    private _dataSet: any = [];

    constructor(){
    }

    public add(param){
        const data = {'data': param}
        this._dataSet.push(data)
    }

    public getSelectedNodes(){
        return this._dataSet;
    }
}


export class CheckApi{
    public api: checkApiBase; 

    constructor(data: any){
        this.api = new checkApiBase()
    }

    add(param){
        this.api.add(param)
    }
}


/** All commoon function and buttons should be declared here */
export class CheckDisposeButtonBase {
    // public allCheckButtons;
    // public iSTCheckButtons;
    // public fSTCheckButtons;
    // public sOACheckButtons;
    protected agGridApi;
    protected modalService;
    protected mantisRecord;
    public buttonStatusClass;
    public popups;
    public buttonSet: any = {};
    public buttons: any = {};
    public checkApiClass = CheckApi;

    constructor(dispoParams){
        this.modalService = dispoParams.modalService;
        this.mantisRecord = dispoParams.mantisRecord;
        this.buttonStatusClass = dispoParams.status;        
        this.popups = dispoParams.registeredCheckPopUps;
        this._generateButtons()
    }

    protected _generateButtons(){
        for (const k in _ENUMS.QUERY_FIELD){
            if( k in this.buttons && this.buttons[k].length > 0){
                this.buttonSet[k] = this.buttons[k];
            }
        }
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
                        dispoManagerInstance.checkComponentInstance.reloadCheck()
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