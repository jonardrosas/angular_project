import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { GroupProfileInterface } from '../../../../models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-check-escalate-soa',
  templateUrl: './check-escalate-soa.component.html',
  styleUrls: ['./check-escalate-soa.component.css']
})

export class CheckEscalateSoaComponent implements OnInit {
    @Input() selectedData;
    public escalateSoaGroupsForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Escalate to SOA Groups";
    public Editor = ClassicEditor;
    public soaGroups$: Observable<GroupProfileInterface[]>;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) {}

    ngOnInit() {
        this.getSOAGroups();
        this.escalateSoaGroupsForm = new FormGroup({
            group_id: new FormControl('', Validators.required),
            comments: new FormControl('')
        });
    }

    getSOAGroups() {
        this.soaGroups$ = this.store.pipe(select(orcModuleStore.getSOASupportTeamGroupSelector))
    }    
    onSubmit() {
        if (this.escalateSoaGroupsForm.status === 'INVALID') {
            if (this.escalateSoaGroupsForm.controls.groups.invalid) {
                this.alerts.push({type: 'danger', message: this.escalateSoaGroupsForm.controls.group_id.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }  

}
