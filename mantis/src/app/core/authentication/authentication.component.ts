import { Component, OnInit , Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AuthenticationService } from './../services';
import { Alert } from './../models';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent {
  loginForm;

  constructor(
      private _service: AuthenticationService,
      public activeModal: NgbActiveModal,
      public formBuilder: FormBuilder,
      private http: HttpClient
  ){

    this.loginForm = this.formBuilder.group({
        username: '',
        password: ''
    });
   
  }
  
  completed(){
      this.activeModal.close();
  }
  
  invalid(err){
      debugger;
      //this.alerts.push({msg: 'Invalid Username or Password', type: 'danger'});
  }
  
  onSubmit() {
      const credentials = this.loginForm.value;
      this._service.logIn(credentials)
          .subscribe(
              data => this._service.authenticate("from auth component"),
              //err => console.error(err),
              //() => this.completed()
              //data => this.completed(),
              err => this.invalid(err),
              () => this.completed()
          )
  }


}
