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
}
