import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarisComponent } from './inventaris/inventaris.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { AdminGuard} from './auth/admin.guard';
import { LoginGuard } from './auth/login.guard'; 
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailResolver } from './product-detail/product-detail.resolver';
import { InventarisStudentComponent } from './inventaris-student/inventaris-student.component';
import { ProductDetailStudentComponent } from './product-detail-student/product-detail-student.component';
import { ProductDetailStudentResolver } from './product-detail-student/product-detail-student.resolver';
import { LeningCreateComponent } from './lening-create/lening-create.component';
import { LeningComponent } from './leningen/leningen.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'inventaris', component: InventarisComponent, canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'create-product', component: ProductCreateComponent, canActivate: [LoginGuard,AdminGuard]},
  {path: 'details/:id', component: ProductDetailComponent, resolve: {data : ProductDetailResolver}, canActivate: [LoginGuard]},
  {path: 'inventaris-student', component: InventarisStudentComponent, canActivate: [LoginGuard]}, 
  {path: 'details-student/:id', component: ProductDetailStudentComponent, resolve: { data: ProductDetailStudentResolver }, canActivate: [LoginGuard]},
  {path: 'lening-create', component: LeningCreateComponent, canActivate: [LoginGuard]},
  {path: 'leningen', component: LeningComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
