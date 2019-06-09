import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leningen',
  templateUrl: './leningen.component.html'
})

export class LeningComponent implements OnInit {

  leningen: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { 
    this.leningen = new Array<any>();
  }

    ngOnInit() {
      this.getData();
    }

    getData() {
      this.firebaseService.getLeningen()
        .subscribe(result => {
          result.forEach(element => {
            this.leningen.push(element.payload.doc.data());
            })
        });
        console.log(this.leningen);
    }


  }
