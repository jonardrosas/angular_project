import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material'
import * as moment from 'moment';
import {
    NgxDtTableOptionsModel,
    NgxDtTablePage,
    TastypieSort,
    TastypiePage,
    TastypieLimit
} from './../../../../../../shared';
import { NgxDtTableService } from './../../../../../../shared/services';



@Component({
  selector: 'orc-shd-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
  @Input() rows:any;
  @Input() gridConfig:any;
  @Input() server:any;

  @Input() options;
  @Input() page;
  @Input() sort;
  @Input() limit;
  @Input() filters;

  @Output() ngxsort = new EventEmitter<any>();
  @Output() ngxpage = new EventEmitter<any>();
  @Output() ngxfilter = new EventEmitter<any>();

  public filterObj:any = {};
  public globalSearch:any;

  @ViewChild(MatMenuTrigger, {static: false}) triggerSearchFilterMenu: MatMenuTrigger;
  public gMultiSelectFilter: FormControl = new FormControl();
  constructor(public ngxDtTableSvc: NgxDtTableService) {
  }

  ngOnInit() {
    this.gridConfig.columnDefs.forEach((col)=>{
        this.ngxDtTableSvc.filterConfig(this, col);
    });
  }

  sortWorklist(queryParams){
    this.ngxsort.emit(queryParams);
  }

  filterWorklist(queryParams){
    this.ngxfilter.emit(queryParams);
  }

  pageWorklist(queryParams){
    this.ngxpage.emit(queryParams);
  }

  applyFilter(evt:any, columnDefs:any): void{
    if(this.filters){
        this.filterObj = this.filters;
    }
    else{
        columnDefs.forEach((column)=>{
            this.ngxDtTableSvc.updateFilterValues(this, column);
        });
        this.triggerSearchFilterMenu.closeMenu();
    }
    const queryParams = {
            ...this.limit,
            ...this.filterObj,
            ...this.sort
        }
    this.ngxfilter.emit(queryParams);
  }

  clearFilter(evt:any, columnDefs:any): void{
    this.triggerSearchFilterMenu.closeMenu();
    this.gridConfig.globalSearch = undefined;
    columnDefs.forEach((column)=>{
        if(this.filters){
            this.filterObj = this.filters;
        }
        column.filter.fieldValue = undefined;
        column.filter.selected = column.filter.defaultSelected;
        for(let attr in this.filterObj){
            if(attr.startsWith(column.prop)){
               this.filterObj[attr] = undefined;
            }
        }

        const queryParams = {
            ...this.limit,
            ...this.filterObj,
            ...this.sort
        }
        this.ngxfilter.emit(queryParams);
    });
  }
  OnDateChange(value, column): void{
      column.filter.fieldValue = value;
  }
  fnGlobalSearch(globalSearch: any): void{
    if(globalSearch){
        this.filterObj = {};
        globalSearch = globalSearch.split(',');
        globalSearch.forEach((item)=>{
            item = item.split(':');
            if(item.length>1){
                let [columnName, value] = item;
                let matchColumn = this.gridConfig.columnDefs.filter((col)=>{return col.prop.toLocaleLowerCase().startsWith(columnName.toLocaleLowerCase())})
                if(matchColumn.length>1){
                    console.log("Duplicate column match found.");
                }
                else{
                    matchColumn = matchColumn[0];
                    this.filterObj[`${matchColumn.prop}__icontains`] = (value)?value.trim():value;
                }
            }
            else{
                this.filterObj['search'] = globalSearch;
            }
        });
        const queryParams = {
            ...this.limit,
            ...this.filterObj,
            ...this.sort
        }
        this.ngxfilter.emit(queryParams);
    }
  }
}
