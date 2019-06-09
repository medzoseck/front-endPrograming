import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventaris-student',
  templateUrl: './inventaris-student.component.html',
  styleUrls: ['./inventaris-student.component.scss']
})

export class InventarisStudentComponent implements OnInit {

  producten: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    console.log(JSON.parse(localStorage.getItem('leningProducten')));
  }

  getData() {
    this.firebaseService.getProducts()
      .subscribe(result => {
        this.producten = result;
      });
  }

  viewDetails(item) {
    this.router.navigate(['/details-student/' + item.payload.doc.id]);
  }
}
