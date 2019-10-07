import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import * as orcModuleStore from './../../store';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager, DispostionParameter } from './../../scripts';
import { Alert } from './../../../../../core/models';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    public dispoManagerInstance: MantisDispositionManager = null;
    public mantisId: number;
    public mantisRecord: MantisRecordModel;
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
        private modalService: NgbModal,
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

                if (data.orc_record_id) {
                    const paramsIns: DispostionParameter = {
                        mantisRecord: data,
                        modalService: this.modalService,
                    }
                    this.dispoManagerInstance = new MantisDispositionManager(paramsIns);
                }

            }
        );
    }

    getObjectUsingStore(mantisId: number) {
        this.store.dispatch(orcModuleStore.getMantisObjectAction({id: mantisId}));
        this.loadMantisRecord();
    }

}
