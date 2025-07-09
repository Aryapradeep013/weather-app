import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

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

  @Output() weatherVal = new EventEmitter<any>();

  constructor(private weatherSrv: WeatherService) {}

  searchCity() {
    this.error = '';
    const cityName = this.city.trim();
    if (!cityName) {
      this.error = 'Please enter a city name';
      return;
    }

    this.weatherSrv.fetchWeather(cityName).subscribe({
      next: (data) => {
        this.weatherVal.emit(data);
        this.city = '';
        this.error = '';
      },
      error: (err) => {
        this.error = 'City not found... !';
        console.error(err);
      }
    });
  }
}
