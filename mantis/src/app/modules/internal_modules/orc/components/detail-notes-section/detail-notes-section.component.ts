import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MantisNotesInterface } from './../../models';
import { Observable, Subscription } from 'rxjs';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from './../../util/';
import { DispoMangerService } from './../../services';

import { Store, select } from '@ngrx/store';

import * as orcModuleStore from './../../store';

@Component({
  selector: 'app-detail-notes-section',
  templateUrl: './detail-notes-section.component.html',
  styleUrls: ['./detail-notes-section.component.css']
})
export class DetailNotesSectionComponent extends ButtonCollapse implements OnInit, OnDestroy {
    @Input() dispoManagerInstance: MantisDispositionManager;    
    @Input() public mantisId: number;
    @Input() public container: number;
    public notes;
    public button;
    public notesSubscription: Subscription;


    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
    ) {
        super()
     }


    ngOnDestroy(){
        this.notesSubscription.unsubscribe()
    }

    ngOnInit() {
        this.getObject();
        this.button = this.dispoService.dispoManagerInstance.jobButtons.baddNotes;
    }

    getObject() {
        this.notesSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordJobNotesStateSelector)).subscribe(
            (data)=> {
              this.notes = data;
            }
        );
    }

}
