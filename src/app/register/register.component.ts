import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import{
  JOBS_URL, 
  COLONISTS_URL
} from '../models/API';

import { ColonistAPIService } from '../apiService/colonist';
import{ JobsAPIService } from '../apiService/jobs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})

export class RegisterComponent implements OnInit {
  //defining list of jobs
  marsJobs:Job[];
  registerForm:FormGroup;
  clickedButton:boolean;  
 
  constructor(
    private colonistApiService: ColonistAPIService,
    private jobsApiService: JobsAPIService,
    private router:Router
    ) { 

    this.getMarsJobs();
    this.clickedButton = false;

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.maxLength(100),Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18,50)]),
      job_id: new FormControl('', [Validators.required]),
    });
  }

  acceptAge(min:number, max:number){
    return (control: AbstractControl): {[key: string]: any} => {
      if (control.value < min || control.value > max) {
        return {'tooOld': { message: `You're ${control.value}, that's too old...` }};
      }  
      // else{
      //   return {'Welcome to Mars':{ age:control.value }};
      // }
    }
  }

  logColonist(){
    this.clickedButton = true;
    console.log(this.registerForm);
  }

  ngOnInit() {

  }

  getMarsJobs(){
    // console.log('Getting jobs...');
    this.jobsApiService.getMarsJobs()
                       .subscribe((result) => {
                       this.marsJobs = result;
                       });
  }
  
  postNewColonist(event){
    event.preventDefault();
    this.clickedButton = true;
    console.log('posting new colonist...');
    console.log(this.registerForm);
    if(this.registerForm.invalid){
      // The form is invalid...
    } else{
      
    const name: string = this.registerForm.get('name').value;
    const age: string = this.registerForm.get('age').value;
    const job_id: string = this.registerForm.get('job_id').value;

    const newColonist: NewColonist = new NewColonist(name, age, job_id);
    const colonistPostRequest = {colonist: newColonist};

    this.colonistApiService.saveColonist(colonistPostRequest)
                            .subscribe((result) => {
                              console.log('Colonist was saved:', result);
                              this.router.navigate(['encounters']);
                              
                            });
    }
  }
}
