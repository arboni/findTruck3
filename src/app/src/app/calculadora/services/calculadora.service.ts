import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
/*Define as constantes ultilizadas
  para identificar as operaçoes de calculo*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
/**
 * Método que calcula operação matematica com
 * dois numeros
 * Suporta as operações soma, subtração, multiplicação
 * e divisão.
 *
 * @param num1 number
 * @param num2 number
 * @param operacao operação string Operação a ser execultada
 * @return number retorna o resultado da operação
 */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
