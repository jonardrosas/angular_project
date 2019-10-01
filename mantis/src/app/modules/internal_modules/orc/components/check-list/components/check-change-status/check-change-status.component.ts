import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-change-status',
  templateUrl: './check-change-status.component.html',
  styleUrls: ['./check-change-status.component.css']
})
export class CheckChangeStatusComponent implements OnInit {
  @Input() selectedData;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
