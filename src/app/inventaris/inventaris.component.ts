import { Component } from '@angular/core';
import { Leenproduct } from '../model/leenproduct';

@Component({
  selector: 'inventaris',
  templateUrl: './inventaris.component.html',
  styleUrls: ['../app.component.css']
})

export class InventarisComponent {
  
  leenproducten: Leenproduct[] = [new Leenproduct(123,"arduino", "goedkope microcontroller"), 
    new Leenproduct(321,"PNC-301", "Draagbare nucleaire reactor")];
  constructor(){
    // this.leningen = [new Lening(123345,new Date("2018-10-10"), new Date("2020-11-10")),
    // new Lening(123345,new Date("2018-5-5"), new Date("2020-5-5"))]; //todo: service
    console.log("inventaris constructor");
  }
}