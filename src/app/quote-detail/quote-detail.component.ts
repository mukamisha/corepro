import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Jackie} from '../jackie';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() kiki: Jackie;
  @Output() isComplete = new EventEmitter<boolean>();

  unNeededQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
