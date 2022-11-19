import { MaterialModule } from './../../../core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ClipboardModule } from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClipboardModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
