import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-product-detail-student',
  templateUrl: './product-detail-student.component.html',
  styleUrls: ['./product-detail-student.component.scss']
})
export class ProductDetailStudentComponent implements OnInit {

  product: any;
  exampleForm: FormGroup;
  anderAantal: any;

  validationMessages = {
    naam: [
      { type: 'required', message: 'Naam is verplicht.' }
    ],
    beschrijving: [
      { type: 'required', message: 'Beschrijving is verplicht.' }
    ],
    aantal: [
      { type: 'required', message: 'Aantal is verplicht' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.product = data.payload.data();
        this.product.id = data.payload.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.exampleForm = this.fb.group({
      naam: [this.product.naam, Validators.required ],
      beschrijving: [this.product.beschrijving, Validators.required ],
      aantal: [this.product.aantal, Validators.required ]
    });
  }

  toLocalStorage(){
    this.product.aantal = 1;
    localStorage.setItem('leningProducten', JSON.stringify(this.product));
    alert('Product toegevoegd aan lening!');
    this.router.navigate(['/inventaris-student/']);
    }

}
