import {Component, OnInit} from '@angular/core';
import {MusicService} from "../../service/music.service";


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  songlist: any;
  currentIndex = 0;

  constructor(private musicServiec: MusicService) {

  }

  ngOnInit(): void {
    this.loadPage()
  }

  loadPage() {
    this.musicServiec.getSongLatest().subscribe(data => {
      this.songlist = data['content'];
    })
  }

  playCurrentIndex(currentIndex: any) {
    this.currentIndex = currentIndex;
    this.musicServiec.updateSong(this.songlist[currentIndex].id).subscribe(()=>{});
    this.loadPage();
  }
}
