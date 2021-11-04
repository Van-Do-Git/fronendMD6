import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MusicService} from "../../service/music.service";
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject} from "rxjs";
import {Song} from "../../../model/song";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  songlist: any;

  @ViewChild(MatPaginator) paginator: any;

  @Output() eventEmitter = new EventEmitter();

  constructor(private musicServiec: MusicService) {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.musicServiec.getSongCount().subscribe(data => {
      this.songlist = data['content'];
      this.dataSource = new MatTableDataSource<any>(this.songlist);
    })
    this.dataSource.paginator = this.paginator;
  }

  current: Array<string> = []

  playCurrent(song: any) {
    this.eventEmitter.emit(song);
    this.musicServiec.updateSong(song).subscribe(()=>{
      this.ngOnInit();
    })
  }
}
