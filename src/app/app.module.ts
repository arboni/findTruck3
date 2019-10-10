import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Drivers/list/list.component';
import { EditComponent } from './Drivers/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './maps/local/local.component';
import { EditCargasComponent } from './cargas/edit-cargas/edit-cargas.component';
import { ListCargasComponent } from './cargas/list-cargas/list-cargas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    LocalComponent,
    EditCargasComponent,
    ListCargasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFWuTsunP3aVWHD1h-OGH48L_T3OdcwMI'
    })
  ],
  providers: [LocalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
