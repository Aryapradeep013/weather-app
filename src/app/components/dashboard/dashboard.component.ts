import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { WeatherStateService } from '../../services/weather-state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  city: string = '';
  error: string = '';

  constructor(private weatherSrv: WeatherService, private weatherStateSrv : WeatherStateService) {}

  fetchWeather() {
    const city = this.city.trim();
    if (!city) return;

    this.weatherSrv.getWeather(city).subscribe({
      next: (data) => {
        this.weatherStateSrv.setWeather(data);  
        this.city = '';
        this.error = '';
      },
      error: () => {
        this.error = 'City not found or API error';
      }
    });
  }
}
