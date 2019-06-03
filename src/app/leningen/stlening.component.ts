import { Component } from '@angular/core';
import { Lening } from '../model/lening';
import { LeningComponent } from './lening.component';

@Component({
  providers: [LeningComponent],
  selector: 'stLeningen',
  templateUrl: './stlening.component.html',
  styleUrls: ['../app.component.css']
})

export class StLeningComponent {
  stLeningen: Lening[];
  /* Tijdelijke manier om studentNr te geven,
   * Moet uiteindelijk vanuit de UI. */
  studentNr: number = 100001;

  constructor(private lcomp: LeningComponent) {
    this.stLeningen = this.getStudentsLeningen(this.studentNr);
    console.log("StLeningComponent constructor");
  }

  public getStudentsLeningen(studentNr: number): Lening[] {
    let result: Lening[] = [];
    let leningen: Lening[] = this.lcomp.getLeningen();
    //if (leningen != null && leningen.length > 0) {
      for (let lening of leningen) {
        if (lening.studentNr == studentNr) {
          result[result.length] = lening;
        }
      }
    //}
    return result;
  }

  public formatDate(date: Date): string {
    return this.lcomp.formatDate(date);
  }
}
