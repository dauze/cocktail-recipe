import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
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
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent {
  private cocktailService = inject(CocktailService);
  //Filter to search by name
  cocktailFilter: Partial<Cocktail> = { name: '' };
  readonly cocktails:Signal<Cocktail[]> = this.cocktailService.cocktails;
}
