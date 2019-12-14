import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from './../../../../../../third_party_modules/ng_bootstrap';
import * as ENUMS from './../../../../scripts/';


@Component({
  selector: 'app-check-detail-popup',
  templateUrl: './check-detail-popup.component.html',
  styleUrls: ['./check-detail-popup.component.css']
})

export class CheckDetailPopupComponent implements OnInit {
  @Input() checkId;
  @Input() mantisId;
  public url: string = ENUMS.CHECK_REPORT_URL;

  constructor(
      public activeModal: NgbActiveModal,
  ) {}    

  ngOnInit() {
  }

}
