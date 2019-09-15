import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapLoginComponent } from './components/bootstrap-login/bootstrap-login.component';
import { DeviceSummaryComponent } from './components/device-summary/device-summary.component';
import { ErrorStatisticsComponent } from './components/error-statistics/error-statistics.component';
import { ChecksTableComponent } from './components/checks-table/checks-table.component';
import { WorklistComponent } from './components/worklist/worklist.component';

@NgModule({
  declarations: [
        //BootstrapLoginComponent, DeviceSummaryComponent, ErrorStatisticsComponent, ChecksTableComponent, WorklistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
