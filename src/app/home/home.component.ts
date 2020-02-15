import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background/background.service';

@Component({
  selector: 'dk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {
    backgroundService.setBackground('yosemite');
  }

  showHeader?: Boolean;

  gradientTexts: Array<String> = [
    'Funny.',
    'Smart.',
    'Handsome.'
  ];
  showTexts: Array<Boolean> = [];

  ngOnInit(): void {
    setTimeout(() => this.showHeader = true, 0);

    this.gradientTexts.forEach((_v, i) => {
      this.showTexts[i] = false;
      let delay = 750 * (i + 2);
      setTimeout(() => this.showTexts[i] = true, delay);
    });
  }
}
