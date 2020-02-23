import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MantisNotesInterface } from './../../models';
import { Observable, Subscription } from 'rxjs';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from './../../util/';

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
    public notes;
    public notesSubscription: Subscription;


    constructor(
        private store: Store<any>
    ) {
        super()
     }


    ngOnDestroy(){
        this.notesSubscription.unsubscribe()
    }

    ngOnInit() {
        this.getObject();
    }

    getObject() {
        this.notesSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordJobNotesStateSelector)).subscribe(
            (data)=> {
              this.notes = data;
            }
        );
    }

}
