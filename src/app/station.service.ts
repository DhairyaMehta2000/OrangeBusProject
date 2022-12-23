import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from './station';


@Injectable({
  providedIn: 'root'
})
export class StationService {
  private baseURL = "http://localhost:1228/stations/get";
  constructor(private httpClient: HttpClient) { }

  getStationList(): Observable<Station[]> {
    return this.httpClient.get<Station[]>(`${this.baseURL}`);
  }
}
