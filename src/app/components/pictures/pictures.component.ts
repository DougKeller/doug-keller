import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '@dk-services/background/background.service';

@Component({
  selector: 'dk-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {
    backgroundService.setBackground('doug');
  }

  ngOnInit(): void {}

}
