import { Component } from '@angular/core';
import { CalculadoraService } from '../services';
import { NgSwitch } from '@angular/common';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  public tipoTruck: string;
  public dist: number;
  public calcIncrement: number;
  public result: number;
  public message: string;
  public increment: number;
  public peso: number;
  public incrementPeso: number;
  public calcPeso: number;
  tabela: any [] = [this.tipoTruck , this.dist, this.peso, this.result];

  // Calculate method to  Common Truck
  truck() {
    this.tipoTruck = 'Truck';
    this.incrementPeso = (this.peso / 1000);
    this.calcIncrement = (this.dist / 50);
    // tslint:disable-next-line: no-unused-expression
    if (this.calcIncrement === 1 || this.incrementPeso <= 1) {
      this.calcPeso = (41.87 * this.incrementPeso);
      this.increment = 203.88 + (118.80 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela = [this.tipoTruck,this.dist, this.peso, this.result.toFixed(2)];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Truck p valor sugerido para a distância de ' + this.dist +
      'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);

    } else if (this.calcIncrement > 1 || this.calcIncrement <= 9 || this.incrementPeso <= 15) {
      this.calcPeso = (41.87 * this.incrementPeso);
      this.increment = 188.90 + (118.80 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Truck o valor sugerido para a distância de ' + this.dist +
      'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement >= 9 && this.calcIncrement <= 38 || this.incrementPeso <= 15) {
      this.calcPeso = (83.75 * this.incrementPeso);
      this.increment = (238.60 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Truck o valor sugerido para a distância de ' + this.dist +
      'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 38 && this.calcIncrement <= 52 || this.incrementPeso <= 20) {
      this.calcPeso = (167.50 * this.incrementPeso);
      this.increment = (477.21 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Truck o valor sugerido para a distância de ' + this.dist +
      'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else {
      // tslint:disable-next-line: no-unused-expression
      (this.calcIncrement >= 52);
      this.calcPeso = (418.75 * this.incrementPeso);
      this.increment = (1193.01 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Truck o valor sugerido para a distância de ' + this.dist +
      'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    }
  }

  // Calculate method to Trunk Truck
  bau() {
    this.tipoTruck = 'Baú';
    this.incrementPeso = (this.peso / 1000);
    this.calcIncrement = (this.dist / 50);
    // tslint:disable-next-line: no-unused-expression
    if (this.calcIncrement === 1 || this.incrementPeso <= 1) {
      this.calcPeso = (25.64 * this.incrementPeso);
      this.increment = 188.04 + (98.10 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Baú o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 1 && this.calcIncrement <= 9) {
      this.increment = (98.10 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Baú o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement >= 9 && this.calcIncrement <= 38) {
      this.increment = (196.20 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Baú o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 38 && this.calcIncrement <= 52) {
      this.increment = (392.40 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Baú o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else {
      // tslint:disable-next-line: no-unused-expression
      (this.calcIncrement >= 52);
      this.increment = (981.03 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Baú o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    }
  }
  // Calculate method to Trailer Truck
  carreta() {
    this.tipoTruck = 'Carreta';
    this.incrementPeso = (this.peso / 1000);
    this.calcIncrement = (this.dist / 50);
    // tslint:disable-next-line: no-unused-expression
    if (this.calcIncrement === 1 || this.incrementPeso <=1) {
      this.calcPeso = (8.15 * this.incrementPeso);
      this.increment = 395.88 + (171.95 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Carreta o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 1 || this.calcIncrement <= 9) {
      this.calcPeso = (16.31 * this.incrementPeso);
      this.increment = (171.95 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Carreta o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement >= 9 || this.calcIncrement <= 38) {
      this.calcPeso = (14.22 * this.incrementPeso);
      this.increment = (343.90 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Carreta o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 38 || this.calcIncrement <= 52) {
      this.calcPeso = (28.44 * this.incrementPeso);
      this.increment = (687.80 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Carreta o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else {
      // tslint:disable-next-line: no-unused-expression
      (this.calcIncrement >= 52);
      this.calcPeso = (71.10 * this.incrementPeso);
      this.increment = (1719.51 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Carreta o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    }
  }
  // Calculate method to Bi-train Truck
  biTrem() {
    this.tipoTruck = 'Bi-Trem';
    this.incrementPeso = (this.peso / 1000);
    this.calcIncrement = (this.dist / 50);
    // tslint:disable-next-line: no-unused-expression
    if (this.calcIncrement === 1 || this.incrementPeso <= 1) {
      this.calcPeso = (100 * this.incrementPeso);
      this.increment = 566.61 + (203.99 * this.calcIncrement );
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela = [this.tipoTruck, this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Bi-trem o valor sugerido para a distância de ' + this.dist +
       'Km carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 1 && this.calcIncrement <= 9) {
      this.calcPeso = (100 * this.incrementPeso);
      this.increment = (203.99 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela = [this.tipoTruck, this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Bi-trem o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement >= 9 && this.calcIncrement <= 38) {
      this.calcPeso = (100 * this.incrementPeso);
      this.increment = (407.99 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Bi-trem o valor sugerido para a distância de ' + this.dist +
      'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    } else if (this.calcIncrement > 38 && this.calcIncrement <= 52) {
      this.calcPeso = (100 * this.incrementPeso);
      this.increment = (815.99 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Bi-trem o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
      // tslint:disable-next-line: no-unused-expression
      // tslint:disable-next-line: align
     } else {
      // tslint:disable-next-line: no-unused-expression
      (this.calcIncrement >= 52);
      this.calcPeso = (100 * this.incrementPeso);
      this.increment = (2039.96 * this.calcIncrement);
      this.result = this.increment + this.calcPeso;
      this.result.toFixed(2);
      this.tabela=[this.tipoTruck,this.dist, this.peso, this.result];
      // tslint:disable-next-line: max-line-length
      this.message = 'Para um caminhão Bi-trem o valor sugerido para a distância de ' + this.dist +
       'KM carregando ' + this.peso + 'KG  é: ' + this.result.toFixed(2);
    }
  }

}
