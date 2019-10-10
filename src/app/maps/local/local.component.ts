import { Component, OnInit } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  texto : string = 'Agenor Braz - Cuidado com as cargas';
  lat: number = -30.03556336
  lng: number = -51.22649474
  zoom: number = 16;
  constructor() {

  }

  ngOnInit() {

  }
  //onChoseLocation(event){
   //this.latitude = event.coords.latitude;
   //this.longitude = event.coords.longitude;
  //}

}
