import { Component, OnInit } from '@angular/core';
import { OrcRecordService } from './../../../shared/services';
import { OrcRecordModel } from './../../../shared/models';
import { Alert } from './../../../core/models';
import { NgxDtTableOptionsModel, NgxDtTablePage} from './../../ng-datatable-wrapper/components/ngx-dt-table/ngx-dt-table.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
    rows: OrcRecordModel[] = [];
    alerts: Alert[] = [];
    page = new NgxDtTablePage();
    options = new NgxDtTableOptionsModel();

    private columns = [
        {prop: 'id', name: 'Id'},
        {prop: 'mantis_id', name: 'Mantis id'},
        {prop: 'maskset', name: 'Maskset'},
    ]

    constructor(private service: OrcRecordService) { }

    ngOnInit() {
        this.getQuerySet()
    }

    getQuerySet(): void {
        this.service.getQuerySet().subscribe(
            (data) => {
                this.rows = data.objects;
                /*this.page = {

                }*/
            },
            (err) => {
                this.alerts.push({message: 'No Record Found', type: 'danger'});
            }
        )
    }

}
