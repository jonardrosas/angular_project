import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrcRecordService } from './../../shared/services';
import { SharedModule } from './../../shared';
import { NgDatatableWrapperModule } from './../ng-datatable-wrapper';

import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        OrcRoutingModule,
        SharedModule,
        NgDatatableWrapperModule
    ],  
    declarations: [
        ListComponent,
        DetailComponent,
    ],

     providers: [OrcRecordService]
})
export class OrcModule { }
