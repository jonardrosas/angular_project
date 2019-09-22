import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgBootstrapModule } from './../modules/third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { MaterialModule } from './../modules/third_party_modules/material/material.module';

import { DeviceSummaryComponent } from './components/device-summary/device-summary.component';
import { BootstrapLoginComponent } from './components/bootstrap-login/bootstrap-login.component';
import { BootstrapNavigationComponent } from './components/bootstrap-navigation/bootstrap-navigation.component';
import { ChecksTableComponent} from './components/checks-table/checks-table.component';
import { ErrorStatisticsComponent} from './components/error-statistics/error-statistics.component';
import { WorklistComponent} from './components/worklist/worklist.component';
import { NgxDtTableComponent } from './components/ngx-dt-table';
import { MaterialNavigationComponent } from './components/material-navigation/material-navigation.component';
import { MaterialSideNavigationComponent } from './components/material-side-navigation/material-side-navigation.component';
import { MaterialViolationViewerComponent } from './components/material-violation-viewer/material-violation-viewer.component';
import { MaterialLoginComponent } from './components/material-login/material-login.component';
import { AgGridWrapperComponent } from './components/ag-grid-wrapper/ag-grid-wrapper.component';


@NgModule({
  imports: [
      CommonModule,
      NgxDatatableModule,
      RouterModule,
      NgBootstrapModule,
      MaterialModule,
      FormsModule,
      AgGridModule.withComponents([]),
      ReactiveFormsModule 
  ],
  declarations: [
      DeviceSummaryComponent,
      ChecksTableComponent,
      ErrorStatisticsComponent,
      WorklistComponent,
      NgxDtTableComponent,
      MaterialNavigationComponent,
      BootstrapLoginComponent,
      BootstrapNavigationComponent,
      MaterialSideNavigationComponent,
      MaterialViolationViewerComponent,
      MaterialLoginComponent,
      AgGridWrapperComponent,
  ],
  exports: [
      DeviceSummaryComponent,
      NgxDtTableComponent,
      BootstrapLoginComponent,
      BootstrapNavigationComponent,
      MaterialNavigationComponent,
      MaterialSideNavigationComponent,
      MaterialViolationViewerComponent,
      MaterialLoginComponent,
      AgGridWrapperComponent
  ]

})
export class SharedModule { }
