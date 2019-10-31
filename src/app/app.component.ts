import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Driver } from './Drivers/shared/driver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'findTruck3';
  bodyText: string;
  message: string;
  driver: Driver;
  latDriver: number;
  lngDriver: number;
  lat2: number = -30.0434396;
  lng2: number = -51.2145096;

  constructor() { }

  ngOnInit() {
    this.bodyText = 'Caminhoneiro Aceitou o transporte';

  }
  viewTransport(latDriver, lngDriver) {
    this.latDriver = this.lat2;
    this.lngDriver = this.lng2;
    this.message = this.driver.nome + ' aceitou o transporte de sua carga. ele está na seguinte localização:'
      // tslint:disable-next-line: no-unused-expression
      // tslint:disable-next-line: align
      + latDriver + ' latitude  e ' +
        + lngDriver +  ' longitude ';

  }


}
