import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OrcRecordService, MantisRecordService } from './../../services';
import { OrcRecordModel, MantisRecordModel } from './../../models';
import { Alert } from './../../../../../core/models';
import { URLS, APP_CONFIG } from './../../../../../configs';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    private alerts: Alert[] = [];
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
        private orcRecordService: OrcRecordService,
        private router: Router,
        private http: HttpClient,
        private mantisRecordService: MantisRecordService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.getObject(params.get('id'));
        });
    }

    isCollapse(val){
        if(val){
            return 'fas fa-caret-right';
        }else{
            return 'fas fa-caret-down';
        }
    }

    getObject(mantisId) {
        this.mantisRecordService.getObject(mantisId).subscribe(
            (data) => {
                this.mantisRecordService.mantisRecordSubject.next(data);
                this.mantisRecord = data;
            },
            (err) => {
                this.alerts.push({ message: 'No Record Found', type: 'danger' });
            },
            () => console.log('Loaded successfully...')
        );
    }

}
