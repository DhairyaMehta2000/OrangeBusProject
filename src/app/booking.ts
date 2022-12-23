export class Booking{

// id!:number;
bookedFrom!:String;
bookedTo!:String;
busTime!:String;
bookedDate!:String;
busNumber!:String;
busName!:String;
paidFair!:String;
seatNumber!:number;
ticketId!:String;
ticketStatus!:String;
customerName!:String;
customerGender!:String;
customerAge!:String;
uid!:number;

constructor(   bookedFrom:String,  bookedTo:String,  busTime:String,  bookedDate:String,
     busNumber:String,  busName:String,  paidFair:String,  seatNumber:number,  ticketId:String,  ticketStatus:String,
     customerName:String,  customerGender:String,  customerAge:String,uid:number){
//     this.id=id;
    this.bookedFrom=bookedFrom;
    this.bookedTo=bookedTo;
    this.busTime=busTime;
    this.bookedDate=bookedDate;
    this.busNumber=busNumber;
    this.busName=busName;
    this.paidFair=paidFair;
    this.seatNumber=seatNumber;
    this.ticketId=ticketId;
    this.ticketStatus=ticketStatus;
    this.customerName=customerName;
    this.customerGender=customerGender;
    this.customerAge=customerAge;
    this.uid=uid;
}
}
