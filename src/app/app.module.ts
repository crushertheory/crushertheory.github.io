import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { OpponentVideosComponent } from './opponent-videos/opponent-videos.component';
import { RoundProgressComponent } from './round-progress/round-progress.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    OpponentVideosComponent,
    RoundProgressComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [CardsComponent, OpponentVideosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
