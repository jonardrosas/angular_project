import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBootstrapModule } from './../../third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { MaterialModule } from './../../third_party_modules/material/material.module';
import { NgAgGridModule } from './../../third_party_modules/ag-grid/ag-grid.module';

import { SharedModule } from './../../../shared';
import { OrcRecordService, MantisRecordService, OrcCheckService} from './services';

import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { DeviceSummaryComponent } from './components/device-summary/device-summary.component';
import { DetailJobActionSectionComponent } from './components/detail-job-action-section/detail-job-action-section.component';
import { DetailErrorStatisticsComponent } from './components/detail-error-statistics/detail-error-statistics.component';
import { DetailNotesSectionComponent } from './components/detail-notes-section/detail-notes-section.component';
import { DetailAttachmentSectionComponent } from './components/detail-attachment-section/detail-attachment-section.component';
import { DetailJobHistorySectionComponent } from './components/detail-job-history-section/detail-job-history-section.component';


@NgModule({
    imports: [
        CommonModule,
        NgBootstrapModule,
        OrcRoutingModule,
        SharedModule,
        MaterialModule,
        NgAgGridModule
    ],  
    declarations: [
        ListComponent,
        DetailComponent,
        CheckListComponent,
        DeviceSummaryComponent,
        DetailJobActionSectionComponent,
        DetailErrorStatisticsComponent,
        DetailNotesSectionComponent,
        DetailAttachmentSectionComponent,
        DetailJobHistorySectionComponent,
    ],
    providers: [OrcRecordService, MantisRecordService, OrcCheckService]
})
export class OrcModule { }
