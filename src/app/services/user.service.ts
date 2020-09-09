import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  baseUrl : string ="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getAllUser(){
   return this.http.get< UserTable[]>(this.baseUrl);
  }

  addUser(user){
    return this.http.post< UserTable>(this.baseUrl,JSON.stringify(user),this.httpOptions);
  }
  
  deleteUser(id){
    return this.http.delete< UserTable>(this.baseUrl+"\\"+id,this.httpOptions);

  }
}