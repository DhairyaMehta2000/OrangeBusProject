import { Component, OnInit } from '@angular/core';
// import { PatientRegServiceService,patients } from './patient-reg-service.service'
import {User} from '../user'
import { UserService } from '../user.service';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  users : User = new User(10,"Dhairya","mehta","Male","123456",7972528199,10,22);
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.createuser();
    console.log(this.users);
  }
    createuser():void{
      this.userService.createAUser(this.users).subscribe(data=>{
        alert('user created');
        console.log(data);
        this.router.navigate(['/home-page']);
      })
    }
  }


