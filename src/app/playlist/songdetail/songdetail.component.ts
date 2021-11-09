import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SongdialogComponent} from "./songdialog/songdialog.component";
import {MusicService} from "../../service/music.service";

@Component({
  selector: 'app-songdetail',
  templateUrl: './songdetail.component.html',
  styleUrls: ['./songdetail.component.scss']
})
export class SongdetailComponent implements OnInit, OnDestroy {
  checklogin = false;
  idAccount: any;
  liked = false;
  likeList: any;
  idLiked: any;
  like: any;
  @Input() song: any;

  constructor(public dialog: MatDialog, private muservice: MusicService) {
  }

  ngOnInit(): void {
    this.checkLogin();
    if(this.checklogin){
      this.checkLike(this.song);
    }
  }

  checkLogin() {
    this.idAccount = window.sessionStorage.getItem('ID_KEY');
    if (this.idAccount != null) {
      this.checklogin = true
    }
  }

  checkLike(song: any) {
    this.liked = false;
    if(song.likeList.length>0){
      for (let like of song.likeList) {
        if (like.account.id == this.idAccount) {
          this.liked = true;
          this.idLiked = like.id;
          return;
        }
      }
    }
  }

  getSong(idSong: any) {
    this.muservice.findSong(idSong).subscribe(data => {
      this.checkLike(data);
      this.song = data;
    })
  }

  likeThis(idSong: any) {
    this.like = {
      idAccount: this.idAccount,
      idSong: idSong
    }
    this.muservice.likeThis(this.like).subscribe(() => {
      this.getSong(idSong)
    })

  }

  unLikeThis(idSong: any) {
    this.muservice.unLike(this.idLiked).subscribe(() => {
      this.getSong(idSong)
    })
  }

  openDialog() {
    this.dialog.open(SongdialogComponent, {
      data: this.song
    });
  }

  ngOnDestroy(): void {
    this.checkLogin();
  }

  playThisSong(song: any) {
    this.muservice.checkCurrent$.next(song.id)
  }
}
