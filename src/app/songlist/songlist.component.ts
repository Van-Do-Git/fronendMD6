import {Component, OnDestroy, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit,OnDestroy {
  songs: any;
  constructor( private musicsv: MusicService) {
  }
  ngOnInit(): void {
    this.musicsv.getMySongList(Number(window.sessionStorage.getItem("ID_KEY")))
      .subscribe(data =>{
        this.songs = data;
      })
    this.currentIndex = 0;
    this.currentTime = 0;
    this.totalTime = 0;
    this.checkplay = true;
  }
  audio = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  currentIndex = 0;
  currentTime = 0;
  totalTime = 0;
  checkplay = true;

  play() {
    if(this.checkplay&&this.currentTime==0){
      this.streamObserver(this.songs[this.currentIndex].path).subscribe();
      this.checkplay = false;
    }else if(this.checkplay&&this.currentTime!=0){
      this.audio.play();
      this.checkplay = false;
    }else {
      this.audio.pause()
      this.checkplay = true;
    }
  }

  next() {
    this.currentTime=0;
    this.checkplay = true;
    if(this.currentIndex<this.songs.length){
      this.currentIndex++;
    }else {
      this.currentIndex=0;
    }
    console.log(this.currentIndex)
    this.play();
  }

  prev(){
    this.currentTime=0;
    this.checkplay = true;
    if(this.currentIndex==0){
      this.currentIndex=this.songs.length;
    }else {
      this.currentIndex--;
    }
    console.log(this.currentIndex)
    this.play();
  }


  streamObserver(url:string){
    return new Observable(observer =>{
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
      this.totalTime=this.audio.duration;

      const handler = (event : Event) =>{
        this.currentTime=this.audio.currentTime;
        if(this.currentTime==this.audio.duration){
          this.play();
        }
      }
      this.addEvent(this.audio,this.audioEvents,handler);
      return ()=>{
        this.audio.pause();
        this.audio.currentTime = 0;
        this.removeEvent(this.audio,this.audioEvents,handler)
      }
    })
  }

  private addEvent(audio: HTMLAudioElement, audioEvents: string[], handler: (event: Event) => void) {
    audioEvents.forEach(event =>{
      audio.addEventListener(event,handler)
    })
  }
  private removeEvent(audio: HTMLAudioElement, audioEvents: string[], handler: (event: Event) => void) {
    audioEvents.forEach(event =>{
      audio.removeEventListener(event,handler)
    })
  }

  setProsess(myRange: HTMLInputElement) {
    this.audio.currentTime = Number(myRange.value);
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.checkplay = true;
  }
}
