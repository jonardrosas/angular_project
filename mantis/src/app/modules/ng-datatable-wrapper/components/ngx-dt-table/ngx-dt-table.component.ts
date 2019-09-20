import { Component, OnInit, Output, Input, EventEmitter, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { NgxDtTableOptionsModel, NgxDtTablePage, TastypiePage, TastypieSort } from './ngx-dt-table.models';
import { NgxDtTableService } from './ngx-dt-table.service';

@Component({
  selector: 'app-ngx-dt-table',
  templateUrl: './ngx-dt-table.component.html',
  styleUrls: ['./ngx-dt-table.component.css']
})


export class NgxDtTableComponent implements OnInit, AfterViewInit {
    @Input() rows;
    @Input() options;
    @Input() page: NgxDtTablePage;
    @Input() sort;
    @Input() limit;
    @Input() filters;
    private _columns;
    private newPage = new TastypiePage();
    @Output() ngxpage = new EventEmitter<any>();    
    @Output() ngxsort = new EventEmitter<any>();
    @ViewChild('linkTemplate', {static: false}) linkTemplate: TemplateRef<any>;

    @Input()
    set columns(cols){
        this._columns = cols;
    }

    get columns(){
        return this._columns;
    }

    constructor(private ngxService: NgxDtTableService) {
;
    }

    ngAfterViewInit() {
        let newColumns = [];
        for (var col_index in this.columns){
            let col = this.columns[col_index]
            if('type' in col && col.type == 'link'){
                col.cellTemplate = this.linkTemplate;
            }
            newColumns.push(col)
        }
        this._columns = newColumns;
    }    

    ngOnInit() {
        if(!this.options){
            this.options = new NgxDtTableOptionsModel();
        }
        if(!this.options.class){
            this.options.class = 'material'
        }
    }
    
    setPage(pageInfo){
        // attach filter and sorting
        this.limit.limit = pageInfo.limit;
        this.newPage.offset = pageInfo.offset * pageInfo.limit;
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
        // attach filter only
        this.sort.getSort(event);
        const queryParams = {
            ...this.limit,
            ...this.sort
        }
        debugger;
        this.ngxsort.emit(queryParams)
    }

}
