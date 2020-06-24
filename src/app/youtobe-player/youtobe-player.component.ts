import { Component, OnInit, OnDestroy } from '@angular/core';
import { YoutobeService } from '../youtobe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtobe-player',
  templateUrl: './youtobe-player.component.html',
  styleUrls: ['./youtobe-player.component.scss']
})
export class YoutobePlayerComponent implements OnInit, OnDestroy {

  public song: any;
  public sub: Subscription;

  constructor(
    private youtobeService: YoutobeService,
    private activatedRouter: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.youtobeService.find(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
