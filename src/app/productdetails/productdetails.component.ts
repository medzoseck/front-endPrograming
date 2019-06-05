import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Leenproduct} from '../model/Leenproduct'

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['../app.component.css']
})

export class ProductDetailsComponent{
  leenproduct : Leenproduct;
  

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.leenproduct = zoekLeenProduct(params['leenproductId']);
      
  });

  function zoekLeenProduct(id: number): Leenproduct {
    //nog niet bestaande service hier aanroepen
    //todo: implementeren zoekfunctie
    //alt todo: leenproduct data uit inventaris meegeven.
    return new Leenproduct(123,"nepitem", "we hebben nog geen database");
  }
 
  }
}