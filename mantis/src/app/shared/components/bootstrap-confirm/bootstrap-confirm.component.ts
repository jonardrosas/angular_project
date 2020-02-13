import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbAlertConfig, NgbModalConfig } from './../../../modules/third_party_modules/ng_bootstrap';

@Component({
  selector: 'app-bootstrap-confirm',
  templateUrl: './bootstrap-confirm.component.html',
  styleUrls: ['./bootstrap-confirm.component.css']
})
export class BootstrapConfirmComponent implements OnInit {
  @Input() data;
  @Input() title;
  alertType;

  constructor (
      public activeModal: NgbActiveModal,
      private alertConfig: NgbAlertConfig,
      private modalConfig: NgbModalConfig
  ) {
      this.alertConfig.dismissible = false;
      this.modalConfig.backdrop = 'static'
      this.modalConfig.keyboard = false;
  }

  ngOnInit() {
      this.alertType = `bg-${this.data.type}`;
      if(!this.title){
          this.title = "Confirmation Message"
      }
  }


}
