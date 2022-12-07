import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { OpponentVideosComponent } from './opponent-videos/opponent-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    OpponentVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardsComponent, OpponentVideosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
