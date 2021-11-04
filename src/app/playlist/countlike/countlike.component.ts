import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MusicService} from "../../service/music.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-countlike',
  templateUrl: './countlike.component.html',
  styleUrls: ['./countlike.component.scss']
})
export class CountlikeComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;
  songlist: any;

  @ViewChild(MatPaginator) paginator: any;
  @Output() eventEmitter = new EventEmitter();

  constructor(private musicServiec: MusicService) {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.musicServiec.getSongLikes().subscribe(data=>{
      this.songlist = data['content'];
      this.dataSource = new MatTableDataSource<any>(this.songlist);
    })
    this.dataSource.paginator = this.paginator;
  }
  playCurrent(song: any) {
    this.eventEmitter.emit(song);
  }
}
