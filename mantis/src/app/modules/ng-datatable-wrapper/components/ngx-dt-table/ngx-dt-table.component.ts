import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgxDtTableOptionsModel, NgxDtTablePage} from './ngx-dt-table.models';

@Component({
  selector: 'app-ngx-dt-table',
  templateUrl: './ngx-dt-table.component.html',
  styleUrls: ['./ngx-dt-table.component.css']
})
export class NgxDtTableComponent implements OnInit {
    @Input() rows;
    @Input() columns;
    @Input() options;
    //@Input() page;
    //private _options = new NgxDtTableOptionsModel()
    private page = new NgxDtTablePage();
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
