import {Component, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {
  songs: any;
  constructor( private musicsv: MusicService) {
  }
  ngOnInit(): void {
    this.musicsv.getMySongList(Number(window.sessionStorage.getItem("ID_KEY")))
      .subscribe(data =>{
        this.songs = data;
        console.log(this.songs)
      })
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
  checkplay = false;
  play() {
    if(!this.checkplay&&this.currentTime==0){
      this.streamObserver(this.songs[this.currentIndex].path).subscribe(event =>{});
    }else if(!this.checkplay&&this.currentTime!=0){
      this.audio.pause();
      this.checkplay = !this.checkplay;
    }else {
      this.audio.play()
      this.checkplay = !this.checkplay;
    }
  }

  streamObserver(url:string){
    return new Observable(observer =>{
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
      this.totalTime=this.audio.duration;
      this.checkplay = !this.checkplay;

      const handler = (event : Event) =>{
        this.currentTime=this.audio.currentTime;
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
}
