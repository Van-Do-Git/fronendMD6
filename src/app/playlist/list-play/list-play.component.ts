import {Component, Input, OnInit} from '@angular/core';
import {SongdialogComponent} from "../songdetail/songdialog/songdialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MusicService} from "../../service/music.service";

@Component({
  selector: 'app-list-play',
  templateUrl: './list-play.component.html',
  styleUrls: ['./list-play.component.scss']
})
export class ListPlayComponent implements OnInit {

  @Input() playlist: any;

  constructor(public dialog: MatDialog, private muservice: MusicService) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(SongdialogComponent, {
      data: this.playlist
    });
  }
}
