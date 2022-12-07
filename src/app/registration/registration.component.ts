import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form.value.validationDefault01)
    console.log(form.value.validationDefault02)
    console.log(form.value.validationUsername)
    console.log(form.value.validationDefault03)
    console.log(form.value.validationDefault04)
    console.log(form.value.validationDefault05)

  }
}
