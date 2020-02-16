import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background/background.service';

@Component({
  selector: 'dk-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {
    backgroundService.setBackground('cas');
  }

  ngOnInit(): void {}

}
