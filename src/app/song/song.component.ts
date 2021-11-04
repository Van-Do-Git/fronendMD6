import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/compat/storage";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MusicService} from "../service/music.service";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  selectedFile: File | undefined;
  ref: AngularFireStorageReference | undefined;
  downloadURL: string | undefined;
  checkUploadFile = false;
  idAccounts?: number;
  typeFile: string | undefined;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage, private formBuilder: FormBuilder, private musicsv: MusicService) {
  }

  ngOnInit(): void {
    this.downloadURL = '';
    this.idAccounts = Number(window.sessionStorage.getItem("ID_KEY"));
  }

  //Khi upload file qua thẻ input dưới dạng 1 hoặc nhiều file thì tệp đó thông qua sự kiện (change) $event được kích hoạt. Và tất cả file upload sẽ lưu trữ
  // trong $event.target.files.
  onFileChanged($event: any) {
    this.selectedFile = $event.target.files[0];
    this.typeFile = this.selectedFile?.type;
    this.onUpload()
  }

  onUpload() {
    this.checkUploadFile = true;
    const id = Math.random().toString(36).substring(2); //Tạo ra 1 name riêng cho mỗi DB firebase;

    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot => {
      return snapshot.ref.getDownloadURL(); //Tra ve 1 chuoi sieu van ban tren FB.
    }).then(downloadURL => { //chuyen giao link tu nhung component khac nhau khi su upload
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      this.checkUploadFile = false;
      return downloadURL;
    })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      })
  }

  public formdata = this.formBuilder.group({
    name: ['', Validators.required],
    singer: ['', Validators.required],
    path: ['', Validators.required],
    count: [''],
    idAccount: ['']
  })
  count = 0;

  onSubmit() {
    if(this.typeFile=='audio/mpeg'){
      this.musicsv.createSong(this.formdata.value).subscribe(() => {
        this.formdata.reset();
        alert("Tạo thành công!")
      })
    }else {
      alert("Không đúng định dạng file!")
    }
    return;
  }
}
