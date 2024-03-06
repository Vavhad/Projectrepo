import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './User';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [CommonModule,SidebarComponent,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})
export class RegisterformComponent {

  base_url:string="http://localhost:5555";
  constructor(private http:HttpClient){}

  myform:FormGroup=new FormGroup({
    firstName:new FormControl("Vaishnavi",Validators.required),
    lastName:new FormControl("Thorat",Validators.required),
    adharNo:new FormControl("809121202814",Validators.required),
    phone:new FormControl("1234567890",Validators.required),
    password:new FormControl("1234",Validators.required),
    email: new FormControl("thoratv@gmail.com",Validators.required),
    
  });

  // addUser(){
  //   console.log("userName="+this.myform.controls['userName'].value);
  //   console.log("Pass="+this.myform.controls['password'].value);
  //   console.log("Email="+this.myform.controls['email'].value);
    
  // }

  //getter methods for validations
  get firstName(){
    return this.myform.get('firstName');
  }
  get lastName(){
    return this.myform.get('lastName');
  }
  
  get password(){
    return this.myform.get('password');
  } 

  get email(){
    return this.myform.get('email');
  }
  get adharNo(){
    return this.myform.get('adharNo');
  }
  get phone(){
    return this.myform.get('phone');
  }

  SaveUser(){
    console.log("Add user");
    let newUser:any= this.myform.value;
    this.http.post<User>(this.base_url+"/addcustomers",newUser).subscribe(
      data=>{
        alert("Data Added"+data);
        
      },
      error=>{
        
        alert("Error Occured during adding"+error);
      }  
    )
  }
}