import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Lening } from '../model/lening';
import { UserService } from './user.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LeningService implements OnInit {
    
    lening: Lening;
    user: User = this.userService.getUser();

    constructor(public db: AngularFirestore,public userService : UserService) {
        this.lening = new Lening(this.user.studentNr);
    }
    
    ngOnInit() {}

    getData() {
        let leningen : Array<Lening> = new Array<Lening>();
        this.db.collection('Lening').snapshotChanges().subscribe( item => {
            item.forEach(element => {
               if(element.payload.doc.get("studentNr") == this.user.studentNr){
                this.lening.startDatum = element.payload.doc.get("startDatum");
                this.lening.eindDatum = element.payload.doc.get("eindDatum");
                this.lening.studentNr = element.payload.doc.get("studentNr");
                this.lening.afgerond = element.payload.doc.get("afgerond");
                this.lening.teLaat = element.payload.doc.get("teLaat");
                 let leningenLength = leningen.length;
                 leningen[leningenLength] = this.lening;
                }
            })
        });
        return leningen;
    }
}