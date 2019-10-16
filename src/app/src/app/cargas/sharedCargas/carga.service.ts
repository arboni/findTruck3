import { Injectable } from '@angular/core';
import { Carga } from '../sharedCargas/carga';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { CargaDataService } from '../sharedCargas/carga-data.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CargaService {

  constructor(private db: AngularFireDatabase) { }


  insertCarga(carga: Carga) {
    this.db.list('carga').push(carga)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  updateCarga(carga: Carga, key: string) {
    this.db.list('carga').update(key, carga)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAllCargas() {
    return this.db.list('carga')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  deleteCarga(key: string) {
    this.db.object(`carga/${key}`).remove();
  }
  editCarga(key: string){
    this.db.object(`carga/${key}`).set(Carga);
  }

}
