import { State } from './../modal/state.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private stateData: State[];
  
  // State, City, district API.
  stateUrl = 'https://indian-cities-api-nocbegfhqg.now.sh';

  constructor(private http: HttpClient) { }

  // method to get geolocation.
  getGeoLocation(city){
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address='; + 
    ${city} + '&key=AIzaSyD6LB4LPsEY0kQU59tagY5zGKhekZWPUnw`);
  }

  // Method to get all the states
  getAllStates():Observable<State[]>{
    return this.http.get<State[]>(`${this.stateUrl}/cities`);
  }

  // method to get all the cities
  getAllCities(e):Observable<State[]>{
    return this.http.get<State[]>(`${this.stateUrl}/cities?State=${e}`);
  }
}
