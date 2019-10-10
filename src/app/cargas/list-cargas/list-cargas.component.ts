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

  delete(key: string) {
    this.cargaService.deleteCarga(key);
  }

  editDriver(carga: Carga, key: string) {
    this.cargaDataService.changeDriver(carga, key);
  }

}
