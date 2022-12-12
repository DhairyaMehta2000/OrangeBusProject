import { Time } from "@angular/common";

export class Buses{
    busId!:number;
    busName!:String;
    busNumber!:String;
    busStartTime!:Time;
    busEndTime!:Time;
    busFair!:String;
    busFrom!:String;
    busTo!:String;
    travelTime!: Time;

    constructor(busId:number,busName:String,busNumber:String,busStartTime:Time,busEndTime:String,busFair:String,busFrom:String,busTo:String,travelTime:Time){

    }
}