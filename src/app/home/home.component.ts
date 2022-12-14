import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
// import { UserService } from '../user.service';
import{UserService} from '../user.service'
import { User } from '../user';
import { StationService } from '../station.service';
import { Station } from '../station';
import { BusesService } from '../buses.service';
import { Buses } from '../buses';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //   standalone:true,

})
export class HomeComponent implements OnInit {
  // busFrom!:String;
  // busTo!:String;
  closeResult: string | undefined
  users!: User[];
  stations: Station[] = [] ;
  user:User[]=[];
  buses: Buses[] = [];
  currentRouter:String=''

onClick(){
  console.log(this.busesService.busFrom,this.busesService.busTo);
  this.router.navigate(['/booking']);
  this.getBusesByRoute();
  // console.log(f.value.);
  // this.currentRouter=

}
  constructor(public testService:TestServiceService,public router:Router,public userService : UserService, public modalService: NgbModal, public stationService: StationService, public busesService: BusesService) { }
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  ngOnInit(): void {
    console.log("firstname from login", this.testService.fname)
    this.getStations();
    // this.getBuses();

  }
  private getBuses() {
    this.busesService.getBusesList().subscribe(data => {
      this.buses = data;
      console.log("buses = ", this.buses);
    });
  }
  

  private getStations() {
    this.stationService.getStationList().subscribe(data => {this.stations=data;
      console.log("stations = ",this.stations);});
  }
  private getBusesByRoute() {
    console.log("busfrom = " ,this.busesService.busFrom,"busTo = ",this.busesService.busTo)
    this.busesService.getBusesRouteList(this.busesService.busFrom,this.busesService.busTo).subscribe(data => {this.buses=data;
      console.log("buses = ",this.buses);});
  }
}


