import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from './Reservation';
import { Room } from './Room';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-reservation-page',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {
  base_url:string="http://localhost:5555";
  reservations:Reservation[]=[];
  rooms:Room[]=[];
  constructor(private http:HttpClient){}
  img:string[]=["../../assets/Room1.jpeg","../../assets/Room2.jpeg","../../assets/Room3.jpeg","../../assets/Room4.jpg",
  "../../assets/Room5.jpeg","../../assets/Room6.jpeg","../../assets/Room20.jpeg","../../assets/Room8.jpeg","../../assets/Room9.jpeg","../../assets/Room10.jpeg","../../assets/Room11.jpeg"];

  getReservations(){
    this.http.get<Reservation[]>(this.base_url+'/getallreservations').subscribe(
      (data)=>{
        this.reservations=data;
        console.log('Reservations:', this.reservations);
        alert("Reservation Done..."+data);
        let opt=1;
        for(let h of this.rooms){
          h.imgpath=this.img[opt];
          opt++;
        }
        
        
      },
      (error)=>{
        alert("Reservation is not done...");
      }
    );
  }
  ngOnInit(){
    this.getReservations();
    console.log('Reservations:', this.reservations);
  }

}
