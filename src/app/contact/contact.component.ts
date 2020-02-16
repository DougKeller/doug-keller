import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background/background.service';

@Component({
  selector: 'dk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {
    backgroundService.setBackground('code');
  }

  ngOnInit(): void {}

}
