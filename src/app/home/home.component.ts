import { Component } from '@angular/core';
import { Lening } from '../model/lening';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})

export class HomeComponent {
  
  // leningen: Lening[];
  constructor(){
    // this.leningen = [new Lening(123345,new Date("2018-10-10"), new Date("2020-11-10")),
    // new Lening(123345,new Date("2018-5-5"), new Date("2020-5-5"))]; //todo: service
  }
}