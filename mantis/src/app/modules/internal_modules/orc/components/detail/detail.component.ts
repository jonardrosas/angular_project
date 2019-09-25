import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OrcRecordService, OrcCheckService } from './../../services';
import { OrcRecordModel, OrcCheckModel } from './../../models';
import { Alert } from './../../../../../core/models';
import { URLS, APP_CONFIG } from './../../../../../configs';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    private alerts: Alert[] = [];
    public orcRecord: OrcRecordModel;
    private checkIns;
    public panelIsOpen = {
        check: true
    };

    constructor(
        private route: ActivatedRoute,
        private orcRecordService: OrcRecordService,
        private router: Router,
        private http: HttpClient,
        private checkService: OrcCheckService
    ) {}

    ngOnInit () {
        this.route.paramMap.subscribe(params => {
            this.getObject(params.get('id'));
        });
    }
    
    getObject(id){
        this.orcRecordService.getQuerySet({mantis_id: id}).subscribe(
            (data) => {
                this.orcRecord = data.objects[0];
            },
            (err) => {
                this.alerts.push({message: 'No Record Found', type: 'danger'});
            }
        )
    }

}
