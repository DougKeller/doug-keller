import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showHeader?: Boolean;

  gradientTexts: Array<String> = [
    'Funny.',
    'Smart.',
    'Cool.'
  ];
  showTexts: Array<Boolean> = [];

  ngOnInit(): void {
    setTimeout(() => this.showHeader = true, 0);

    this.gradientTexts.forEach((_v, i) => {
      this.showTexts[i] = false;
      let delay = 750 * (i + 2);
      setTimeout(() => this.showTexts[i] = true, delay);
    });

    document.body.setAttribute('style', "background-image: url('https://www.tripsavvy.com/thmb/UYMMWT9tevtUn7h5wXyxQKDjp1E=/4563x2978/filters:fill(auto,1)/valley-view-of-yosemite-920518860-5beb055446e0fb00268831ae.jpg')");
  }

}
