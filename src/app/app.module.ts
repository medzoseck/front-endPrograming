import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LeningComponent } from './leningen/leningen.component';
import { InventarisComponent } from './inventaris/inventaris.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { NieuwProductComponent} from './nieuwproduct/nieuwproduct.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    LeningComponent, 
    InventarisComponent, 
    MenuComponent,
    ProductDetailsComponent,
    NieuwProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //todo: misschien appcomponent niet gebruiken maar home?
})
export class AppModule { }
