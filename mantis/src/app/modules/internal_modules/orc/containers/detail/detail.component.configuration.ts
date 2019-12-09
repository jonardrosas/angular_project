import { AdSection } from '../../util';
import { 
    DeviceSummaryComponent , DetailErrorStatisticsComponent,
    DetailNotesSectionComponent, DetailAttachmentSectionComponent,
    DetailJobHistorySectionComponent, CheckListComponent,
    ProgressBarComponent, DetailJobActionSectionComponent
} from '../../components';
import { CheckAddNotesComponent } from '../../components/detail-check-list/components/check-add-notes/check-add-notes.component';
import { CheckUploadImageComponent } from '../../components/detail-check-list/components/check-upload-image/check-upload-image.component';
import { CheckEscalateSoaComponent } from '../../components/detail-check-list/components/check-escalate-soa/check-escalate-soa.component';
import { CheckRecommendComponent } from '../../components/detail-check-list/components/check-recommend/check-recommend.component';
import { CheckRecommendAsSoaComponent } from '../../components/detail-check-list/components/check-recommend-as-soa/check-recommend-as-soa.component';
import { CheckChangeStatusComponent } from '../../components/detail-check-list/components/check-change-status/check-change-status.component';
import { CheckStatusTemplateComponent } from '../../components/detail-check-list/components/check-status-template/check-status-template.component';
import { CheckEscalateIstComponent } from '../../components/detail-check-list/components/check-escalte-ist-status/check-escalate-ist-status.component';
import { BootstrapAlertComponent } from '../../../../../shared/components/bootstrap-alert/bootstrap-alert.component';
import { DetailJobChangeStatusComponent } from '../../components/detail-job-action-section/detail-job-change-status/detail-job-change-status.component';
import { DetailJobAssignToComponent } from '../../components/detail-job-action-section/detail-job-assign-to/detail-job-assign-to.component';

import * as orcModuleStore from './../../store';


// This components will be one pass to the buttons
export const ReportCheckDispostionPopups = {
    'BootstrapAlertComponent': BootstrapAlertComponent,
    'CheckAddNotesComponent': CheckAddNotesComponent,
    'CheckUploadImageComponent': CheckUploadImageComponent,
    'CheckEscalateSoaComponent': CheckEscalateSoaComponent,
    'CheckRecommendComponent': CheckRecommendComponent,
    'CheckRecommendAsSoaComponent': CheckRecommendAsSoaComponent,
    'CheckChangeStatusComponent': CheckChangeStatusComponent,
    'CheckStatusTemplateComponent': CheckStatusTemplateComponent,
    'CheckEscalateIstComponent': CheckEscalateIstComponent,
    'DetailJobChangeStatusComponent': DetailJobChangeStatusComponent,
    'DetailJobAssignToComponent': DetailJobAssignToComponent
}

// This section components
export const ReportSectionComponent = [
    new AdSection(DetailJobActionSectionComponent, {title: 'Job Action', panelIsOpen: false}),
    new AdSection(ProgressBarComponent, {title: 'Progress Bar', panelIsOpen: false}),
    new AdSection(DeviceSummaryComponent, {title: 'Device Summary', panelIsOpen: false}),
    new AdSection(DetailErrorStatisticsComponent, {title: 'Error Summary', panelIsOpen: true}),
    new AdSection(DetailNotesSectionComponent, {title: 'Job Notes', panelIsOpen: true}),
    new AdSection(DetailAttachmentSectionComponent, {title: 'Job Attachment', panelIsOpen: true}),
    new AdSection(DetailJobHistorySectionComponent, {title: 'Job History', panelIsOpen: true}),
    new AdSection(CheckListComponent, {title: 'Check Table', panelIsOpen: false}),
]

// NgrxStore default selector
export const reportStore = orcModuleStore;
