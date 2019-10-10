import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCargasComponent } from './list-cargas.component';
import { AppComponent} from '../../app.component';


@NgModule({
  declarations: [],
  imports: [
    ListCargasComponent,
    CommonModule,
    AppComponent

  ],

  exports: [ListCargasComponent,
  ListCargasModule
  ],

})
export class ListCargasModule { }
