import { Component, OnInit } from '@angular/core';
import{NewColonist, Job} from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //defining list of jobs
  newColonist: NewColonist;
  marsJobs:Job[];
 
  constructor() { 
    //TODO: Call API, get jobs.
    this.marsJobs = [
      { "name": "Alien Hunter", "id": '1', "description": "Hunting Aliens is life." },
      { "name": "Dust Blower", "id": '2', "description": "Yes, it's a thing."},
      { "name": "New Mars Rover", "id": '3', "description": "They like rocks..." },
      { "name": "Matt Damon Wannabe", "id": '4', "description": "Lives alone, a DIY guy on Mars." },
    ];
  }

  ngOnInit() {

  }

}
