import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.css']
})
export class ColumnFilterComponent implements OnInit {
  @Input() column;

  @Output() updateFilter = new EventEmitter<any>();
  @Output() clearFilter = new EventEmitter<any>();
  @Output() OnDateChange = new EventEmitter<any>();

  @ViewChild(MatMenuTrigger, {static: false}) triggerMenu: MatMenuTrigger;

  public multiSelectFilter: FormControl = new FormControl();

  public  dateArgs:any;
  constructor() { }

  ngOnInit() {
  }

  updateFilterFn(event, column): void {
      this.updateFilter.emit(column);
      this.triggerMenu.closeMenu();
  }
  clearFilterFn(event, column): void{
      this.triggerMenu.closeMenu();
      this.clearFilter.emit(column);
  }

  OnDateChangeFn(value, column): void{
      this.dateArgs = [value, column];
      this.OnDateChange.emit(this.dateArgs);
  }
}
