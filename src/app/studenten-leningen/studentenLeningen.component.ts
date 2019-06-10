import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';
import { Lening } from '../model/lening';
import { LeningService } from '../services/lening.service';

@Component({
  selector: 'studentenleningen',
  templateUrl: './studentenLeningen.component.html'
})

export class StudentenLeningComponent implements OnInit {

  leningen: Array<Lening>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    public leningService : LeningService
  ) { 
    this.leningen = new Array<any>();
  }

    ngOnInit() {
      this.leningen = this.leningService.getData();
    }
/*
    getData() {
      this.firebaseService.getLeningen()
        .subscribe(result => {
          result.forEach(element => {
            this.leningen.push(element.payload.doc.data());
            })
        });
        console.log(this.leningen);
    }
*/
  
}
