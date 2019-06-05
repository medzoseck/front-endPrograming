import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['../app.component.css']
})

export class ProductDetailsComponent{
  leenproductId = null;;

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.leenproductId = params['leenproductId'];
      
  });
 
  }
}