import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MusicService} from "../../service/music.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, AfterViewInit {
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
    this.musicServiec.getSongCount().subscribe(data=>{
      this.songlist = data['content'];
      this.dataSource = new MatTableDataSource<any>(this.songlist);
    })
    this.dataSource.paginator = this.paginator;
  }
}
