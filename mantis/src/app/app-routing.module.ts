import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRequired }  from './core/guards'
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/home/pages/home/home.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [LoginRequired]
    },
    {
        path: 'orc',
        loadChildren: () => import('./modules/orc/orc.module').then(mod => mod.OrcModule),
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{ useHash: true }),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
