import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    product: any;
    exampleForm: FormGroup;

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
                console.log(this.product);
                console.log(this.product.id);
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

    onSubmit(value) {
            value.aantal = Number(value.aantal);
            this.firebaseService.updateProduct(this.product.id, value)
                .then(
                    res => {
                        this.router.navigate(['/inventaris']);
                    }
                );
    }

    deleteProduct() {
      if(window.confirm('Weet je zeker dat je dit product wilt verwijderen?')){
        this.firebaseService.deleteProduct(this.product.id)
            .then(
                res => {
                    this.router.navigate(['/inventaris']);
                },
                err => {
                    console.log(err);
                }
            )};
    }

}
