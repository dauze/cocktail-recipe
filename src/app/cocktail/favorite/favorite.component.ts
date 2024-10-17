import { Component, Input, inject } from '@angular/core';
import { FavoriteCocktailService } from './favorite-cocktail.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `@if (id) {
    <span (click)="handleFavorite()" id="star-{{id}}" class="icon-star" [ngClass]="{'active' : isFavorite()}"></span> 
    }`,
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  @Input({ required: true }) id!: string;
  private favCocktailService = inject(FavoriteCocktailService);
  //Add or remove to favorite
  handleFavorite(): void{
    if (this.isFavorite()) {this.favCocktailService.removeFavorite(this.id);}
    else {this.favCocktailService.addFavorite(this.id);}
  }
  isFavorite(): boolean{
    return this.favCocktailService.isFavorite(this.id);
  }
}
