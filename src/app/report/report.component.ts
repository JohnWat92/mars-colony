import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  // marsAliens:Job[];

  constructor() { 
    //TODO: Call API, get jobs.
    // this.marsAliens = [
    //   { "name": "Alien Hunter", "id": '1', "description": "Hunting Aliens is life." },
    //   { "name": "Mars Jobs", "id": '2', "description": "Likes to think different, Aliens fear him."},
    //   { "name": "New Mars Rover", "id": '3', "description": "They like rocks..." },
    //   { "name": "Matt Damon Wannabe", "id": '4', "description": "Lives alone, a DIY guy on Mars." },
    // ];

    // this.newColonist = new NewColonist('','','');
  }

  ngOnInit() {
  }

}
