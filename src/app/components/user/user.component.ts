import { Component, OnInit } from '@angular/core';
import {UserService } from 'src/app/services/user.service';
import { UserTable} from 'src/app/Model/User';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //Variable of type UserTable 
  users: UserTable[];

 

  //DI
  constructor(private _userService : UserService,  private _router : Router) { }

 

  ngOnInit(): void {
    this._userService.getAllUser()
      .subscribe(data => {
        this.users = data;
         
      });
  }

  addUser()
  {
    this._router.navigate(['adduser']);
  }

  deleteUser(object:UserTable)
  {
    let index = this.users.indexOf(object);
    this.users.splice(index,1);
    }
 


  // this.userService.getUsers()
  //       .subscribe(data => {
  //         this.users = data;
  //       });
  //GetMethod
  //  getAllUsersFun() {
  //    this._userService.getAllUser()
  //     .subscribe(data => { this.users = data });
  //  }
}