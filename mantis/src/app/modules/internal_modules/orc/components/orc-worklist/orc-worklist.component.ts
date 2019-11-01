import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from './../../../../../core/services';
import { OrcConstant } from './../../constants/orc.constant';
import {
    NgxDtTableOptionsModel,
    NgxDtTablePage,
    TastypieSort,
    TastypiePage,
    TastypieLimit
} from './../../../../../shared';
import { OrcRecordModel } from './../../models'
import { APP_CONFIG } from './../../../../../configs';

@Component({
  selector: 'app-orc-worklist',
  templateUrl: './orc-worklist.component.html',
  styleUrls: ['./orc-worklist.component.css']
})
export class OrcWorklistComponent implements OnInit {

  public orc_worklist:any = OrcConstant.orc_worklist;
  public rowData: any;



  public queryParams:any;
  public gridConfig:any;

  limit = new TastypieLimit();
  page = new TastypiePage();
  sort = new TastypieSort();
  filters:any;

  options = new NgxDtTableOptionsModel();
  constructor(public apiService: ApiService) {
    this.gridConfig = {
        gridSelf: this,
        columnDefs: [
            {
                prop: 'mantis_id',
                name: 'Mantis id',
                type: 'link',
                canAutoResize: true,
                filter: {
                    "type": "default"
                },
                draggable: false,
                headerCheckboxable: true,
                checkboxable: true,
            },
            {prop: 'date', name: 'Date', canAutoResize: true,
                filter: {
                        "type": "date",
                        "outputFormat":"YYYY-MM-DD"
                    }
                },
            {prop: 'maskset', name: 'Maskset', canAutoResize: true,
                filter: {
                        "type": "default"
                    }
            },
            {prop: 'device', name: 'Device', canAutoResize: true,
                filter: {
                        "type": "multiselect",
                        "choices": [
                                    {"value": 'PEM4', "name":"PEM4" },
                                    {"value": 'JG3', "name":"JG3" },
                                    {"value": 'MPWCS12_RUFUS03', "name":"MPWCS12_RUFUS03" }
                                ],
                         "defaultSelected": []
                    }
                },
            {prop: 'ptrf', name: 'PTRF',canAutoResize: true,
                filter: {
                        "type": "default"

                    }
                },
            {prop: 'layer', name: 'Layer',canAutoResize: true},
            {prop: 'operation', name: 'Operation',canAutoResize: true,
                filter: {
                        "type": "select",
                         "choices": [
                                    {"value": 'ORC', "name":"ORC" },
                                    {"value": 'MAS', "name":"MAS" },
                                    {"value": 'TARGET', "name":"TARGET" }
                                ],
                         "defaultSelected": null

                    }},
            {prop: 'techtype', name: 'Techtype',canAutoResize: true},
        ]
      }
        this.sort.ordering = "-id";
        this.limit.limit = 10;
        this.page.offset = 0;
        this.page.page = 0;
        this.queryParams = {
            ...this.limit,
            ...this.filters,
            ...this.page,
            ...this.sort,
        };
  }

  ngOnInit() {
    this.getOrcWorklist(this.queryParams);
  }

  getOrcWorklist(queryParams){
    this.options.loadingIndicator = true;
    this.apiService.getRequest(this.orc_worklist.Urls.worklist, queryParams).subscribe((data)=>{
            this.rowData =  data.results;
            this.limit.limit =  queryParams.limit;
            this.page.offset = queryParams.offset;
            this.page.total_count = data.count;
            this.page.page = queryParams.page;
            this.options.loadingIndicator = false;
    },
    (error)=>{
        this.apiService.errorResponse(error);
    });
  }

}
