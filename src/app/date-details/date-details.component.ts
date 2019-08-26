import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-details',
  templateUrl: './date-details.component.html',
  styleUrls: ['./date-details.component.css']
})
export class DateDetailsComponent implements OnInit {
  message:string;
  
    constructor() {
      setInterval(()=>{
        let currentDate=new Date();
        this.message=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
      },1000);
      
    }

  ngOnInit() {
  }

}
