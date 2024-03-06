import { Component , OnInit, ViewEncapsulation ,HostListener,Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterformComponent } from '../registerform/registerform.component';
import { ReservationPageComponent } from '../reservation-page/reservation-page.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule, RegisterformComponent,ReservationPageComponent],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
  }

  
 
 


}