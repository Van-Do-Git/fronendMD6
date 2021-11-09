import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {MusicService} from "../../../service/music.service";


@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.scss']
})
export class ListdetailComponent implements OnInit {
  songs: any;
  selectItem: any;
  chekcItem:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private musicsv: MusicService) {
  }

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
    if(this.selectItem.length!=0){
      this.chekcItem = true;
    }else {
      this.chekcItem = false;
    }
  }
}
