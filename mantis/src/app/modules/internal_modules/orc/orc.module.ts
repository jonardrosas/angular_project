import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { NgBootstrapModule } from './../../third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { MaterialModule } from './../../third_party_modules/material/material.module';

import { SharedModule } from './../../../shared';
import { OrcRecordService, MantisRecordService, OrcCheckService} from './services';

import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
    imports: [
        CommonModule,
        NgBootstrapModule,
        OrcRoutingModule,
        SharedModule,
        MaterialModule,
        AgGridModule
    ],  
    declarations: [
        ListComponent,
        DetailComponent,
    ],
    providers: [OrcRecordService, MantisRecordService, OrcCheckService]
})
export class OrcModule { }
