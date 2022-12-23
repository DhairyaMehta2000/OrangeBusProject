import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  users: User = new User();

  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {

  }
  registerUser(regform: NgForm) {
    console.log("password2 = ", regform.value.password2, "password = ", this.users.password
    );
    {
      if(!(this.users.firstName)){
        alert("enter fname")
      }
      else if(!(this.users.lastName)){
        alert("enter lname")
      }
      
      else if (regform.value.password2 != this.users.password) {
        alert("passwords don't match");
      }
      
      else if(!(this.users.mobileNumber)){
        alert("enter mobile number")
      }
      else if(String(this.users.uid).length!=12){
        alert("enter valid aadhar number")
      }
      else if(regform.value.age<=0){
        alert("please enter a valid age")
      }
      else {
        this.userService.createAUser(this.users).subscribe(data => {
          alert('user created');
          // console.log(data);
          this.router.navigate(['/signin']);
        })
      }
    }
  }
}


