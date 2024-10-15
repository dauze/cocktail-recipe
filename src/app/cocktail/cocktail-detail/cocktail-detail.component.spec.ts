import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetailComponent } from './cocktail-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('CocktailDetailComponent', () => {
  let component: CocktailDetailComponent;
  let fixture: ComponentFixture<CocktailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDetailComponent],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
