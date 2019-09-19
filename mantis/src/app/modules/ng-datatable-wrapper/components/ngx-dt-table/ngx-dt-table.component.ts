import { Component, OnInit, Input, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxDtTableOptionsModel, NgxDtTablePage} from './ngx-dt-table.models';

@Component({
  selector: 'app-ngx-dt-table',
  templateUrl: './ngx-dt-table.component.html',
  styleUrls: ['./ngx-dt-table.component.css']
})
export class NgxDtTableComponent implements OnInit, AfterViewInit {
    @Input() rows;
    @Input() options;
    private _columns;
    private page = new NgxDtTablePage();
    @ViewChild('linkTemplate', {static: false}) linkTemplate: TemplateRef<any>;

    @Input()
    set columns(cols){
        this._columns = cols;
    }

    get columns(){
        return this._columns;
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
   
    constructor() {
        this.page.pageNumber = 0;
        this.page.size = 20;
    }

    ngOnInit() {
        if(!this.options){
            this.options = new NgxDtTableOptionsModel();
            debugger;
        }

        if(!this.options.class){
            this.options.class = 'material'
        }

    }

}
