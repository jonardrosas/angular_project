import { NgModule } from '@angular/core';
import {
    NgbModule,
    NgbAlertModule,
    NgbAlertConfig,
    NgbCollapseModule,
    NgbModalModule,
    NgbTabsetModule,
} from '@ng-bootstrap/ng-bootstrap';

const BootstrapComponents = [
    NgbAlertModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbTabsetModule,
];

@NgModule({
    imports: [BootstrapComponents],
    exports: [BootstrapComponents],
    providers: [
        NgbAlertConfig
    ]
})


export class NgBootstrapModule { }
