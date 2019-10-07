import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbAlertConfig, NgbModalConfig } from './../../../modules/third_party_modules/ng_bootstrap';

@Component({
  selector: 'app-bootstrap-alert',
  templateUrl: './bootstrap-alert.component.html',
  styleUrls: ['./bootstrap-alert.component.css']
})
export class BootstrapAlertComponent implements OnInit {
  @Input() data;
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
  }


}
