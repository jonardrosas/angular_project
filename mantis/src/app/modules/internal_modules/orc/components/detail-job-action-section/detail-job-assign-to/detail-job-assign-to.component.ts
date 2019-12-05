import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { MantisDispositionManager } from '../../../scripts';
import { URLS } from './../../../../../../configs/app-urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobLevelAssignPostService } from './../../../services/job-level-assign-post.service';

@Component({
  selector: 'app-detail-job-assign-to',
  templateUrl: './detail-job-assign-to.component.html',
  styleUrls: ['./detail-job-assign-to.component.css']
})
export class DetailJobAssignToComponent implements OnInit {
    @Input() mantisDispoInstance: MantisDispositionManager;
    public mantisRecord;
    public jobAssignForm;
    public Editor = ClassicEditor;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Job Assignment";
    public testUserList = ["tsudarso", "jonard", "queksf", "shchiang", "chsong"];
    public userList: any[] = [];

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        private http: HttpClient,
        private postService: JobLevelAssignPostService,
    ) { }

    ngOnInit() {
        this.jobAssignForm = new FormGroup({
            assigned_to: new FormControl('', Validators.required),
            comment: new FormControl(''),
            record_id: new FormControl(this.mantisRecord.id)
        });
        this.getUserList();
    }
    
    clearAlerts() {
        this.alerts = [];
    }
    
    getUserList() {
        return []
    }
    
    onSubmit(){
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

}
