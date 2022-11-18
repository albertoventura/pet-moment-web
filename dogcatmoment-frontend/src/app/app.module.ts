import { ToolbarModule } from './core/components/toolbar/toolbar.module';
import { ViewerComponent } from './features/viewer/viewer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewerModule } from './features/viewer/viewer.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
