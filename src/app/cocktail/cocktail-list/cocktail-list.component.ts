import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CocktailCardComponent, NgFor, FormsModule, FilterPipeModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  private cocktailService = inject(CocktailService);

  cocktailFilter: Partial<Cocktail> = { name: '' };
  readonly cocktails = this.cocktailService.cocktails;

  onCocktailSelected(id : number){
    this.cocktailService.cocktailSelected(id);
  }

}
