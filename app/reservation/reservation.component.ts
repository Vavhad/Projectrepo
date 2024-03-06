import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Reservation } from './Reservation';
import { PaymentComponent } from '../payment/payment.component';
import { BookingComponent } from '../booking/booking.component';






@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [RouterModule,SidebarComponent,ReactiveFormsModule,RoomsComponent,HttpClientModule,PaymentComponent,BookingComponent],
  
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  roomnumber:number=0;
  totalAmount:number=0;
  customerID: number=0;
  

  //   if (this.resform.valid) {
  //     const newReservation = this.resform.value;
  //     this.http.post(this.url+"/addreservations", newReservation)
  //       .subscribe((data) => {
  //         //this.loadReservations();
  //         //this.resform.reset();
  //         alert("Data reserve.."+data)

  //       },(error)=>{
  //         alert("Data not reserved...");
  //       }
  //       );
  //   }
  // }

  // if (this.resform.valid) {
  //   const token = this.authService.getToken();

  //   if (token !== null && !isNaN(+token)) {
  //     const reservationData = {
  //       ...this.resform.value,
  //       customerID: +token, // Parse as a number
  //       roomnumber:this.roomnumber ,
  //       totalAmount: this.amt,
  //     };

  //   
  reservationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router
  ) {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
     totalAmount: ['', Validators.required],
      roomnumber: ['', Validators.required],
      customerID: ['', Validators.required]
      
       
    });
  }

  ngOnInit() {
    // Subscribe to the route parameters observable
    this.route.queryParams.subscribe((queryParams) => {
      // Retrieve the roomnumber and amt from the query parameters
      // this.roomnumber = queryParams['roomNumber'];
      this.totalAmount = queryParams['amt'];
     // this.customerID = queryParams['customerID'];
    //  this.roomnumber= this.reservationForm.controls['roomnumber'].value;
    //  this.totalAmount= this.reservationForm.controls['amt'].value;

    this.reservationForm.patchValue({
      // roomnumber: this.roomnumber,
      totalAmount: this.totalAmount,
      // customerID:this.customerID,
    });
    this.addReservation();
    });
    
  }


  addReservation() {
    if (this.reservationForm.valid) {
      
      const reservationData = this.reservationForm.value;


      this.http.post('http://localhost:5555/addreservations', reservationData).subscribe(
        (response) => {
          console.log('Reservation added successfully', response);
          this.router.navigateByUrl('respage');
          
          // Optionally, you can perform actions after successful addition
          
        },
        (error) => {
          console.error('Error adding reservation', error);
        }
      );
    }
  }

 
  
  
 
}
//}



