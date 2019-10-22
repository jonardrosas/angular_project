import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-check-add-notes',
  templateUrl: './check-add-notes.component.html',
  styleUrls: ['./check-add-notes.component.css']
})
export class CheckAddNotesComponent implements OnInit {
    public addNotesForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Add Notes";
    public Editor = ClassicEditor;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) {}

    ngOnInit() {
        this.addNotesForm = new FormGroup({
            notes: new FormControl('', Validators.required),
        });
    }

    onSubmit() {
        if (this.addNotesForm.status === 'INVALID') {
            if (this.addNotesForm.controls.notes.invalid) {
                this.alerts.push({type: 'danger', message: this.addNotesForm.controls.group_id.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }
}

