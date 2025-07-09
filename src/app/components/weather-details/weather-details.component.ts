import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStateService } from '../../services/weather-state.service';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent implements OnInit {
  weather: any = null;

  constructor(private weatherStateSrv: WeatherStateService) {}

  ngOnInit() {
    this.weatherStateSrv.weather.subscribe(data => {
      this.weather = data;
    });
  }

}
