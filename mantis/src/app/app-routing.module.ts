import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateTeam }  from './core/guards'


const routes: Routes = [
    {
        path: 'orc',
        loadChildren: () => import('./modules/orc/orc.module').then(mod => mod.OrcModule),
        canActivate: [CanActivateTeam]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
