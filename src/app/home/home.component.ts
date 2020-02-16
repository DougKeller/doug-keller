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
  textsToShow: number = 0;

  ngOnInit(): void {
    setTimeout(() => this.showHeader = true, 0);

    let interval = setInterval(() => {
      this.textsToShow += 1;
      if (this.textsToShow >= this.gradientTexts.length) {
        clearInterval(interval);
      }
    }, 750);
  }
}
