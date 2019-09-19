import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatTableModule }  from '@angular/material';

const MaterialComponents = [
    MatButtonModule,
    MatMenuModule,
    MatTableModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
