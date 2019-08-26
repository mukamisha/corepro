import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Jackie } from '../jackie';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Jackie(0,"quote","author","",new Date());
  // newQuote = new Jackie(0,"quote","author","",new Date());
  @Output() addQuote = new EventEmitter<Jackie>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
