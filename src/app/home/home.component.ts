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

  gradientTexts: Array<String> = [
    'Software Engineer',
    'Canton, OH'
  ];
  textsToShow: number = 0;

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.textsToShow += 1;
      if (this.textsToShow >= this.gradientTexts.length) {
        clearInterval(interval);
      }
    }, 750);
  }

  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})
  }
}
