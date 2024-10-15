import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Cocktail } from '../cocktail';
import { FavoriteCocktailService } from '../favorite-cocktail.service';
import { RouterModule } from '@angular/router';
import { CocktailDetailComponent } from '../cocktail-detail/cocktail-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, CocktailDetailComponent, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailCardComponent {
  @Input({ required: true }) cocktail!: Cocktail;
  private favCocktailService = inject(FavoriteCocktailService);

  handleFavorite(): void{
    if (this.isFavorite()) {this.favCocktailService.removeFavorite(this.cocktail.id);}
    else {this.favCocktailService.addFavorite(this.cocktail.id);}
  }
  isFavorite(): boolean{
    return this.favCocktailService.isFavorite(this.cocktail.id);
  }
}
