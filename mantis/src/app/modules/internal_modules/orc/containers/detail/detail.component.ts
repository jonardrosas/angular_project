import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as orcModuleStore from './../../store';
import { MantisRecordModel, MantisNotesInterface, MantisRecordInterface } from './../../models';
import { Alert } from './../../../../../core/models';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    private alerts: Alert[] = [];
    public mantisId: number;
    public mantisRecord: MantisRecordModel;
    private checkIns: any;
    public panelIsOpen = {
        deviceSummary: false,
        errorStatistics: true,
        notesSection: true,
        attachmentSection: true,
        historySection: true,
        check: false,
    };

    constructor(
        private route: ActivatedRoute,
        private store: Store<any>
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');
            this.getObjectUsingStore(this.mantisId);
        });
    }

    isCollapse(val) {
        if (val) {
            return 'fas fa-caret-right';
        } else {
            return 'fas fa-caret-down';
        }
    }

    loadMantisRecord() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
            }
        );
    }

    getObjectUsingStore(mantisId: number) {
        this.store.dispatch(orcModuleStore.getMantisObjectAction({id: mantisId}));
        this.loadMantisRecord();
    }

}
