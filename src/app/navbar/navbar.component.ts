import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  idAccount?: number;
  constructor() { }

  ngOnInit(): void {
    this.idAccount =Number( window.sessionStorage.getItem("ID_KEY"));
  }

  openLeftSide() {

  }
}
