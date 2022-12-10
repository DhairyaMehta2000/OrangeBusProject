import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
// @Input() item=0;


}
