import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //title = 'app';
    itemCount: number;
    btnText: string = 'Submit';
    goalText: string ='';
    goals = [];

    constructor() {}

    ngOnInit(){
      this.itemCount = this.goals.length;
    }
    addItem(){
      this.goals.push(this.goalText);
      this.goalText='';
      this.itemCount = this.goals.length;
    }
    removeItem(i){
      this.goals.splice(i, 1);
      this.itemCount = this.goals.length;
    }
  }
