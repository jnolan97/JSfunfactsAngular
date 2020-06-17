import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { promises } from 'fs';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { CreatorComponent } from './creator/creator.component';


const routes: Routes = [
  {
    path: 'funfacts', component: FunfactsComponent
  },
  {
    path: 'promises', component: PromisesComponent
  },
  {
    path: 'callbacks', component: CallbacksComponent
  },
  {
    path: 'map', component: MapComponent
  },
  {
    path: 'creator', component: CreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
