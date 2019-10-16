import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AgmCoreModule } from '@agm/core';




@NgModule({
  declarations: [],
  imports: [
    LocalComponent,
    CommonModule,
    HomeComponent,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFWuTsunP3aVWHD1h-OGH48L_T3OdcwMI'
    })
  ],
  exports: [LocalModule]
})
export class LocalModule { }
