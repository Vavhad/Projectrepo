import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginUser } from './LoginUser';
import { Router, RouterModule } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-signinform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,SidebarComponent,HttpClientModule,RouterModule,BookingComponent],
  templateUrl: './signinform.component.html',
  styleUrl: './signinform.component.css'
})
export class SigninformComponent {

  
  base_url:string="http://localhost:5555";

  

  constructor(private http:HttpClient,private router:Router){}

  myform:FormGroup=new FormGroup({
    password:new FormControl("",Validators.required),
    email: new FormControl("",Validators.required)
  });



  //getter methods for validations
  
  get password(){
    return this.myform.get('password');
  }

  get email(){
    return this.myform.get('email');
  }
 

checkUser(){
 let em:any=this.myform.controls['email'].value;
 let pwd:any=this.myform.controls['password'].value;
console.log(em+"------"+pwd)
    this.http.get<LoginUser>(this.base_url+"/getbyemailandpassword/"+em+"/"+pwd).subscribe(
      data=>{
        if(data==null){
          alert("Login failed...")
        }else{
        alert("Login Successful!!!!"+data);
        localStorage.setItem("userIdentity",em);
        location.reload;

        this.router.navigate(['book']);

        

       // this.router.navigateByUrl('/book');
        }
      },
      error=>{
        alert("Login Failed.........!!!!!!");
      }
    );

   
    
  
}


}