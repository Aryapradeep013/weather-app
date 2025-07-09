import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchHistoryComponent } from './weather-search-history.component';

describe('WeatherSearchHistoryComponent', () => {
  let component: WeatherSearchHistoryComponent;
  let fixture: ComponentFixture<WeatherSearchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherSearchHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
