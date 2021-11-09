import {Component, Input, OnInit} from '@angular/core';
import {SongdialogComponent} from "../songdetail/songdialog/songdialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MusicService} from "../../service/music.service";
import {PlaylistDialogComponent} from "./playlist-dialog/playlist-dialog.component";

@Component({
  selector: 'app-list-play',
  templateUrl: './list-play.component.html',
  styleUrls: ['./list-play.component.scss']
})
export class ListPlayComponent implements OnInit {
  checklogin = false;
  idAccount: any;
  liked = false;
  likeList: any;
  idLiked: any;
  like: any;
  @Input() playlist: any;

  constructor(public dialog: MatDialog, private muservice: MusicService) {
  }

  ngOnInit(): void {
    this.checkLogin();
    this.checkLike(this.playlist);
  }

  openDialog() {
    this.dialog.open(PlaylistDialogComponent, {
      data: this.playlist
    });
  }


  checkLogin() {
    this.idAccount = window.sessionStorage.getItem('ID_KEY');
    if (this.idAccount != null) {
      this.checklogin = true
    }
  }

  checkLike(playlist: any) {
    this.liked = false;
    for (let like of playlist.likeList) {
      if (like.account.id == this.idAccount) {
        this.liked = true;
        this.idLiked = like.id;
        return;
      }
    }
  }

  getPlaylist(idPlaylist: any) {
    this.muservice.findPlaylistById(idPlaylist).subscribe(data => {
      this.checkLike(data);
      this.playlist = data;
    })
  }

  likeThis(idPlaylist: any) {
    this.like = {
      idAccount: this.idAccount,
      idPlaylist: idPlaylist
    }
    this.muservice.likeThisPlaylist(this.like).subscribe(() => {
      this.getPlaylist(idPlaylist);
    })

  }

  unLikeThis(idPlaylist: any) {
    console.log("co vao day ko?")
    this.muservice.unlikePlaylist(this.idLiked).subscribe(() => {
      this.getPlaylist(idPlaylist)
    })
  }


  ngOnDestroy(): void {
    this.checkLogin();
  }


}
