import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor(private authservice: AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authservice.loggedIn = false;
    this.router.navigate(['signin'])
    
    
  }

}
