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
  displayedColumns2: string[] = ['position2', 'name2', 'weight2', 'symbol2'];
  dataSource2: any;
  songlist: any;

  @ViewChild(MatPaginator) paginator1: any;

  @Output() eventEmitter = new EventEmitter();

  constructor(private musicServiec: MusicService) {

  }

  ngAfterViewInit(): void {
    this.dataSource2.paginator = this.paginator1;
  }

  ngOnInit(): void {
    this.loadPage()
  }
  loadPage(){
    this.musicServiec.getSongLikes().subscribe(data => {
      this.songlist = data['content'];
      this.dataSource2 = new MatTableDataSource<any>(this.songlist);
    })
    this.dataSource2.paginator = this.paginator1;
  }

  playCurrent(song: any) {
    this.eventEmitter.emit(song);
  }
}
