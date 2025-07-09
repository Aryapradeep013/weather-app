import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOutfitSuggestionComponent } from './weather-outfit-suggestion.component';

describe('WeatherOutfitSuggestionComponent', () => {
  let component: WeatherOutfitSuggestionComponent;
  let fixture: ComponentFixture<WeatherOutfitSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherOutfitSuggestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherOutfitSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
