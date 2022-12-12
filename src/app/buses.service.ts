import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buses } from './buses';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  busFrom!:String;
  busTo!:String;
  // id!:number
baseURL="http://localhost:1228/buses"
  constructor(private httpClient:HttpClient) { }
  getBusesList(): Observable<Buses[]> {
    return this.httpClient.get<Buses[]>(`${this.baseURL}/get`);
    
  }
  getBusesByIdList(busId: any): Observable<Buses[]> {
    return this.httpClient.get<Buses[]>(`${this.baseURL}/${busId}`);
    
  }
  getBusesRouteList(busFrom:String,busTo:String){
    console.log("busfrom = " ,busFrom,"busTo = ",busTo)
    return this.httpClient.get<Buses[]>(`${this.baseURL}/getbus/${busFrom}/${busTo}`);
  }
  // `${this.baseURL}/getbus/${busFrom}/${busTo}`
}
