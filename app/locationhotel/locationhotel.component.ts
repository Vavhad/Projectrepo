import { Component } from '@angular/core';
import { Hotel } from './hotel';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Room } from './Room';

@Component({
  selector: 'app-locationhotel',
  standalone: true,
  imports: [CommonModule, NgbRatingModule, HttpClientModule,FormsModule,SidebarComponent],
  templateUrl: './locationhotel.component.html',
  styleUrl: './locationhotel.component.css'
})
export class LocationhotelComponent {
  hotelnm: string="";
  url:string = "http://localhost:5555";
  hotels:Hotel[] = [];
  room:Room[]=[];
  star:number = 4;
  img:string[]=["../../assets/Room1.jpeg","../../assets/Room2.jpeg","../../assets/Room3.jpeg","../../assets/Room4.jpg",
  "../../assets/Room22.jpg","../../assets/Room23.jpg","../../assets/Room20.jpeg","../../assets/Room8.jpeg","../../assets/Room9.jpeg","../../assets/Room21.jpg","../../assets/Room11.jpeg"];

  constructor(private route: ActivatedRoute,private http: HttpClient) {

  }

  

  getByLoc() {
    
    

    this.http.get<Hotel[]>(this.url+"/getbylocation").subscribe(
      data=> {

        console.log(" Hotel Data Is displayed");
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




  

  ngOnInit(): void {
    // Access the query parameter from the route
    this.getByLoc();
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
