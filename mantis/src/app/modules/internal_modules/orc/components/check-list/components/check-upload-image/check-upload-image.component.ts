import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-check-upload-image',
  templateUrl: './check-upload-image.component.html',
  styleUrls: ['./check-upload-image.component.css']
})

export class CheckUploadImageComponent implements OnInit {
    public uploadImageForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Upload Image";
    public files: any[];

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) {
      this.files = [];
    }

    onFileChanged(event: any) {
        this.files = event.target.files;
    }

    ngOnInit() {
        this.uploadImageForm = new FormGroup({
            image: new FormControl('', Validators.required),
        });
    }

    onSubmit() {
        const formData = new FormData();
        for (const file of this.files) {
            formData.append(name, file, file.name);
        }
        this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }
}


