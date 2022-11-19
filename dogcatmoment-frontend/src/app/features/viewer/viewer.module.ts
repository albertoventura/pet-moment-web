import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../core/modules/material.module';
import { ViewerComponent } from './viewer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    ViewerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClipboardModule
  ],
  exports: [
    //ViewerComponent,
  ],
})
export class ViewerModule { }
