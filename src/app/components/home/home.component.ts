import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    FirstName : string = "Sonali";
    LastName : string = "Dudve";
    Age : number =  22;
    Gender : string = "Female";


  constructor() { }

  ngOnInit(): void {
  }

}
