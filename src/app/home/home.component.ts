import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
//   standalone:true,

})
export class HomeComponent implements OnInit {
  closeResult:string | undefined  

  constructor(private modalService: NgbModal) { }
  openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}
  ngOnInit(): void {
  }

}
