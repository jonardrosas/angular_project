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
    public stageMapping: any;
    public notesSubscription: Subscription;
    public stageSubscription: Subscription;


    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
    ) {
        super()
     }


    ngOnDestroy(){
        this.notesSubscription.unsubscribe()
        this.stageSubscription.unsubscribe()
    }

    ngOnInit() {
        this.getObject();
        this.getStages()
        this.button = this.dispoService.dispoManagerInstance.jobButtons.baddNotes;
    }

    getObject() {
        this.notesSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordJobNotesStateSelector)).subscribe(
            (data)=> {
              this.notes = data;
            }
        );
    }

    getStages(){
        this.stageSubscription = this.store.pipe(select(orcModuleStore.getMantisStagesStateSelector))
        .subscribe(
            (data) => {
                this.stageMapping = {};
                for(let obj of data){
                    this.stageMapping[obj.id] = obj;
                }
            }
        )
    }    

}
