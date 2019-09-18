import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from 'angular-datatables';
import { NgDtTableComponent } from './components/ng-dt-table/ng-dt-table.component';
import { NgDtFilterComponent } from './components/ng-dt-filter/ng-dt-filter.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        DataTablesModule

    ],
    declarations: [NgDtTableComponent, NgDtFilterComponent],
    exports: [
        NgDtTableComponent, NgDtFilterComponent
    ]
})

export class NgDatatableWrapperModule { }
