import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MusicService} from "../service/music.service";


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private musicService: MusicService) {

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }
  //
  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  ngOnDestroy(): void {
    // this.audio.pause();
    // this.audio.src="";
  }


  playSong($event: any) {
    // this.currenSong = $event;
    // this.nameSong = this.currenSong.name;
    // this.audio.src = this.currenSong.path;
    // this.audio.load();
    // this.audio.play();
  }
}

export interface Tile {
  // color: string;
  // cols: number;
  // rows: number;
  // text: string;
}

