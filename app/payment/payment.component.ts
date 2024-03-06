import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,HomeComponent,RoomsComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  msg(){
    alert("Payment Done Successfully..!!");
    return "home.component.html";
 }
}
