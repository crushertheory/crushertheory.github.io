import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { OpponentVideosComponent } from './opponent-videos/opponent-videos.component';
import { RoundProgressComponent } from './round-progress/round-progress.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ResetDialogComponent } from './reset-dialog/reset-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    OpponentVideosComponent,
    RoundProgressComponent,
    ResetDialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatDialogModule],
  providers: [CardsComponent, OpponentVideosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
