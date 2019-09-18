import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { OrcRecordModel } from './../../models/';

@Component({
  selector: 'app-device-summary',
  templateUrl: './device-summary.component.html',
  styleUrls: ['./device-summary.component.css']
})
export class DeviceSummaryComponent implements OnInit {
  @Input() object: OrcRecordModel;

  constructor() { }

  ngOnInit() {
  }

}
