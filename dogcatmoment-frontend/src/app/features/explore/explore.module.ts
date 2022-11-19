import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClipboardModule,
  ]
})
export class ExploreModule { }
