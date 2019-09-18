import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { OrcRecordModel } from './../../models/';

@Component({
  selector: 'app-violation-viewer',
  templateUrl: './violation-viewer.component.html',
  styleUrls: ['./violation-viewer.component.css']
})
export class ViolationViewerComponent implements OnInit {
  @Input() object: OrcRecordModel;

  constructor() { }

  ngOnInit() {
  }

}
