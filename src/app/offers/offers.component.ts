import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  data = [{
    categories: [{
      name: 'xyz',
       items: [{
         name: 'item1'
       }]
    }] 
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
