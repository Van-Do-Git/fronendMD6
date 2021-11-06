import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MusicService} from "../../service/music.service";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, AfterViewInit {
  displayedColumns1: string[] = ['position1', 'name1', 'weight1', 'symbol1'];
  dataSource1: any;
  songlist1: any;
  @ViewChild(MatPaginator) paginator1: any;

  @Output() eventEmitter = new EventEmitter();

  constructor(private musicServiec: MusicService) {

  }

  ngAfterViewInit(): void {
    this.dataSource1.paginator = this.paginator1;
  }

  ngOnInit(): void {
    this.loadPage()
  }

  loadPage() {
    this.musicServiec.getSongCount().subscribe(data => {
      this.songlist1 = data['content'];
      this.dataSource1 = new MatTableDataSource<any>(this.songlist1);
    })
    this.dataSource1.paginator = this.paginator1;
  }

  playCurrent(song: any) {
    this.musicServiec.updateSong(song.id).subscribe();
    this.loadPage();
    this.eventEmitter.emit(song);
  }


}
