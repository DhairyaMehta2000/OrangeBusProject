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
  users:User=new User();
  
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {
    this.createuser();
  }
  
    createuser():void{
      if(String(this.users.uid).length>12){
        alert("Enter a valid aadhar number")
      }
      else{
      this.userService.createAUser(this.users).subscribe(data=>{
        alert('user created');
        console.log(data);
        this.router.navigate(['/signup']);
      })
    }
  }


}