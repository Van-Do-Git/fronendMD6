import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router, Routes} from "@angular/router";
import {MusicService} from "../../service/music.service";

@Component({
  selector: 'app-regitry',
  templateUrl: './regitry.component.html',
  styleUrls: ['./regitry.component.scss']
})
export class RegitryComponent implements OnInit {
  alert = '';
  public formdata = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    re_password: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    fullName: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private musicsv: MusicService,private r: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.musicsv.createAcount(this.formdata.value).subscribe(data => {
        this.alert = data.mesage;
        if(this.alert=="ok"){
          this.formdata.reset();
          this.r.navigate(['login'])
        }
      }
    )
  }
}
