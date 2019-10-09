import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverDataService {
  private driverSource = new BehaviorSubject({ driver: null, key: '' });
  currentDriver = this.driverSource.asObservable();

  constructor() { }

  changeDriver(driver: Driver, key: string) {
    // tslint:disable-next-line: object-literal-shorthand
    this.driverSource.next({ driver: driver, key: key });
  }
}
