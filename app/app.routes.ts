import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { SigninformComponent } from './signinform/signinform.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { LocationhotelComponent } from './locationhotel/locationhotel.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"book",component:BookingComponent},
    {path:"contact",component:ContactComponent},
    {path:"registerform",component:RegisterformComponent},
    {path:"sform",component:SigninformComponent},
    //{path:"c",component:ReservationComponent},
    {path:"room", component:RoomsComponent},
   {path:"reserve",component:ReservationComponent},
    {path:"pay",component:PaymentComponent},
    {path:"respage",component:ReservationPageComponent},
    {path:"loc",component:LocationhotelComponent}
   
];
