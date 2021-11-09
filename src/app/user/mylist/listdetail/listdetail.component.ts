import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {MusicService} from "../../../service/music.service";


@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.scss']
})
export class ListdetailComponent implements OnInit {
  songs: any;
  selectItem: any;
  chekcItem: any;
  playlistAdd: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private musicsv: MusicService) {
  }

  public formdata = this.formBuilder.group({
    name: [''],
  })

  ngOnInit(): void {
    this.selectItem = new Array<number>();
  }

  pushItem(event: any, idSong: string) {
    if (event.target.checked) {
      this.selectItem.push(Number(idSong));
    } else {
      this.selectItem = this.selectItem.filter(function (id: number) {
        return id != Number(idSong);
      })
    }

    if (this.selectItem.length != 0) {
      this.chekcItem = true;
    } else {
      this.chekcItem = false;
    }
  }

  onSubmit() {
    this.musicsv.searchSongByName(this.formdata.value.name).subscribe(data => {
      this.songs = data;
    })
    this.formdata.reset('');
  }

  addSong() {
    this.playlistAdd = {
      idPlaylist: this.data,
      idSongs: this.selectItem
    }
    this.musicsv.addSongToList(this.playlistAdd).subscribe(data => {
      this.selectItem = new Array<number>();
      this.chekcItem = false;
    })
  }
}
