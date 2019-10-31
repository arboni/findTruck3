import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CargaService } from '../sharedCargas/carga.service';
import { CargaDataService } from '../sharedCargas/carga-data.service';
import { Carga } from '../sharedCargas/carga';






@Component({
  selector: 'app-list-cargas',
  templateUrl: './list-cargas.component.html',
  styleUrls: ['./list-cargas.component.css']
})
export class ListCargasComponent implements OnInit {
  cargas: Observable<any>;
  private bodyText: string;

  constructor(private cargaService: CargaService, private cargaDataService: CargaDataService) { }

  ngOnInit() {
    this.cargas = this.cargaService.getAllCargas();
    this.bodyText = 'Caminhoneiro aceitou a carga';
  }

  deleteCarga(key: string) {
    this.cargaService.deleteCarga(key);
    this.bodyText = 'Caminhoneiro Aceitou o transporte';
  }

  editCarga(carga: Carga, key: string) {
    this.cargaDataService.changeCarga(carga, key);
  }



}
