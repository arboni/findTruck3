import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';


import { CalculadoraService } from './services';
import { CalculadoraComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent,
    CalculadoraService
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
