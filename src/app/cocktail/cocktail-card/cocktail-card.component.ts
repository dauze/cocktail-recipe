import { Component, Input, inject, signal } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Cocktail } from '../cocktail';
import { FavoriteCocktailService } from '../favorite-cocktail.service';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent {
  @Input({ required: true }) cocktail: Cocktail;

  readonly favoriteCocktailService = inject(FavoriteCocktailService);

  handleFavorite(){
    if (this.isFavorite()){
      this.favoriteCocktailService.removeFavorite(this.cocktail.id);
    }
    else {
      this.favoriteCocktailService.addFavorite(this.cocktail.id);
    }
  }
  isFavorite(){
    return this.favoriteCocktailService.isFavorite(this.cocktail.id);
  }
}
