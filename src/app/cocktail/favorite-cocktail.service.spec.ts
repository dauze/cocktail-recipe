import { TestBed } from '@angular/core/testing';

import { FavoriteCocktailService } from './favorite-cocktail.service';

describe('FavoriteCocktailService', () => {
  let service: FavoriteCocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteCocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
