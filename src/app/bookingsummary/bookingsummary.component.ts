import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Buses } from '../buses';
import { BusesService } from '../buses.service';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})
export class BookingsummaryComponent implements OnInit {
  filteredBookings: Booking[] = [];
  buses!: Buses[]
  bookings: Booking[] = [];
  toToggle:Boolean=false

  constructor(public bookingService: BookingService, public testService: TestServiceService, public busesService: BusesService) { }
  a = this.testService.aadhar
  ngOnInit(): void {
    this.getBusDetails();
    // this.getBookings();
    this.getBookingByUid(this.a);
    // console.log(this.testService.aadhar)
  }
  btn(){
    this.toToggle=true;
  }
  private getBusDetails() {
    this.busesService.getBusesRouteList(this.busesService.busFrom, this.busesService.busTo).subscribe(data => {
      this.buses = data;
      console.log("buses = ", this.buses);
    });
  }
  private getBookings() {
    this.bookingService.getBookingsByList().subscribe(data => {
      this.bookings = data;
      console.log("bookings = ", this.bookings);

    })
  }
  private getBookingByUid(a: number) {
    this.btn()
    this.bookingService.getbookingById(a).subscribe(data => {
      this.filteredBookings = data;
      console.log(this.filteredBookings);
    })
  }
}
