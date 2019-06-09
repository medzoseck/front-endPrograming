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
import { ProductDetailResolver } from './product-detail/product-detail.resolver';
import { InventarisStudentComponent } from './inventaris-student/inventaris-student.component';
import { ProductDetailStudentComponent } from './product-detail-student/product-detail-student.component';
import { ProductDetailStudentResolver } from './product-detail-student/product-detail-student.resolver';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeningComponent,
    InventarisComponent,
    LoginComponent,
    HeaderComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    InventarisStudentComponent,
    ProductDetailStudentComponent
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
  providers: [FirebaseService, ProductDetailResolver, ProductDetailStudentResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
