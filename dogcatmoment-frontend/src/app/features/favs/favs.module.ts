import { CardModule } from './../../shared/components/card/card.module';
import { MaterialModule } from './../../core/modules/material.module';
import { GeneralModule } from './../../core/modules/general.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavsComponent } from './favs.component';
import { DialogChooseFavUnfavModule } from 'src/app/shared/components/dialog-choose-fav-unfav/dialog-choose-fav-unfav.module';



@NgModule({
  declarations: [
    FavsComponent
  ],
  imports: [
    GeneralModule,
    MaterialModule,
    CardModule,
    DialogChooseFavUnfavModule,
  ]
})
export class FavsModule { }
