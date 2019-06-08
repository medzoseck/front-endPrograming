import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getProducts() {
    return this.db.collection('Producten').snapshotChanges();
  }

  getLeningen() {
    return this.db.collection('Lening').snapshotChanges();
  }

  createProduct(value) {
      return this.db.collection('Producten').add({
          naam: value.naam,
          beschrijving: value.beschrijving,
          aantal: parseInt(value.aantal, 10)
      });
  }

    deleteProduct(productKey) {
        return this.db.collection('Producten').doc(productKey).delete();
    }

    getProduct(productKey) {
        return this.db.collection('Producten').doc(productKey).snapshotChanges();
    }

    updateProduct(productKey, value) {
        return this.db.collection('Producten').doc(productKey).set(value);
    }
}


