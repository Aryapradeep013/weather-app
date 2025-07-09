import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, CommonModule, WeatherDetailsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-outfit';

  weatherData: any = null;

  showWeatherData(data: any) {
    this.weatherData = data;
  }
}
