import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgBootstrapModule } from './../../third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { MaterialModule } from './../../third_party_modules/material/material.module';
import { AgGridModule } from './../../third_party_modules/ag-grid';
import { Ckeditor5AngularModule } from './../../third_party_modules/ckeditor5-angular'

import { SharedModule, BootstrapAlertComponent, BootstrapConfirmComponent } from './../../../shared';
import { OrcRecordService, MantisRecordService,
        OrcCheckService, DispoMangerService,
        DrcRecordService, DrcCheckService,
        JobLevelAssignPostService, } from './services';

import * as fromOrcModuleReducer from './store';
import { OrcRoutingModule } from './orc-routing.module';
import { ListComponent } from './containers/list/list.component';
import { OrcSharedModule } from './shared/orc-shared.module';
import { DetailComponent } from './containers/detail/detail.component';
import { CheckListComponent } from './components/detail-check-list/check-list.component';
import { DeviceSummaryComponent } from './components/detail-device-summary/device-summary.component';
import { DetailJobActionSectionComponent } from './components/detail-job-action-section/detail-job-action-section.component';
import { DetailErrorStatisticsComponent } from './components/detail-error-statistics/detail-error-statistics.component';
import { DetailNotesSectionComponent } from './components/detail-notes-section/detail-notes-section.component';
import { DetailAttachmentSectionComponent } from './components/detail-attachment-section/detail-attachment-section.component';
import { DetailJobHistorySectionComponent } from './components/detail-job-history-section/detail-job-history-section.component';
import { CheckChangeStatusComponent } from './components/detail-check-list/components/check-change-status/check-change-status.component';
import { CheckStatusTemplateComponent } from './components/detail-check-list/components/check-status-template/check-status-template.component';
import { CheckEscalateIstComponent } from './components/detail-check-list/components/check-escalte-ist-status/check-escalate-ist-status.component';
import { Safe } from './../../../shared/pipes/safe-html';
import { JobreportSectionDirective } from './directives/jobreport-section.directive';
import { TestDivComponent } from './components/test-div/test-div.component';
import { ProgressBarComponent } from './components/detail-progress-bar/progress-bar.component';
import { CheckAddNotesComponent } from './components/detail-check-list/components/check-add-notes/check-add-notes.component';
import { CheckUploadImageComponent } from './components/detail-check-list/components/check-upload-image/check-upload-image.component';
import { CheckEscalateSoaComponent } from './components/detail-check-list/components/check-escalate-soa/check-escalate-soa.component';
import { CheckRecommendComponent } from './components/detail-check-list/components/check-recommend/check-recommend.component';
import { CheckRecommendAsSoaComponent } from './components/detail-check-list/components/check-recommend-as-soa/check-recommend-as-soa.component';
import { OrcWorklistComponent } from './components/orc-worklist/orc-worklist.component';
import { DetailJobAssignToComponent } from './components/detail-job-action-section/detail-job-assign-to/detail-job-assign-to.component';
import { DetailJobChangeStatusComponent } from './components/detail-job-action-section/detail-job-change-status/detail-job-change-status.component';
import { CheckDetailReportComponent } from './components/check-detail-report/check-detail-report.component';
import { CheckDetailContainerComponent } from './containers/check-detail-container/check-detail-container.component';
import { CheckDetailPopupComponent } from './components/detail-check-list/components/check-detail-popup/check-detail-popup.component';
import { CheckImageListViewComponent } from './components/check-image-list-view/check-image-list-view.component';
import { DetailJobActionAddNotesComponent } from './components/detail-job-action-section/detail-job-action-add-notes/detail-job-action-add-notes.component';
import { DetailJobActionAddAttachmentComponent } from './components/detail-job-action-section/detail-job-action-add-attachment/detail-job-action-add-attachment.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgBootstrapModule,
        OrcRoutingModule,
        SharedModule,
        MaterialModule,
        AgGridModule.withComponents([CheckStatusTemplateComponent]),
        StoreModule.forFeature('orc', fromOrcModuleReducer.reducers),
        EffectsModule.forFeature(fromOrcModuleReducer.effects),
        Ckeditor5AngularModule,
        OrcSharedModule
    ],
    declarations: [
        Safe,
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
        CheckStatusTemplateComponent,
        CheckEscalateIstComponent,
        JobreportSectionDirective,
        TestDivComponent,
        ProgressBarComponent,
        CheckAddNotesComponent,
        CheckUploadImageComponent,
        CheckEscalateSoaComponent,
        CheckRecommendComponent,
        CheckRecommendAsSoaComponent,
        OrcWorklistComponent,
        DetailJobAssignToComponent,
        DetailJobChangeStatusComponent,
        CheckDetailReportComponent,
        CheckDetailContainerComponent,
        CheckDetailPopupComponent,
        CheckImageListViewComponent,
        DetailJobActionAddNotesComponent,
        DetailJobActionAddAttachmentComponent,
    ],
    entryComponents: [
        CheckListComponent,
        DeviceSummaryComponent,
        DetailJobActionSectionComponent,
        DetailErrorStatisticsComponent,
        DetailNotesSectionComponent,
        DetailAttachmentSectionComponent,
        DetailJobHistorySectionComponent,        
        CheckChangeStatusComponent,
        CheckEscalateIstComponent,
        BootstrapAlertComponent,
        BootstrapConfirmComponent,
        ProgressBarComponent,
        TestDivComponent,
        CheckAddNotesComponent,
        CheckUploadImageComponent,
        CheckEscalateSoaComponent,
        CheckRecommendComponent,
        CheckRecommendAsSoaComponent,
        // CheckStatusTemplateComponent,
        OrcWorklistComponent,
        DetailJobAssignToComponent,
        DetailJobChangeStatusComponent,
        CheckDetailReportComponent,
        CheckDetailPopupComponent,
        DetailJobActionAddNotesComponent,
        DetailJobActionAddAttachmentComponent
    ],
    providers: [
        OrcRecordService,
        MantisRecordService,
        OrcCheckService,
        DispoMangerService,
        DrcRecordService,
        DrcCheckService,
        JobLevelAssignPostService,
    ]
})
export class OrcModule { }
