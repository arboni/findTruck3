import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmDirectionModule } from 'agm-direction';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


//Components import
import { AppComponent } from './app.component';
import { ListComponent } from './Drivers/list/list.component';
import { EditComponent } from './Drivers/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';
import { EditCargasComponent } from './cargas/edit-cargas/edit-cargas.component';
import { ListCargasComponent } from './cargas/list-cargas/list-cargas.component';
import { CalculadoraComponent } from './calculadora/components/calculadora.component';
import { ModalComponent } from './modal/modal.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './auth/loading-spinner/loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    HeaderComponent,
    LayoutComponent,
    LocalComponent,
    FooterComponent,
    HomeComponent,
    LocalComponent,
    EditCargasComponent,
    ListCargasComponent,
    CalculadoraComponent,
    ModalComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    LoginComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFWuTsunP3aVWHD1h-OGH48L_T3OdcwMI'
    }),
    AgmDirectionModule,
    NgbModule

  ],
  providers: [LocalComponent,
    AuthService,
    ListComponent,
    ListCargasComponent,
    CalculadoraComponent,
    GoogleMapsAPIWrapper,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
