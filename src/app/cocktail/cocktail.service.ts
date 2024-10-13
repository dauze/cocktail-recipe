import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Cocktail } from './cocktail';
import { filter, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  readonly cocktailUrl = 'cocktails';

  private http = inject(HttpClient);

  private selectedCocktailId = signal<string | undefined>(undefined);

  private cocktails$ = this.http.get<Cocktail[]>(this.cocktailUrl);
  private cocktail$ = toObservable(this.selectedCocktailId)
    .pipe(
    filter(Boolean),
    switchMap(id => {
      const cocktailUrl = this.cocktailUrl + '/' + id;
      return this.http.get<Cocktail>(cocktailUrl)
  }));

  //List of all cocktails
  cocktail = toSignal(this.cocktail$);
  //Selected cocktail 
  cocktails = toSignal(this.cocktails$, { initialValue: []  as Cocktail[] });

  cocktailSelected(selectedcocktailId: string): void {
    this.selectedCocktailId.set(selectedcocktailId);
  }
}
