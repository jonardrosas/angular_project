import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { MantisDispositionManager } from '../../../scripts';
import { AuthUserService } from './../../../services/auth_user.service';
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
        private authUser: AuthUserService,
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
        this.authUser.getAuthUser().subscribe(
            (response) => {
                for(let object of response.objects){
                    for(let element of object.users){
                        this.userList.push(element);
                    }
                }
            },
            (error) => console.log(error),
        );
    }
    
    onSubmit(){
        this.clearAlerts();
        if (this.jobAssignForm.status === 'INVALID') {
            if (this.jobAssignForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.jobAssignForm.controls.status.errors});
            }
        } else {
            this.postService.submitForm(this.jobAssignForm.value).subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

}