import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  imports: [NgbAccordionModule],
  standalone:true
})
export class FaqComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2=true;

  constructor() { }
  newTag(){
    this.isCollapsed2=false;
  }

  ngOnInit(): void {
  }
  alert1(){
    alert("Thank you for your feedback")
  }

}
