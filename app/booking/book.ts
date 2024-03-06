export class Book{
    
    img:string;
    hotelname:string;
    roomtype:string;
    rate:number;


    constructor(im:string, hn:string,rt:string,r:number){
        this.hotelname=hn;
        this.roomtype=rt;
        this.rate=r;
        this.img=im;
    }



}