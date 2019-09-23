import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-violation-viewer',
  templateUrl: './material-violation-viewer.component.html',
  styleUrls: ['./material-violation-viewer.component.css']
})
export class MaterialViolationViewerComponent implements OnInit {
    dataSource;
    displayedColumns;

  constructor() { }

  ngOnInit() {
  }

}
