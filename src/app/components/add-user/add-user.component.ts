 
 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 import { UserService } from 'src/app/services/user.service';
 import { UserTable} from 'src/app/Model/User';
 
 
 @Component({
   selector: 'app-add-user',
   templateUrl: './add-user.component.html',
   styleUrls: ['./add-user.component.css']
 })
 export class AddUserComponent implements OnInit {
 
   addUser : FormGroup
   constructor(private builder : FormBuilder, private service:UserService) { }
 
   ngOnInit(): void {
     this.addUser= this.builder.group({
       id:[],
       firstname:["",Validators.required],
       lastname:["",Validators.required],
       email:["",[Validators.required,Validators.email]]
     })
   }
 
   onSubmit( addUser:UserTable){
     console.log( addUser);

     this.service.addUser( addUser).subscribe(data=>{
       alert("User added succeccfully");
     })
      
      
     
  
     
   
   }
 
 }