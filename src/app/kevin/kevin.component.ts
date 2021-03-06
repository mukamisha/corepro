import { Component, OnInit } from '@angular/core';
import { Jackie } from '../jackie';
@Component({
  selector: 'app-kevin',
  templateUrl: './kevin.component.html',
  styleUrls: ['./kevin.component.css']
})
export class KevinComponent implements OnInit {
  kiki: Jackie[] = [
    new Jackie(1, 'start working to day to avoid running tomorrow', 'by Will S mith', 'lived in 1997', new Date(2018, 5, 7)),
    new Jackie(2, 'stay humble', 'by William Levy', 'said it in 2003', new Date(2018, 5, 7)),
    new Jackie(3, 'stay positive', 'by jacky', 'said it in 2004', new Date(2018, 5, 7)),

  ];
  toggleDetails(index) {
    this.kiki[index].showDescription = !this.kiki[index].showDescription;
  }
  unNeededQuote(isComplete, index) {
    if (isComplete) {
      this.kiki.splice(index, 1);
    }
  }
  addNewQuote(kik) {
    let quoteLength = this.kiki.length;
    kik.id = quoteLength + 1;
    // kik.completeDate = new Date(kik.completeDate)
    this.kiki.push(kik)
  }


  constructor() { }

  ngOnInit() {
  }

}
