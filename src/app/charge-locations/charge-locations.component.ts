import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-charge-locations',
  templateUrl: './charge-locations.component.html',
  styleUrls: ['./charge-locations.component.scss']
})
export class ChargeLocationsComponent implements OnInit {

  tulos = 'Moro';
  apiosoite = 'https://api.openchargemap.io/v2/poi/';
  tulokset: any;
  constructor(private http: HttpClient) {
  }
  getFromApi() {
      interface Myinterface {
          ID: number;
          AddressInfo: string;
          Title: string;
          AddressLine1: string;
          AddressLine2: string;
          Town: string;
          Latitude: number;
          Longitude: number;
          Countrycode: string;
          Country: string;
          ISOCode: string;
      }
    this.http.get<Myinterface>(this.apiosoite + '').subscribe(data => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.getFromApi();
  }

}
