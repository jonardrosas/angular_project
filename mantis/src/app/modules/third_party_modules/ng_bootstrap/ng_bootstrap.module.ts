import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

const BootstrapComponents = [
    NgbAlertModule
]

@NgModule({
    imports: [BootstrapComponents],
    exports: [BootstrapComponents],
    providers: [
        NgbAlertConfig
    ]
})


export class NgBootstrapModule { }
