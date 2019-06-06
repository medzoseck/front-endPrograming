import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leningen',
  templateUrl: './leningen.component.html',
  styleUrls: ['../app.component.css']
})

export class LeningComponent implements OnInit {

  leningen: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

    ngOnInit() {
      this.getData();
    }

    getData() {
      this.firebaseService.getLeningen()
        .subscribe(result => {
          this.leningen = result;
        });
    }
  }
