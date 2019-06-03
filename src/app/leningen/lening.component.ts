import { Component } from '@angular/core';
import { Lening } from '../model/lening';

@Component({
  selector: 'leningen',
  templateUrl: './lening.component.html',
  styleUrls: ['../app.component.css']
})

export class LeningComponent {
  public leningen: Lening[];

  constructor() {
    /* Tijdelijke manier om leningen te vullen,
     * Moet uiteindelijk vanuit de database. */
    this.leningen = this.maakLeningen();
    console.log("LeningComponent constructor");
  }

  // Tijdelijke methode
  public maakLeningen(): Lening[] {
    let l1: Lening = new Lening(1, 100001, new Date("2019-4-10"), new Date("2019-8-10"));
    let l2: Lening = new Lening(2, 100001, new Date("2019-4-11"), new Date("2019-8-11"));
    let l3: Lening = new Lening(3, 100002, new Date("2019-4-11"), new Date("2020-8-11"));
    let ls: Lening[] = [l1, l2, l3];
    return ls;
  }

  public formatDate(date: Date): string {
    let result: string = '';
    if (date != null) {
      //console.log("formatdate");
      let day: string = '' + date.getDate();
      let month: string = '' + date.getMonth() + 1;
      let year: string = '' + date.getFullYear();
      // Om dag en maand altijd 2 characters lang te maken, bijv. "05".
      if (day.length < 2) {
        day = '0' + day;
      }
      if (day.length < 2) {
        month = '0' + month;
      }
      result = day + '-' + month + '-' + year;
    }
    return result;
  }
}
