import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { Alert } from './../../../../../core/models';
import { APP_CONFIG } from './../../../../../configs';
import {
    NgxDtTableOptionsModel,
    NgxDtTablePage,
    TastypieSort,
    TastypiePage,
    TastypieLimit
} from './../../../../../shared';
import { OrcRecordModel } from './../../models';
import { OrcRecordService, MantisRecordService } from './../../services';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit  {
    private alerts: Alert[] = [];
    /* NgxComponent property */
    rows: OrcRecordModel[];
    limit = new TastypieLimit();
    page = new TastypiePage();
    sort = new TastypieSort();
    filters = new OrcRecordModel();
    queryParams;
    options = new NgxDtTableOptionsModel();
    columns = [
        {
            prop: 'id',
            name: 'Mantis id',
            type: 'link',
            canAutoResize: true
        },
        {prop: 'maskset', name: 'Maskset', canAutoResize: true},
        {prop: 'device', name: 'Device', canAutoResize: true},
        {prop: 'ptrf', name: 'PTRF'},
        {prop: 'layer', name: 'Layer'},
        {prop: 'operation', name: 'Operation'},
        {prop: 'techtype', name: 'Techtype'},
        {prop: 'status', name: 'Stage'},
        {prop: 'resolution', name: 'Status'},
    ]

    constructor(private service: OrcRecordService, private mantisService: MantisRecordService) {
        this.options.externalPaging = true;
        this.options.externalSorting = true;
        this.sort.order_by = "-id";
        //this.filters = {operation__in: 'ORC,MRC,LMC'}
        this.options.ngxClass = APP_CONFIG.APP_THEME;
        this.limit.limit = 10;
        this.queryParams = {
            ...this.limit,
            ...this.filters,
            ...this.page,
            ...this.sort,
        }
    }

    ngOnInit() {
        debugger;
        this.getQuerySet(this.queryParams)
    }
    
    getQuerySet(queryParams): void {
        this.options.loadingIndicator = true;
        this.mantisService.getQuerySet(queryParams).subscribe(
            (data) => {
                this.rows = data.objects;
                this.limit.limit = data.meta.limit;
                this.page.offset = data.meta.offset;
                this.page.total_count = data.meta.total_count;
                this.page.pageNumber = (data.meta.offset / data.meta.limit);
                this.options.loadingIndicator = false;
            },
            (err) => {
                this.options.loadingIndicator = false;
                this.alerts.push({message: 'No Record Found', type: 'danger'});
            }
        )
    }

}
