import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ViolationViewerComponent } from './components/violation-viewer/violation-viewer.component';
import { DeviceSummaryComponent } from './components/device-summary/device-summary.component';

@NgModule({
  imports: [
      CommonModule,
      NgbModule
  ],
  declarations: [
      ViolationViewerComponent,
      DeviceSummaryComponent,
  ],
  exports: [
      ViolationViewerComponent,
      DeviceSummaryComponent
  ]

})
export class SharedModule { }
