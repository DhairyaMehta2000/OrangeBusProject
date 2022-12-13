import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }
  public fname!:String;
  public lname!:String;
  public aadhar!:number;
}
