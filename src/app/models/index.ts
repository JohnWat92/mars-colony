export interface Job{
    name:string;
    id:string;
    description:string;
}
export class NewColonist{
    name:string;
    age:string;
    job_id:string;
    constructor(name: string, age: string, job_id: string){
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export class NewEncounter {
    id: Number;
    date: String;
    colonist_id: Number;
    atype: String;
    action: String;
    constructor(id: number, date: string, colonist_id: Number, atype: string, action: String){
        this.id = id;
        this.date = date;
        this.colonist_id = colonist_id;
        this.atype = atype;
        this.action = action;
    }
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
    atype:string;
    action:string;
    colonist_id:number;
}
