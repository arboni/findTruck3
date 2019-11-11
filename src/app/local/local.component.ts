import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap, GoogleMapsAPIWrapper } from '@agm/core';
import { last } from 'rxjs/operators';



declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;

}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;

}


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})

export class LocalComponent implements OnInit {
;

  constructor(public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }
  idKey: 'Carga1';
  coords: 'location';
  circleRadius: number = 5000; // km
  geocoder: any;
  location: Location = {
    lat: -30.03556336, lng: -51.22649474,
    marker: { lat: -30.03556336, lng: -51.22649474, draggable: true },
    zoom: 13
  };
  origin = {
    lat: -30.03556336,
    lng: -51.22649474,
    icon: 'google.maps.SymbolPath.FORWARD_CLOSED_ARROW',
    label: 'Arrozeira Pelotas'
  };

  destination = {
    lat: -31.7025054,
    lng: -52.3419267,
    icon: 'https://i.imgur.com/7teZKif.png',
    label: 'Senac Poa/RS'
  }

  map: any;


  public renderOptions = {
    suppressMarkers: true,
  }

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      label: 'Arrozeira Pelotas',
      draggable: true,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      label: 'Senac Poa',
      opacity: 0.8,
    },
  }

  //início teste múltiplos marcadores
  public directions: any = [];
  public done = false;

  clear() {
    this.location = {
      lat: -30.03556336, lng: -51.22649474,
      marker: { lat: -30.03556336, lng: -51.22649474, draggable: true },
      zoom: 13
    }
  }


  getDirection() {
    this.origin = { lat: -31.7025054, lng: -52.3419267, icon: 'icon', label: 'label' };
    this.destination = { lat: -30.03556336, lng: -51.22649474, icon: 'icon', label: 'label' }

  }



  // tslint:disable-next-line: no-unused-expression
  ViewChild(AgmMap) { AgmMap }
  ngOnInit() {
    this.location.marker.draggable = true;
    this.getDirection();

    const dynamic = [{
      origin: { lat: Number(-32.04122222791505), lng: Number(-52.076997756958015) },
      destination: { lat: Number(-31.760648017872466), lng: Number(-52.31736660003663) },
    },
    {
      origin: { lat: Number(-30.9086317440717), lng: Number(-55.54472923278809) },
      destination: { lat: Number(-30.027451409207988), lng: Number(-51.22660875320435) },
    },
    {
      origin: { lat: Number(-25.532799538068062), lng: Number(-49.26599979400635) },
      destination: { lat: Number(-25.522537192672555), lng: Number(-54.58402633666993) },
    },
    {
      origin: { lat: Number(-27.11646636496978), lng: Number(-52.61572480201722) },
      destination: { lat: Number(-29.6860512), lng: Number(-53.8069214) },
    },
    {
      origin: { lat: Number(-26.92020451590388), lng: Number(-49.06930804252625) },
      destination: { lat: Number(-26.902438615314754), lng: Number(-48.662481307983406) },
    },
    {
      origin: { lat: Number(-27.8165664), lng: Number(-50.325883) },
      destination: { lat: Number(-32.0334252), lng: Number(-52.0991297) },
    }
    ];

    this.directions = dynamic;
    setTimeout(() => { this.done = true; }, 500);

  }//fim teste múltiplos marcadores


  //Início form pesquisa endereço
  findLocation(address: string) {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        for (var i = 0; i < results[0].address_components.length; i++) {
          let types = results[0].address_components[i].types
          console.log(types);
          if (types.indexOf('locality') != -1) {
            this.location.address_level_2 = results[0].address_components[i].long_name
          }
          if (types.indexOf('country') != -1) {
            this.location.address_country = results[0].address_components[i].long_name
          }
          if (types.indexOf('postal_code') != -1) {
            this.location.address_zip = results[0].address_components[i].long_name
          }
          if (types.indexOf('administrative_area_level_1') != -1) {
            this.location.address_state = results[0].address_components[i].long_name
          }
        }
        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }

        this.map.triggerResize()
      } else {
        alert("Sorry, this search produced no results.");
      }
    })
  }

  findAddressByCoordinates() {
    this.geocoder.geocode({
      'location': {
        lat: this.location.marker.lat,
        lng: this.location.marker.lng
      }
    }, (results, status) => {
      this.decomposeAddressComponents(results);
    })
  }

  decomposeAddressComponents(addressArray) {
    if (addressArray.length == 0) return false;
    let address = addressArray[0].address_components;
    console.log(address);
    for (let element of address) {
      console.log(element);
      if (element.length == 0 && !element['types']) continue
      if (element['types'].indexOf('street_number') > -1) {
        this.location.address_level_1 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('route') > -1) {
        this.location.address_level_1 += ', ' + element['long_name'];
        continue;
      }
      if (element['types'].indexOf('locality') > -1) {
        this.location.address_level_2 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('administrative_area_level_1') > -1) {
        this.location.address_state = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('country') > -1) {
        this.location.address_country = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('postal_code') > -1) {
        this.location.address_zip = element['long_name'];
        continue;
      }
    }
  }

  updateOnMap() {
    console.log('updating')
    let full_address: string = this.location.address_level_1 || ""
    if (this.location.address_level_2) full_address = full_address + " " + this.location.address_level_2
    if (this.location.address_state) full_address = full_address + " " + this.location.address_state
    if (this.location.address_country) full_address = full_address + " " + this.location.address_country
    this.findLocation(full_address);
    console.log(full_address);
  }

  circleRadiusInKm() {
    return this.circleRadius / 1000;
  }

  milesToRadius(value) {
    this.circleRadius = value / 0.00062137;
  }

  circleRadiusInMiles() {
    return this.circleRadius * 0.00062137;
  }

  markerDragEnd(m: any, $event: any) {
    this.location.marker.lat = m.coords.lat;
    this.location.marker.lng = m.coords.lng;
    this.findAddressByCoordinates();
  }
}
