import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager } from './../../scripts';
import { ActivatedRoute, Router } from '@angular/router';
import { DispoMangerService } from './../../services';
import { NgbActiveModal } from '../../../../third_party_modules/ng_bootstrap';

@Component({
  selector: 'app-detail-job-action-section',
  templateUrl: './detail-job-action-section.component.html',
  styleUrls: ['./detail-job-action-section.component.css']
})
export class DetailJobActionSectionComponent implements OnInit {
    @Input() container;
    public buttons;
    public mantisRecord;
    public dispoManagerInstance;
    
    constructor(
        private dispoService: DispoMangerService,
        private store: Store<any>
    ) { }

    ngOnInit() {
        this.dispoManagerInstance = this.dispoService.dispoManagerInstance;
        this.buttons = this.dispoService.dispoManagerInstance.jobButtons;
    }


    scroll(id) {
        debugger;
        let el = document.getElementById(id);
        el.scrollIntoView({behavior: 'smooth'});
    }    

    
}
