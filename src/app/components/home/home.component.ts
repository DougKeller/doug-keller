import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gradientTexts: Array<String> = [
    'Software Engineer',
    'Canton, OH'
  ];
  textsToShow: number = 0;

  data: Array<any>;

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.textsToShow += 1;
      if (this.textsToShow >= this.gradientTexts.length) {
        clearInterval(interval);
      }
    }, 750);

    this.data = [
      {
        category: 'About Me',
        paragraphs: [
          'I am a full-stack software engineer and team lead with specializations in Ruby on Rails and AngularJS. I have experience with continuous integration deployment to AWS via Jenkins and containerization via Docker.',
          'I am currently working on Big Biller, an applicant-tracking software for independent recruiting firms that uses Solr for full-text searching resumes to help recruiters make job placements.'
        ]
      },
      {
        category: 'Experience',
        items: [
          {
            titleLeft: 'Top Echelon Software, LLC',
            titleRight: '2019 - Present',
            subtitle: 'Software Engineer, Team Lead',
            description: 'Continued development and leadership responsibilities following the separation of Top Echelon from Patriot Software.'
          },
          {
            titleLeft: 'Patriot Software',
            titleRight: '2017 - 2019',
            subtitle: 'Software Engineer, Team Lead',
            description: 'Managed a small team of developers and helped lead core product development on Big Biller.'
          },
          {
            titleLeft: 'UA Department of Electrical Engineering',
            titleRight: '2017',
            subtitle: 'Software Engineer Intern',
            description: 'Created an interactive web interface for viewing and downloading FitBit heartrate data using Node, ExpressJS, and AngularJS.'
          },
          {
            titleLeft: 'Patriot Software',
            titleRight: '2015 - 2017',
            subtitle: 'Software Engineer Intern',
            description: 'Assisted in writing a new version of Big Biller - an applicant-tracking software for independent recruiting firms.'
          }
        ]
      },
      {
        category: 'Education',
        items: [
          {
            titleLeft: 'The University of Akron',
            titleRight: 'Graduated 2017',
            subtitle: 'BSCS - Computer Science',
            description: 'Finished Summa Cum Laude with a major in Computer Science and a minor in Mathematics'
          }
        ]
      },
      {
        category: 'Skills',
        list: [
          'AngularJS',
          'Ruby on Rails',
          'Amazon Web Services',
          'Docker Compose',
          'Jenkins'
        ]
      }
    ];
  }

  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})
  }
}
