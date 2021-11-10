import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatlistComponent} from "./creatlist/creatlist.component";
import {MusicService} from "../../service/music.service";
import {DeleteComponent} from "./delete/delete.component";


@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  idAccount: any;
  likeList: any;
  like: any;
  playlists: any;

  constructor(public dialog: MatDialog, private musicSv: MusicService) {
  }


  ngOnInit(): void {
    this.reloadPage()
  }

  ngOnDestroy(): void {

  }


  private reloadPage() {
    this.idAccount = window.sessionStorage.getItem("ID_KEY");
    this.musicSv.findAllPlaylist(this.idAccount).subscribe(data => {
      this.playlists = data;
    })
  }
//delete
  openDialog2(idPlaylist:any) {
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(resulf => {
      this.musicSv.deletePlaylist(idPlaylist).subscribe(data => {})
      window.location.reload();
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreatlistComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.reloadPage();
    });
  }
}
