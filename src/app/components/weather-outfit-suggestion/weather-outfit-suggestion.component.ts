import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStateService } from '../../services/weather-state.service';

@Component({
  selector: 'app-weather-outfit-suggestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-outfit-suggestion.component.html',
  styleUrl: './weather-outfit-suggestion.component.css'
})
export class WeatherOutfitSuggestionComponent implements OnInit{

  weather: any;
  constructor(private weatherStatSrve: WeatherStateService) {}

  ngOnInit() {
    this.weatherStatSrve.weather.subscribe((data) => {
      this.weather = data;
    });
  }

  get recommendation(): string {
    if (!this.weather) return '';

    const temp = this.weather.main.temp;
    const condition = this.weather.weather[0].main.toLowerCase();

    if (condition.includes('rain')) {
      return 'Carry an umbrella.';
    } 
    else if (condition.includes('snow')) {
      return 'Wear warm clothes.';
    } 
    else if (temp < 15) {
      return 'Wear a jacket.';
    } 
    else if (temp > 30) {
      return 'Wear light clothes and sunglasses.';
    } 
    else if (condition.includes('clear')) {
      return 'Use sunglasses.';
    } 
    else {
      return 'Dress comfortably.';
    }
  }
}
