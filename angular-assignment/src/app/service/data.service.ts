import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  stateUrl = 'https://indian-cities-api-nocbegfhqg.now.sh';

  constructor(private http: HttpClient) { }

  getAllStates():Observable<any>{
    return this.http.get(`${this.stateUrl}/cities`);
  }
}
