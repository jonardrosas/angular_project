import { NgModule } from '@angular/core';
import {
    NgbModule,
    NgbAlertModule,
    NgbAlertConfig,
    NgbCollapseModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbTypeaheadModule,
    NgbAccordionModule,
    NgbDropdownModule  
} from '@ng-bootstrap/ng-bootstrap';

const BootstrapComponents = [
    NgbAlertModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbTypeaheadModule,
    NgbAccordionModule,
    NgbDropdownModule  
];

@NgModule({
    imports: [BootstrapComponents],
    exports: [BootstrapComponents],
    providers: [
        NgbAlertConfig
    ]
})


export class NgBootstrapModule { }
