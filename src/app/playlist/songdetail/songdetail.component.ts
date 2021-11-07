import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SongdialogComponent} from "./songdialog/songdialog.component";

@Component({
  selector: 'app-songdetail',
  templateUrl: './songdetail.component.html',
  styleUrls: ['./songdetail.component.scss']
})
export class SongdetailComponent implements OnInit {
  idAccount: any;
  liked = false;
  likeList: any;
  @Input() song: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.idAccount = window.sessionStorage.getItem('ID_KEY');
    this.checkLike();
  }

  checkLike() {
    this.likeList = this.song.likeList;
    for (let like of this.likeList) {
      if (like.account.id == this.idAccount) {
        this.liked = true;
        return;
      }
    }
  }

  likeThis() {

  }

  unLikeThis() {

  }

  openDialog() {
    this.dialog.open(SongdialogComponent, {
      data: this.song
    });
  }
}
