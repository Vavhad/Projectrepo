

 export class Hotel{
    hotelid:number;
    hotelName:string;
    location:string;
    phoneNumber:string;
    imgpath:string;
    constructor(hid:number,hnm:string,loc:string,pnum:string,img:string){
        this.hotelid=hid;
        this.hotelName=hnm;
        this.location=loc;
        this.phoneNumber=pnum;
        this.imgpath=img;
    }
 }   