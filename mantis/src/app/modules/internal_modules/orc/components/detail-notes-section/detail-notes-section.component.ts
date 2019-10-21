import { Component, OnInit, Input } from '@angular/core';
import { MantisNotesInterface } from './../../models';
import { Observable } from 'rxjs';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from '../../scripts/common/add-jobreport-section';

import { Store, select } from '@ngrx/store';

import * as orcModuleStore from './../../store';

@Component({
  selector: 'app-detail-notes-section',
  templateUrl: './detail-notes-section.component.html',
  styleUrls: ['./detail-notes-section.component.css']
})
export class DetailNotesSectionComponent extends ButtonCollapse implements OnInit {
    @Input() dispoManagerInstance: MantisDispositionManager;    
    @Input() public mantisId: number;
    public notes$: Observable<MantisNotesInterface[]>;


    constructor(
        private store: Store<any>
    ) {
        super()
     }


    ngOnInit() {
        this.getObject();
    }

    getObject() {
        this.notes$ = this.store.pipe(select(orcModuleStore.getMantisRecordJobNotesStateSelector));
    }

}
