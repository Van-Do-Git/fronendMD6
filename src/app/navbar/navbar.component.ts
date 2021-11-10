import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {MatDialog} from "@angular/material/dialog";
import {CreatlistComponent} from "../user/mylist/creatlist/creatlist.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  checklogin = false;
  avartar: any;
  fullnam: any;

  public formdata = this.formBuilder.group({
    isNameOrSinger: ['', Validators.required],
    name: ['', Validators.required],
  })

  constructor(public dialog: MatDialog,private musicsv: MusicService, private r: Router, private formBuilder: FormBuilder) {
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
    this.musicsv.search$.next(this.formdata.value);
    this.r.navigate(['/search'])
  }

  changePassword() {
    this.dialog.open(ChangePasswordComponent, {
    });
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditProfileComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.showInFor();
    });
  }
}
