import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// import { UserService } from '../user.service';
import{UserService} from '../user.service'
import { User } from '../user';
import { StationService } from '../station.service';
import { Station } from '../station';
import { BusesService } from '../buses.service';
import { Buses } from './buses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //   standalone:true,

})
export class HomeComponent implements OnInit {
  closeResult: string | undefined
  users!: User[];
  stations: Station[] = [] ;
  user:User[]=[];
  buses: Buses[] = [];
  // console.log();
  

  constructor(private userService : UserService, private modalService: NgbModal, private stationService: StationService, private busesService: BusesService) { }
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  ngOnInit(): void {
    // console.log(User)
    // this.getUserById();
    this.getUsers();
    this.getStations();
    // this.userService.getUsersList().subscribe(data => { this.user = data
    //   // console.log(this.user==data)
    //   console.log("user = ", this.user) });
    
    // console.log(this.stations);
    this.getBuses();

  }
  private getBuses() {
    this.busesService.getBusesList().subscribe(data => {
      this.buses = data;
      console.log("buses = ", this.buses);
    });
  }
  private getUsers() {
   this.userService.getUsersList().subscribe(data => { this.users=data ; console.log("user = ", this.users) });
    
  }

  private getStations() {
    this.stationService.getStationList().subscribe(data => {this.stations=data;
      console.log("stations = ",this.stations);});
  }
  // private getUserById(id:String) {
  //   this.userService.getAUserById(id).subscribe(data => this.users = data);
  //   console.log(this.users);
}


