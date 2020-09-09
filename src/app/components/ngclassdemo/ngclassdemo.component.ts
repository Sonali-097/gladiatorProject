import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassdemo',
  templateUrl: './ngclassdemo.component.html',
  styleUrls: ['./ngclassdemo.component.css']
})
export class NgclassdemoComponent implements OnInit {

  people: any[] = [
    {
      "name": "Mayank",
      "country": 'UK'
    },
    {
      "name": "Shreya",
      "country": 'USA'
    },
    {
      "name": "Khushi",
      "country": 'HK'
    },
    {
      "name": "Kawal",
      "country": 'UK'
    },
    {
      "name": "Sonali",
      "country": 'India'
    }
  ];

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
