import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRequired } from './../../../core/guards';

import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './containers/detail/detail.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        canActivate: [LoginRequired]
    },
    {
        path: 'view/:id',
        component: DetailComponent,
        canActivate: [LoginRequired]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class OrcRoutingModule { }
