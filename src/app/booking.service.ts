import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  getBookingsByList(){
    return this.httpClient.get<Booking[]>("http://localhost:1228/booking/get");
  }
}
