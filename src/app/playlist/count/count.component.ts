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

  playCurrent(song: any) {
  }
}
