import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showHeader?: Boolean;
  showContent?: Boolean;

  ngOnInit(): void {
    setTimeout(() => this.showHeader = true, 1000);
    setTimeout(() => this.showContent = true, 1750);
  }

}
