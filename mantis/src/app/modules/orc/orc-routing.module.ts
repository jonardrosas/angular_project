import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRequired } from '../../core/guards'

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        canActivate: [LoginRequired]
    },
    {
        path: 'view/:id',
        component: DetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class OrcRoutingModule { }
