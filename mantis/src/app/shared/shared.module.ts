import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ViolationViewerComponent } from './components/violation-viewer/violation-viewer.component';
import { DeviceSummaryComponent } from './components/device-summary/device-summary.component';
import { BootstrapLoginComponent } from './components/bootstrap-login/bootstrap-login.component';
import { ChecksTableComponent} from './components/checks-table/checks-table.component';
import { ErrorStatisticsComponent} from './components/error-statistics/error-statistics.component';
import { WorklistComponent} from './components/worklist/worklist.component';


@NgModule({
  imports: [
      CommonModule,
      NgbModule
  ],
  declarations: [
      ViolationViewerComponent,
      DeviceSummaryComponent,
      BootstrapLoginComponent,
      ChecksTableComponent,
      ErrorStatisticsComponent,
      WorklistComponent
  ],
  exports: [
      ViolationViewerComponent,
      DeviceSummaryComponent
  ]

})
export class SharedModule { }
