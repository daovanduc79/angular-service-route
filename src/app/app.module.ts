import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutobePlaylistComponent } from './youtobe-playlist/youtobe-playlist.component';
import { YoutobePlayerComponent } from './youtobe-player/youtobe-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutobePlaylistComponent,
    YoutobePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
