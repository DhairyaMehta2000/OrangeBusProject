import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusesService } from '../buses.service';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
  @Input() item=0;
   counter(item: number) {
    return new Array(item);
}
  constructor(public testService:TestServiceService,private router:Router,private busesService: BusesService) { }

  ngOnInit(): void {
  }
payment(){
this.router.navigate(['/bookingsummary'])
  console.log(this.testService.fname)
}



}
