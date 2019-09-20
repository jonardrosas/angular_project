import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { OrcRecordService, MantisRecordService } from './../../../shared/services';
import { OrcRecordModel } from './../../../shared/models';
import { Alert } from './../../../core/models';
import { NgxDtTableOptionsModel, NgxDtTablePage, TastypieSort, TastypiePage, TastypieLimit} from './../../ng-datatable-wrapper/components/ngx-dt-table/ngx-dt-table.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit  {
    private alerts: Alert[] = [];
    /* NgxComponent property */
    private rows: OrcRecordModel[] = [];
    private limit = new TastypieLimit();
    private page = new TastypiePage();
    private sort = new TastypieSort();
    private filters = new OrcRecordModel();
    private queryParams;
    private options = new NgxDtTableOptionsModel();
    private columns = [
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
                //this.page.size = data.meta.limit;
                this.page.pageNumber = (data.meta.offset / data.meta.limit);
                //this.page.totalElements = data.meta.total_count;
                this.options.loadingIndicator = false;
            },
            (err) => {
                this.options.loadingIndicator = false;
                this.alerts.push({message: 'No Record Found', type: 'danger'});
            }
        )
    }

}
