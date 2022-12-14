import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Buses } from '../buses';
import { BusesService } from '../buses.service';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})



export class PaymentpageComponent implements OnInit {
  @Input() item = 0;
  counter(item: number) {
    return new Array(item);
  }
  constructor(public testService: TestServiceService, private router: Router, public busesService: BusesService, public bookingService: BookingService) { }
  test!: Buses;
  booking!: Booking;
  buses!: Buses[]
  bookSer!: BookingService;
  bookingVar: Booking[] = [];
  aadhar:number=this.testService.aadhar;
  ngOnInit(): void {
    this.getBusesByRoute();
  }
  payment(form: NgForm) {
    this.aadhar = form.value.aadhar;
    this.testService.aadhar=this.aadhar = form.value.aadhar;
    var toBook = form.value.names.split(',');
    var bookGender = form.value.gender.split(',');
    var ages = form.value.age.split(',');
    for (let i = 0; i < toBook.length; i++) {
      for (let j of this.buses) {
        this.bookingVar.push(new Booking(
          j.busFrom,
          j.busTo,
          String(j.travelTime),
          String("12-12-2022"),
          j.busNumber,
          j.busName,
          j.busFair,
          String(i),
          String(i),
          'Confirmed',
          toBook[i],
          bookGender[i],
          ages[i],
          this.aadhar
        ));
      }
    }
    
    console.log("aadhar now = ", this.testService.aadhar);

    for (let m of this.bookingVar) {
      this.bookingService.createBookings(m).subscribe(data => {
      })
    }
    alert("booking done")
    this.router.navigate(['/bookingsummary'])
  }

  private getBusesByRoute() {
    this.busesService.getBusesRouteList(this.busesService.busFrom, this.busesService.busTo).subscribe(data => {
      this.buses = data
      console.log("stations = ", this.buses);
    });
  }
}