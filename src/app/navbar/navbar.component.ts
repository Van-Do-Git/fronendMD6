import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  checklogin = false;
  avartar: any;
  fullnam: any;
  songs: any;
  isSearch = false;
  public formdata = this.formBuilder.group({
    isNameOrSinger: ['', Validators.required],
    name: ['', Validators.required],
  })


  constructor(private musicsv: MusicService, private r: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let idAcount = window.sessionStorage.getItem("ID_KEY");
    if (idAcount != null) {
      this.checklogin = true;
      this.showInFor()
    }
  }

  showInFor() {
    this.avartar = window.sessionStorage.getItem('AVATAR_KEY');
    this.fullnam = window.sessionStorage.getItem('FULLNAME_KEY');
  }

  ngAfterViewInit(): void {
    this.musicsv.checkLogin$.subscribe(data => {
      if (data == 'ok') {
        this.checklogin = true;
        this.showInFor()
      }
    })
  }


  logout() {
    window.sessionStorage.clear();
    this.checklogin = false;
    this.r.navigate(['/']).then(() => {
      window.location.reload()
    });
  }

  onSubmit() {
    this.isSearch = true;
    this.musicsv.searchSongByNameOrSinger(this.formdata.value).subscribe(data => {
      this.songs = data;
    })
    this.formdata.reset('');
  }

  closeSearch() {
    this.isSearch = false;
    this.songs = null;
  }
}
