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
  exampleForm: FormGroup;
  lening: Lening;

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    public userService: UserService
  ) { }

  ngOnInit() {
    let l: Lening = this.getTempLening();
    if (l == null) {
      this.createTempLening();
    }
    else {
      this.setTempLening(l);
    }
    this.createForm();
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

  getTempLening(): Lening {
    let l: Lening = JSON.parse(localStorage.getItem('tempLening'));
    return l;
  }

  createTempLening() {
    //let studentNr: number = this.userService.getUserStudentNr(this.userService.GetGebruikerID());
    //let studentNr: number = 100001;
    let studentNr: number = this.userService.getUser().studentNr;
    console.log("createTempLening() User.studentNr: " + studentNr); // TODO: Uitzoeken waarom studentNr niet geset is.
    let l: Lening = new Lening(studentNr);
    this.setTempLening(l);
  }

  setTempLening(value) {
    localStorage.setItem('tempLening', JSON.stringify(value));
    this.lening = value;
  }

  getLeningProducten(): LeningProduct[] {
    let lps: LeningProduct[] = JSON.parse(localStorage.getItem('leningProducten'));
    return lps;
  }

  setLeningProducten(lps: LeningProduct[]) {
    localStorage.setItem('leningProducten', JSON.stringify(lps));
  }

  slaLeningOp() {
    let l: Lening = this.getTempLening();
    this.firebaseService.createLening(l);
    let lId = this.firebaseService.getLeningId(); // TODO: De lening die net gemaakt is weer opvragen, en daarvan Id ontvangen.
    this.slaLeningProductenOp(lId);
  }

  slaLeningProductenOp(lId) {
    let lps: LeningProduct[] = this.getLeningProducten();
    if (lps != null && lps.length > 0) {
      for (let lp in lps) {
        lp.setLeningId(lId); // TODO: Van deze string een LeningProduct maken, om setLeningId op aan te roepen.
        this.firebaseService.createLeningProduct(lp);
      }
    }
  }
}
