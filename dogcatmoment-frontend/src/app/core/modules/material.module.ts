import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
