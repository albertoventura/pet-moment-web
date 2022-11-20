import { MaterialModule } from 'src/app/core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogChooseFavUnfavComponent } from './dialog-choose-fav-unfav.component';



@NgModule({
  declarations: [
    DialogChooseFavUnfavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DialogChooseFavUnfavModule { }
