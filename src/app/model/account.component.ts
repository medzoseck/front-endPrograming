// import { Component } from '@angular/core';

// @Component({
//   selector: 'kleurclass',
//   templateUrl: './kleurclass.component.html',
//   styleUrls: ['../app.component.scss']
// })

// export class KleurClass {
//   currentclass :number = 0;
//   klas :string[] = ['red','green','yellow','blue'];

//   public changeColor(){
//     this.currentclass++;
//     if (this.currentclass == 4){
//       this.currentclass = 0;
//     }
//   }

//   public printColor(){
//     console.log(this.klas[this.currentclass]);
//   }
// }

import { Component } from '@angular/core';

export class Account {
    public accountId : number;
    public username :string;
    public password:string;
    public isAdmin:boolean;
    
    
}