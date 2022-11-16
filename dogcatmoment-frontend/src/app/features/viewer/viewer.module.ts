import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../core/modules/material.module';
import { ViewerComponent } from './viewer.component';


@NgModule({
  declarations: [
    ViewerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    //ViewerComponent,
  ],
})
export class ViewerModule { }
