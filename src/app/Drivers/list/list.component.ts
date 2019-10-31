import { Component, OnInit } from '@angular/core';
import { Driver } from '../shared/driver';
import { DriverService } from '../shared/driver.service';
import { DriverDataService } from '../shared/driver-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  drivers: Observable<any>;

  constructor(private driverService: DriverService, private driverDataService: DriverDataService) { }

  ngOnInit() {
    this.drivers = this.driverService.getAllDrivers();
  }

  delete(key: string) {
    this.driverService.delete(key);
  }

  editDriver(driver: Driver, key: string) {
    this.driverDataService.changeDriver(driver, key);
  }

}
