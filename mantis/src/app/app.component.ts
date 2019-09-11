// Angular  imports
import { Component, OnInit} from '@angular/core';

// Third party import
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

// Internall Apps
import { AuthenticationService } from './core/services';
import { AuthenticationComponent } from './core/authentication/authentication.component'
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'Mantis 4';
  data: any;

  constructor(
      private _service: AuthenticationService,
      public config: NgbModalConfig,
      private modalService: NgbModal,
      private cookieService: CookieService
  ) {
      config.backdrop = 'static';
      config.keyboard = false;
  }

  ngOnInit() {
      this.authenticate();
  }

  authenticate(){
      this._service.authenticate(AuthenticationComponent)
  }

}



