import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarisComponent } from './inventaris/inventaris.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './auth/admin.guard';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailResolver } from './product-detail/product-detail.resolver';
import { LeningCreateComponent } from './lening-create/lening-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'inventaris', component: InventarisComponent, canActivate: [AdminGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create-product', component: ProductCreateComponent },
  { path: 'details/:id', component: ProductDetailComponent, resolve: { data: ProductDetailResolver } },
  { path: 'lening-create', component: LeningCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
