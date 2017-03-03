import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NewEncounter } from '../models';
import { ENCOUNTERS_URL } from '../models/API';

interface EncounterPostRequest{
    encounter: NewEncounter;
}

@Injectable()
export class EncountersAPIService{
    constructor( private http: Http){}

    getEncounter(): Observable<Encounters[]>{
        
    }

    saveNewEncounter(newEncounter: EncounterPostRequest) : Observable<Encounter>{

    }

}