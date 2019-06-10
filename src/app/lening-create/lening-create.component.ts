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
  leningProducten: Array<LeningProduct>;

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
    this.leningProducten = this.getLeningProducten();
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
    let u: User = this.userService.getUser();
    let studentNr: number = u.studentNr; // TODO: Uitzoeken waarom studentNr niet geset is.
    let l: Lening = new Lening(studentNr);
    this.setTempLening(l);
  }

  setTempLening(value) {
    localStorage.setItem('tempLening', JSON.stringify(value));
    this.lening = value;
  }

  //getLeningProducten(): Array<LeningProduct> {
  getLeningProducten(): Array<any> {
    let lps: Array<any> = JSON.parse(localStorage.getItem('leningProducten'));
    return lps;
  }

  slaLeningOp() {
    let l: Lening = this.getTempLening();
    this.firebaseService.createLening(l);
    let foundId: string = this.getLeningId(); // De lening die net gemaakt is opvragen, en daarvan Id ontvangen.
    this.slaLeningProductenOp(foundId);
  }

  getLeningId(): string {
    let l: Lening = new Lening(null);
    let foundId: string;
    this.db.collection('Lening').snapshotChanges().subscribe(item => {
      item.forEach(element => {
        l.startDatum = element.payload.doc.get("startDatum");
        l.eindDatum = element.payload.doc.get("eindDatum");
        l.studentNr = element.payload.doc.get("studentNr");
        l.afgerond = element.payload.doc.get("afgerond");
        l.teLaat = element.payload.doc.get("teLaat");

        if ( // Idee: I.p.v. "lening" kan je ook de Lening halen uit getTempLening() ofwel localStorage.
        l.startDatum == this.lening.startDatum &&
        l.eindDatum == this.lening.eindDatum &&
        l.studentNr == this.lening.studentNr &&
        l.afgerond == this.lening.afgerond &&
        l.teLaat == this.lening.teLaat) {
          // [BUG]: Code herhaalt dit onderdeel, maar returnt alsnog null.
          if (foundId == null) {
            foundId = element.payload.doc.id;
            //console.log("foundId in getLeningId() if-loop: " + foundId);
          }
        }
      })
    });
    //console.log("foundId in getLeningId(): " + foundId);
    return foundId;
  }

  slaLeningProductenOp(lId) {
    let lps = this.getLeningProducten();
    this.leningProducten = lps;
    if (lps != null && lps.length > 0) {
      lps.forEach(lp => { // lp is een Product als any.
        console.log(lp);
        //let lpId = JSON.stringify(lp).split(",\"id\":\"")[1].substring(0, 20);\
        let lpToDb: LeningProduct = new LeningProduct(lId, lp.id, lp.aantal);
        this.firebaseService.createLeningProduct(lpToDb);
      });
      /*
      for (let lp in lps) { // lp is een Product als string.
        let lpId: string = lp.split(",\"id\":\"")[1].substring(0, 20);
        let lpFound: any = JSON.parse(lp);
        lpFound.setLeningId(lId);
        lpFound.setProductId(lpId);
        this.firebaseService.createLeningProduct(lpFound); // Probleem: lp is geen LeningProduct, maar Product als any.
      }
      */
    }
  }
}
