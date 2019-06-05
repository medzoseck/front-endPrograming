import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from  './auth/admin.guard';

import { InventarisComponent } from './inventaris/inventaris.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from  './login/login.component';

const routes: Routes = [
  {path: 'inventaris', 
  component: InventarisComponent,
  canActivate: [AdminGuard]},
  {path: 'home', 
  component: HomeComponent,
  canActivate: [AdminGuard]},
  {path: 'login',
  component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
