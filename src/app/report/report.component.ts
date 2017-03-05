import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien, Colonist } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import{
  ALIENS_URL,
  ENCOUNTERS_URL
} from '../models/API';

import { EncountersAPIService } from '../apiService/encounters';
import { AliensAPIService } from '../apiService/aliens';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncountersAPIService]
})
export class ReportComponent implements OnInit {
  alienType: Alien[];
  newEncounter: NewEncounter;
  reportForm: FormGroup;
  clickedButton:boolean;

  constructor( 
    private aliensApiService: AliensAPIService, 
    private encountersApiService: EncountersAPIService
  ) { 

    this.getAlien();
    this.clickedButton = false;

    this.reportForm = new FormGroup({
      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }
  
  ngOnInit() {
  }

  getAlien(){
    console.log('getting Aliens...');
      this.aliensApiService.getAlien()
                           .subscribe((result) => {
                           this.alienType = result;
                            });
    }

    postNewEncounter(event){
      event.preventDefault();
      console.log('posting new encounter');
    
      if(this.reportForm.invalid){
        // The form is invalid...
      } else{
      const id:number = 150; 
      const date:string = new Date().toISOString().substring(0, 10);
      const colonist_id:number = 117;
      const atype:string = this.reportForm.get('atype').value;
      const action:string = this.reportForm.get('action').value;
      //need random number until ids are called 
    
      const newEncounter: NewEncounter = new NewEncounter(id, date, colonist_id, atype, action);
      const encounterPostRequest = {encounter: newEncounter};
      console.log('RIGHT BEFORE SAVING');
      this.encountersApiService.saveNewEncounter(encounterPostRequest)
                                .subscribe((result) => {
                                console.log('Encounters was saved:', result);
                                
                              });
      }
  }
}
