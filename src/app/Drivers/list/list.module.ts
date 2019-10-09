import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { HomeComponent } from 'src/app/home/home.component';




@NgModule({
  declarations: [],
  imports: [
    ListComponent,
    CommonModule,
    HomeComponent
  ],
  exports: [ListModule]
})
export class ListModule { }
