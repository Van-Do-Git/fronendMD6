import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  checklogin = false;
  avartar: any;
  fullnam: any;

  constructor(private musicsv: MusicService) {
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
      console.log("day la data", data)
      if (data == 'ok') {
        this.checklogin = true;
        this.showInFor()
      }
    })
  }


  logout() {
    if (confirm("Bạn có muốn đăng xuất không?")) {
      window.sessionStorage.clear();
      this.checklogin = false;
    }
  }
}
