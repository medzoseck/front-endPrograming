import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

    constructor(public db: AngularFirestore) {}
    
    ngOnInit() {
    }
    // haalt huidige gebruikerID van lokalstorage
    GetGebruikerID():string {
        let gebruikerID: string = localStorage.getItem('user').substring(8,36);
        return gebruikerID;
    }
    // haalt user op uit de database die de gebruiker is    
    getUser(userKey) {
        return this.db.collection('Users').doc('userKey').snapshotChanges();
    }
}