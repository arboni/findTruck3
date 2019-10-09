import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../shared/driver';
import { DriverService } from '../shared/driver.service';
import { DriverDataService } from '../shared/driver-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  driver: Driver;
  key: string= '';

  constructor(private driverService: DriverService, private driverDataService: DriverDataService ) { }

  ngOnInit() {
    this.driver = new Driver();
    this.driverDataService.currentDriver.subscribe(data => {
      if (data.driver && data.key) {
        this.driver = new Driver();
        this.driver.nome = data.driver.nome;
        this.driver.telefone = data.driver.telefone;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.driverService.updateDriver(this.driver, this.key);
    } else {
      this.driverService.insertDriver(this.driver);
    }

    this.driver = new Driver();
  }
}


