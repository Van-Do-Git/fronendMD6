import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MusicService} from "../../service/music.service";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-playlist-client',
  templateUrl: './playlist-client.component.html',
  styleUrls: ['./playlist-client.component.scss']
})
export class PlaylistClientComponent implements OnInit {
  songlist: any;
  currentIndex = 0;
  playlist: any;
  idPlaylist: any;


  constructor(private atRouter: ActivatedRoute,
              private musicsv: MusicService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(playlistID => {
      const id = playlistID.get('id');
      this.idPlaylist = Number(id)
    });
    this.loadPage();
  }


  loadPage() {
    console.log("load page")
    this.musicsv.findPlaylistById(this.idPlaylist).subscribe(data => {
      this.playlist = data;
      console.log(data)
      this.songlist = this.playlist.songs;
    })
  }

  playCurrentIndex(currentIndex: any) {
    this.currentIndex = currentIndex;
    this.loadPage();
  }
}
