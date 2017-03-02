import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms'
import{
  JOBS_URL, 
  COLONISTS_URL
} from '../models/API';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  //defining list of jobs
  marsJobs:Job[];
  registerForm:FormGroup;
  clickedButton:boolean;
 
  constructor() { 
    //TODO: Call API, get jobs.
    this.clickedButton = false;
    this.marsJobs = [
      { "name": "Alien Hunter", "id": '1', "description": "Hunting Aliens is life." },
      { "name": "Mars Jobs", "id": '2', "description": "Likes to think different, Aliens fear him."},
      { "name": "New Mars Rover", "id": '3', "description": "They like rocks..." },
      { "name": "Matt Damon Wannabe", "id": '4', "description": "Lives alone, a DIY guy on Mars." },
    ];

    // this.newColonist = new NewColonist('','','');
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18,50)]),
      job_id: new FormControl('(none)', [Validators.required]),
    });
    this.getMarsJobs();

    
  }

  acceptAge(min:number, max:number){
    return (control: AbstractControl): {[key: string]: any} => {
      if (control.value < min || control.value > max) {
        return {'Sorry Good Luck!': { age:control.value }};
      }
      else{
        return {'Welcome to Mars!': {age:control.value}};
      }
    }
  }
  
  logColonist(){
    this.clickedButton = true;
    console.log(this.registerForm);
  }
  ngOnInit() {

  }
  getMarsJobs(){
    console.log('Getting jobs...');
  }
  postNewColonist(event){
    event.preventDefault();
    if(this.registerForm.invalid){
      // The form is invalid...
    } else{
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist(name,age, job_id);
      console.log('The colonist is ready for MARS:', newColonist);
    }
  }
}
