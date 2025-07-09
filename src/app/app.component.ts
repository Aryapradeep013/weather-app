import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherOutfitSuggestionComponent } from './components/weather-outfit-suggestion/weather-outfit-suggestion.component';
import { WeatherSearchHistoryComponent } from './components/weather-search-history/weather-search-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, CommonModule, WeatherDetailsComponent, WeatherOutfitSuggestionComponent, WeatherSearchHistoryComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
