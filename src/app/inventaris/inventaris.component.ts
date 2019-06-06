import { Component } from '@angular/core';
import { Leenproduct } from '../model/leenproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'inventaris',
  templateUrl: './inventaris.component.html',
  styleUrls: ['../app.component.css']
})

export class InventarisComponent {
  
  leenproducten: Leenproduct[];
  constructor(private router: Router){
    this.leenproducten = this.haalProductenOp();
    console.log(this.leenproducten[0].aantal);
  }

  haalProductenOp(){
    //doe alsof ik een database heb
    return [
    new Leenproduct(123,"arduino", "goedkope microcontroller"), 
    new Leenproduct(321,"PNC-301", "Draagbare nucleaire reactor",42)
    ];
  }
}