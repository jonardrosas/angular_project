import { NgModule } from '@angular/core';
import { NgbModule,
    NgbAlertModule, 
    NgbAlertConfig, 
    NgbCollapseModule,
} 
from '@ng-bootstrap/ng-bootstrap';

const BootstrapComponents = [
    NgbAlertModule,
    NgbCollapseModule,
]

@NgModule({
    imports: [BootstrapComponents],
    exports: [BootstrapComponents],
    providers: [
        NgbAlertConfig
    ]
})


export class NgBootstrapModule { }
