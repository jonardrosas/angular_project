import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgBootstrapModule } from './../modules/third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { MaterialModule } from './../modules/third_party_modules/material/material.module';

import { BootstrapLoginComponent } from './components/bootstrap-login/bootstrap-login.component';
import { BootstrapNavigationComponent } from './components/bootstrap-navigation/bootstrap-navigation.component';
import { NgxDtTableComponent } from './components/ngx-dt-table';
import { MaterialNavigationComponent } from './components/material-navigation/material-navigation.component';
import { MaterialSideNavigationComponent } from './components/material-side-navigation/material-side-navigation.component';
import { MaterialViolationViewerComponent } from './components/material-violation-viewer/material-violation-viewer.component';
import { MaterialLoginComponent } from './components/material-login/material-login.component';
import { AgGridWrapperComponent } from './components/ag-grid-wrapper/ag-grid-wrapper.component';
import { BootstrapAlertComponent } from './components/bootstrap-alert/bootstrap-alert.component';
import { ArrayContainsPipe, Safe, UnixToDatePipe } from './pipes';
import { NgxDtTableService } from './services';
// import { GlobalSearchComponent } from './components/global-search/global-search.component';
//import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { ColumnFilterComponent } from './components/ngx-dt-table/column-filter/column-filter.component';
import { BootstrapConfirmComponent } from './components/bootstrap-confirm/bootstrap-confirm.component';


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
      NgxDtTableComponent,
      MaterialNavigationComponent,
      BootstrapLoginComponent,
      BootstrapNavigationComponent,
      MaterialSideNavigationComponent,
      MaterialViolationViewerComponent,
      MaterialLoginComponent,
      AgGridWrapperComponent,
      BootstrapAlertComponent,
      MaterialLoginComponent,
      //GlobalSearchComponent,
      ColumnFilterComponent,
      ArrayContainsPipe,
      BootstrapConfirmComponent,
      Safe,
      UnixToDatePipe
  ],
  exports: [
      NgxDtTableComponent,
      BootstrapLoginComponent,
      BootstrapNavigationComponent,
      MaterialNavigationComponent,
      MaterialSideNavigationComponent,
      MaterialViolationViewerComponent,
      MaterialLoginComponent,
      AgGridWrapperComponent,
      BootstrapAlertComponent,
      BootstrapConfirmComponent,
      MaterialLoginComponent,
      ColumnFilterComponent,
      Safe,
      UnixToDatePipe
  ],
  providers: [NgxDtTableService]

})
export class SharedModule { }
