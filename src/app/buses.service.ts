import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buses } from './home/buses';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  id!:number
baseURL="http://localhost:1228/buses/get"
  constructor(private httpClient:HttpClient) { }
  getBusesList(): Observable<Buses[]> {
    return this.httpClient.get<Buses[]>(`${this.baseURL}`);
    
  }
  getBusesByIdList(busId: any): Observable<Buses[]> {
    return this.httpClient.get<Buses[]>(`${this.baseURL}/${busId}`);
    
  }
}
