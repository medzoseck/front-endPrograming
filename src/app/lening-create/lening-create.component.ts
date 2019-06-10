import { Component, OnInit } from '@angular/core';
import { Lening } from '../model/lening';
import { LeningProduct } from '../model/leningproduct';
import { FirebaseService } from '../services/firebase.service';
import { UserService, User } from '../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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
    public userService: UserService,
    public db: AngularFirestore
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
    let u: User = this.userService.getUser();
    let studentNr: number = u.studentNr;
    console.log("createTempLening() User.studentNr: " + studentNr); // TODO: Uitzoeken waarom studentNr niet geset is.
    let l: Lening = new Lening(studentNr);
    this.setTempLening(l);
  }

  setTempLening(value) {
    localStorage.setItem('tempLening', JSON.stringify(value));
    this.lening = value;
  }

  getLeningProducten(): Array<LeningProduct> {
    let lps: Array<LeningProduct> = JSON.parse(localStorage.getItem('leningProducten'));
    return lps;
  }

  /*
  setLeningProducten(lps: LeningProduct[]) {
    localStorage.setItem('leningProducten', JSON.stringify(lps));
  }
  */

  slaLeningOp() {
    let l: Lening = this.getTempLening();
    this.firebaseService.createLening(l);
    let foundId = this.getLeningId();
    //let lId = this.firebaseService.getLeningId(); // TODO: De lening die net gemaakt is weer opvragen, en daarvan Id ontvangen.
    this.slaLeningProductenOp(foundId);
  }

  getLeningId(): string {
    let l: Lening;
    let foundId: string;
    this.db.collection('Lening').snapshotChanges().subscribe(item => {
      item.forEach(element => {
        l.startDatum = element.payload.doc.get("startDatum");
        l.eindDatum = element.payload.doc.get("eindDatum");
        l.studentNr = element.payload.doc.get("studentNr");
        l.afgerond = element.payload.doc.get("afgerond");
        l.teLaat = element.payload.doc.get("teLaat");
        if (l.startDatum == this.lening.startDatum &&
        l.eindDatum == this.lening.eindDatum &&
        l.studentNr == this.lening.studentNr &&
        l.afgerond == this.lening.afgerond &&
        l.teLaat == this.lening.teLaat) { // Object "lening" wordt gebruikt, maar dit kan ook uit getTempLening() ofwel localStorage.
          foundId = element.payload.doc.id;
        }
        console.log("foundId: " + foundId);
      })
    });
    return foundId;
  }

  slaLeningProductenOp(lId) {
    let lps: Array<LeningProduct> = this.getLeningProducten();
    if (lps != null && lps.length > 0) {
      for (let lp in lps) {
        let lpFound: LeningProduct = JSON.parse(lp);
        lpFound.setLeningId(lId); // TODO: Van deze string een LeningProduct maken, om setLeningId op aan te roepen.
        this.firebaseService.createLeningProduct(lp);
      }
    }
  }
}
