import { Component, Input, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent {
  @Input({ required: true }) cocktail: Cocktail;

  private cocktailService = inject(CocktailService);
}
