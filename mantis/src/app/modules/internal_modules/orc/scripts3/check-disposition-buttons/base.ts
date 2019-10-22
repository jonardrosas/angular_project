
interface CheckDisposeButtonInterface{
    buttons;
}

interface checkDispoInterface {
    agGridApi;
    modalService;
    mantisRecord;
    alerts;    
}

/** All commoon function and buttons should be declared here */
export class CheckDisposeButtonBase implements CheckDisposeButtonInterface {
    public buttons = [];
    protected agGridApi;
    protected modalService;
    protected mantisRecord;
    public buttonStatusClass;

    public addNotes = {
        label: 'Notes',
        class: 'btn btn-warning btn-sm',
        function: this.test
    }      

    constructor(){
        this.buttons = [
            this.addNotes
        ]
    }

    test(){
        alert(2);
    }
}