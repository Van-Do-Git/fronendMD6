import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MusicService} from "../service/music.service";
import * as moment from "moment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,AfterViewInit {

  songs: any;
  search: any;

  constructor(private musicsv: MusicService) {
  }

  ngOnInit(): void {
    this.getListSong();
    this.currentIndex = 0;
    this.currentTime = 0;
    this.totalTime = 0;
    this.checkplay = true;
    this.currentTime = moment.utc(0).format("mm:ss");
    this.totalTime = moment.utc(0).format("mm:ss");
    this.musicsv.search$.subscribe(data=>{
      this.search  = data;
    })
    console.log(this.search)
    console.log(this.search.name)
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
  currentTime: any;
  currentRange = 0;
  totalRang = 0;
  totalTime: any;
  checkplay = true;
  nameSong: any;

  play() {
    this.nameSong = this.songs[this.currentIndex].name;
    if (this.checkplay && this.currentRange == 0) {
      this.streamObserver(this.songs[this.currentIndex].path).subscribe();
      this.checkplay = false;
    } else if (this.checkplay && this.currentRange != 0) {
      this.audio.play();
      this.checkplay = false;
    } else {
      this.audio.pause()
      this.checkplay = true;
    }
  }

  next() {
    this.currentRange = 0;
    this.checkplay = true;
    if (this.currentIndex < this.songs.length) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.play();
  }

  prev() {
    this.currentRange = 0;
    this.checkplay = true;
    if (this.currentIndex == 0) {
      this.currentIndex = this.songs.length;
    } else {
      this.currentIndex--;
    }
    this.play();
  }


  streamObserver(url: string) {
    return new Observable(() => {
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
      const handler = (event: Event) => {
        this.currentTime = moment.utc(this.audio.currentTime * 1000).format("mm:ss");
        this.totalTime = moment.utc(this.audio.duration * 1000).format("mm:ss");
        this.totalRang = this.audio.duration;
        this.currentRange = this.audio.currentTime;
        if (this.audio.currentTime == this.audio.duration) {
          this.next();
        }
      }
      this.addEvent(this.audio, this.audioEvents, handler);
      return () => {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.removeEvent(this.audio, this.audioEvents, handler)
      }
    })
  }

  private addEvent(audio: HTMLAudioElement, audioEvents: string[], handler: (event: Event) => void) {
    audioEvents.forEach(event => {
      audio.addEventListener(event, handler)
    })
  }

  private removeEvent(audio: HTMLAudioElement, audioEvents: string[], handler: (event: Event) => void) {
    audioEvents.forEach(event => {
      audio.removeEventListener(event, handler)
    })
  }

  setProsess(myRange: HTMLInputElement) {
    this.audio.currentTime = Number(myRange.value);
  }

  getListSong() {
    // this.musicsv.getMySongList(Number(window.sessionStorage.getItem("ID_KEY")))
    //   .subscribe(data => {
    //     this.songs = data;
    //   })
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.checkplay = true;
  }

  playThis(i: number) {
    this.currentIndex = i - 1;
    this.next();
  }

  editSong() {

  }

  deleteSong(id: any): void {
    const verify = confirm('Bạn có chắc chắn muốn xóa?');
    if (verify) {
      this.musicsv.deleteSong(id).subscribe(() => {
        this.getListSong();
      });
    }
  }

  ngAfterViewInit(): void {
    this.musicsv.search$.subscribe(data=>{
      this.search  = data;
    })
    console.log(this.search)
    console.log(this.search.name)
  }
}
