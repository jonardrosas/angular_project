import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    OrcRoutingModule
  ]
})
export class OrcModule { }
