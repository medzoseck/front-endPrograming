import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.component.html',
  styleUrls: ['../app.component.css']
})

export class InventarisComponent implements OnInit {

  producten: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getProducts()
      .subscribe(result => {
        this.producten = result;
      });
  }
}
