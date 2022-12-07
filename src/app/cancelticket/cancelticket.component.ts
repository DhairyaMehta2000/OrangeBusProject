import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value)
  }

}
