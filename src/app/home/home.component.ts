import { Component } from '@angular/core';
import { Lening } from '../model/lening.component';

@Component({
  selector: 'verzoeklijst',
  templateUrl: './verzoeklijst.component.html',
  styleUrls: ['../app.component.scss']
})

export class Home {
  leningen: Lening[];
  constructor(){
    this.leningen = null; //todo: service
  }
}