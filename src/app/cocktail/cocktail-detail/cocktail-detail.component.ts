import { Component, OnInit, Signal, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FavoriteCocktailService } from '../favorite-cocktail.service';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, NgIf, NgFor, RouterModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private favCocktailService = inject(FavoriteCocktailService);
  private cocktailService = inject(CocktailService);

  readonly cocktail:Signal<Cocktail | undefined> = this.cocktailService.cocktail;

  ngOnInit(): void {
    this.cocktailService.cocktailSelected(this.route.snapshot.paramMap.get('id') ?? '');
  }

  isFavorite(){
    return this.favCocktailService.isFavorite(this.cocktail()?.id ?? '');
  }

  handleFavorite(){
    if (this.isFavorite()){
      this.favCocktailService.removeFavorite(this.cocktail()?.id ?? '');
    }
    else {
      this.favCocktailService.addFavorite(this.cocktail()?.id ?? '');
    }
  }

}
