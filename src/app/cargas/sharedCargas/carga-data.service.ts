import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carga } from './carga';
import { CargaService } from './carga.service';


@Injectable({
  providedIn: 'root'
})
export class CargaDataService {
  private cargaSource = new BehaviorSubject({ carga: null, key: '' });
  currentCarga = this.cargaSource.asObservable();

  constructor() { }

  changeCarga(carga: Carga, key: string) {
    // tslint:disable-next-line: object-literal-shorthand
    this.cargaSource.next({ carga: carga, key: key });
  }
}
