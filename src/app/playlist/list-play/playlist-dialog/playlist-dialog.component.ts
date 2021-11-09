import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MusicService} from "../../../service/music.service";

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.scss']
})
export class PlaylistDialogComponent implements OnInit {
  idAccount: any;
  commentList: any;
  comment: any;
  idPlaylist: any;
  public formdata = this.formBuilder.group({
    text: ['', Validators.required],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private musicsv: MusicService) {
  }

  ngOnInit(): void {
    this.idAccount = window.sessionStorage.getItem('ID_KEY');
    this.idPlaylist = this.data.id;
    this.resetCommentList();
  }

  resetCommentList(){
    this.musicsv.findAllCommentOfPlaylist(this.idPlaylist).subscribe(list=>{
      this.commentList = list;
    })
  }
  onSubmit() {
    this.comment = {
      text: this.formdata.value.text,
      idAccount: this.idAccount,
      idPlaylist: this.idPlaylist
    }
    this.musicsv.commentPlaylist(this.comment).subscribe(()=>{
      this.formdata.reset();
      this.resetCommentList();
    })
  }
}
