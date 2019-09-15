import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { DeviceSummaryComponent } from './../../shared/components/device-summary/device-summary.component';

import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
      ListComponent,
      DetailComponent,
      DeviceSummaryComponent
  ],
  imports: [
    CommonModule,
    OrcRoutingModule,
    SharedModule
  ]
})
export class OrcModule { }
