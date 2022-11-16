import { ViewerComponent } from './features/viewer/viewer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './core/modules/material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ViewerModule } from './features/viewer/viewer.module';


@NgModule({
  declarations: [
    AppComponent,
    //ViewerComponent,
  ],
  imports: [
    BrowserModule,
    //MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ViewerComponent,
    ViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
