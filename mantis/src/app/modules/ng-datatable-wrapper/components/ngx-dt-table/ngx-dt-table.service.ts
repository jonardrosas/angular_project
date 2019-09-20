import { Injectable } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';


@Injectable()
export class NgxDtTableService {

    public rowSubject = new BehaviorSubject<any>([]);
    constructor(){
        console.log('NgxDtTableService Created');
    }

    updateRows(rows){
        this.rowSubject.next(rows);
    }

    

}