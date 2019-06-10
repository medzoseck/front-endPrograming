import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db: AngularFirestore,
    public userService: UserService) { }

  getLeningen() {
    return this.db.collection('Lening').snapshotChanges();
  }

  getProducts() {
    return this.db.collection('Producten').snapshotChanges();
  }

  createProduct(value) {
      return this.db.collection('Producten').add({
          naam: value.naam,
          beschrijving: value.beschrijving,
          aantal: parseInt(value.aantal, 10)
      });
  }

  getProduct(productKey) {
      return this.db.collection('Producten').doc(productKey).snapshotChanges();
  }

  updateProduct(productKey, value) {
      return this.db.collection('Producten').doc(productKey).set(value);
  }

  deleteProduct(productKey) {
      return this.db.collection('Producten').doc(productKey).delete();
  }

  createLening(value) {
    return this.db.collection('Lening').add({
      studentNr: value.studentNr,
      startDatum: value.startDatum,
      eindDatum: value.eindDatum,
      afgerond: value.afgerond,
      teLaat: value.teLaat
    });
  }

  createLeningProduct(value) {
    return this.db.collection('LeningProduct').add({
      leningId: value.leningId,
      productId: value.productId,
      aantal: parseInt(value.aantal)
    });
  }

  /*
  getStudentLeningen(user) {
    let u: User = this.userService.getUser();
    this.db.collection('Lening').snapshotChanges().subscribe(
      item => {
        item.forEach(element => {
          if (element.payload.doc.get("studentNr") == user.studentNr) {

          }
        })
      }
    )
    return ?;
  }
  */
}


