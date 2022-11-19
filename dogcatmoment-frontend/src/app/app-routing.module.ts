import { FavsComponent } from './features/favs/favs.component';
import { routerLabels } from './core/constants/router-labels';
import { ViewerComponent } from './features/viewer/viewer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: routerLabels.explore,
    pathMatch: 'full',

  },
  {
    path: routerLabels.explore,
    pathMatch: 'full',
    component: ViewerComponent,
  },
  {
    path: routerLabels.favs,
    pathMatch: 'full',
    component: FavsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
