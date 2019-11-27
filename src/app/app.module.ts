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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestCache } from './cache/request-cache.service';
import { CachingInterceptor } from './cache/caching-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs'
import * as Rx from 'rxjs/Rx';
import * as map from "rxjs";
import * as firebase from 'firebase/app';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { RouteReuseStrategy } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';




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
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './auth/loading-spinner/loading-spinner.component';
import { AuthService } from './auth/auth.service';
import { AceiteTransporteComponent } from './aceite-transporte/aceite-transporte.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUsersComponent} from './users/edit-users/edit-users.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './shared/guard/auth.guard';
import { ChatComponent } from './chat/chat.component';




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
    AuthComponent,
    LoadingSpinnerComponent,
    AceiteTransporteComponent,
    ListUsersComponent,
    EditUsersComponent,
    ChatComponent,






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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYqiJwwltQZk70bd7b13OaeV5vAAelRLw'
    }),
    AgmDirectionModule,
    NgbModule,
    HttpModule,
    MDBBootstrapModule,




  ],
  providers: [AuthService, AuthGuard, GoogleMapsAPIWrapper ],
  bootstrap: [AppComponent],

})
export class AppModule { }
