import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkListComponent } from './components/work-list/work-list.component';
import { MaterialModule } from './../../../third_party_modules/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../../../shared';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    NgbModule
  ],
  declarations: [WorkListComponent],
  exports: [WorkListComponent]
})
export class OrcSharedModule { }
