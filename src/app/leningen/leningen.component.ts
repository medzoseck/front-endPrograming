import { Component } from '@angular/core';
import { Lening } from '../model/lening';

@Component({
  selector: 'leningen',
  templateUrl: './leningen.component.html',
  styleUrls: ['../app.component.css']
})

export class LeningComponent {
  leningen: Lening[];
  constructor(){
    this.leningen = [new Lening(123345, new Date("2018-10-10"), new Date("2020-11-10")),
    new Lening(123345,new Date("2018-5-5"), new Date("2020-5-5"))]; //todo: service
  }

  public formatDate(date: Date): string{
    let day = date.getDate();
    let month = date.getMonth() + 1; //January is 0!
    let daystring = '' + day;
    let monthstring = '' + month;
    let year = date.getFullYear();

    if (day < 10) {
      daystring = '0' + day;
    } 
    if (month < 10) {
      monthstring = '0' + month;
    } 
    return daystring + '/' + monthstring + '/' + year;
    
  }
}