import {Component, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {
  songs: any;

  constructor( private musicsv: MusicService) {
  }

  ngOnInit(): void {

  }

}
