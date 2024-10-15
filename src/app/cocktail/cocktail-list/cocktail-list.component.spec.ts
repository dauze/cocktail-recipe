import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailListComponent } from './cocktail-list.component';
import { provideHttpClient } from '@angular/common/http';

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailListComponent],
      providers: [
        provideHttpClient()
      ]
    }).compileComponents();
    fixture =TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
