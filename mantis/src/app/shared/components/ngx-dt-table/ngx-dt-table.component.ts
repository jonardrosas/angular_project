import { Component, OnInit, Output, Input, EventEmitter, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import {MatMenuTrigger} from '@angular/material';
import { NgxDtTableOptionsModel, NgxDtTablePage, TastypiePage, TastypieSort } from './ngx-dt-table.models';
import { APP_CONFIG } from './../../../configs';
import { NgxDtTableService } from './../../services';

@Component({
  selector: 'shd-ngx-dt-table',
  templateUrl: './ngx-dt-table.component.html',
  styleUrls: ['./ngx-dt-table.component.css']
})


export class NgxDtTableComponent implements OnInit, AfterViewInit {
    @Input() rows;
    @Input() options;
    @Input() page;
    @Input() sort;
    @Input() limit;
    @Input() filters;

    private _columns;
    private filterObj:any = {};
    private newPage = new TastypiePage();
    @Output() ngxpage = new EventEmitter<any>();    
    @Output() ngxsort = new EventEmitter<any>();
    @Output() ngxfilter = new EventEmitter<any>();

    @ViewChild('linkTemplate', {static: false}) linkTemplate: TemplateRef<any>;
    @ViewChild('hdrTpl', {static: false}) hdrTpl: TemplateRef<any>;
    @ViewChild(MatMenuTrigger, {static: false}) triggerMenu: MatMenuTrigger;

    public multiSelectFilter: FormControl = new FormControl();

    @Input()
    set columns(cols){
        this._columns = cols;
    }

    get columns(){
        return this._columns;
    }

    constructor(public ngxDtTableSvc: NgxDtTableService) {
    }

    ngAfterViewInit() {
        let newColumns = [];
        for (var col_index in this.columns){
            let col = this.columns[col_index]
            if('type' in col && col.type == 'link'){
                col.cellTemplate = this.linkTemplate;
            }
            //this.filterConfig(col);
            this.ngxDtTableSvc.filterConfig(this, col);
            newColumns.push(col);
        }
        this._columns = newColumns;
    }

    filterConfig(col:any): void{
        if(col.filter && col.filter.type === 'default' && !col.filter.choices){
            col.filter.choices = [
                                {"value": 'istartswith', "name":"Starts With" },
                                {"value": 'iendswith', "name":"Ends With" },
                                {"value": 'icontains', "name":"Contains" },
                                {"value": 'iexact', "name":"Equal" },
                                {"value": 'in', "name":"In" }
                            ]
            col.filter.selected = col.filter.choices[2].value;
        }
        else if(col.filter && col.filter.type === 'date' && !col.filter.choices){
            col.filter.choices = [
                                {"value": 'gt', "name":"Greater than (>)" },
                                {"value": 'lt', "name":"Lesser than (<)" },
                                {"value": 'gte', "name":"Greater than or Equal (<=)" },
                                {"value": 'lte', "name":"Lesser than or Equal (<=)" },
                                {"value": 'iexact', "name":"Equal" }
                            ]
            col.filter.selected = col.filter.choices[1].value;
        }
        else if(col.filter && ['SELECT','MULTISELECT'].includes(col.filter.type.toUpperCase())){
            col.filter.selected = col.filter.defaultSelected;
        }
        col.headerTemplate = this.hdrTpl;
    }

    ngOnInit() {
        if(!this.options){
            this.options = new NgxDtTableOptionsModel();
        }
        if(!this.options.ngxClass){
            this.options.ngxClass = 'material'
        }
        if(this.options.ngxClass == 'material-sidenav'){
            this.options.ngxClass = 'material'
        }
        if(this.options){
            this.options.externalPaging = true;
            this.options.externalSorting = true;
            this.options.ngxClass = APP_CONFIG.APP_THEME;
        }
    }
    
    setPage(pageInfo){
        // attach filter and sorting
        this.limit.limit = pageInfo.limit;
        this.newPage.page = pageInfo.offset;
        this.newPage.offset = (pageInfo.pageSize * pageInfo.offset);
        this.newPage.total_count = pageInfo.count;
        const queryParams = {
            ...this.limit,
            ...this.filters,
            ...this.newPage,
            ...this.sort
        }
        this.ngxpage.emit(queryParams)
    }
    
    onSort(event) {
        this.limit.limit = 10;
        this.page.offset = 0;
        this.page.page = 0;

        // attach filter only
        this.sort.getSort(event);
        const queryParams = {
            ...this.limit,
            ...this.filterObj,
            ...this.page,
            ...this.sort
        }
        this.ngxsort.emit(queryParams)
    }

    updateFilter(event, column): void {
        if(this.filters){
            this.filterObj = this.filters;
        }
        else{
            this.ngxDtTableSvc.updateFilterValues(this, column);
        }
        column.filter.filterStyle = {color: 'rgb(255, 64, 129)'};
        this.limit.limit = 10;
        this.page.offset = 0;
        this.page.page = 0;
        const queryParams = {
            ...this.limit,
            ...this.filterObj,
            ...this.page,
            ...this.sort
        }
        this.ngxfilter.emit(queryParams);
    }

    clearFilter(event, column): void{
        column.filter.values = null;
        column.filter.filterStyle = null;
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
        this.limit.limit = 10;
        this.page.offset = 0;
        this.page.page = 0;
        const queryParams = {
            ...this.limit,
            ...this.filterObj,
            ...this.page,
            ...this.sort
        };
        this.ngxfilter.emit(queryParams);
    }

    OnDateChange(dateArgs): void{
        let [value, column] = dateArgs;
        column.filter.fieldValue = value;
    }
}
