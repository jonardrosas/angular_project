// Angular imports
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

// Third party imports
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Local imports
import { UpdateSessionObj, UpdateSessionResponse,  NgDtSettings, TestInterFace} from './interface/interface';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  logo = 'assets/img/Mantis3.0004Logo.png';
  tablist = [
      {name: 'Manual Entry', url: '#/test'},
  ]
  data: any;
  items;
  checkoutForm;
 
  constructor(
      private config: NgbModalConfig,
      private modalService: NgbModal,
      //private formBuilder: FormBuilder
  ){
      config.backdrop = 'static';
      config.keyboard = false;
  }

  ngOnInit() {
      //this.updateSession();
  }

  isAuthenticated(){
      if(this.data.group_info.status_code == 401){
          //self.open();
      }
  }

  /*
  updateSession(){
      this._navConfigService.updateSession()
        .subscribe(data =>
              this.data =  {
                'group_info': data['response']
              },
              err => console.error('this is error'),
              () => this.isAuthenticated()
        )
  }*/
  
}
