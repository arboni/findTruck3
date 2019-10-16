import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { AppComponent} from '../../app.component';



@NgModule({
  declarations: [],
  imports: [
    ListComponent,
    CommonModule,
    AppComponent

  ],

  exports: [ListComponent,
  ListModule
  ],

})
export class ListModule { }
