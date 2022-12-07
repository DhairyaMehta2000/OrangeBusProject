import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  log=['Paavan','Chandana','Dhairya','Pavitra']
  auth: { [key: string]: string } = {

    "Paavan" : "paavan123",

    "Chandana" : "Chandana123",

    "Dhairya" : "Dhairya",

    "Pavitra" : "Pavitra"

  }
  

  // onSubmit(){ this.submitted = true;}
  constructor() { }

  ngOnInit(): void {
  }
  submit(form: NgForm){



    let u = form.value.username;

    // const d = this.auth["Srinath"];

    if(this.log.includes(u)){

      if(form.value.password==this.auth[u]){

        alert("Login Succesful!!");
      }    
      else{
        alert("Password Doesn't match")
      }
    }
    else{
      alert("Username Does not Exits")
    }
  }
}
