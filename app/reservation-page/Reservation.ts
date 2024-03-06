export class Reservation{
    reservationId:number;
    checkInDate:Date;
    checkOutDate:Date;
    totalAmount:number;
    customerID:number;
    roomnumber:number;
    imgpath:string;

    constructor(resId:number,checkin:Date,checkout:Date,totalamt:number,custId:number,roomno:number,img:string){
        this.reservationId=resId;
        this.checkInDate=checkin;
        this.checkOutDate=checkout;
        this.totalAmount=totalamt;
        this.customerID=custId;
        this.roomnumber=roomno;
        this.imgpath=img;

    }
}