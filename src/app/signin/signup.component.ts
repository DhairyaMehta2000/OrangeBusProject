import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TestServiceService } from '../test-service.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  a: number = 6
  b: String = ''
  minNumberofChars: number = 6;
  maxNumberofChars: number = 16;
  users: User[] = []
  len: number = this.users.length;
  counter: number = 0;
  firstname:String='';

  constructor(public router: Router, public userService: UserService, public testService:TestServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    this.userService.getUsersList().subscribe(data => { this.users = data; console.log("users = ", this.users) });
  }
  login(form: NgForm) {
    if (!(form.value.pass || form.value.user)) {
      alert('please provide valid username or password')
    }
    if ((form.value.pass.length < this.minNumberofChars || form.value.pass.length > this.maxNumberofChars) && (form.value.pass || form.value.user)) {
      alert('incorrect cred')
    }

    if (form.value.pass.length > this.minNumberofChars && form.value.pass.length < this.maxNumberofChars ) {

      for (var i of this.users) {

        if (i.firstName == form.value.user && i.password == form.value.pass) {
          this.testService.fname=i.firstName;
          this.testService.lname=i.lastName;
          console.log("data to send to other components ",i)
          alert("Logged in succesfully");
          this.router.navigate(['/home-page'])
          this.counter = 1
          break
        }
        if (this.users.indexOf(i) == this.users.length - 1) {
          alert("User does not exist")
        }
      }

    }
  }

}


