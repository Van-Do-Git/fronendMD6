import {Component, OnInit} from '@angular/core';

import {MusicService} from "../../service/music.service";


@Component({
  selector: 'app-countlike',
  templateUrl: './countlike.component.html',
  styleUrls: ['./countlike.component.scss']
})
export class CountlikeComponent implements OnInit {

  songlist: any;
  currentIndex = 0;

  constructor(private musicServiec: MusicService) {

  }

  ngOnInit(): void {
    this.loadPage()
  }

  loadPage() {
    this.musicServiec.getSongLikes().subscribe(data => {
      this.songlist = data['content'];
    })
  }

  playCurrentIndex(currentIndex: any) {
    this.currentIndex = currentIndex;
    this.musicServiec.updateSong(this.songlist[currentIndex].id).subscribe(()=>{});
    this.loadPage();
  }
}
