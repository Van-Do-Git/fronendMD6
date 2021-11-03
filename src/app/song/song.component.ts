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
  @Output()
  giveURLtoCreate = new EventEmitter<string>();
  constructor(private afStorage: AngularFireStorage, private formBuilder: FormBuilder,private musicsv: MusicService ) {
  }
  ngOnInit(): void {
    this.downloadURL = "";
  }
  //Khi upload file qua thẻ input dưới dạng 1 hoặc nhiều file thì tệp đó thông qua sự kiện (change) $event được kích hoạt. Và tất cả file upload sẽ lưu trữ
  // trong $event.target.files.
  onFileChanged($event:any){
    this.selectedFile  = $event.target.files[0];
    this.onUpload()
  }
  onUpload(){
    this.checkUploadFile = true;
    const id = Math.random().toString(36).substring(2); //Tạo ra 1 name riêng cho mỗi DB firebase;

    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot =>{
      return snapshot.ref.getDownloadURL(); //Tra ve 1 chuoi sieu van ban tren FB.
    }).then( downloadURL =>{ //chuyen giao link tu nhung component khac nhau khi su upload
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      this.checkUploadFile = false;
      return downloadURL;
    })
      .catch(error =>{
        console.log(`Failed to upload avatar and get link ${error}`);
      })
  }

  //Validate du lieu khoi tao bai hat
  public formdata = this.formBuilder.group({
    name: ['', Validators.required],
    singer: ['', Validators.required],
  })

  onSubmit() {

  }
}
