import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRequired } from './../../../core/guards';

import { ListComponent } from './containers/list/list.component';
import { CheckDetailContainerComponent } from './containers/check-detail-container/check-detail-container.component';
import { DetailComponent } from './containers/detail/detail.component';
import { OrcWorklistComponent } from './components/orc-worklist/orc-worklist.component';

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
    },
    {
        path: 'check/:mantisId/:checkId',
        component: CheckDetailContainerComponent,
        canActivate: [LoginRequired]
    },    
    {
        path: 'orc-worklist',
        component: OrcWorklistComponent,
        canActivate: [LoginRequired]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class OrcRoutingModule { }
