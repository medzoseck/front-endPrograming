import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LeningComponent } from './leningen/leningen.component';
import { InventarisComponent } from './inventaris/inventaris.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent} from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { UserService } from './services/user.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule} from '@angular/material';
import {ProductDetailResolver} from './product-detail/product-detail.resolver';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeningComponent,
    InventarisComponent,
    LoginComponent,
    HeaderComponent,
    ProductDetailComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    AngularFireAuthModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatSliderModule,
      ReactiveFormsModule,
  ],
  providers: [FirebaseService, ProductDetailResolver,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
