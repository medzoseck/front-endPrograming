import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
    user : User;

    constructor(public db: AngularFirestore) {
    }
    
    ngOnInit() {
    }
    // haalt huidige gebruikerID van lokalstorage
    GetGebruikerID():string {
        let gebruikerID: string = localStorage.getItem('user').substring(8,36);
        return gebruikerID;
    }
    // haalt user op uit de database die de gebruiker is    
    getUser() : User {
        this.user = new User();
        this.db.collection('Users').snapshotChanges().subscribe( item => {
            item.forEach(element => {
               if(element.payload.doc.get("gebruiker") == this.GetGebruikerID()){
                this.user.admin = element.payload.doc.get("admin");
                this.user.gebruiker = element.payload.doc.get("gebruiker");
                this.user.studentNr = element.payload.doc.get("studentNr");
               }
            })
        });
        return this.user;
    }
    // checkt de rol van de huidige gebruiker
    isAdmin() : boolean {
        this.db.collection('Users').snapshotChanges().subscribe( item => {
            item.forEach(element => {
                if(element.payload.doc.get("gebruiker") == this.GetGebruikerID()){
                    if(element.payload.doc.get("admin") == true){
                        return true;
                    }      
                }
            })
        });
        return false;
    }
}

export class User {
    gebruiker: string;
    studentNr: number;
    admin: boolean;
}
