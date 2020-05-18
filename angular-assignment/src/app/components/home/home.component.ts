import { Component, OnInit } from '@angular/core';
import { DataService } from './../../service/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  title = "Cities GeoLocation"
  private filteredState: any
  private cities: any;
  private cityName:any;
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.setCurrentLocation();
    this.dataService.getAllStates().subscribe
      (data => this.filteredState = [...new Set(data.map(item => item.State))]);
  }

  onchangeState(event) {
    this.dataService.getAllCities(event).subscribe(data => this.cities = data);    
  }

  onChangeCity(event) {
   this.cityName = event;
  this.getGeoLocation();
  }

  getGeoLocation() {
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=' + 
    ${this.cityName} + '&key=AIzaSyD6LB4LPsEY0kQU59tagY5zGKhekZWPUnw`).subscribe((data => {
      console.log(data);
    }))
  };

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
