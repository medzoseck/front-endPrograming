import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarisComponent } from './inventaris/inventaris.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent} from './productdetails/productdetails.component'
import { NieuwProductComponent} from './nieuwproduct/nieuwproduct.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'inventaris', component: InventarisComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productdetails', component: ProductDetailsComponent},
  {path: 'nieuwproduct', component: NieuwProductComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
