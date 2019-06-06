import { Component, OnInit } from '@angular/core';
import { Leenproduct } from '../model/leenproduct';


@Component({
  selector: 'nieuwproduct',
  templateUrl: './nieuwproduct.component.html',
  styleUrls: ['../app.component.css']
})

export class NieuwProductComponent{
  product: Leenproduct = new Leenproduct(0,'','');
  constructor(){
    
      
  };
  createNewProduct(){
    //someservice.insertNewProduct(this.product);
    console.log(this.product.naam);
    console.log(this.product.beschrijving);
    console.log(this.product.aantal);
  }
  
}