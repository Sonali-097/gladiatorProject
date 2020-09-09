import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event';
import { EventService } from 'src/app/services/event.service'


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

   events : Event[] = [];
    constructor(private eventService : EventService) { }

    

     


  ngOnInit(): void {
    this.events = this.eventService.getEvents();
 
  
  }

  deleteEvent(e:Event){
    this.eventService.deleteEvent(e);
  }
  
  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventService.addEvent(eventName, desc, speaker);
  }
  
 
  

}
