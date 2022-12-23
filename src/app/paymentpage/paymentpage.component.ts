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
  booking!: Booking;
  buses!: Buses[]
  bookSer!: BookingService;
  bookingVar: Booking[] = [];
  aadhar: number = this.testService.aadhar;
  count: number = this.testService.no_seat

  ngOnInit(): void {
    this.getBusesByRoute();
  }
  payment(form: NgForm) {

    this.aadhar = form.value.aadhar;
    this.testService.aadhar = this.aadhar = form.value.aadhar;
    var toBook = form.value.names.split(',');
    var bookGender = form.value.gender.split(',');
    var ages = form.value.age.split(',');
    if (String(this.aadhar).length != 12) {
      alert("please enter valid aadhar")
    }
    else if ((toBook.length == 0)) {
      alert("please enter age")
    }
    else if (bookGender.length == 0) {
      alert("please enter gender")
    }
    else if (ages.length == 0) {
      alert("please enter age")
    }
    else {
      for (let i = 0; i < this.testService.seat; i++) {
        for (let j of this.buses) {
          this.bookingVar.push(new Booking(
            j.busFrom,
            j.busTo,
            String(j.travelTime),
            String("12-12-2022"),
            j.busNumber,
            j.busName,
            j.busFair,
            this.count + 1,
            String(Math.random() * 1000),
            'Confirmed',
            toBook[i],
            bookGender[i],
            ages[i],
            this.aadhar
          ));
          this.count=this.count+1
        }
      }
    }

    // console.log("aadhar now = ", this.testService.aadhar);

    for (let m of this.bookingVar) {
      this.bookingService.createBookings(m).subscribe(data => {
      })
    }
    alert("booking done")
      this.testService.no_seat=this.count
      console.log("no_seat = ", this.testService.no_seat)
    // console.log(this.count,this.testService.seat)
    this.router.navigate(['/bookingsummary'])
  }

  private getBusesByRoute() {
    this.busesService.getBusesRouteList(this.busesService.busFrom, this.busesService.busTo).subscribe(data => {
      this.buses = data
      // console.log("buses = ", this.buses);
    });
  }
}