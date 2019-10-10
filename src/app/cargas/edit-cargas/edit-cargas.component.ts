import { Component, OnInit } from '@angular/core';
import { Carga } from '../sharedCargas/carga';
import { CargaService } from '../sharedCargas/carga.service';
import { CargaDataService } from '../sharedCargas/carga-data.service';

@Component({
  selector: 'app-edit-cargas',
  templateUrl: './edit-cargas.component.html',
  styleUrls: ['./edit-cargas.component.css']
})
export class EditCargasComponent implements OnInit {

  carga: Carga;
  key: string= '';
  tipoCarga: string = '';
  local: string = '';


  constructor(private cargaService: CargaService, private cargaDataService: CargaDataService ) { }

  ngOnInit() {
    this.carga = new Carga();

    this.cargaDataService.currentCarga.subscribe(data => {
      if (data.carga && data.key) {
        this.carga = new Carga();
        this.carga.nome = data.carga.nome;
        this.carga.telefone = data.carga.telefone;
        this.carga.tipoCarga = data.carga.tipoCarga;
        this.carga.local = data.carga.local;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.cargaService.updateCarga(this.carga, this.key);
    } else {
      this.cargaService.insertCarga(this.carga);
    }

    this.carga = new Carga();
  }
}



