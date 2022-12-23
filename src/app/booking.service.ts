import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  deleteBookingById(id: number) {
    return this.httpClient.delete<Booking[]>(`http://localhost:1228/booking/drop/${id}`)
  }
  // uid!: number;
  constructor(private httpClient: HttpClient) { }
  getbookingById(uid:number) {
    return this.httpClient.get<Booking[]>(`http://localhost:1228/booking/get/${uid}`)
  }
  getBookingsByList() {
    return this.httpClient.get<Booking[]>("http://localhost:1228/booking/get");
  }
  public createBookings(booking: Booking) {
    return this.httpClient.post<Booking>("http://localhost:1228/booking/createbooking", booking);
  }

}
