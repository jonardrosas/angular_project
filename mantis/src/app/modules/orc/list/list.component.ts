import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { OrcRecordService, MantisRecordService } from './../../../shared/services';
import { OrcRecordModel } from './../../../shared/models';
import { Alert } from './../../../core/models';
import { NgxDtTableOptionsModel, NgxDtTablePage} from './../../ng-datatable-wrapper/components/ngx-dt-table/ngx-dt-table.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit, AfterViewInit  {
    private rows: OrcRecordModel[] = [];
    private alerts: Alert[] = [];
    private page = new NgxDtTablePage();
    private options = new NgxDtTableOptionsModel();

    private columns = [
        {
            prop: 'id',
            name: 'Mantis id',
            type: 'link'
        },
        {prop: 'maskset', name: 'Maskset'},
        {prop: 'device', name: 'Device'},
        {prop: 'ptrf', name: 'PTRF'},
        {prop: 'layer', name: 'Layer'},
        {prop: 'operation', name: 'Operation'},
        {prop: 'techtype', name: 'Techtype'},
        {prop: 'status', name: 'Stage'},
        {prop: 'resolution', name: 'Status'},
    ]

    constructor(private service: OrcRecordService, private mantisService: MantisRecordService) { }

    ngOnInit() {
        this.getQuerySet()
    }
    
    ngAfterViewInit() {
    }

    getQuerySet(): void {
        let filters = {order_by: '-id'};
        this.mantisService.getQuerySet(filters).subscribe(
            (data) => {
                this.rows = data.objects;
            },
            (err) => {
                this.alerts.push({message: 'No Record Found', type: 'danger'});
            }
        )
    }

}
