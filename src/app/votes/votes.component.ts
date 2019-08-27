import { Component, OnInit } from '@angular/core';
// import {Jackie} from '../jackie';
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  forVotes=0
  againstVotes=0
  upVotes(){
    this.forVotes=this.forVotes+1;
  }
  downVotes(){
    this.againstVotes=this.againstVotes+1
  }
  constructor() { }

  ngOnInit() {
  }

}
