import { Component, OnInit } from '@angular/core';
import { YoutobeService } from '../youtobe.service';

@Component({
  selector: 'app-youtobe-playlist',
  templateUrl: './youtobe-playlist.component.html',
  styleUrls: ['./youtobe-playlist.component.scss']
})
export class YoutobePlaylistComponent implements OnInit {

  public playList: any;

  constructor(private youtobeService: YoutobeService) { 
    this.playList = youtobeService.playlist;
  }

  ngOnInit() {
  }

}
