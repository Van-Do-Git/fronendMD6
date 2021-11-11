import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MusicService} from "../service/music.service";


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit, OnDestroy, AfterViewInit {
  allPlaylist: any;

  constructor(private musicService: MusicService) {

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.musicService.findAllPlaylistNew().subscribe(data => {
      this.allPlaylist = data;
      console.log(data)
    })
  }

  ngOnDestroy(): void {

  }


  playSong($event: any) {

  }
}

export interface Tile {

}

