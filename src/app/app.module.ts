import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LeningComponent } from './leningen/lening.component';
import { StLeningComponent } from './leningen/stlening.component';
import { InventarisComponent } from './inventaris/inventaris.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeningComponent,
    StLeningComponent,
    InventarisComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //todo: misschien appcomponent niet gebruiken maar home?
})
export class AppModule { }
