import { MaterialModule } from './../../core/modules/material.module';
import { GeneralModule } from './../../core/modules/general.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavsComponent } from './favs.component';



@NgModule({
  declarations: [
    FavsComponent
  ],
  imports: [
    GeneralModule,
    MaterialModule,
  ]
})
export class FavsModule { }
