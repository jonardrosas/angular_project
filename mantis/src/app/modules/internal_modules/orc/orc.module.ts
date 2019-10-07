import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgBootstrapModule } from './../../third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { MaterialModule } from './../../third_party_modules/material/material.module';
import { NgAgGridModule } from './../../third_party_modules/ag-grid/ag-grid.module';

import { SharedModule } from './../../../shared';
import { OrcRecordService, MantisRecordService, OrcCheckService} from './services';

import * as fromOrcModuleReducer from './store';
import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './containers/detail/detail.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { DeviceSummaryComponent } from './components/device-summary/device-summary.component';
import { DetailJobActionSectionComponent } from './components/detail-job-action-section/detail-job-action-section.component';
import { DetailErrorStatisticsComponent } from './components/detail-error-statistics/detail-error-statistics.component';
import { DetailNotesSectionComponent } from './components/detail-notes-section/detail-notes-section.component';
import { DetailAttachmentSectionComponent } from './components/detail-attachment-section/detail-attachment-section.component';
import { DetailJobHistorySectionComponent } from './components/detail-job-history-section/detail-job-history-section.component';
import { CheckChangeStatusComponent } from './components/check-list/components/check-change-status/check-change-status.component';
import { DefaultTableViewComponent } from './components/device-summary/table_view/table_default/table_default.component';
import { TableView1Component } from './components/device-summary/table_view/table_view1/table_view1.component';
import { DirectorySummaryComponent } from './components/directory-summary/directory-summary.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
    imports: [
        CommonModule,
        NgBootstrapModule,
        OrcRoutingModule,
        SharedModule,
        MaterialModule,
        NgAgGridModule,
        StoreModule.forFeature('orc', fromOrcModuleReducer.reducers),
        EffectsModule.forFeature(fromOrcModuleReducer.effects)
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
        CheckChangeStatusComponent,
        DefaultTableViewComponent,
        TableView1Component,
        DirectorySummaryComponent,
        ProgressBarComponent
    ],
    entryComponents: [
        CheckChangeStatusComponent
    ],
    providers: [OrcRecordService, MantisRecordService, OrcCheckService]
})
export class OrcModule { }
