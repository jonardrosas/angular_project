import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrcRecordService } from './../../../shared/services';
import { OrcRecordModel } from './../../../shared/models';
import { Alert } from './../../../core/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private object: OrcRecordModel;
  public alerts: Alert[] = [];

  constructor(private route: ActivatedRoute, private service: OrcRecordService, private router: Router) { }

  ngOnInit () {
      this.route.paramMap.subscribe(params => {
          this.getObject(params.get('id'));
      });
  }

  getObject(id){
      this.service.getObject(id).subscribe(
          (data) => {
              this.object = data;
          },
          (err) => {
              this.alerts.push({message: 'No Record Found', type: 'danger'});
          }
      )
  }


}
