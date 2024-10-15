import { TestBed } from '@angular/core/testing';

import { FavoriteCocktailService } from './favorite-cocktail.service';
import { provideHttpClient } from '@angular/common/http';

describe('FavoriteCocktailService', () => {
  let service: FavoriteCocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]});
    service = TestBed.inject(FavoriteCocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
