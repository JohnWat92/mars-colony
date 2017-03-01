export interface Job{
    name:string;
    id:number;
    description:string;
}
export class NewColonist{
    name:string;
    age:number;
    job_id:Job;
}

export class NewEncounter{
    colonist_id:number;
    date:number;
    atype:string;
    action:string;
}

export interface Colonist{
    name:string;
    id:number;
    age:number;
    job:Job;
}

export interface Alien{
    id:number;
    type:string;
    description:string;
    submitted_by:string;
}

export interface Encounter{
    id:number;
    date:string;
    colonist_id:number;
    atype:string;
    action:string;
}
