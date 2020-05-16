import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { State } from '../../modal/state.modal';
import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  private cityDetails = {
    City: "",
    State: "",
    District: "",
  };
  stateData: State[];
  private stateName: any;
  private cities: any;

  constructor(private dataService: DataService, private Http: HttpClient) { }

  ngOnInit() {
      this.dataService.getAllStates().subscribe(data => this.stateData = data);
  }

  OnChangeState(){
    console.log('State Name: ',this.cityDetails.State);
    this.Http.get(`https://indian-cities-api-nocbegfhqg.now.sh/cities?State=${this.cityDetails.State}`).subscribe((data) => {
      this.cities = data;
    });
  }
}
