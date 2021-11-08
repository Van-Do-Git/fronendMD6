import {
  Component,
  OnInit,
} from '@angular/core';
import {MusicService} from "../../service/music.service";


@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  songlist: any;
  currentIndex = 0;

  constructor(private musicServiec: MusicService) {

  }

  ngOnInit(): void {
    this.loadPage()
  }

  loadPage() {
    this.musicServiec.getSongCount().subscribe(data => {
      this.songlist = data['content'];
    })
  }

  playCurrentIndex(currentIndex: any) {
    this.currentIndex = currentIndex;
    this.musicServiec.updateSong(this.songlist[currentIndex].id).subscribe(()=>{});
    this.loadPage();
  }
}
