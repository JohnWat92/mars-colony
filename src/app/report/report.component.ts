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

  constructor( 
    private aliensAPIService: AliensAPIService, 
    private encountersApiService: EncountersAPIService
  ) { 

    this.getAlien();

    this.reportForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      date: new FormControl('', [Validators.required]),
      colonist_id: new FormControl ('', [Validators.required])
    });
  }
  
  ngOnInit() {
  }

  getAlien(){
    console.log('getting Aliens...');
      this.aliensAPIService.getAlien()
                        .subscribe((result) => {
                        this.alienType = result;
                        });
    }
    postNewEncounter(event){
    event.preventDefault();
  
    if(this.reportForm.invalid){
      // The form is invalid...
    } else{

    const id = 300; 
    const date = this.reportForm.get('date').value;
    const colonist_id = 302;
    const atype = this.reportForm.get('atype').value;
    const action = this.reportForm.get('action').value;
    //need random number until ids are called 
   
    const newEncounter: NewEncounter = new NewEncounter(id, date, colonist_id, atype, action );
    const encounterPostRequest = {encounter: newEncounter};

    this.encountersApiService.saveNewEncounter(encounterPostRequest)
                            .subscribe((result) => {
                              console.log('Encounters was saved:', result);
                            });
    }
  }
}
