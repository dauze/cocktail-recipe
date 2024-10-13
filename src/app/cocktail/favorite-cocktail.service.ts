import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCocktailService {

  private key = 'favorite-cocktails';
  private fav:Set<string> = new Set(JSON.parse(localStorage.getItem(this.key) ?? '[]') as string[]);

  addFavorite(id: string){
    this.fav.add(id);
    localStorage.setItem(this.key, JSON.stringify([...this.fav]));
  }
  removeFavorite(id: string){
    this.fav.delete(id);
    localStorage.setItem(this.key, JSON.stringify([...this.fav]));
  }
  isFavorite(id: string){
    return this.fav.has(id);
  }
}
