import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leningen',
  templateUrl: './leningen.component.html',
  styleUrls: ['../app.component.css']
})

export class LeningenComponent implements OnInit {

  leningen: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

    ngOnInit() {
      this.getData();
    }

    getData() {
      this.firebaseService.getLeningen()
        .subscribe(result => {
          this.leningen = result;
        });
    }

    public formatDate(date: Date): string {
        let result: string = "";
        if (date != null) {
            //console.log("LeningComponent formatDate, date != null");
            let day: string = "" + date.getDate();
            let month: string = "" + (date.getMonth() + 1);
            let year: string = "" + date.getFullYear();
            //console.log("day: "+day+", month: "+month+", year: "+year);

            // Maakt dag en maand altijd 2 characters lang, bijv. "05".
            if (day.length < 2) {
                day = "0" + day;
            }
            if (month.length < 2) {
                month = "0" + month;
            }
            result = day + "-" + month + "-" + year;
        }
        return result;
    }
}
