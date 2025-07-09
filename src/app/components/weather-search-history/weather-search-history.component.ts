import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { WeatherStateService } from '../../services/weather-state.service';

@Component({
  selector: 'app-weather-search-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-search-history.component.html',
  styleUrl: './weather-search-history.component.css'
})
export class WeatherSearchHistoryComponent implements OnInit{
  history: string[] = [];

  constructor(private weatherStateSvc : WeatherStateService ) {}
  ngOnInit() {
    this.weatherStateSvc.history.subscribe((d) => {
      this.history = d;
    });
  }

  clear() {
    this.weatherStateSvc.clearHistory();
  }
}
