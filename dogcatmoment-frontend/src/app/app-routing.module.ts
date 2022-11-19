import { ExploreComponent } from './features/explore/explore.component';
import { FavsComponent } from './features/favs/favs.component';
import { routerLabels } from './core/constants/router-labels';
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
    component: ExploreComponent,
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
