import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MusicService} from "../../service/music.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit, AfterViewInit {
  displayedColumns3: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource3:any;
  songlist: any;

  @ViewChild(MatPaginator) paginator3: any;
  @Output() eventEmitter = new EventEmitter();

  constructor(private musicServiec: MusicService) {

  }

  ngAfterViewInit(): void {
    this.dataSource3.paginator = this.paginator3;
  }

  ngOnInit(): void {
    this.loadPage()
  }
  loadPage(){
    this.musicServiec.getSongLatest().subscribe(data => {
      this.songlist = data['content'];
      this.dataSource3 = new MatTableDataSource<any>(this.songlist);
    })
    this.dataSource3.paginator = this.paginator3;
  }

  playCurrent(song: any) {
    this.eventEmitter.emit(song);
    this.musicServiec.updateSong(song).subscribe(()=>{
      this.loadPage()
    })
  }
}
