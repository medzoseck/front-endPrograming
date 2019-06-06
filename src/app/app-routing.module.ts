import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarisComponent } from './inventaris/inventaris.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent} from './productdetails/productdetails.component';
import { NieuwProductComponent} from './nieuwproduct/nieuwproduct.component';
import { LoginComponent} from './login/login.component';
import { AdminGuard } from  './auth/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'inventaris', component: InventarisComponent, canActivate: [AdminGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AdminGuard]},
  {path: 'productdetails', component: ProductDetailsComponent, canActivate: [AdminGuard]},
  {path: 'nieuwproduct', component: NieuwProductComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
