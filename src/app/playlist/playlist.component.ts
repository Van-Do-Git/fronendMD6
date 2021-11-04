import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MusicService} from "../service/music.service";


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit, OnDestroy, AfterViewInit {
  urlSong: any;

  constructor(private musicService: MusicService) {

  }

  ngAfterViewInit(): void {
    this.urlSong = this.musicService.currentSong$.subscribe(url => {
          this.urlSong = url;
          console.log(url)
    })
  }

  ngOnInit(): void {

  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnDestroy(): void {
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

