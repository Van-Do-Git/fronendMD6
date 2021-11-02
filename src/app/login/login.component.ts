import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MusicService} from "../service/music.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert = '';
  public formdata = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private musicsv: MusicService,private r: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.musicsv.login(this.formdata.value).subscribe(data => {
        if(data.token){
          window.sessionStorage.setItem("TOKEN",data.token);
          window.sessionStorage.setItem('ID_KEY', data.id);
          window.sessionStorage.setItem('FULLNAME_KEY', data.fullName);
          window.sessionStorage.setItem('AVATAR_KEY', data.avatar.path);
          this.r.navigate(['/playlist'])
          this.formdata.reset();
        } else {
          this.alert = data.mesage;
        }
      }
    )
  }
}
