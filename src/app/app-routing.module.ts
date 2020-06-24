import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutobePlaylistComponent } from './youtobe-playlist/youtobe-playlist.component';
import { YoutobePlayerComponent } from './youtobe-player/youtobe-player.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtobe',
    component: YoutobePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutobePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
