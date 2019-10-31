import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DriverDataService } from './driver-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private db: AngularFireDatabase) { }

  insertDriver(driver: Driver) {
    this.db.list('driver').push(driver)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  updateDriver(driver: Driver, key: string) {
    this.db.list('driver').update(key, driver)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAllDrivers() {
    return this.db.list('driver')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`driver/${key}`).remove();
  }
  editDriver(key: string){
    this.db.object(`driver/${key}`).set(Driver);
  }

}
