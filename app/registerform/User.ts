

export class User{
    firstName:string;
    lastName:string;
    email:string;
    adharNo:number;
    phone:string;
    password:string;
    

    constructor(fname:string,lname:string,email:string, ano:number,phone:string,pass:string){
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.adharNo=ano;
        this.phone=phone;
        this.password=pass;
        
    }
}