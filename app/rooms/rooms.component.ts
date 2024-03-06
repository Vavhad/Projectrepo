import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Room } from './Room';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [HttpClientModule,CommonModule,BookingComponent,ReservationComponent,SidebarComponent,ReservationComponent,RouterModule,PaymentComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  hotelnm: string="";
  url:string="http://localhost:5555";
  room:Room[]=[];
  img:string[]=["../../assets/Room1.jpeg","../../assets/Room2.jpeg","../../assets/Room3.jpeg","../../assets/Room4.jpg",
  "../../assets/Room5.jpeg","../../assets/Room6.jpeg","../../assets/Room20.jpeg","../../assets/Room8.jpeg","../../assets/Room9.jpeg","../../assets/Room10.jpeg","../../assets/Room11.jpeg"];


  constructor(private route: ActivatedRoute,private http:HttpClient) {}

  

  ngOnInit(): void {
    // Access the query parameter from the route

    this.route.queryParams.subscribe((queryParams) => {
      this.hotelnm = queryParams['hotelnm'];
      alert("Booking "+this.hotelnm);

//code to post bookinf to restapi---insert bookinfo in reservation table
      
this.getallrooms();
    });

    
  }
  

  
  getallrooms() {
    this.http.get<Room[]>(this.url+"/getbyhotelname/"+this.hotelnm).subscribe(
      data=> {
        this.room=data;
        console.log(" Room Data Is displayed"+this.room);
        let opt=1;
        for(let h of this.room){
          h.imgpath=this.img[opt];
          opt++;
        }
        

      },
      err=> {
        console.log("Error");
        
      }
    );
  }
  

}
