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

  constructor(private cargaService: CargaService, private cargaDataService: CargaDataService) { }

  ngOnInit() {
    this.cargas = this.cargaService.getAllCargas();
  }

  deleteCarga(key: string) {
    this.cargaService.deleteCarga(key);
  }

  editCarga(carga: Carga, key: string) {
    this.cargaDataService.changeCarga(carga, key);
  }

}
