
import {MusicService} from "../../service/music.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  mesage: any;
  public formdata = this.formBuilder.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
  })
  public newAccount: any;

  }

  onSubmit() {
    this.newAccount = {
      idAccount: Number(window.sessionStorage.getItem("ID_KEY")),
      oldPassword: this.formdata.value.oldPassword,
      newPassword: this.formdata.value.newPassword,
    }
    this.musicsv.changePassword(this.newAccount).subscribe(data => {
      this.mesage = data;
      if (this.mesage.mesage == "ok") {
        alert('ok');
      } else {
        alert('fail');
      }
    })
  }

  ngOnInit(): void {

  }
}
