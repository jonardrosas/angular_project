import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-material-login',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.css']
})
export class MaterialLoginComponent implements OnInit {
    @Output() login = new EventEmitter<any>();
    loginForm;

    constructor(public formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
        this.loginForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    }

    ngOnInit() {
    }

    @Input()
    set alert(alert_msg){
        if(alert_msg){
            this.openSnackBar(alert_msg)
        }
    }    

    openSnackBar(alert_msg) {
        this._snackBar.open(alert_msg.message, alert_msg.type, {duration: 3000});
    }

    onSubmit(){
        this.login.emit(this.loginForm.value)
    }

}


