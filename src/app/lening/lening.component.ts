import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Lening } from '../model/lening';

@Component({
    selector: 'lening',
    templateUrl: './lening.component.html',
    styleUrls: ['../app.component.css']
})

export class LeningComponent implements OnInit {

    leningen: Array<any>;
    /*studentLening: any;
    studentNr: number = 100001;*/

    constructor(
        public firebaseService: FirebaseService,
        private router: Router
    ) {
        /*this.studentLening = this.getStudentLening(this.studentNr);
        console.log("Dit zijn de leningen: " + this.leningen);*/
    }

    ngOnInit() {
        this.getData();
        //this.studentLening = this.leningen[0];
        //console.log("Dit is de lening: " + this.studentLening);
        /* Tijdelijke manier om studentNr te geven,
         * Moet uiteindelijk vanuit de UI. */
    }

    getData() {
        this.firebaseService.getLeningen()
            .subscribe(result => {
                this.leningen = result;
            });
        console.log("Dit zijn de leningen: " + this.leningen);
    }

    public getStudentLening(studentNr: number): any {
        let result: any;
        //this.getData();
        if (this.leningen != null && this.leningen.length > 0) {
            for (let lening of this.leningen) {
                if (lening.studentNr == studentNr) {
                    result = lening;
                }
            }
        }
        else {
            console.log("getStudentLening heeft een lege lijst leningen.");
        }
        return result;
    }
}
