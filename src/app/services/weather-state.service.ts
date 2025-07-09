import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherStateService {

  constructor() { }

    private weatherSub = new BehaviorSubject<any>(null);
    private historySub = new BehaviorSubject<string[]>([]);

    weather = this.weatherSub.asObservable();
    history = this.historySub.asObservable();

    setWeather(data: any) {
    this.weatherSub.next(data);

    const city = data?.name;
    if (city) {
      const current = this.historySub.value;
      const updated = [city, ...current.filter(c => c !== city)].slice(0, 5);
      this.historySub.next(updated);
    }
  }

  clearHistory() {
    this.historySub.next([]);
  }
}
