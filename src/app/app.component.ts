import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Driver } from './Drivers/shared/driver';
import { ChatAdapter } from 'ng-chat';
import { Http } from '@angular/http';



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

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.bodyText = 'Caminhoneiro Aceitou o transporte';

  }


}
