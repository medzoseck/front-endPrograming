import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LeningComponent } from './leningen/leningen.component'
import { InventarisComponent } from './inventaris/inventaris.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWcD4DC6aNAh1QknT1t2z1cO7SdajAMc4",
    authDomain: "front-endprogramming.firebaseapp.com",
    databaseURL: "https://front-endprogramming.firebaseio.com",
    projectId: "front-endprogramming",
    storageBucket: "front-endprogramming.appspot.com",
    messagingSenderId: "310053324363",
    appId: "1:310053324363:web:fef672775d3179b8"
  };

@NgModule({
  declarations: [
    AppComponent, 
    InventarisComponent, 
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    LeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //todo: misschien appcomponent niet gebruiken maar home?
})
export class AppModule { }
