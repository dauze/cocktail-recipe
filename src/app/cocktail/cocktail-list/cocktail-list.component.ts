import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CocktailCardComponent, NgFor],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  private cocktailService = inject(CocktailService);

  readonly cocktails = this.cocktailService.cocktails;

  onCocktailSelected(id : number){
    this.cocktailService.cocktailSelected(id);
  }

}
