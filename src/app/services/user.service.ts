import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
    user : User;

    constructor(public db: AngularFirestore) {
        this.user = new User();
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
       
        this.db.collection('Users').snapshotChanges().subscribe( item => {
            item.forEach(element => {
               if(element.payload.doc.get("gebruiker") == this.GetGebruikerID()){
                this.user.admin = element.payload.doc.get("admin");
                this.user.gebruiker = element.payload.doc.get("gebruiker");
                this.user.studentnr = element.payload.doc.get("studentnr");
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

class User {
    gebruiker: string;
    studentnr: string;
    admin: boolean;
}
