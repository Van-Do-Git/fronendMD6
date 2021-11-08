import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {MusicService} from "../../../service/music.service";


@Component({
  selector: 'app-songdialog',
  templateUrl: './songdialog.component.html',
  styleUrls: ['./songdialog.component.scss']
})
export class SongdialogComponent implements OnInit {
  idAccount: any;
  commentList: any;
  comment: any;
  idSong: any;
  public formdata = this.formBuilder.group({
    text: ['', Validators.required],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private musicsv: MusicService) {
  }

  ngOnInit(): void {
    this.idAccount = window.sessionStorage.getItem('ID_KEY');
    this.idSong = this.data.id;
    this.resetCommentList();
  }

  resetCommentList(){
    this.musicsv.findAllComment(this.idSong).subscribe(list=>{
      this.commentList = list;
    })
  }
  onSubmit() {
    this.comment = {
      text: this.formdata.value.text,
      idAccount: this.idAccount,
      idSong: this.idSong
    }
    this.musicsv.commentSong(this.comment).subscribe(()=>{
      this.formdata.reset();
      this.resetCommentList();
    })
  }
}
