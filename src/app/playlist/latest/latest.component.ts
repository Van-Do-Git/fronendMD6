import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MusicService} from "../../service/music.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;
  songlist: any;

  @ViewChild(MatPaginator) paginator: any;

  constructor(private musicServiec: MusicService) {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.musicServiec.getSongLatest().subscribe(data=>{
      this.songlist = data['content'];
      this.dataSource = new MatTableDataSource<any>(this.songlist);
    })
    this.dataSource.paginator = this.paginator;
  }
}
