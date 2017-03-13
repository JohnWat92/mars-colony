import { Component, OnInit } from '@angular/core';
import { NewEncounter } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import{ ENCOUNTERS_URL } from '../models/API';

import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersAPIService]
})

export class EncountersComponent implements OnInit {
  Encounters:NewEncounter[];
  clickedButton:boolean;  
 
  constructor( private encountersApiService: EncountersAPIService){ 
    this.getEncounters();
    this.clickedButton = false;
  }

  ngOnInit() {

  }
  getEncounters(){
    console.log('Getting NewEncounters...');
    this.encountersApiService.getEncounters()
                       .subscribe((result) => {
                       this.Encounters = result;
                       });
  }
}

