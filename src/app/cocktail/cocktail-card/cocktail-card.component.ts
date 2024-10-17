import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Cocktail } from '../cocktail';
import { RouterModule } from '@angular/router';
import { CocktailDetailComponent } from '../cocktail-detail/cocktail-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteCocktailComponent } from '../favorite-cocktail/favorite-cocktail.component';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, CocktailDetailComponent, RouterModule, MatCardModule, MatButtonModule, FavoriteCocktailComponent],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailCardComponent {
  @Input({ required: true }) cocktail!: Cocktail;
}
