import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

import { MaterialModule } from './../../third_party_modules/material/material.module';
import { NgBootstrapModule } from './../../third_party_modules/ng_bootstrap/ng_bootstrap.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
        CommonModule,
        MaterialModule,
        NgBootstrapModule
  ]
})
export class HomeModule { }
