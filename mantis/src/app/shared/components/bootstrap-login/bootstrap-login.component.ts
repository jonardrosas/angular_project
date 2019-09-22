import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbAlertConfig } from './../../../modules/third_party_modules/ng_bootstrap';

@Component({
  selector: 'app-bootstrap-login',
  templateUrl: './bootstrap-login.component.html',
  styleUrls: ['./bootstrap-login.component.css']
})
export class BootstrapLoginComponent implements OnInit {
    @Output() login = new EventEmitter<any>();
    @Input() alert;
    loginForm;

    constructor(
        public alertConfig: NgbAlertConfig,
        public formBuilder: FormBuilder,
    ){
        alertConfig.dismissible = false;
        this.loginForm = this.formBuilder.group({
            username: '',
            password: ''
        });

    }

    ngOnInit() {
    }

    onSubmit(){
        this.login.emit(this.loginForm.value)
    }
      

}
