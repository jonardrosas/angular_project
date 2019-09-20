import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DataTablesModule } from 'angular-datatables';
import { NgDtTableComponent } from './components/ng-dt-table/ng-dt-table.component';
import { NgDtFilterComponent } from './components/ng-dt-filter/ng-dt-filter.component';
import { NgxDtTableComponent } from './components/ngx-dt-table/ngx-dt-table.component';
import { NgxDtTableService } from './components/ngx-dt-table/ngx-dt-table.service';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        DataTablesModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        NgxDatatableModule
    ],
    declarations: [NgDtTableComponent, NgDtFilterComponent, NgxDtTableComponent],
    exports: [
        NgDtTableComponent, NgDtFilterComponent, NgxDtTableComponent
    ],
    providers: [NgxDtTableService]
    
})

export class NgDatatableWrapperModule { }
