export class Reservation{
    reservationId:number;
    checkInDate:Date;
    checkOutDate:Date;
    totalAmount:number;
    customerID:number;
    roomnumber:number;

    constructor(resId:number,checkin:Date,checkout:Date,totalamt:number,custId:number,roomno:number){
        this.reservationId=resId;
        this.checkInDate=checkin;
        this.checkOutDate=checkout;
        this.totalAmount=totalamt;
        this.customerID=custId;
        this.roomnumber=roomno;

    }
}