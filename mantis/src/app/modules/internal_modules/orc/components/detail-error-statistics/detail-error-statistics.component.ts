import { Component, OnInit, Input } from '@angular/core';
import { MantisRecordService } from './../../services';

@Component({
  selector: 'app-detail-error-statistics',
  templateUrl: './detail-error-statistics.component.html',
  styleUrls: ['./detail-error-statistics.component.css']
})
export class DetailErrorStatisticsComponent implements OnInit {
  @Input() set close(close) {
      if (!close) {
        this.getObject(this.mantisId);
      }
  }
  @Input() public mantisId: number;
  public description: any;

  constructor(private mantisService: MantisRecordService) { }

  ngOnInit() {}

  getObject(id) {
      this.mantisService.getErrorSummary({id}).subscribe(
          (data) => {
              debugger;
              this.description = data.objects[0].description;
          }
      );
  }

}
