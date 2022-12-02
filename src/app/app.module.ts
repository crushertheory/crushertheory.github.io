import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Oppenent1Component } from './oppenent1/oppenent1.component';
import { Oppenent2Component } from './oppenent2/oppenent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Oppenent1Component,
    Oppenent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
