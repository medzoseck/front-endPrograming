import { Component, OnInit } from '@angular/core';
import { Lening } from '../model/lening';
import { LeningProduct } from '../model/leningproduct';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lening-create',
  templateUrl: './lening-create.component.html',
  styleUrls: ['./lening-create.component.scss']
})
export class LeningCreateComponent implements OnInit {
  lening: Lening;
  exampleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    public userService: UserService
  ) { }

  ngOnInit() {
    let l: Lening = this.getTempLening();
    if (l != null) {
      this.lening = l;
    }
    else {
      this.createTempLening();
    }
    this.createForm();
  }

  createTempLening() {
    //let studentNr: number = this.userService.getUserStudentNr(this.userService.GetGebruikerID); // TODO: Medzo maakt deze methode
    let studentNr: number = 100001;
    let l: Lening = new Lening(studentNr);
    this.setTempLening(l);
  }

  setTempLening(value) {
    localStorage.setItem('tempLening', JSON.stringify(value));
    this.lening = value;
  }

  getTempLening(): Lening {
    let l: Lening = JSON.parse(localStorage.getItem('tempLening'));
    return l;
  }

  getLeningProducten(): LeningProduct[] {
    let lps: LeningProduct[] = JSON.parse(localStorage.getItem('leningProducten'));
    return lps;
  }

  slaLeningOp() {
    this.lening = this.getTempLening()
    this.firebaseService.createLening(this.lening);
    this.slaLeningProductenOp();
  }

  slaLeningProductenOp() {
    let lps: LeningProduct[] = this.getLeningProducten();
    if (lps != null && lps.length > 0) {
      for (let lp in lps) {
        this.firebaseService.createLeningProduct(lp);
      }
    }
  }

  createForm() {
    this.exampleForm = this.fb.group({
      studentNr: [this.lening.studentNr],
      startDatum: [this.lening.startDatum],
      eindDatum: [this.lening.eindDatum],
      afgerond: [this.lening.afgerond],
      teLaat: [this.lening.teLaat]
    });
  }
}
