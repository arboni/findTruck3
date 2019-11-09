import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CargaService } from '../sharedCargas/carga.service';
import { CargaDataService } from '../sharedCargas/carga-data.service';
import { Carga } from '../sharedCargas/carga';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-cargas',
  templateUrl: './list-cargas.component.html',
  styleUrls: ['./list-cargas.component.css']
})
export class ListCargasComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  cargas: Observable<any>;
  private bodyText: string;

  constructor(private cargaService: CargaService, private cargaDataService: CargaDataService,private modalService: NgbModal ) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
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
