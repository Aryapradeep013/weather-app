import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(city)}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Weather API error:', error);
    let message = 'An unknown error occurred';

    if (error.status === 404) {
      message = 'City not found....';
    } else if (error.status === 401) {
      message = 'Invalid API key..';
    }

    return throwError(() => new Error(message));
  }
}
