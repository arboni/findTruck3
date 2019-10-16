import { Component, OnInit } from '@angular/core';
import { LocalComponent } from '../maps/local/local.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  lat: number = -30.0351408;
  lng: number = -51.2265302;
  zoom: number = 16;

  lat1: number = -30.0358477;
  lng1: number = -51.2246333;
  zoom1: number = 16;

  lat2: number = -30.0434396;
  lng2: number = -51.2145096;
  zoom2: number = 16;

  constructor(public db: AngularFireDatabase){

    }

  ngOnInit() {
  }

}
