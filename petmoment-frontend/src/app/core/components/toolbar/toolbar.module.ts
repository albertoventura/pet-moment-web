import { GeneralModule } from './../../modules/general.module';
import { MaterialModule } from './../../modules/material.module';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    GeneralModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule { }
