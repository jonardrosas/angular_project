import { Component, OnInit, Input } from '@angular/core';
import { MantisRecordService } from './../../services';
import { MantisNotesInterface } from './../../models';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as orcModuleStore from './../../store';

@Component({
  selector: 'app-detail-notes-section',
  templateUrl: './detail-notes-section.component.html',
  styleUrls: ['./detail-notes-section.component.css']
})
export class DetailNotesSectionComponent implements OnInit {
    @Input() public mantisId: number;
    public notes$: Observable<MantisNotesInterface[]>;


    constructor(
        private store: Store<any>
    ) { }


    ngOnInit() {
        this.store.dispatch(orcModuleStore.getMantisJobNotesAction({bug_id: this.mantisId}));
        this.getObject();
    }

    getObject() {
        this.notes$ = this.store.pipe(select(orcModuleStore.getMantisRecordJobNotesStateSelector));
    }

}
