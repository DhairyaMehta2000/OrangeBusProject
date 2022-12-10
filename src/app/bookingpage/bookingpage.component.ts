import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { BusesService } from '../buses.service';
import { Buses } from '../home/buses';
@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {
  public isCollapsed = true;
  noOfAvailableSeats: number = 10;
  noOfbookedSeats: number = 0;
  seatNo = 0;
  currentBookedSeats = 0;
  buses: Buses[] = [];

  constructor(private _router: Router, private busesService: BusesService) { }

  toggleOn: any;
  onSubmit(f: NgForm) {
    this.currentBookedSeats = f.value.seatNo;
    this.seatNo = f.value.seatNo

    if (this.noOfAvailableSeats < 10 && this.noOfAvailableSeats >= 0 && this.noOfbookedSeats > 0 && (this.noOfbookedSeats < 10 || this.noOfbookedSeats == 10)) {
      this.toggleOn = true;
    }
    else if (f.value.seatNo < 0) {
      alert("please enter valid seat number")
    }
    else if (f.value.seatNo == 0) {
      alert("please enter number of seats to book")
    }
    else if (this.noOfAvailableSeats < 0) {
      alert("Sorry bus is fully booked, check later for another bus")
    }
    else if
      ((this.noOfAvailableSeats) < f.value.seatNo) {
      alert("Sorry cannot book these many seats")
    }
    else {
      this.noOfAvailableSeats -= f.value.seatNo;
      this.noOfbookedSeats += Number(f.value.seatNo);
    }

  }
  private getBuses() {
    this.busesService.getBusesList().subscribe(data => {
      this.buses = data;
      console.log("buses = ", this.buses);
    });
  }
  private getBusesById(bus:Buses){
    this.busesService.getBusesByIdList(bus.busId).subscribe(data => {
      this.buses = data;
      console.log("buses = ", this.buses);
    });
  }


  ngOnInit(): void {
    this.getBuses();
    // this.getBusesById();
  }

}
