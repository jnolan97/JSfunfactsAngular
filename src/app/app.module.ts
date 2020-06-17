import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { PromisesComponent } from './promises/promises.component';
import { MapComponent } from './map/map.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    FunfactsComponent,
    CallbacksComponent,
    PromisesComponent,
    MapComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
