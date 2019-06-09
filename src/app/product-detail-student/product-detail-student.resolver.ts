import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class ProductDetailStudentResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve) => {
      const productenId = route.paramMap.get('id');
      this.firebaseService.getProduct(productenId)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    });
  }
}
