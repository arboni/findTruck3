import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Injectable({
  providedIn: 'root'
})
export class DriverDataService {
  private driverSource = new BehaviorSubject({ driver: null, key: '' });
  currentDriver = this.driverSource.asObservable();

  constructor() { }

  changeDriver(driver: Driver, key: string) {
    this.driverSource.next({ driver, key });
  }
}
