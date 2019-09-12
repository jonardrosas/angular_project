import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }  from './core/guards'


const routes: Routes = [
    {
        path: 'orc',
        loadChildren: () => import('./modules/orc/orc.module').then(mod => mod.OrcModule),
        //canLoad: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
