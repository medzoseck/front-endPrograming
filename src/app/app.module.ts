import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LeningenComponent } from './leningen/leningen.component';
import { LeningComponent } from './lening/lening.component';
import { InventarisComponent } from './inventaris/inventaris.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { NieuwProductComponent} from './nieuwproduct/nieuwproduct.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent} from './header/header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeningenComponent,
    LeningComponent,
    InventarisComponent,
    ProductDetailsComponent,
    NieuwProductComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
