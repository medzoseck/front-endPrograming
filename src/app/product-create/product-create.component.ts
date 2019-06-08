import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

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
      private router: Router,
      public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.createForm();
  }

    createForm() {
        this.exampleForm = this.fb.group({
            naam: ['', Validators.required ],
            beschrijving: ['', Validators.required ],
            aantal: ['', Validators.required ]
        });
    }

    resetFields() {
        this.exampleForm = this.fb.group({
            naam: new FormControl('', Validators.required),
            beschrijving: new FormControl('', Validators.required),
            aantal: new FormControl('', Validators.required),
        });
    }

    onSubmit(value) {
        this.firebaseService.createProduct(value)
            .then(
                res => {
                    this.resetFields();
                    this.router.navigate(['/inventaris']);
                }
            );
    }
}
