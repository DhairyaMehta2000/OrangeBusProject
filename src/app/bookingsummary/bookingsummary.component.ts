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
  buses!: Buses[]
  bookings!:Booking[]
  constructor(public bookingService: BookingService, public testService: TestServiceService, public busesService: BusesService) { }

  ngOnInit(): void {
    this.getBusDetails();
    this.getBookings();
    // console.log(this.testService.fname)
  }
  private getBusDetails() {
    this.busesService.getBusesRouteList(this.busesService.busFrom, this.busesService.busTo).subscribe(data => {
      this.buses = data;
      console.log("buses = ", this.buses);
    });
  }
  private getBookings() {
    this.bookingService.getBookingsByList().subscribe(data=>{
      this.bookings=data;
      console.log("bookings = ", this.bookings);

    })
    
  }

}
