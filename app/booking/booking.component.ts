import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './book';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Hotel } from './hotel';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, NgbRatingModule, HttpClientModule,FormsModule,SidebarComponent,RoomsComponent,ReservationComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  location:string="";
  url:string = "http://localhost:5555";
  hotels:Hotel[] = [];
  star:number = 4;
  img:string[]=["../../assets/Room1.jpeg","../../assets/Room2.jpeg","../../assets/Room3.jpeg","../../assets/Room4.jpg",
  "../../assets/Room22.jpg","../../assets/Room23.jpg","../../assets/Room20.jpeg","../../assets/Room8.jpeg","../../assets/Room9.jpeg","../../assets/Room21.jpg","../../assets/Room11.jpeg"];

  constructor(private http: HttpClient) {

  }

  

  getallhotels() {
    
    

    this.http.get<Hotel[]>(this.url+"/getallhotel").subscribe(
      data=> {

        console.log(" Room Data Is displayed");
        this.hotels=data;

          // Assign image paths to each hotel
      // this.hotels.forEach((hotel, index) => {
      //   hotel.imgpath = this.img[index];
      // });

      let opt=1;
    for(let h of this.hotels){
      h.imgpath=this.img[opt];
      opt++;
    }


      },
      err=> {
        console.log("Error");
        
      }
    );
  }



  ngOnInit() {
    this.getallhotels();
  }
  



}