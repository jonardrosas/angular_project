import { NgModule } from '@angular/core';
import {
    NgbModule,
    NgbAlertModule,
    NgbAlertConfig,
    NgbCollapseModule,
    NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';

const BootstrapComponents = [
    NgbAlertModule,
    NgbCollapseModule,
    NgbModalModule,
];

@NgModule({
    imports: [BootstrapComponents],
    exports: [BootstrapComponents],
    providers: [
        NgbAlertConfig
    ]
})


export class NgBootstrapModule { }
