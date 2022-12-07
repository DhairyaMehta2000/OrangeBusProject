import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  noOfAvailableSeats: number = 10;
  noOfbookedSeats: number = 0;
  onSubmit(f: NgForm) {
    if (this.noOfAvailableSeats<=0){
      alert("Sorry bus is fully booked, check later for another bus")
    }
    else if
       ((this.noOfAvailableSeats)<f.value.seatNo){
        alert("Sorry cannot book these many seats")
      }
      else{
    this.noOfbookedSeats += Number(f.value.seatNo);
    this.noOfAvailableSeats -= f.value.seatNo }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
