import { TestBed } from '@angular/core/testing';

import { CocktailService } from './cocktail.service';
import { provideHttpClient } from '@angular/common/http';

describe('CocktailService', () => {
  let service: CocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ]});
    service = TestBed.inject(CocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
