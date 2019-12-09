import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { GroupProfileInterface } from '../../../../models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { } from './../../../../scripts/common/status';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-check-recommend',
  templateUrl: './check-recommend.component.html',
  styleUrls: ['./check-recommend.component.css']
})

export class CheckRecommendComponent implements OnInit {
    @Input() selectedData;
    @Input() dispoManagerInstance;
    public recommendForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Check Recommend";
    public Editor = ClassicEditor;
    public recommendations: string;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) {}

    ngOnInit() {
        this.recommendForm = new FormGroup({
            status: new FormControl('', Validators.required),
            comments: new FormControl('')
        });
        this.recommendations = this.dispoManagerInstance.dispositionInstance.recommendationOptions;
    }

    onSubmit() {
        if (this.recommendForm.status === 'INVALID') {
            if (this.recommendForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.recommendForm.controls.status.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }  

}

