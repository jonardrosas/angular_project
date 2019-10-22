import { AdSection } from './../common';
import { 
    DeviceSummaryComponent , DetailErrorStatisticsComponent,
    DetailNotesSectionComponent, DetailAttachmentSectionComponent,
    DetailJobHistorySectionComponent, CheckListComponent
} from './../../components';
import { TestDivComponent } from './../../components/test-div/test-div.component';

export const ReportSectionComponent = [
    new AdSection(DeviceSummaryComponent, {title: 'Device Summary', panelIsOpen: false}),
    new AdSection(DetailErrorStatisticsComponent, {title: 'Error Summary', panelIsOpen: true}),
    new AdSection(DetailNotesSectionComponent, {title: 'Job Notes', panelIsOpen: true}),
    new AdSection(DetailAttachmentSectionComponent, {title: 'Job Attachment', panelIsOpen: true}),
    new AdSection(DetailJobHistorySectionComponent, {title: 'Job History', panelIsOpen: true}),
    new AdSection(CheckListComponent, {title: 'Check Table', panelIsOpen: false}),
]